import React from 'react';
import PropTypes from 'prop-types';
import { cdnStaticUrl } from '../../constants/env';

const SocialNetworks = ({ icons, headingText }) => (
  <div className="socialNetworks">
    {headingText ? <h5 className="title">{headingText}</h5> : ''}
    <div className="list-icon">
      {icons.map((icon, index) => (
        <a key={index} href={icon.url} target="blank">
          <>
            <img src={`${cdnStaticUrl}/frontend/icons/new/${icon.name}.svg`} alt="teste" />
          </>
        </a>
      ))}
    </div>
  </div>
);

SocialNetworks.propTypes = {
  icons: PropTypes.array.isRequired,
  headingText: PropTypes.string,
};

export default SocialNetworks;
