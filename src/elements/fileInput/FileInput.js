import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({
  name,
  accept,
  className,
  disabled,
  placeholder,
  value,
  handleChange,
  styleLogo,
}) => (
  <div className="company-thumb-logo">
    <div style={styleLogo} className="logo" />
    <div className="input-company-logo">
      <img
        alt="Add"
        src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/camera.svg"
      />
      <div style={{ position: 'relative' }}>
        <input
          type="file"
          name={name}
          className={className}
          onChange={handleChange}
          styleLogo={styleLogo}
          disabled={disabled}
          accept={accept}
          style={{
            position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', zIndex: 1,
          }}
        />

        <input
          type="text"
          tabIndex="-1"
          name={'this.props.name + \'_filename\''}
          value={value}
          className={className}
          onChange={() => { }}
          placeholder={placeholder}
          disabled={disabled}
          style={{ position: 'relative', zIndex: -1 }}
        />
      </div>
    </div>
  </div>
);

FileInput.propTypes = {
  placeholder: PropTypes.string,
  accept: PropTypes.string,
  disabled: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FileInput;
