import React, { FC, useState, useEffect } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Lightbox from 'react-image-lightbox';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import Button from '../../elements/button';
import Preview from '../preview';
import Icon from '../../elements/icon';
import Props from './ImageGrid.types';
import validateImageSrc from '../../utils/validateImageSrc';

const ImageGrid: FC<Props> = ({
  items,
  type = 'grid',
  editMode = false,
  onDeleteImage,
}: Props): JSX.Element => {
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const intl: IntlShape = useIntl();
  const { length } = items;

  const imagesLightboxList = items.flatMap(image => {
    const url = validateImageSrc(image.image);
    return url;
  });

  useEffect(() => {
    const currentImage = currentIndex >= length - 1 ? length - 1 : currentIndex;
    setCurrentIndex(currentImage);
  }, [items]);

  const handleImageClick = index => {
    setCurrentIndex(index);
    setIsOpenLightbox(true);
  };

  const handleDeleteImage = (e, id) => {
    e.stopPropagation();
    onDeleteImage(id);
  };

  return (
    <div className={classnames('imageGrid', { displayInline: type === 'inline' })}>
      {items.map((item, index) => {
        let width = '100%';
        let height = isMobile ? 'calc(395px/2)' : '395px';

        if (type === 'grid') {
          if (length === 2) {
            height = isMobile ? 'calc(287px/2)' : '287px';
          }
          if (length === 3) {
            if (index < 1) {
              width = '100%';
              height = isMobile ? 'calc(390px/2)' : '390px';
            }
            if (index >= 1) {
              width = 'calc(50% - 8px)';
              height = isMobile ? 'calc(186px/2)' : '186px';
            }
          }
          if (length > 3) {
            width = 'calc(50% - 8px)';
            height = isMobile ? 'calc(288px/2)' : '288px';
          }
        }

        if (type === 'inline') {
          width = isMobile ? 'calc(140px/2)' : '140px';
          height = isMobile ? 'calc(92px/2)' : '92px';
        }

        if (index < 4)
          return (
            <div className="imageGrid__image" style={{ width, height }} key={item.id}>
              <Preview
                img={{ src: item.image, alt: 'thumb', width: '100%', height }}
                handleDeleteImage={editMode ? e => handleDeleteImage(e, item.id) : undefined}
                handleClickPreview={() => handleImageClick(index)}
                isVisible
              />
              {index === 3 && length > 4 && (
                <button className="load-more" onClick={() => handleImageClick(index)}>
                  + {length - 4}
                </button>
              )}
            </div>
          );
      })}

      {isOpenLightbox && (
        <Lightbox
          mainSrc={imagesLightboxList[currentIndex]}
          nextSrc={
            (currentIndex + 1) % imagesLightboxList.length > 0 &&
            imagesLightboxList[(currentIndex + 1) % imagesLightboxList.length]
          }
          prevSrc={
            (currentIndex + imagesLightboxList.length - 1) % imagesLightboxList.length <
              imagesLightboxList.length - 1 &&
            imagesLightboxList[
              (currentIndex + imagesLightboxList.length - 1) % imagesLightboxList.length
            ]
          }
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() =>
            setCurrentIndex(
              (currentIndex + imagesLightboxList.length - 1) % imagesLightboxList.length
            )
          }
          onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % imagesLightboxList.length)}
          enableZoom={false}
          toolbarButtons={
            editMode
              ? [
                  <Button
                    extraClass="overlay"
                    text={intl.formatMessage({ id: 'delete' })}
                    iconLeft={<Icon name="Trash" />}
                    onClick={e => {
                      handleDeleteImage(e, items[currentIndex]?.id);
                    }}
                  />,
                ]
              : undefined
          }
        />
      )}
    </div>
  );
};

export default ImageGrid;
