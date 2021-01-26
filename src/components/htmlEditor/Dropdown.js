/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  title, options, value, handleChange, testId,
}) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => setOpen(!open);
  const handleOnBlur = () => setOpen(false);

  return (
    <button type="button" onClick={handleOnClick} onBlur={handleOnBlur} className="rdw-block-wrapper" aria-label="rdw-block-control" data-testid={testId}>
      <div className="rdw-dropdown-wrapper rdw-block-dropdown rdw-custom-dropdown" aria-label="rdw-dropdown">
        <div className="rdw-dropdown-selectedtext" title={title}>
          <span>
            {`${title}: ${value}`}
          </span>
          <div className={`rdw-dropdown-caretto${open ? 'close' : 'open'}`} />
        </div>
        <ul className={`rdw-dropdown-optionwrapper rdw-custom-ul ${!open ? 'hidden' : ''}`}>
          {
            options.map((item) => <Option key={item} item={item} handleChange={handleChange} value={value} />)
          }
        </ul>
      </div>
    </button>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.number,
  handleChange: PropTypes.func,
  testId: PropTypes.string,
};

const Option = ({ item, handleChange, value }) => {
  const isActive = value === item;

  return (
    <li
      onClick={() => handleChange(item)}
      className={`rdw-dropdownoption-default ${isActive ? 'active' : ''}`}
    >
      {item}
    </li>
  );
};

Option.propTypes = {
  item: PropTypes.number,
  handleChange: PropTypes.func,
  value: PropTypes.number,
};

export default Dropdown;
