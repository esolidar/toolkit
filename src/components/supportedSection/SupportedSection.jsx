import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const SupportedSection = ({ href, imgSrc, text }) => (
  <Col sm={12} className="supported-section mt-4" data-testid="supported-section">
    <div>
      <a className="link" href={href} target="_blank" rel="noreferrer">
        <img className="npo-thumb" src={imgSrc} alt="thumb" />
        {text}
      </a>
    </div>
  </Col>
);

SupportedSection.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.node,
};

export default SupportedSection;
