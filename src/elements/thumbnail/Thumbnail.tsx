/* eslint-disable react/no-children-prop */

import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import { IntlShape, useIntl } from 'react-intl';
import getEnvVar from '../../utils/getEnvVar';
import InputLabel from '../inputLabel';
import Icon from '../icon';
import Button from '../button';
import DropZoneBox from '../dropZoneBox';
import validateImageSrc from '../../utils/validateImageSrc';
import Props from './Thumbnail.types';

const urlNoImage: string = `${getEnvVar('CDN_STATIC_URL')}/frontend/assets/placeholders/image.svg`;

const Thumbnail: FC<Props> = ({
  size = 'lg',
  className,
  img,
  url,
  title,
  description,
  inputLabelProps,
  dropZoneBoxProps,
  minHeight = '376px',
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const [showImage, setShowImage] = useState<boolean>(!!img || !!img?.src);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLInputElement;

    target.onerror = null;
    setShowImage(false);
  };

  useEffect(() => {
    setShowImage(true);
  }, [img]);

  return (
    <div className={classnames(`size-${size}`, 'form-group', className)}>
      {inputLabelProps && <InputLabel {...inputLabelProps} />}

      <div className="thumbnail">
        <div
          className="thumbnail__img"
          style={{
            minHeight: showImage ? 'auto' : minHeight,
            backgroundImage: `url(${urlNoImage})`,
          }}
        >
          {showImage && img && (
            <img
              className="thumbnail_thumb"
              src={validateImageSrc(img?.src)}
              onError={handleImageError}
              alt={img?.alt}
            />
          )}
          {dropZoneBoxProps && (
            <div className="thumbnail__img-upload">
              <DropZoneBox
                showDropArea={false}
                multiple={false}
                showImagesPreviews={false}
                env={{
                  serverlessResizeImage: process.env.PUBLIC_SERVER_LESS_RESIZE_IMAGE,
                }}
                children={
                  <Button
                    extraClass="overlay"
                    size="sm"
                    type="button"
                    ghost={false}
                    text={intl.formatMessage({ id: 'toolkit.upload' })}
                    iconLeft={<Icon name="Upload" size="sm" />}
                    onClick={() => {}}
                  />
                }
                {...dropZoneBoxProps}
              />
            </div>
          )}
        </div>
        {(title || description || url) && (
          <div className="thumbnail__body">
            {title && (
              <div className="thumbnail__body--title" title={title}>
                {title}
              </div>
            )}
            {description && (
              <div className="thumbnail__body--description" title={description}>
                {description}
              </div>
            )}
            {url && (
              <div className="thumbnail__body--helper" title={description}>
                {url}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Thumbnail;
