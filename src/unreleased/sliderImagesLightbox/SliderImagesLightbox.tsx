/* eslint-disable camelcase */
import React, { FC, useState, useEffect, MouseEvent } from 'react';
import Slider from 'react-slick';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Props, Images } from './sliderImagesLightbox.types';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';
const VIMEO_URL = 'https://player.vimeo.com/video/';

interface SliderNextArrowInterface {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface SliderPrevArrowInterface {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SliderNextArrow: FC<SliderNextArrowInterface> = ({
  onClick,
}: SliderNextArrowInterface): JSX.Element => {
  return <button type="button" className="next-arrow" onClick={onClick} />;
};

const SliderPrevArrow: FC<SliderPrevArrowInterface> = ({
  onClick,
}: SliderPrevArrowInterface): JSX.Element => {
  return <button type="button" className="prev-arrow" onClick={onClick} />;
};

const SliderImagesLightbox: FC<Props> = ({ imagesProps, videoProps, env }: Props): JSX.Element => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [imagesArray, setImagesArray] = useState<Images>([]);
  const { serverlessResizeImage } = env;

  console.log('imagesProps --->', imagesProps);

  useEffect(() => {
    console.log('entrei');
    let imagesData = [];
    if (videoProps) {
      const video = [
        {
          id: 0,
          image: `${env.cdn_static_url}/frontend/assets/video.png`,
          video: videoProps,
          thumbs: {
            standard: `${env.cdn_static_url}/frontend/assets/video.png`,
            detail: `${env.cdn_static_url}/frontend/assets/video.png`,
            pin: `${env.cdn_static_url}/frontend/assets/video.png`,
            thumb: `${env.cdn_static_url}/frontend/assets/video.png`,
          },
        },
      ];
      imagesData = [...video, ...imagesProps];

      setImagesArray(imagesData);
      console.log('imagesData --->', imagesData);
    } else {
      setImagesArray(imagesProps);
      console.log('imagesProps --->', imagesProps);
    }
  }, []);

  const toggleModal = () => {
    setLightboxIsOpen(!lightboxIsOpen);
  };

  const openLightbox = () => {
    setLightboxIsOpen(true);
  };

  const renderImages = () => {
    return imagesArray.map(image => {
      if (image.video) {
        const vimeo = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
        const youtube =
          /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;

        if (vimeo.test(image.video)) {
          const url = image.video;
          const result = url.split('com/');
          const videoUrl = result[1].split('&');

          return (
            <iframe
              title="video"
              className="slick-slide"
              key={image.id}
              src={`${VIMEO_URL}${videoUrl}?color=ffffff&title=0&byline=0&portrait=0&badge=0`}
              frameBorder="0"
            />
          );
        }
        if (youtube.test(image.video)) {
          let videoUrl;
          const result = image.video.split('v=');

          if (result.length > 1) {
            videoUrl = result.reverse();
          } else {
            videoUrl = image.video.split('/').reverse();
          }

          return (
            <iframe
              className="slick-slide"
              title="video"
              key={image.id}
              src={`${YOUTUBE_URL}${videoUrl[0]}`}
            />
          );
        }

        return (
          <iframe
            title="video"
            className="slick-slide"
            key={image.id}
            src={`${YOUTUBE_URL}${image.video}`}
          />
        );
      }
      return (
        <button
          type="button"
          onClick={() => openLightbox()}
          key={image.id}
          className="open-lightbox"
        >
          <img
            src={`${
              image.thumbs
                ? image.thumbs.detail
                : `${serverlessResizeImage}/${image.image}?width=550&height=470`
            }`}
            style={{ width: '100%' }}
            alt={image.image}
          />
        </button>
      );
    });
  };

  const imagesOnly = imagesProps;
  const settings = {
    customPaging(i: number) {
      return (
        <a>
          <img
            alt="thumb"
            src={`${
              imagesArray[i].thumbs
                ? imagesArray[i].thumbs.thumb
                : `${serverlessResizeImage}/${imagesArray[i].image}?width=44&height=44`
            }`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
  };

  const arrayImages = [];
  const len = imagesOnly.length;

  for (let i = 0; i < len; i += 1) {
    arrayImages.push({
      src: imagesOnly[i].thumbs
        ? imagesOnly[i].thumbs.standard
        : `${env.serverlessResizeImage}/${imagesOnly[i].image}`,
    });
  }

  return (
    <div>
      <Slider {...settings}>{renderImages()}</Slider>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel views={arrayImages} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default SliderImagesLightbox;
