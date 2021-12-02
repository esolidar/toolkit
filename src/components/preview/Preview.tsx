import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';
import Props from './Preview.types';
import Icon from '../icon';
import Badge from '../../elements/badge';
import Button from '../../elements/button';
import 'react-image-lightbox/style.css';

const Preview: FC<Props> = ({
  className,
  img,
  handleDeleteImage,
  fullScreen = false,
  badgeText,
}: Props): JSX.Element => {
  const [lightboxIsOpen, seLightboxIsOpen] = useState<boolean>(false);
  const classes = classNames('esolidar-preview', className);

  const handleFullscreen = () => {
    seLightboxIsOpen(true);
  };

  return (
    <>
      <div className={classes}>
        <div className="esolidar-preview__image" style={{ width: img.width, height: img.height }}>
          <img src={img.src} alt={img.alt} style={{ height: img.height, width: 'auto' }} />
          {handleDeleteImage && (
            <button
              type="button"
              className="esolidar-preview__image-delete-image"
              onClick={handleDeleteImage}
            >
              <Icon iconClass="icon-close" />
            </button>
          )}
          {fullScreen && (
            <Button
              className="esolidar-preview__image-fullscreen"
              extraClass="ghost"
              onClick={handleFullscreen}
              icon={<Icon iconClass="icon-camera" />}
            />
          )}
          {badgeText && (
            <div className="esolidar-preview__image-badge">
              <Badge extraClass="default" plaintext={badgeText} />
            </div>
          )}
        </div>
      </div>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={img.src}
          onCloseRequest={() => seLightboxIsOpen(false)}
          enableZoom={false}
        />
      )}
    </>
  );
};

export default Preview;
