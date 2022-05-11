/* eslint-disable no-param-reassign */
/* eslint-disable no-self-assign */
import React, { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import sortBy from '../../utils/sortBy';
import Props from './CarouselLightbox.types';

const splitArrayIntoChunks = (array, size) => {
  const chunks = [];
  let i = 0;
  do {
    if (i === 0) {
      chunks.push(array.slice(i, (i += size)));
    } else {
      const newSize = size - 2;
      const newArray = [
        chunks[chunks.length - 1][size - 2],
        chunks[chunks.length - 1][size - 1],
        ...array.slice(i, (i += newSize)),
      ];
      chunks.push(newArray);
    }
  } while (i < array.length);
  return chunks;
};

const videoStopper = () => {
  if (typeof window !== 'undefined') {
    document.querySelectorAll('iframe').forEach(video => {
      video.src = video.src;
    });
  }
};

const CarouselLightbox: FC<Props> = ({ listItems, autoplay = true }: Props): JSX.Element => {
  const [position, setPosition] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [thumbnails, setThumbnails] = useState<any>([]);
  const [thumbnailsPosition, setThumbnailsPosition] = useState<number>(0);
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [activeTemp, setActiveTemp] = useState<number>(null);
  const [thumbnailsNumber, setThumbnailsNumber] = useState<number>(6);

  const items = sortBy(listItems, 'type', 'desc');

  const Swipehandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex <= items.length - 1) next();
    },
    onSwipedRight: () => {
      if (currentIndex > 0) prev();
    },
  });

  const SwipehandlersThumbnails = useSwipeable({
    onSwipedLeft: () => {
      if (thumbnails.length > 1 && thumbnailsPosition !== thumbnails.length - 1)
        handleThumbSlideRight();
    },
    onSwipedRight: () => {
      if (thumbnails.length > 1 && thumbnailsPosition > 0) handleThumbSlideLeft();
    },
  });

  useEffect(() => {
    videoStopper();
  }, [currentIndex]);

  useEffect(() => {
    const size = isMobile ? 4 : 6;
    const thumbnailsImages = splitArrayIntoChunks(items, size);
    if (items.length > 1) {
      setThumbnails(thumbnailsImages);
    }
    setThumbnailsNumber(size);
  }, []);

  const setCorrectThumbnailList = thisIndex => {
    thumbnails.forEach((arrayItem, indx) => {
      const newThumbnailsList = [];
      if (indx > 0) {
        newThumbnailsList.push(...arrayItem.slice(1, -1));
      } else {
        newThumbnailsList.push(...arrayItem.slice(-1));
      }
      const index = newThumbnailsList.findIndex(
        newThumbnailsList => newThumbnailsList.url === items[thisIndex].url
      );
      if (index >= 0 && indx !== thumbnailsPosition) {
        setThumbnailsPosition(indx);
      }
    });
  };

  const next = () => {
    setCorrectThumbnailList(position + 1);
    setPosition(position + 1);
    setCurrentIndex(position + 1);
  };
  const prev = () => {
    setCorrectThumbnailList(position - 1);
    setPosition(position - 1);
    setCurrentIndex(position - 1);
  };

  const handleThumbSlideLeft = () => {
    const index = items.findIndex(
      item => item.url === thumbnails[thumbnailsPosition - 1][thumbnailsNumber - 2].url
    );
    setThumbnailsPosition(thumbnailsPosition - 1);
    setPosition(index);
    setCurrentIndex(index);
  };

  const handleThumbSlideRight = () => {
    const index = items.findIndex(item => item.url === thumbnails[thumbnailsPosition + 1][1].url);
    setThumbnailsPosition(thumbnailsPosition + 1);
    setPosition(index);
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="carouselLightbox">
        <div {...Swipehandlers} className="carouselLightbox__image-gallery-slides">
          {items.map((item, index) => {
            if (item.type === 'video') {
              return (
                <div
                  className="carouselLightbox__image-gallery-slides-video"
                  id={`${index}`}
                  key={index}
                  style={{
                    zIndex: position === index ? 1 : -1,
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${item?.url}?autoplay=${autoplay && currentIndex === index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item?.altTag}
                  />
                </div>
              );
            }
          })}
          {items[position]?.type !== 'video' && (
            <img
              src={items[position]?.url}
              alt={items[position]?.altTag}
              onClick={() => setIsOpenLightbox(true)}
              role="presentation"
            />
          )}
          <Button
            extraClass="gallery-left-nav"
            icon={<Icon name="ChevronLeft" />}
            type="icon"
            theme="light"
            onClick={prev}
            disabled={position === 0}
          />
          <Button
            extraClass="gallery-right-nav"
            icon={<Icon name="ChevronRight" />}
            type="icon"
            theme="light"
            onClick={next}
            disabled={items.length - 1 <= position}
          />
        </div>
        {thumbnails.length >= 1 && (
          <div
            {...SwipehandlersThumbnails}
            className="carouselLightbox__thumbnails-container"
            onMouseLeave={() => setPosition(currentIndex)}
          >
            <div
              className={classnames('next-left', {
                'display-slide-left': thumbnails.length > 1 && thumbnailsPosition > 0,
              })}
              onMouseEnter={() => setPosition(currentIndex)}
            >
              <Button
                extraClass="thumbnail-next-left"
                icon={<Icon name="ChevronLeft" />}
                type="icon"
                theme="light"
                onClick={handleThumbSlideLeft}
              />
            </div>
            <div
              className={classnames('next-right', {
                'display-slide-right':
                  thumbnails.length > 1 && thumbnailsPosition !== thumbnails.length - 1,
              })}
              onMouseEnter={() => setPosition(currentIndex)}
            >
              <Button
                extraClass="thumbnail-next-right"
                icon={<Icon name="ChevronRight" />}
                type="icon"
                theme="light"
                onClick={handleThumbSlideRight}
              />
            </div>
            {thumbnails.length > 0 &&
              thumbnails[thumbnailsPosition].map((img, thumbIndx) => {
                const index = items.findIndex(item => item.url === img.url);
                const isActive = img?.url === items[currentIndex]?.url;
                return (
                  <img
                    key={thumbIndx}
                    className={classnames(
                      {
                        active: isActive,
                      },
                      {
                        hover: isActive && thumbIndx === activeTemp,
                      }
                    )}
                    src={img?.thumbnail || img?.url}
                    alt={img?.altTag}
                    onMouseEnter={() => {
                      setActiveTemp(thumbIndx);
                      setPosition(index);
                    }}
                    onMouseLeave={() => setActiveTemp(null)}
                    onClick={() => setCurrentIndex(index)}
                    role="presentation"
                  />
                );
              })}
          </div>
        )}
      </div>
      {isOpenLightbox && (
        <div className="carouselLightbox__lightbox-container">
          <ReactImageVideoLightbox
            data={items}
            startIndex={currentIndex}
            showResourceCount={false}
            onCloseCallback={() => setIsOpenLightbox(false)}
          />
        </div>
      )}
    </>
  );
};

export default CarouselLightbox;
