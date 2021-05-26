import { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage, useIntl } from 'react-intl';
import Cropper from 'react-cropper';
import Loading from '../../components/loading';
import CustomModal from '../customModal';
import Button from '../button';
import { lastElemOf } from '../../utils/index';

const cropper = createRef(null);

const DropZoneBox = ({
  accept,
  children,
  className,
  disabled,
  showDropArea,
  maxSize,
  minSize,
  maxFiles,
  multiple,
  noClick,
  noDrag,
  noKeyboard,
  onSelect,
  showImagesPreviews,
  imagesList,
  env,
  imagesPreviewPosition,
  deleteImageGallery,
  hasCropper,
  cropModalStatus,
  titleCropModal,
  textSaveCropModal,
  modalClassName,
  isLoading,
  label,
  hasError,
}) => {
  const [errorList, setErrorList] = useState([]);
  const [cropperModal, setCropperModal] = useState(cropModalStatus || false);
  const [croppedFile, setCroppedFile] = useState(null);
  const [disableCroppedImage, setDisableCroppedImage] = useState(false);

  const minWidth = !hasCropper || !hasCropper.minWidth ? 500 : hasCropper.minWidth;
  const minHeight = !hasCropper || !hasCropper.minHeight ? 470 : hasCropper.minHeight;

  useEffect(() => {
    if (!cropModalStatus) {
      setCropperModal(cropModalStatus);
      setDisableCroppedImage(false);
    }
  }, [cropModalStatus]);

  const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));

  const convertToMb = size => `${(size / (1024 * 1024)).toFixed(0)} MB`;

  const ImagesPreview = () => (
    <div className="d-flex">
      {imagesList.map((file, idx) => (
        <div key={file.id} className="gallery-thumb mt-3 mb-2 mr-3">
          {file.image.includes('http') ? (
            <img src={`${file.image}?width=64&height=64`} alt="thumb" />
          ) : (
            <img
              src={`${env.serverlessResizeImage}/${file.image}?width=64&height=64`}
              alt="thumb"
            />
          )}

          <button
            type="button"
            className="btn-delete-image"
            data-image-id={file.id}
            onClick={e => deleteImageGallery(e, idx)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );

  const errorMessages = [
    {
      id: 'extensionError',
      message: useIntl().formatMessage({
        id: 'document.files.modal.error.extension',
        defaultMessage: 'extension not allowed ',
      }),
    },
    {
      id: 'maxSizeError',
      message: useIntl().formatMessage({
        id: 'document.files.modal.error.filesSizeMax',
        defaultMessage: 'size larger than ',
      }),
    },
    {
      id: 'minSizeError',
      message: useIntl().formatMessage({
        id: 'document.files.modal.error.filesSizeMin',
        defaultMessage: 'size less than ',
      }),
    },
    {
      id: 'dimensions',
      message: useIntl().formatMessage(
        {
          id: 'document.files.modal.error.dimensions',
          defaultMessage: 'The image should be at least {width}px by {height}px.',
        },
        {
          width: minWidth,
          height: minHeight,
        }
      ),
    },
  ];

  const toggleModalCropper = () => {
    setDisableCroppedImage(false);
    setCropperModal(false);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept,
    disabled,
    maxSize,
    minSize,
    maxFiles,
    multiple,
    noClick,
    noDrag,
    noKeyboard,
    getFilesFromEvent: async e => {
      setErrorList([]);
      const files = [];
      const fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files;

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        files.push(file);
      }
      await wait(1000);
      return files;
    },
    onDrop: () => {},
    onDropAccepted: async acceptedFiles => {
      if (hasCropper && hasCropper.showCropper) {
        const reader = new FileReader();
        const file = acceptedFiles[0];

        reader.onloadend = () => {
          setCroppedFile(reader.result);
        };

        reader.readAsDataURL(file);
        setCropperModal(true);
      } else {
        onSelect(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
    onDropRejected: async rejectedFiles => {
      const fileExtensionOf = extension => lastElemOf(extension.split('.')).toLowerCase();
      const onDropErrorFileList = [];

      rejectedFiles.forEach(rejectedFile => {
        const extension = fileExtensionOf(rejectedFile.name);
        const errors = [];
        const acceptExtensionArray = accept.split(',').map(item => item.trim().toLocaleLowerCase());
        const extensionExist = acceptExtensionArray.includes(`.${extension}`);

        if (!extensionExist)
          errors.push(errorMessages.find(messageObj => messageObj.id === 'extensionError').message);
        if (rejectedFile.size > maxSize)
          errors.push(
            `${
              errorMessages.find(messageObj => messageObj.id === 'maxSizeError').message
            } ${convertToMb(maxSize)}`
          );
        if (rejectedFile.size < minSize)
          errors.push(
            `${
              errorMessages.find(messageObj => messageObj.id === 'minSizeError').message
            } ${convertToMb(minSize)}`
          );

        const fileErrorObject = { name: rejectedFile.name, errors };
        if (errors.length) onDropErrorFileList.push(fileErrorObject);
      });

      setErrorList(onDropErrorFileList);
    },
  });

  const handleSubmitCroppedImage = blob => {
    onSelect([blob]);
    toggleModalCropper();
  };

  return (
    <div className="dropzone-box">
      {showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'top' && (
        <ImagesPreview />
      )}
      {label && (
        <label htmlFor="dropzone" className="control-label">
          {label}
        </label>
      )}
      {showDropArea && (
        <div
          {...getRootProps({ className: 'dropZone' })}
          className={`upload-file ${className} ${disabled ? 'disabled' : ''}`}
        >
          <input name="dropzone" {...getInputProps()} disabled={isLoading} />
          <div className={hasError ? 'required-field' : ''}>
            {isLoading && <Loading />}
            {!isLoading && (
              <p>
                <strong>
                  <FormattedMessage
                    id="document.files.modal.drop"
                    defaultMessage="Drag and drop or click to select a file"
                  />
                </strong>
                <br />
                <small>
                  <FormattedMessage
                    id="document.files.modal.acceptedFiles"
                    defaultMessage="Accepted files: {accept}"
                    values={{ accept }}
                  />
                </small>
                <br />
                <small>
                  <FormattedMessage
                    id="document.files.modal.maxSize"
                    defaultMessage={`Maximum file size: ${convertToMb(maxSize)}`}
                  />
                </small>
              </p>
            )}
          </div>
          {errorList.length > 0 && (
            <div className="text-left error-files">
              <div className="error">
                <FormattedMessage
                  id="document.files.modal.error.files"
                  defaultMessage="The following file(s) contain error(s):"
                />
              </div>
              {errorList.map((file, idx) => (
                <div key={idx} className="error ml-2">{`- ${file.name}: ${file.errors.join(
                  ', '
                )}.`}</div>
              ))}
            </div>
          )}
        </div>
      )}
      {!showDropArea && (
        <span onClick={open} onKeyPress={() => {}} className={className}>
          <input name="dropzone" {...getInputProps()} disabled={isLoading} />
          {children}
          {errorList.length > 0 && (
            <div className="text-left error-files">
              <div className="error">
                <FormattedMessage
                  id="document.files.modal.error.files"
                  defaultMessage="The following file(s) contain error(s):"
                />
              </div>
              {errorList.map((file, idx) => (
                <div key={idx} className="error ml-2">{`- ${file.name}: ${file.errors.join(
                  ', '
                )}.`}</div>
              ))}
            </div>
          )}
        </span>
      )}

      {showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'bottom' && (
        <ImagesPreview />
      )}

      {cropperModal && (
        <CustomModal
          actionsChildren={
            <Button
              extraClass="success-full"
              onClick={() => {
                cropper.current.getCroppedCanvas().toBlob(
                  blob => {
                    const imageWidth = cropper.current.getCroppedCanvas().width;
                    const imageHeight = cropper.current.getCroppedCanvas().height;
                    if (imageWidth > minWidth && imageHeight > minHeight) {
                      setDisableCroppedImage(true);
                      handleSubmitCroppedImage(blob);
                    } else {
                      const errors = [];
                      errors.push({
                        name: '',
                        errors: [
                          `${
                            errorMessages.find(messageObj => messageObj.id === 'dimensions').message
                          }`,
                        ],
                      });
                      setErrorList(errors);
                    }
                  },
                  'image/jpeg',
                  1
                );
              }}
              text={textSaveCropModal}
              disabled={disableCroppedImage}
            />
          }
          bodyChildren={
            <>
              {disableCroppedImage && <Loading loadingClass="loading-cropper" />}
              <Cropper
                ref={cropper}
                src={croppedFile}
                style={{ height: 400, width: '100%' }}
                guides={true}
                zoomable={false}
                viewMode={1}
                aspectRatio={hasCropper.aspectRatioW / hasCropper.aspectRatioH}
              />
              {errorList.map((file, idx) => (
                <div key={idx} className="error ml-2">{`- ${file.name} ${file.errors.join(
                  ', '
                )}.`}</div>
              ))}
            </>
          }
          dividerBottom={true}
          dividerTop={true}
          onHide={toggleModalCropper}
          show={cropperModal}
          size="md"
          title={titleCropModal}
          dialogClassName={modalClassName}
        />
      )}
    </div>
  );
};
DropZoneBox.propTypes = {
  label: PropTypes.string,
  accept: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showDropArea: PropTypes.bool,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  maxFiles: PropTypes.number,
  multiple: PropTypes.bool,
  noClick: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  onSelect: PropTypes.func,
  errorMessages: PropTypes.array,
  hasCropper: PropTypes.shape({
    showCropper: PropTypes.bool,
    aspectRatioW: PropTypes.number,
    aspectRatioH: PropTypes.number,
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
  }),
  noDrag: PropTypes.bool,
  showImagesPreviews: PropTypes.bool,
  imagesList: PropTypes.array,
  env: PropTypes.object,
  imagesPreviewPosition: PropTypes.oneOf(['top', 'bottom']),
  deleteImageGallery: PropTypes.func,
  cropModalStatus: PropTypes.bool,
  titleCropModal: PropTypes.string,
  textSaveCropModal: PropTypes.string,
  modalClassName: PropTypes.string,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

DropZoneBox.defaultProps = {
  accept:
    'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .ppt, .pptx, .txt,.xlsx, .zip',
  className: '',
  disabled: false,
  showDropArea: true,
  maxSize: 5000000,
  minSize: 0,
  maxFiles: 5,
  multiple: true,
  noClick: false,
  noKeyboard: true,
  noDrag: false,
  imagesPreviewPosition: 'bottom',
  imagesList: [],
  titleCropModal: 'Add Files',
  textSaveCropModal: 'Add',
  isLoading: false,
};
export default DropZoneBox;