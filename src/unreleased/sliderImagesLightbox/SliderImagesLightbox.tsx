/* eslint-disable camelcase */
import React, { FC, useState, useEffect, MouseEvent } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Props, Images } from './sliderImagesLightbox.types';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';
const VIMEO_URL = 'https://player.vimeo.com/';

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
  const [photoIndex, setPhotoIndex] = useState(0);
  const { serverlessResizeImage } = env;

  const imagesSlide = [];
  imagesArray.map(image => {
    if (!image.video)
      imagesSlide.push(
        image.thumbs ? image.thumbs.detail : `${serverlessResizeImage}/${image.image}`
      );
  });

  const videos = imagesArray.filter(image => image.video);

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
      imagesData = [...video, ...imagesProps];

      setImagesArray(imagesData);
    } else {
      setImagesArray(imagesProps);
    }
  }, []);

  const renderImages = () => {
    if (imagesArray.length) {
      return imagesArray.map((image, idx) => {
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
                data-testid="iframe-vimeo"
                title="video"
                className="slick-slide"
                key={image.id}
                src={`${VIMEO_URL}${videoUrl}?title=0&byline=0&portrait=0&transparent=0&autoplay=0`}
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
                data-testid="iframe-youtube"
                className="slick-slide"
                title="video"
                frameBorder="0"
                key={image.id}
                src={`${YOUTUBE_URL}${videoUrl[0]}?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1`}
              />
            );
          }

          return (
            <iframe
              data-testid="iframe-youtube"
              title="video"
              className="slick-slide"
              frameBorder="0"
              key={image.id}
              src={`${YOUTUBE_URL}${image.video}?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1`}
            />
          );
        }
        return (
          <button
            type="button"
            onClick={() => {
              setLightboxIsOpen(true);
              setPhotoIndex(idx - videos.length);
            }}
            key={image.id}
            className="open-lightbox"
          >
            <div
              style={{
                backgroundImage: `url("${`${env.serverlessResizeImage}/${image.image}`}")`,
                width: '100%',
                height: '100%',
              }}
            >
              <img
                data-testid="image"
                src={`${
                  image.thumbs ? image.thumbs.detail : `${serverlessResizeImage}/${image.image}`
                }`}
                style={{ width: '100%' }}
                alt={image.image}
              />
            </div>
          </button>
        );
      });
    }
    return (
      <img
        data-testid="no-image"
        src={`${env.cdn_static_url}/frontend/assets/no-image.jpg`}
        style={{ width: '100%' }}
        alt="no-pic"
      />
    );
  };

  const imagesOnly = imagesProps;
  const settings = {
    customPaging(i: number) {
      return (
        <a>
          <img
            data-testid="thumb"
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
      {lightboxIsOpen ? (
        <Lightbox
          mainSrc={imagesSlide[photoIndex]}
          nextSrc={imagesSlide[(photoIndex + 1) % imagesSlide.length]}
          prevSrc={imagesSlide[(photoIndex + imagesSlide.length - 1) % imagesSlide.length]}
          onCloseRequest={() => setLightboxIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imagesSlide.length - 1) % imagesSlide.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagesSlide.length)}
          enableZoom={false}
        />
      ) : null}
    </div>
  );
};

export default SliderImagesLightbox;
