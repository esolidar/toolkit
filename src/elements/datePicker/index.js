import React from 'react';
import PropTypes from 'prop-types';
import DatePick from 'react-datepicker';

const DatePicker = ({
  locale,
  selected,
  selectsStart,
  startDate,
  endDate,
  showTimeSelect,
  onChange,
  className,
  placeholderText,
  timeCaption,
  dateFormat,
}) => {
  return (
    <DatePick
      locale={locale}
      selected={selected}
      selectsStart={selectsStart}
      startDate={startDate}
      endDate={endDate}
      showTimeSelect={showTimeSelect}
      onChange={onChange}
      className={className}
      placeholderText={placeholderText}
      timeCaption={timeCaption}
      dateFormat={dateFormat}
    />
  );
};

DatePicker.propTypes = {
  locale: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date),
  selectsStart: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  showTimeSelect: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  timeCaption: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
};

export default DatePicker;
