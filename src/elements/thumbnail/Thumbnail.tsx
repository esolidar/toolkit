/* eslint-disable camelcase */
import React, { FC, SyntheticEvent, useState } from 'react';
import classnames from 'classnames';
import getEnvVar from '../../utils/getEnvVar';
import InputLabel from '../inputLabel';
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
}: Props): JSX.Element => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(!img || !img?.src);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLInputElement;
    target.onerror = null;
    target.src = urlNoImage;
    setShowPlaceholder(true);
  };

  return (
    <div className={classnames(`size-${size}`, 'form-group', className)}>
      {inputLabelProps && <InputLabel {...inputLabelProps} />}

      <div className="thumbnail">
        <div className={classnames('thumbnail__img', { minHeight: showPlaceholder })}>
          {!showPlaceholder && img ? (
            <img
              className="thumbnail_thumb"
              src={validateImageSrc(img?.src)}
              onError={handleImageError}
              alt={img?.alt}
            />
          ) : (
            <img className="thumbnail__no-img" src={urlNoImage} alt="Preview without content" />
          )}
        </div>
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
      </div>
    </div>
  );
};

export default Thumbnail;
