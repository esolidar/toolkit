import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import translateMessage from '../../utils/translateMessage/translateMessage';
import './SocialNetworks.scss';

const SocialNetworks = ({
  icons, headingText,
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
    >
      <span className="anime" />
      <Icon iconClass={icon.class} />
    </a>
  ));

  return (
    <div className="socialNetworks">
      {heading ? <h5>{heading}</h5> : ''}
      {listIcons}
    </div>
  );
};

SocialNetworks.propTypes = {
  icons: PropTypes.array.isRequired,
  headingText: PropTypes.object,
};

export default SocialNetworks;
