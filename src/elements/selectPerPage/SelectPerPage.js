import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const SelectPerPage = ({ onChange, options, value }) => (
  useMemo(() => (
    <div className="select-per-page">
      <FormattedMessage
        id="items.per-page"
        defaultMessage="Items per page:"
        data-testid="label"
      />
      <select
        name="per_page"
        className="form-control"
        onChange={onChange}
        value={value}
        data-testid="select"
      >
        {options.map((item) => (
          <option
            key={item}
            value={String(item)}
            data-testid="option"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  )));

export default SelectPerPage;

SelectPerPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  value: PropTypes.number.isRequired,
};

SelectPerPage.defaultProps = {
  options: [10, 25, 50, 100],
};
