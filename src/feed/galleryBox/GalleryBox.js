import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PropTypes from 'prop-types';

class GalleryBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      selectedIndex: 0,
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox = (selectedIndex) => {
    this.setState((state) => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex,
    }));
  };

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.filter((i) => i.src).map((obj, i) => {
      if (images.length === 1) {
        return (
          <a
            className="single-image"
            href="#"
            key={i}
            onClick={() => this.openLightbox(0)}
          >
            <img src={obj.thumbnail} alt="" />
          </a>
        );
      } if (images.length === 2) {
        return (
          <a
            className="two-images"
            href="#"
            key={i}
            onClick={() => this.openLightbox(0)}
          >
            <div className={`thumb${i} image-thumb`} style={{ backgroundImage: `url(${obj.thumbnail})` }} />
          </a>
        );
      } if (images.length === 3) {
        return (
          <a
            className="three-images"
            href="#"
            key={i}
            onClick={() => this.openLightbox(0)}
          >
            <div className={`thumb${i} image-thumb`} style={{ backgroundImage: `url(${obj.thumbnail})` }} />
          </a>
        );
      } if (images.length > 3) {
        return (
          <a
            className={i < 3 ? 'more-images' : 'hidden'}
            href="#"
            key={i}
            onClick={() => this.openLightbox(0)}
          >
            <div className={`thumb${i} image-thumb`} style={{ backgroundImage: `url(${obj.thumbnail})` }}>
              {i === 2
                && (
                  <div className="readmore-mask">
                    +
                    {images.length - 3}
                  </div>
                )}
            </div>
          </a>
        );
      }
    });

    return (
      <div>
        {gallery}
      </div>
    );
  }

  render() {
    const { modalIsOpen, selectedIndex } = this.state;
    const { images } = this.props;

    const fullpathImages = images.map((image) => ({
      src: image.src,
    }));

    return (
      <div className="section">
        {this.renderGallery()}
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.openLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                views={fullpathImages}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default GalleryBox;

GalleryBox.propTypes = {
  images: PropTypes.array,
};
