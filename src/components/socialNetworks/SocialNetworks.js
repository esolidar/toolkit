import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';

const SocialNetworks = ({
  icons, headingText,
}) => {
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
      {headingText ? <h5>{headingText}</h5> : ''}
      {listIcons}
    </div>
  );
};

SocialNetworks.propTypes = {
  icons: PropTypes.array.isRequired,
  headingText: PropTypes.string,
};

export default SocialNetworks;
