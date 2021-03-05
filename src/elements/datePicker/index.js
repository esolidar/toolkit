import React from 'react';
import PropTypes from 'prop-types';
import DatePick, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import br from 'date-fns/locale/pt-BR';

registerLocale('pt', pt);
registerLocale('en', en);
registerLocale('br', br);

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
  locale: PropTypes.oneOf(['pt', 'en', 'br']).isRequired,
  selected: PropTypes.instanceOf(Date),
  selectsStart: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  showTimeSelect: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  timeCaption: PropTypes.string,
  dateFormat: PropTypes.string,
};

DatePicker.defaultProps = {
  selectsStart: true,
  showTimeSelect: true,
  placeholderText: 'dd-mm-yyyy',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa',
};

export default DatePicker;
