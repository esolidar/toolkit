import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ name, accept, disabled, placeholder, onChange, styleLogo }) => {
  const [value, setValue] = useState('');

  const handleOnChange = e => {
    setValue(e.target.value.split(/(\\|\/)/g).pop());

    if (onChange) onChange(e);
  };

  return (
    <div className={name === 'logo_image' ? 'company-thumb-logo' : 'company-thumb-cover'}>
      <div style={styleLogo} className={name === 'logo_image' ? 'logo' : 'company-cover-image'} />
      <div className="input-company-logo">
        <img
          alt="Add"
          src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/camera.svg"
        />
        <div style={{ position: 'relative' }}>
          <input
            type="file"
            name={name}
            className="input-image"
            onChange={handleOnChange}
            disabled={disabled}
            accept={accept}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0,
              width: '100%',
              zIndex: 1,
            }}
          />

          <input
            type="text"
            tabIndex="-1"
            name={"this.props.name + '_filename'"}
            value={value}
            className="input-image"
            onChange={() => {}}
            placeholder={placeholder}
            disabled={disabled}
            style={{ position: 'relative', zIndex: -1 }}
          />
        </div>
      </div>
    </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.string,
  styleLogo: PropTypes.object,
  onChange: PropTypes.func,
};

export default FileInput;
