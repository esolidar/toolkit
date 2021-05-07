/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

const SliderImagesLanding = ({ autoPlay, className, imgList, imgWidth, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className={`slider-images-landing ${className}`}>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <Row className="slider">
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }}>
            <Slider {...settings}>
              {imgList.map(img => (
                <div key={img.id}>
                  <a href={img.url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="image"
                      src={img.src}
                      alt={img.alt}
                      style={{ width: imgWidth }}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SliderImagesLanding.propTypes = {
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  imgList: PropTypes.array.isRequired,
  imgWidth: PropTypes.string,
  title: PropTypes.string,
};

SliderImagesLanding.defaultProps = {
  autoPlay: false,
  className: '',
  imgWidth: '100px',
  title: '',
};

export default SliderImagesLanding;
