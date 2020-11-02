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
}) => (
  <div style={{ position: 'relative' }}>
    <input
      type="file"
      name={name}
      className={className}
      onChange={handleChange}
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
      onChange={() => {}}
      placeholder={placeholder}
      disabled={disabled}
      style={{ position: 'relative', zIndex: -1 }}
    />
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
