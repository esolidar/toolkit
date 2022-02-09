import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';
import Props from './Preview.types';
import Icon from '../icon';
import Badge from '../../elements/badge';
import Button from '../../elements/button';
import getEnvVar from '../../utils/getEnvVar';
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
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(!img);
  const classes = classNames('esolidar-preview', className, { 'hover-image': hover });

  useEffect(() => {
    setShowPlaceholder(!img);
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
            style={{ width: img?.width, height: img?.height }}
          >
            <img
              src={img?.src}
              onError={imageOnErrorHandler}
              alt={img?.alt}
              style={{ height: img?.height, width: 'auto' }}
            />
            {handleDeleteImage && (
              <button
                type="button"
                className="esolidar-preview__image-delete-image"
                onClick={handleDeleteImage}
              >
                {/* TODO: change svg for new icon from product team */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#1A1B1C"
                    fillOpacity="0.65"
                  />
                  <path
                    d="M11 21L21 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L11 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {fullScreen && (
              <Button
                className="esolidar-preview__image-fullscreen"
                extraClass="primary-full"
                onClick={handleFullscreen}
                icon={<Icon iconClass="icon-camera" />}
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
          <div className={classNames('esolidar-preview__no-image', { 'hover-placeholder': hover })}>
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
