/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Carousel, { Modal, ModalGateway } from 'react-images';

const SliderNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="next-arrow"
      onClick={onClick}
    />
  );
};

const SliderPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="prev-arrow"
      onClick={onClick}
    />
  );
};

class SliderImagesLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      images: [],
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { images, video, env } = this.props;
    let imagesData = [];
    if (video) {
      const video = [{
        id: 0,
        image: `${env.cdn_static_url}/frontend/assets/video.png`,
        video: this.props.video,
        thumbs: {
          standard: `${env.cdn_static_url}/frontend/assets/video.png`,
          detail: `${env.cdn_static_url}/frontend/assets/video.png`,
          pin: `${env.cdn_static_url}/frontend/assets/video.png`,
          thumb: `${env.cdn_static_url}/frontend/assets/video.png`,
        },
      }];
      imagesData = video.concat(images);

      this.updateState({
        images: imagesData,
      });
    } else {
      this.updateState({
        images,
      });
    }
  }

  toggleModal = () => {
    this.setState((state) => ({ lightboxIsOpen: !state.lightboxIsOpen }));
  };

  openLightbox() {
    this.setState({
      lightboxIsOpen: true,
    });
  }

  updateState(state) {
    this.setState(state);
  }

  renderImages = () => {
    const { images } = this.state;
    const { env } = this.props;

    return images.map((image, indx) => {
      if (image.video) {
        const vimeo = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
        const youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;

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
          onClick={() => this.openLightbox(indx)}
          key={image.id}
          className="open-lightbox"
        >
          <div
            className="slider-image"
            style={{ backgroundImage: `url('${image.thumbs ? image.thumbs.detail : `${env.serverlessResizeImage}/${image.image}?width=550&height=470`}')` }}
          />
        </button>
      );
    });
  }

  render() {
    const { images, lightboxIsOpen } = this.state;
    const { env } = this.props;
    const imagesOnly = this.props.images;
    const settings = {
      customPaging(i) {
        return <a><img alt="thumb" src={`${images[i].thumbs ? images[i].thumbs.thumb : `${env.serverlessResizeImage}/${images[i].image}?width=50&height=50`}`} /></a>;
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
        src: imagesOnly[i].thumbs ? imagesOnly[i].thumbs.standard : `${env.serverlessResizeImage}/${imagesOnly[i].image}`,
      });
    }

    return (
      <div>
        <Slider {...settings}>
          {this.renderImages()}
        </Slider>
        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={arrayImages} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default SliderImagesLightbox;

SliderImagesLightbox.propTypes = {
  intl: PropTypes.object,
  request: PropTypes.object,
  onClick: PropTypes.func,
  images: PropTypes.array,
  video: PropTypes.string,
  env: PropTypes.object,
};

SliderNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SliderPrevArrow.propTypes = {
  onClick: PropTypes.func,
};
