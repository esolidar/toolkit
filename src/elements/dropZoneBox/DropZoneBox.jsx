import React, { useState, useEffect, createRef } from 'react';

import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage, useIntl } from 'react-intl';
import classnames from 'classnames';
import Cropper from 'react-cropper';
import Loading from '../../components/loading';
import InputLabel from '../inputLabel';
import Preview from '../../components/preview';
import Slider from '../slider';
import Icon from '../icon';
import CustomModal from '../customModal';
import Button from '../button';
import Tooltip from '../tooltip';
import lastElemOf from '../../utils/lastElemOf';
import DragAndDrop from './dragAndDrop/DragAndDrop';

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
  hasError,
  showIcon,
  inputLabelProps,
  label,
  showFooterCropper,
  showErrors,
  error,
  minWidth,
  minHeight,
  fullWidth = false,
  sortable,
  handleOrderImages,
  onDropError,
}) => {
  const [errorList, setErrorList] = useState([]);
  const [cropperModal, setCropperModal] = useState(cropModalStatus || false);
  const [croppedFile, setCroppedFile] = useState(null);
  const [disableCroppedImage, setDisableCroppedImage] = useState(false);
  const [resetSlider, setResetSlider] = useState(false);

  const intl = useIntl();

  const cropMinWidth = !hasCropper || !hasCropper.minWidth ? 500 : hasCropper.minWidth;
  const cropMinHeight = !hasCropper || !hasCropper.minHeight ? 470 : hasCropper.minHeight;

  useEffect(() => {
    if (!cropModalStatus) {
      setCropperModal(cropModalStatus);
      setDisableCroppedImage(false);
    }
  }, [cropModalStatus]);

  const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));

  const convertToMb = size => `${(size / (1024 * 1024)).toFixed(0)} MB`;

  const ImagesPreview = () => (
    <div className="dropzone-box__images-list">
      {sortable && (
        <DragAndDrop
          imagesList={imagesList}
          env={env}
          handleDeleteImage={deleteImageGallery}
          handleOrderImages={handleOrderImages}
        />
      )}
      {!sortable && (
        <>
          {imagesList.map((file, idx) => (
            <div key={file.id}>
              {file.image.includes('http') ? (
                <Preview
                  img={{ src: `${file.image}?width=216px&height=144`, alt: 'thumb' }}
                  handleDeleteImage={e => deleteImageGallery(e, idx)}
                />
              ) : (
                <Preview
                  handleDeleteImage={e => deleteImageGallery(e, idx)}
                  img={{
                    src: `${env.serverlessResizeImage}/${file.image}?width=216px&height=144`,
                    alt: 'thumb',
                  }}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );

  const errorMessages = [
    {
      id: 'extensionError',
      message: intl.formatMessage({ id: 'document.files.modal.error.extension' }),
    },
    {
      id: 'maxSizeError',
      message: intl.formatMessage({ id: 'document.files.modal.error.filesSizeMax' }),
    },
    {
      id: 'minSizeError',
      message: intl.formatMessage({ id: 'document.files.modal.error.filesSizeMin' }),
    },
    {
      id: 'dimensions',
      message: intl.formatMessage(
        { id: 'document.files.modal.error.dimensions' },
        {
          width: minWidth || cropMinWidth,
          height: minHeight || cropMinHeight,
        }
      ),
    },
  ];

  const toggleModalCropper = () => {
    setDisableCroppedImage(false);
    setCropperModal(false);
    setErrorList([]);
  };

  const getImageWidthAndHeight = file => {
    if (file.type.split('/')[0] === 'image') {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-underscore-dangle
        const _URL = window.URL || window.webkitURL;
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Something went wrong'));
        img.src = _URL.createObjectURL(file);
      }).then(img => {
        return { width: img.width, height: img.height };
      });
    }
    return {};
  };

  const renderErrorList = (errorList, showErrors, errorTitle = false) => {
    if (errorList.length > 0 && showErrors) {
      if (onDropError) {
        onDropError(errorList);
        setErrorList([]);
        return;
      }

      return (
        <div className="error-files">
          {errorTitle && (
            <div className="error">
              <FormattedMessage id="document.files.modal.error.files" />
            </div>
          )}
          {errorList.map((file, idx) => (
            <div key={idx} className="error ml-2 d-block">
              {file.name && ` ${file.name}: `}
              {` ${file.errors.join(', ')}`}
            </div>
          ))}
        </div>
      );
    }
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
      await wait(250);
      return files;
    },
    onDrop: () => {},
    onDropAccepted: async acceptedFiles => {
      const errors = [];
      if (hasCropper && hasCropper.showCropper) {
        const reader = new FileReader();
        const file = acceptedFiles[0];
        const imagesAttributes = await getImageWidthAndHeight(file);

        if (imagesAttributes?.height < minHeight && imagesAttributes?.width < minWidth) {
          errors.push({
            name: '',
            errors: [`${errorMessages.find(messageObj => messageObj.id === 'dimensions').message}`],
          });
          setErrorList(errors);
        } else {
          reader.onloadend = () => {
            setCroppedFile(reader.result);
          };

          reader.readAsDataURL(file);
          setCropperModal(true);
        }
      } else {
        const getData = await Promise.all(
          acceptedFiles.map(async file => {
            const imagesAttributes = await getImageWidthAndHeight(file);
            if (imagesAttributes?.height < minHeight && imagesAttributes?.width < minWidth) {
              return errors.push({
                name: file.name,
                errors: [
                  `${errorMessages.find(messageObj => messageObj.id === 'dimensions').message}`,
                ],
              });
            }
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
            });
          })
        );
        setErrorList(errors);
        onSelect(getData);
      }
    },
    onDropRejected: async rejectedFiles => {
      if (showErrors && onDropError && rejectedFiles.length > maxFiles)
        onDropError([{ name: 'maxFiles', maxFiles }]);

      const fileExtensionOf = extension => lastElemOf(extension.split('.')).toLowerCase();
      const onDropErrorFileList = [];

      rejectedFiles.forEach(rejectedFile => {
        const extension = fileExtensionOf(rejectedFile.file.name);
        const errors = [];
        const acceptExtensionArray = accept.split(',').map(item => item.trim().toLocaleLowerCase());
        const extensionExist = acceptExtensionArray.includes(`.${extension}`);

        if (!extensionExist)
          errors.push(errorMessages.find(messageObj => messageObj.id === 'extensionError').message);
        if (rejectedFile.file.size > maxSize)
          errors.push(
            `${
              errorMessages.find(messageObj => messageObj.id === 'maxSizeError').message
            } ${convertToMb(maxSize)}`
          );
        if (rejectedFile.file.size < minSize)
          errors.push(
            `${
              errorMessages.find(messageObj => messageObj.id === 'minSizeError').message
            } ${convertToMb(minSize)}`
          );

        const fileErrorObject = { name: rejectedFile.file.name, errors };
        if (errors.length) onDropErrorFileList.push(fileErrorObject);
      });

      setErrorList(onDropErrorFileList);
    },
  });

  const handleSubmitCroppedImage = blob => {
    onSelect([blob]);
    toggleModalCropper();
  };

  const onSliderMoves = (value, direction) => {
    setResetSlider(false);
    if (direction === 'right') cropper.current.zoom(0.1);
    if (direction === 'left') cropper.current.zoom(-0.1);
  };

  const rotate = degrees => {
    if (degrees) {
      setResetSlider(true);
      cropper.current.rotate(degrees);
      cropper.current.zoomTo(0);
      const currentRotation = cropper.current.getData().rotate;
      if (currentRotation === 0 || currentRotation === 180 || currentRotation === -180) {
        cropper.current.moveTo(0);
      }
    }
  };

  return (
    <div className={classnames('dropzone-box form-group', { 'full-width': fullWidth })}>
      {showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'top' && (
        <ImagesPreview />
      )}
      {label && <InputLabel label={label} field="dropzone" />}
      {inputLabelProps && <InputLabel {...inputLabelProps} field="dropzone" />}
      {showDropArea && (
        <div {...getRootProps({ className: 'dropZone' })} className={`upload-file ${className}`}>
          <input name="dropzone" {...getInputProps()} disabled={isLoading} />
          <div
            className={classnames(
              { 'required-field': hasError },
              'drop-zone-box',
              {
                'with-icon': showIcon,
              },
              { disabled }
            )}
          >
            {isLoading && <Loading />}
            {!isLoading && (
              <>
                {showIcon && (
                  <div className="drop-icon">
                    <Icon name="UploadCloud" size="lg" />
                  </div>
                )}
                <div>
                  <FormattedMessage
                    id="dropzonebox.text"
                    values={{
                      a: <a href="#">{intl.formatMessage({ id: 'dropzonebox.a' })}</a>,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {!showDropArea && (
        <>
          <span onClick={open} onKeyPress={() => {}} className={className}>
            <input name="dropzone" {...getInputProps()} disabled={isLoading} />
            {children}
          </span>
        </>
      )}

      {showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'bottom' && (
        <ImagesPreview />
      )}

      {renderErrorList(errorList, showErrors, true)}

      {error && (
        <div
          className="form-group has-error"
          style={{
            width: '100%',
            display: 'inline-block',
            marginBottom: '15px',
            marginTop: '-15px',
          }}
        >
          <div className="help-block">{error}</div>
        </div>
      )}

      {cropperModal && (
        <CustomModal
          bodyClassName="dropzone-box"
          actionsChildren={
            <div className="footer-buttons">
              <Button
                extraClass="secondary"
                onClick={toggleModalCropper}
                text={intl.formatMessage({ id: 'cancel' })}
              />
              <Button
                extraClass="success-full"
                onClick={() => {
                  cropper.current.getCroppedCanvas().toBlob(
                    blob => {
                      const imageWidth = cropper.current.getCroppedCanvas().width;
                      const imageHeight = cropper.current.getCroppedCanvas().height;
                      if (imageWidth >= cropMinWidth && imageHeight >= cropMinHeight) {
                        setDisableCroppedImage(true);
                        handleSubmitCroppedImage(blob);
                        setErrorList([]);
                      } else {
                        const errors = [];
                        errors.push({
                          name: '',
                          errors: [
                            `${
                              errorMessages.find(messageObj => messageObj.id === 'dimensions')
                                .message
                            }`,
                          ],
                        });
                        setErrorList(errors);
                      }
                    },
                    'image/jpeg',
                    0.7
                  );
                }}
                text={textSaveCropModal || intl.formatMessage({ id: 'save' })}
                disabled={disableCroppedImage}
              />
            </div>
          }
          bodyChildren={
            <>
              {disableCroppedImage && <Loading loadingClass="loading-cropper" />}
              <Cropper
                ref={cropper}
                src={croppedFile}
                style={{ height: 290, width: '100%' }}
                guides={true}
                zoomable={true}
                viewMode={1}
                aspectRatio={hasCropper.aspectRatioW / hasCropper.aspectRatioH}
                dragMode="move"
                cropBoxResizable={true}
                cropBoxMovable={false}
                autoCropArea={1}
              />
              {renderErrorList(errorList, showErrors)}
              {showFooterCropper && (
                <div className="dropzone-footer">
                  <div className="dropzone-footer__buttons">
                    <Tooltip
                      overlay={
                        <span>
                          <FormattedMessage id="rotate.left" />
                        </span>
                      }
                      placement="right"
                      trigger="hover"
                      className="esolidar-tooltip"
                      tooltipBodyChild={
                        <Button
                          className="dropzone-footer__buttons-rotate"
                          extraClass="primary-full"
                          onClick={() => rotate(90)}
                          icon={<Icon name="RotateCcw" size="sm" />}
                          ghost
                        />
                      }
                    />
                    <Tooltip
                      overlay={
                        <span>
                          <FormattedMessage id="rotate.right" />
                        </span>
                      }
                      placement="right"
                      trigger="hover"
                      className="esolidar-tooltip"
                      tooltipBodyChild={
                        <Button
                          className="dropzone-footer__buttons-rotate"
                          extraClass="primary-full"
                          onClick={() => rotate(-90)}
                          icon={<Icon name="RotateCw" size="sm" />}
                          ghost
                        />
                      }
                    />
                  </div>
                  <div className="dropzone-footer__slider">
                    <Slider
                      min={0}
                      max={100}
                      step={10}
                      defaultValue={0}
                      showButtons={true}
                      onChange={onSliderMoves}
                      reset={resetSlider}
                    />
                  </div>
                </div>
              )}
            </>
          }
          onHide={toggleModalCropper}
          show={cropperModal}
          size="md"
          title={titleCropModal || intl.formatMessage({ id: 'modal.crop.title' })}
          dialogClassName={modalClassName}
        />
      )}
    </div>
  );
};
DropZoneBox.propTypes = {
  fullWidth: PropTypes.bool,
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
  inputLabelProps: PropTypes.object,
  showIcon: PropTypes.bool,
  showFooterCropper: PropTypes.bool,
  showErrors: PropTypes.bool,
  error: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  sortable: PropTypes.bool,
  handleOrderImages: PropTypes.func,
  onDropError: PropTypes.func,
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
  isLoading: false,
  showFooterCropper: false,
  showErrors: true,
  showIcon: true,
  sortable: false,
  cropModalStatus: false,
};
export default DropZoneBox;
