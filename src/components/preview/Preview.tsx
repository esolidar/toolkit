/* eslint-disable camelcase */
import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';
import Skeleton from 'react-loading-skeleton';
import fetch from 'cross-fetch';
import Props, { VideoDetails } from './Preview.types';
import Icon from '../../elements/icon';
import Badge from '../../elements/badge';
import Button from '../../elements/button';
import getEnvVar from '../../utils/getEnvVar';
import isDefined from '../../utils/isDefined';
import 'react-image-lightbox/style.css';
import 'react-loading-skeleton/dist/skeleton.css';

const urlNoImage: string = `${getEnvVar('CDN_STATIC_URL')}/frontend/assets/placeholders/image.svg`;

const getVideoThumbnailSrc = (providerName: string, thumbnailUrl: string): string => {
  if (providerName === 'vimeo') return thumbnailUrl;
  return `https://img.youtube.com/vi/${thumbnailUrl}/maxresdefault.jpg`;
};

const Preview: FC<Props> = ({
  className,
  img,
  handleDeleteImage,
  fullScreen = false,
  badgeText,
  hover = true,
  type = 'image',
  videoUrl,
  onFinishVideoValidation,
  isVisible = true,
  handleClickPreview,
  videoDetails,
}: Props): JSX.Element => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(!img || !img?.src);
  const [showVideoSkeleton, setShowVideoSkeleton] = useState<boolean>(false);

  useEffect(() => {
    setShowPlaceholder(!img || !img?.src);
  }, [img]);

  useEffect(() => {
    if (!isVisible && showVideoSkeleton) setShowVideoSkeleton(false);
  }, [isVisible]);

  useEffect(() => {
    if (!isDefined(videoUrl) || videoUrl === videoDetails?.videoUrl) return;

    const getVideoDetails = async url => {
      fetch(`https://www.youtube.com/oembed?format=json&url=${url}&maxwidth=420`)
        .then(response => response.json())
        .then(({ title, thumbnail_url }) => {
          if (onFinishVideoValidation) {
            const providerName = 'youtube';
            const thumbnailUrl = `url(${getVideoThumbnailSrc(
              providerName,
              thumbnail_url.split('/')[4]
            )})`;

            const newVideoDetails: VideoDetails = {
              title,
              providerName,
              thumbnailUrl,
              videoUrl,
              isLoading: false,
              hasError: false,
            };

            onFinishVideoValidation(newVideoDetails);

            setShowVideoSkeleton(true);
            setTimeout(() => {
              setShowVideoSkeleton(false);
            }, 800);
          }
        })
        .catch(() => {
          fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
            .then(response => response.json())
            .then(({ title, thumbnail_url }) => {
              if (onFinishVideoValidation) {
                const providerName = 'vimeo';
                const thumbnailUrl = `url(${getVideoThumbnailSrc(providerName, thumbnail_url)})`;

                const newVideoDetails: VideoDetails = {
                  title,
                  providerName,
                  thumbnailUrl,
                  videoUrl,
                  isLoading: false,
                  hasError: false,
                };

                onFinishVideoValidation(newVideoDetails);

                setShowVideoSkeleton(true);
                setTimeout(() => {
                  setShowVideoSkeleton(false);
                }, 800);
              }
            })
            .catch(() => {
              const newVideoDetails: VideoDetails = {
                title: undefined,
                providerName: undefined,
                thumbnailUrl: undefined,
                videoUrl: undefined,
                isLoading: false,
                hasError: true,
              };

              if (onFinishVideoValidation) onFinishVideoValidation(newVideoDetails);
            });
        });
    };

    if (videoUrl !== '') {
      getVideoDetails(videoUrl);
      if (onFinishVideoValidation)
        onFinishVideoValidation({
          title: undefined,
          providerName: undefined,
          thumbnailUrl: undefined,
          videoUrl: undefined,
          isLoading: true,
          hasError: false,
        });
    }
  }, [videoUrl]);

  const handleFullscreen = () => {
    setIsLightboxOpen(true);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLInputElement;
    target.onerror = null;
    target.src = urlNoImage;
    setShowPlaceholder(true);
  };

  const isVideoLoading = type === 'video' && (videoDetails?.isLoading || showVideoSkeleton);

  const classes = classNames('esolidar-preview', className, {
    'hover-image': (type === 'image' && hover) || (type === 'video' && !isVideoLoading),
  });

  if (!isVisible) return <></>;

  if (type === 'image')
    return (
      <>
        <div className={classes}>
          {!showPlaceholder ? (
            <div
              className={classNames('esolidar-preview__image', {
                'cursor-pointer': fullScreen,
              })}
              style={{
                width: img?.width,
                height: img?.height,
              }}
              onKeyDown={() => {
                if (typeof handleClickPreview !== 'undefined') handleClickPreview();
                if (fullScreen) handleFullscreen();
              }}
              onClick={() => {
                if (typeof handleClickPreview !== 'undefined') handleClickPreview();
                if (fullScreen) handleFullscreen();
              }}
            >
              <img
                src={img?.src}
                onError={handleImageError}
                alt={img?.alt}
                style={{
                  height: img?.height,
                  width: 'auto',
                  borderRadius: img?.borderRadius || '8px',
                }}
              />
              {handleDeleteImage && (
                <button
                  type="button"
                  className="esolidar-preview__delete"
                  onClick={handleDeleteImage}
                >
                  <Icon name="X" size="sm" />
                </button>
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
                borderRadius: img?.borderRadius || '8px',
              }}
            >
              <img src={urlNoImage} alt="Preview without content" />
            </div>
          )}
        </div>
        {isLightboxOpen && (
          <Lightbox
            mainSrc={img?.src}
            onCloseRequest={() => setIsLightboxOpen(false)}
            enableZoom={false}
          />
        )}
      </>
    );

  if (type === 'video' && videoDetails?.hasError) return <></>;
  if (type === 'video' && !videoDetails?.hasError) {
    return (
      <>
        <div className={classes}>
          <div
            className={classNames('esolidar-preview__video', {
              'cursor-pointer': handleClickPreview,
            })}
            onKeyDown={handleClickPreview}
            onClick={handleClickPreview}
          >
            {!isVideoLoading ? (
              <div
                className="esolidar-preview__video--thumbnail"
                style={{
                  backgroundImage: videoDetails?.thumbnailUrl,
                }}
              />
            ) : (
              <div
                className="esolidar-preview__no-image"
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  height: 'auto',
                }}
              >
                <div style={{ height: '100%', width: '100%' }}>
                  <Skeleton width="100%" height="100%" containerTestId="skeleton-thumbnail" />
                </div>
              </div>
            )}

            <div className="esolidar-preview__video--description">
              <div className="esolidar-preview__video--description-provider">
                {!isVideoLoading ? (
                  `${videoDetails?.providerName}.COM`
                ) : (
                  <Skeleton width="30%" containerTestId="skeleton-provider" />
                )}
              </div>
              <div
                className="esolidar-preview__video--description-title"
                title={videoDetails?.title}
              >
                {!isVideoLoading ? (
                  videoDetails?.title
                ) : (
                  <Skeleton width="90%" containerTestId="skeleton-title" />
                )}
              </div>
            </div>
            {!!handleDeleteImage && !videoDetails?.isLoading && (
              <button
                type="button"
                className="esolidar-preview__delete"
                onClick={e => handleDeleteImage(e)}
              >
                <Icon name="X" size="sm" />
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Preview;
