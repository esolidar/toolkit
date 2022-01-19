/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import DatePick, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import br from 'date-fns/locale/pt-BR';
import InputLabel from '../inputLabel';
import Icon from '../icon';
import Button from '../button';
import monthsConst from '../../constants/months';

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
  disabled,
  inputLabelSize,
  highlightDates = [],
}) => {
  const intl = useIntl();
  const [showMonths, setShowMonths] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const months = monthsConst.flatMap(month => intl.formatMessage({ id: month.long }));

  const highlightWithRanges = [];
  highlightDates.map((item, index) => {
    highlightWithRanges.push({
      [`react-datepicker__highlighted highlighted-${index}`]: item.date,
      name: item.name,
    });
  });

  const addHighlightedTooltip = () => {
    highlightWithRanges.map((date, index) => {
      const elem = document.getElementsByClassName(`highlighted-${index}`)[0];
      if (elem) elem.setAttribute('title', date.name);
    });
  };

  const years = currentYear => {
    let firstYear = +`${JSON.stringify(currentYear).substring(0, 3)}0` - 1;
    const lastYear = +`${JSON.stringify(currentYear).substring(0, 3)}9` + 1;
    const years = [firstYear];

    while (firstYear < lastYear) {
      years.push((firstYear += 1));
    }
    return years;
  };

  const handleChangeYears = year => {
    years(year);
  };

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    return (
      <div className="react-datepicker__custom-header">
        <button
          className="react-datepicker__custom-header-month"
          onClick={() => setShowMonths(true)}
        >{`${months[date.getMonth()]} ${date.getFullYear()}`}</button>

        <div className="react-datepicker__custom-header-buttons">
          <Button
            extraClass="ghost"
            icon={<Icon name="ChevronLeft" />}
            onClick={decreaseMonth}
            size="md"
            type="icon"
            disabled={prevMonthButtonDisabled}
          />
          <Button
            extraClass="ghost"
            icon={<Icon name="ChevronRight" />}
            onClick={increaseMonth}
            size="md"
            type="icon"
            disabled={nextMonthButtonDisabled}
          />
          {/* <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className={classnames('react-datepicker__custom-header-buttons-arrow', {
              disabled: prevMonthButtonDisabled,
            })}
          >
            <Icon name="ChevronLeft" />
          </button> */}
          {/* <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className={classnames('react-datepicker__custom-header-buttons-arrow', {
              disabled: nextMonthButtonDisabled,
            })}
          >
            <Icon name="ChevronRight" />
          </button> */}
        </div>

        {showMonths && (
          <div className="react-datepicker__container-months">
            <div className="react-datepicker__container-months-view-header">
              <button
                className="react-datepicker__custom-header-month"
                onClick={() => setShowYears(true)}
              >
                {date.getFullYear()}
              </button>
              <div className="react-datepicker__custom-header-buttons">
                <Button
                  extraClass="ghost"
                  icon={<Icon name="ChevronLeft" />}
                  onClick={() => {
                    changeYear(date.getFullYear() - 1);
                  }}
                  size="md"
                  type="icon"
                />
                <Button
                  extraClass="ghost"
                  icon={<Icon name="ChevronRight" />}
                  onClick={() => {
                    changeYear(date.getFullYear() + 1);
                  }}
                  size="md"
                  type="icon"
                />
                {/* <button
                  onClick={() => {
                    changeYear(date.getFullYear() - 1);
                  }}
                  className="react-datepicker__custom-header-buttons-arrow"
                >
                  <Icon name="ChevronLeft" />
                </button> */}
                {/* <button
                  onClick={() => {
                    changeYear(date.getFullYear() + 1);
                  }}
                  className="react-datepicker__custom-header-buttons-arrow"
                >
                  <Icon name="ChevronRight" />
                </button> */}
              </div>
            </div>
            <div className="react-datepicker__container-months-list">
              {months.map((option, index) => (
                <button
                  onClick={() => {
                    changeMonth(months.indexOf(option));
                    setShowMonths(false);
                  }}
                  key={option}
                  className={classnames('react-datepicker__container-months-list-option', {
                    active: date.getMonth() === index,
                  })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {showYears && (
          <div className="react-datepicker__container-months">
            <div className="react-datepicker__container-months-view-header">
              <div className="react-datepicker__custom-header-month">
                {`${years(date.getFullYear())[0]}-${years(date.getFullYear())[11]}`}
              </div>
              <div className="react-datepicker__custom-header-buttons">
                <Button
                  extraClass="ghost"
                  icon={<Icon name="ChevronLeft" />}
                  onClick={() => {
                    changeYear(date.getFullYear() - 10);
                    handleChangeYears(years(date.getFullYear())[0] - 10);
                  }}
                  size="md"
                  type="icon"
                />
                <Button
                  extraClass="ghost"
                  icon={<Icon name="ChevronRight" />}
                  onClick={() => {
                    changeYear(date.getFullYear() + 10);
                    handleChangeYears(years(date.getFullYear())[9] + 10, changeMonth);
                  }}
                  size="md"
                  type="icon"
                />
                {/* <button
                  onClick={() => {
                    changeYear(date.getFullYear() - 10);
                    handleChangeYears(years(date.getFullYear())[0] - 10);
                  }}
                  className="react-datepicker__custom-header-buttons-arrow"
                >
                  <Icon name="ChevronLeft" />
                </button> */}
                {/* <button
                  onClick={() => {
                    changeYear(date.getFullYear() + 10);
                    handleChangeYears(years(date.getFullYear())[9] + 10, changeMonth);
                  }}
                  className="react-datepicker__custom-header-buttons-arrow"
                >
                  <Icon name="ChevronRight" />
                </button> */}
              </div>
            </div>
            <div className="react-datepicker__container-months-list">
              {years(date.getFullYear()).map(option => (
                <button
                  onClick={() => {
                    changeYear(option);
                    setShowYears(false);
                  }}
                  key={option}
                  className={classnames('react-datepicker__container-months-list-option', {
                    active: date.getFullYear() === option,
                  })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
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
          size={inputLabelSize}
        />
      )}
      <div
        className={classnames(
          `size-${size}`,
          'input',
          { 'with-icon': leftIcon?.show },
          { 'with-time': showTimeSelect }
        )}
      >
        {leftIcon?.show && (
          <Icon
            className="left-icon"
            name={leftIcon?.name}
            onClick={leftIcon?.onClick}
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
          disabled={disabled}
          highlightDates={highlightWithRanges}
          onCalendarOpen={addHighlightedTooltip}
          renderCustomHeader={renderCustomHeader}
          fixedHeight
          onCalendarClose={() => {
            setShowMonths(false);
            setShowYears(false);
          }}
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
      {!!errors && <div className="help-block">{errors}</div>}
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
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
  inputLabelSize: PropTypes.string,
  highlightDates: PropTypes.array,
};

DatePicker.defaultProps = {
  selectsStart: true,
  showTimeSelect: true,
  placeholderText: 'DD-MM-YYYY',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa',
  size: 'xs',
  inputLabelSize: 'lg',
};

export default DatePicker;
