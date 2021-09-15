import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Carousel, { Modal, ModalGateway } from 'react-images';

const SliderNextArrow = ({ onClick }) => {
  return <button type="button" className="next-arrow" onClick={onClick} />;
};

const SliderPrevArrow = onClick => {
  return <button type="button" className="prev-arrow" onClick={onClick} />;
};

const SliderImagesLightbox = ({ imagesProps, videoProps, env }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
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
      imagesData = video.concat(images);

      setImages(imagesData);
    } else {
      setImages(imagesProps);
    }
  }, []);

  const toggleModal = () => {
    setLightboxIsOpen(!lightboxIsOpen);
  };

  const openLightbox = () => {
    setLightboxIsOpen(true);
  };

  const renderImages = () => {
    return images.map((image, indx) => {
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
              src={`https://player.vimeo.com/video/${videoUrl}?color=ffffff&title=0&byline=0&portrait=0&badge=0`}
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
              src={`https://www.youtube.com/embed/${videoUrl[0]}`}
            />
          );
        }

        return (
          <iframe
            title="video"
            className="slick-slide"
            key={image.id}
            src={`https://www.youtube.com/embed/${image.video}`}
          />
        );
      }
      return (
        <button
          type="button"
          onClick={() => openLightbox(indx)}
          key={image.id}
          className="open-lightbox"
        >
          <img
            src={`${
              image.thumbs
                ? image.thumbs.detail
                : `${env.serverlessResizeImage}/${image.image}?width=550&height=470`
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
    customPaging(i) {
      return (
        <a>
          <img
            alt="thumb"
            src={`${
              images[i].thumbs
                ? images[i].thumbs.thumb
                : `${env.serverlessResizeImage}/${images[i].image}?width=50&height=50`
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

SliderImagesLightbox.propTypes = {
  request: PropTypes.object,
  onClick: PropTypes.func,
  imagesProps: PropTypes.array,
  videoProps: PropTypes.string,
  env: PropTypes.object,
};

SliderNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SliderPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default SliderImagesLightbox;
