import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const BoxInfo = ({ text, button }) => (
  <div className="box">
    <Row>
      <Col sm={12}>
        {button && (
          <Button
            extraClass={button.style ? button.style : 'success'}
            onClick={button.onClick}
            href={button.href}
            text={button.text}
            to={button.to}
          />
        )}
        <p>
          {text}
        </p>
      </Col>
    </Row>
  </div>
);

BoxInfo.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    style: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
  }),
};

export default BoxInfo;
