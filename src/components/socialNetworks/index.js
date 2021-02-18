import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const SocialNetworks = ({ icons, headingText }) => {
  const listIcons = icons.map((icon, index) => (
    <a key={index} href={icon.url} target="blank">
      <Icon iconClass={icon.class} />
    </a>
  ));

  return (
    <div className="socialNetworks">
      {headingText ? <h5>{headingText}</h5> : ''}
      <div className="list-icon">{listIcons}</div>
    </div>
  );
};

SocialNetworks.propTypes = {
  icons: PropTypes.array.isRequired,
  headingText: PropTypes.string,
};

export default SocialNetworks;
