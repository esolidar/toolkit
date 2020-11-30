import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage, injectIntl } from 'react-intl';
import Loading from '../../components/loading/Loading';
import { lastElemOf } from '../../utils/index';

const DropZoneBox = ({
  accept,
  children,
  className,
  disabled,
  showDropArea,
  maxSize,
  minSize,
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
  intl,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);

  const wait = (delay, ...args) => new Promise((resolve) => setTimeout(resolve, delay, ...args));

  const convertToMb = (size) => `${(size / (1024 * 1024)).toFixed(0)} MB`;

  const ImagesPreview = () => (
    <div className="d-flex">
      {imagesList.map((file, idx) => (
        <div key={file.id} className="gallery-thumb mr-3">
          { file.image.includes('http')
            ? (<img src={`${file.image}?width=64&height=64`} alt="thumb" />)
            : (<img src={`${env.serverlessResizeImage}/${file.image}?width=64&height=64`} alt="thumb" />)}

          <button
            type="button"
            className="btn-delete-image"
            data-image-id={file.id}
            onClick={(e) => deleteImageGallery(e, idx)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );

  const errorMessages = [
    { id: 'extensionError', message: intl.formatMessage({ id: 'document.files.modal.error.extension', defaultMessage: 'extension not allowed ' }) },
    { id: 'maxSizeError', message: intl.formatMessage({ id: 'document.files.modal.error.filesSizeMax', defaultMessage: 'size larger than ' }) },
    { id: 'minSizeError', message: intl.formatMessage({ id: 'document.files.modal.error.filesSizeMin', defaultMessage: 'size less than ' }) },
  ];

  const { getRootProps, getInputProps, open } = useDropzone({
    accept,
    disabled,
    maxSize,
    minSize,
    multiple,
    noClick,
    noDrag,
    noKeyboard,
    getFilesFromEvent: async (e) => {
      setIsLoading(true);
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
    onDrop: () => {
      setIsLoading(false);
    },
    onDropAccepted: async (acceptedFiles) => {
      onSelect(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
    },
    onDropRejected: async (rejectedFiles) => {
      const fileExtensionOf = (extension) => lastElemOf(extension.split('.')).toLowerCase();
      const onDropErrorFileList = [];

      rejectedFiles.forEach((rejectedFile) => {
        const extension = fileExtensionOf(rejectedFile.name);
        const errors = [];
        const acceptExtensionArray = accept.split(',').map((item) => item.trim().toLocaleLowerCase());
        const extensionExist = acceptExtensionArray.includes(`.${extension}`);

        if (!extensionExist) errors.push(errorMessages.find((messageObj) => messageObj.id === 'extensionError').message);
        if (rejectedFile.size > maxSize) errors.push(`${errorMessages.find((messageObj) => messageObj.id === 'maxSizeError').message} ${convertToMb(maxSize)}`);
        if (rejectedFile.size < minSize) errors.push(`${errorMessages.find((messageObj) => messageObj.id === 'minSizeError').message} ${convertToMb(minSize)}`);

        const fileErrorObject = { name: rejectedFile.name, errors };
        if (errors.length) onDropErrorFileList.push(fileErrorObject);
      });

      setErrorList(onDropErrorFileList);
    },
  });

  return (
    <div>
      {(showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'top') && (
        <ImagesPreview />
      )}

      {showDropArea && (
        <div {...getRootProps({ className: 'dropZone' })} className={`upload-file ${className}`}>
          <input {...getInputProps()} />
          {isLoading && (
            <Loading />
          )}
          {!isLoading && (
            <div>
              <p>
                <strong>
                  <FormattedMessage id="document.files.modal.drop" defaultMessage="Drag and drop some files here, or click to select files" />
                </strong>
                <br />
                <small>
                  <FormattedMessage id="document.files.modal.acceptedFiles" defaultMessage="Accepted files: {accept}" values={{ accept }} />
                </small>
                <br />
                <small>
                  <FormattedMessage id="document.files.modal.maxSize" defaultMessage={`Maximum file size: ${convertToMb(maxSize)}`} />
                </small>
              </p>
              {(errorList.length > 0) && (
                <div className="text-left error-files">
                  <div className="error">
                    <FormattedMessage id="document.files.modal.error.files" defaultMessage="The following file(s) contain error(s):" />
                  </div>
                  {errorList.map((file, idx) => (
                    <div key={idx} className="error ml-2">{`- ${file.name}: ${file.errors.join(', ')}.`}</div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {!showDropArea && (
        <span onClick={open} onKeyPress={() => { }} className={className}>
          <input {...getInputProps()} />
          {children}
          {(errorList.length > 0) && (
            <div className="text-left error-files">
              <div className="error">
                <FormattedMessage id="document.files.modal.error.files" defaultMessage="The following file(s) contain error(s):" />
              </div>
              {errorList.map((file, idx) => (
                <div key={idx} className="error ml-2">{`- ${file.name}: ${file.errors.join(', ')}.`}</div>
              ))}
            </div>
          )}
        </span>
      )}

      {(showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'bottom') && (
        <ImagesPreview />
      )}

    </div>

  );
};
DropZoneBox.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.array,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showDropArea: PropTypes.bool,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  multiple: PropTypes.bool,
  noClick: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  onSelect: PropTypes.func,
  errorMessages: PropTypes.array,
  noDrag: PropTypes.bool,
  showImagesPreviews: PropTypes.bool,
  imagesList: PropTypes.array,
  env: PropTypes.object,
  imagesPreviewPosition: PropTypes.oneOf(
    ['top', 'bottom'],
  ),
  deleteImageGallery: PropTypes.func,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

DropZoneBox.defaultProps = {
  accept: 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .ppt, .pptx, .txt,.xlsx, .zip',
  className: '',
  disabled: false,
  showDropArea: true,
  maxSize: 5000000,
  minSize: 0,
  multiple: true,
  noClick: false,
  noKeyboard: true,
  noDrag: false,
  imagesPreviewPosition: 'bottom',
  imagesList: [],
};
export default injectIntl(DropZoneBox);
