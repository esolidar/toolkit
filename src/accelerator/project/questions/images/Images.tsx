import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Viewport from '../../../../components/viewport';
import Props from './Images.types';
import DropZoneBox from '../../../../elements/dropZoneBox';
import getEnvVar from '../../../../utils/getEnvVar';

const maxImages = 12;

const Images = ({
  imagesCount,
  imagesList,
  handleSelectImage,
  handleDeleteImage,
  cropModalStatus,
  handleOrderImages,
}: Props) => {
  const intl = useIntl();

  const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    element.scrollTop = element.scrollHeight;
  }, [imagesList]);

  return (
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
          <FormattedMessage
            id="toolkit.project.images.helper"
            values={{ width: '123', heigth: '123', size: '5' }}
          />
        </span>
        <DropZoneBox
          fullWidth
          sortable
          disabled={imagesCount >= maxImages}
          accept=".jpg, .jpeg, .png"
          onSelect={handleSelectImage}
          showImagesPreviews={true}
          multiple={false}
          hasCropper={{
            showCropper: true,
            aspectRatioW: 5,
            aspectRatioH: 4,
            minWidth: 500,
            minHeight: 470,
          }}
          imagesList={imagesList}
          env={serverlessResizeImage}
          deleteImageGallery={handleDeleteImage}
          cropModalStatus={cropModalStatus}
          titleCropModal={intl.formatMessage({ id: 'auction.add.image' })}
          textSaveCropModal={intl.formatMessage({ id: 'auction.add.image.crop' })}
          handleOrderImages={handleOrderImages}
        />
      </div>
    </Viewport>
  );
};

export default Images;
