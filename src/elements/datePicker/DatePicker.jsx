/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DatePick, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import br from 'date-fns/locale/pt-BR';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';

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
  minDate,
  maxDate,
  size,
  showOptionalLabel,
  help,
  id,
  field,
  leftIcon,
  rightIcon,
}) => (
  <div
    className={classnames('datepicker-component', 'form-group', {
      'has-error': !!errors,
    })}
  >
    {label && (
      <InputLabel
        field={id || field}
        label={label}
        showOptionalLabel={showOptionalLabel}
        help={help}
      />
    )}
    <div
      className={classnames(
        { 'width-xs': size === 'xs' },
        { 'width-sm': size === 'sm' },
        { 'width-md': size === 'md' },
        { 'width-lg': size === 'lg' },
        'input',
        { 'with-icon': leftIcon?.show },
        { 'with-time': showTimeSelect }
      )}
    >
      {leftIcon?.show && (
        <Icon
          iconClass={`icon left ${leftIcon?.name}`}
          onClick={leftIcon?.onClick}
          style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
          dataTestId="input-left-icon"
        />
      )}
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
        minDate={minDate}
        maxDate={maxDate}
      />
      {rightIcon?.show && (
        <Icon
          iconClass={`icon right ${rightIcon?.name}`}
          onClick={rightIcon?.onClick}
          style={{ cursor: rightIcon?.onClick ? 'pointer' : 'default' }}
          dataTestId="input-right-icon"
        />
      )}
    </div>
    {!!errors && <span className="help-block">{errors}</span>}
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
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  size: PropTypes.string,
  showOptionalLabel: PropTypes.bool,
  help: PropTypes.string,
  id: PropTypes.string,
  field: PropTypes.string,
  leftIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
  rightIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
};

DatePicker.defaultProps = {
  selectsStart: true,
  showTimeSelect: true,
  placeholderText: 'DD-MM-YYYY',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa',
  size: 'xs',
};

export default DatePicker;
