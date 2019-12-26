import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import translateMessage from '../../utils/translateMessage/translateMessage';
import './SocialNetworks.scss';

const SocialNetworks = ({
  icons, headingText, style,
}) => {
  const heading = headingText && (translateMessage({
    id: headingText.idTranslate,
    defaultMessage: headingText.default,
  }));


  const listIcons = icons.map((icon, index) => (
    <a
      key={index}
      className="border-icon"
      href={icon.url}
      target="blank"
      style={{ ...style }}
    >
      <span className="anime" />
      <Icon iconClass={icon.class} style={{ ...style }} />
    </a>
  ));

  return (
    <div className="socialNetworks" style={{ ...style }}>
      {heading ? <h5>{heading}</h5> : ''}
      {listIcons}
    </div>
  );
};

SocialNetworks.propTypes = {
  icons: PropTypes.array.isRequired,
  headingText: PropTypes.object,
  /** This prop is applied to the parent div, the link and icon. */
  style: PropTypes.object,
};

export default SocialNetworks;
