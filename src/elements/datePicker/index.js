/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DatePick, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import br from 'date-fns/locale/pt-BR';

registerLocale('pt', pt);
registerLocale('en', en);
registerLocale('br', br);

const DatePicker = ({
  label,
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
  errors,
}) => (
  <div
    className={classnames('form-group', {
      'has-error': !!errors,
    })}
  >
    <label className="control-label">{label}</label>
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
    {!!errors && <span className="error-block">{errors}</span>}
  </div>
);

DatePicker.propTypes = {
  label: PropTypes.string,
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
  errors: PropTypes.string,
};

DatePicker.defaultProps = {
  selectsStart: true,
  showTimeSelect: true,
  placeholderText: 'dd-mm-yyyy',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa',
};

export default DatePicker;
