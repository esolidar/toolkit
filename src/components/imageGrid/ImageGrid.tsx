import React, { FC, useEffect, useState, useRef } from 'react';
import Lightbox from 'react-image-lightbox';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import Preview from '../preview';
import Icon from '../../elements/icon';
import Props from './ImageGrid.types';

const ImageGrid: FC<Props> = ({
  items,
  type = 'grid',
  editMode = false,
  onDeleteImage,
}: Props): JSX.Element => {
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imagesRef = useRef([]);
  const { length } = items;

  useEffect(() => {}, []);

  const handleImageClick = index => {
    setCurrentIndex(index);
    setIsOpenLightbox(true);
  };

  return (
    <div className={classnames('imageGrid', { displayInline: type === 'inline' })}>
      {items.map((item, index) => {
        if (imagesRef.current.indexOf(item.image) < 0) {
          imagesRef.current = [...imagesRef.current, item.image];
        }

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
                handleDeleteImage={editMode ? () => onDeleteImage(item.id) : undefined}
                handleClickPreview={() => handleImageClick(index)}
                isVisible
              />
              {index === 3 && (
                <button className="load-more" onClick={() => handleImageClick(index)}>
                  + {length - 3}
                </button>
              )}
            </div>
          );
      })}

      {isOpenLightbox && (
        <Lightbox
          mainSrc={imagesRef.current[currentIndex]}
          nextSrc={
            (currentIndex + 1) % imagesRef.current.length > 0 &&
            imagesRef.current[(currentIndex + 1) % imagesRef.current.length]
          }
          prevSrc={
            (currentIndex + imagesRef.current.length - 1) % imagesRef.current.length <
              imagesRef.current.length - 1 &&
            imagesRef.current[
              (currentIndex + imagesRef.current.length - 1) % imagesRef.current.length
            ]
          }
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() =>
            setCurrentIndex(
              (currentIndex + imagesRef.current.length - 1) % imagesRef.current.length
            )
          }
          onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % imagesRef.current.length)}
          enableZoom={false}
          toolbarButtons={
            editMode
              ? [
                  <button
                    type="button"
                    className="esolidar-preview__delete"
                    onClick={() => onDeleteImage(items[currentIndex].id)}
                  >
                    <Icon name="X" size="sm" />
                  </button>,
                ]
              : undefined
          }
        />
      )}
    </div>
  );
};

export default ImageGrid;
