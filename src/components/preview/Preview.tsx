import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';
import Props from './Preview.types';
import Icon from '../../elements/icon';
import Badge from '../../elements/badge';
import Button from '../../elements/button';
import getEnvVar from '../../utils/getEnvVar';
import variables from '../../assets/sass/_export.module.scss';
import 'react-image-lightbox/style.css';

const urlNoImage = `${getEnvVar('CDN_STATIC_URL')}/frontend/assets/placeholders/image.svg`;

const Preview: FC<Props> = ({
  className,
  img,
  handleDeleteImage,
  fullScreen = false,
  badgeText,
  hover = true,
}: Props): JSX.Element => {
  const [lightboxIsOpen, seLightboxIsOpen] = useState<boolean>(false);
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(!img || !img?.src);
  const classes = classNames('esolidar-preview', className, { 'hover-image': hover });

  useEffect(() => {
    setShowPlaceholder(!img || !img?.src);
  }, [img]);

  const handleFullscreen = () => {
    seLightboxIsOpen(true);
  };

  const imageOnErrorHandler = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLInputElement;
    target.onerror = null;
    target.src = urlNoImage;

    setShowPlaceholder(true);
  };

  return (
    <>
      <div className={classes}>
        {!showPlaceholder ? (
          <div
            className="esolidar-preview__image"
            style={{
              width: img?.width,
              height: img?.height,
            }}
          >
            <img
              src={img?.src}
              onError={imageOnErrorHandler}
              alt={img?.alt}
              style={{
                height: img?.height,
                width: 'auto',
                borderRadius: img?.borderRadius || variables['border-radius-1'],
              }}
            />
            {handleDeleteImage && (
              <button
                type="button"
                className="esolidar-preview__image-delete-image"
                onClick={handleDeleteImage}
              >
                <Icon name="X" size="sm" />
              </button>
            )}
            {fullScreen && (
              <Button
                className="esolidar-preview__image-fullscreen"
                extraClass="primary-full"
                onClick={handleFullscreen}
                icon={<Icon name="icon-camera" />}
                ghost
              />
            )}
            {badgeText && (
              <div className="esolidar-preview__image-badge">
                <Badge extraClass="default" plaintext={badgeText} />
              </div>
            )}
          </div>
        ) : (
          <div
            className={classNames('esolidar-preview__no-image', { 'hover-placeholder': hover })}
            style={{
              width: img?.width,
              height: img?.height,
              borderRadius: img?.borderRadius || variables['border-radius-1'],
            }}
          >
            <img src={urlNoImage} alt="Preview without content" />
          </div>
        )}
      </div>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={img?.src}
          onCloseRequest={() => seLightboxIsOpen(false)}
          enableZoom={false}
        />
      )}
    </>
  );
};

export default Preview;
