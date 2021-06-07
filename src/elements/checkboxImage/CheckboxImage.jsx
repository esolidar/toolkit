import React from 'react';
import PropTypes from 'prop-types';

const CheckboxImage = ({ value, name, onChange, img, field, disabled, checked }) => (
  <div className="checkbox-image">
    <div className="form-group">
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={value}
          onChange={x => onChange(x)}
          disabled={disabled}
          checked={checked}
        />
        <div className="img">
          <img src={img} alt={field} />
        </div>
      </label>
    </div>
  </div>
);

CheckboxImage.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  img: PropTypes.string,
  field: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default CheckboxImage;
