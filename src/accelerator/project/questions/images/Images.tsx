import React, { useEffect, useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Viewport from '../../../../components/viewport';
import Props from './Images.types';
import DropZoneBox from '../../../../elements/dropZoneBox';
import getEnvVar from '../../../../utils/getEnvVar';
import DeleteImagesModal from './DeleteImagesModal';

const maxImages = 12;
const maxSize = 5;
const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');
const acceptedFiles = '.jpg, .jpeg, .png';

const Images = ({
  reply,
  handleSelectImage,
  handleDeleteImage,
  cropModalStatus,
  handleOrderImages,
}: Props) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const fileToDelete = useRef<number>(null);
  const intl = useIntl();

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    if (element) element.scrollTop = element.scrollHeight;
  }, [reply]);

  const handleConfirmDeleteImage = (id, item) => {
    if (item.project_id) setIsOpenDeleteModal(true);
    else handleDeleteImage(id);
  };

  return (
    <>
      <Viewport size="xl">
        <div className="wizard-project-images">
          <Viewport size="lg" centred={false}>
            <>
              <h2>
                <FormattedMessage id="toolkit.images" />
              </h2>
              <p>
                <FormattedMessage id="toolkit.project.images.description-1" />
                <br />
                <br />
                <FormattedMessage id="toolkit.project.images.description-2" />
              </p>
            </>
          </Viewport>
          <span className="wizard-project-images__helper">
            <FormattedMessage id="toolkit.project.images.helper" values={{ size: maxSize }} />
          </span>
          <DropZoneBox
            fullWidth
            sortable
            disabled={reply.length >= maxImages}
            accept={acceptedFiles}
            onSelect={handleSelectImage}
            showImagesPreviews={true}
            multiple={false}
            hasCropper={{
              showCropper: true,
              aspectRatioW: 3,
              aspectRatioH: 2,
              minWidth: 3,
              minHeight: 2,
            }}
            imagesList={reply}
            env={serverlessResizeImage}
            deleteImageGallery={handleConfirmDeleteImage}
            cropModalStatus={cropModalStatus}
            titleCropModal={intl.formatMessage({ id: 'auction.add.image' })}
            textSaveCropModal={intl.formatMessage({ id: 'auction.add.image.crop' })}
            handleOrderImages={handleOrderImages}
          />
        </div>
      </Viewport>
      <DeleteImagesModal
        isOpen={isOpenDeleteModal}
        onClickDelete={() => {
          handleDeleteImage(fileToDelete.current);
          fileToDelete.current = null;
          setIsOpenDeleteModal(false);
        }}
        onClose={() => {
          setIsOpenDeleteModal(false);
          fileToDelete.current = null;
        }}
      />
    </>
  );
};

export default Images;
