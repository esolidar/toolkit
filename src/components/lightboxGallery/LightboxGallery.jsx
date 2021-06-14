import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';

class LightboxGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      selectedIndex: 0,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = selectedIndex => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex,
    }));
  };

  render() {
    const { modalIsOpen, selectedIndex } = this.state;
    const { images, serverlessResizeImage, thumbs } = this.props;

    if (images.length === 0) {
      return <div className="no-image" />;
    }

    const fullpathImages = images.map(image => ({
      src: serverlessResizeImage ? `${serverlessResizeImage}/${image.image}` : image.image,
    }));

    return (
      <div className="image-lightbox">
        {!thumbs && (
          <button type="button" onClick={() => this.toggleModal(0)} className="image-button">
            {serverlessResizeImage && (
              <img
                src={`${serverlessResizeImage}/${images[0].image}?width=300`}
                alt="thumbnail"
                style={{ width: '100%' }}
              />
            )}
            {!serverlessResizeImage && (
              <img src={images[0].image} alt="thumbnail" style={{ width: '100%' }} />
            )}
          </button>
        )}
        {thumbs && (
          <div>
            {images.map((image, i) => (
              <button type="button" onClick={() => this.toggleModal(i)} className="all-thumbs">
                {serverlessResizeImage && (
                  <img src={`${serverlessResizeImage}/${image.image}?width=300`} alt="thumbnail" />
                )}
                {!serverlessResizeImage && <img src={image.image} alt="thumbnail" />}
              </button>
            ))}
          </div>
        )}
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel currentIndex={selectedIndex} views={fullpathImages} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default LightboxGallery;

LightboxGallery.propTypes = {
  images: PropTypes.array.isRequired,
  serverlessResizeImage: PropTypes.string,
  thumbs: PropTypes.bool,
};

LightboxGallery.defaultProps = {
  thumbs: false,
};
