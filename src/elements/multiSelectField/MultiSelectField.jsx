import React, { Component } from 'react';
import ReactSelect, { components } from 'react-select';
import PropTypes from 'prop-types';
import { injectIntl, useIntl } from 'react-intl';
import classNames from 'classnames';
import Badge from '../badge';
import InputLabel from '../inputLabel';

class MultiSelectField extends Component {
  state = {
    optionSelected: this.props.value,
  };

  handleChange = selected => {
    this.setState({
      optionSelected: selected,
    });

    return this.props.onChange(selected);
  };

  ValueContainer = ({ children, ...props }) => {
    const currentValues = props.getValue();
    let { length } = currentValues;
    const toBeRendered = [[], children[1]];

    if (currentValues.find(i => i.value === '*')) length = currentValues.length - 1;
    else length = currentValues.length;

    return (
      <components.ValueContainer {...props}>
        <div className="option-header">
          <span className="option-header__text">
            {this.props.valueText}
            {toBeRendered}
          </span>
          {length > 0 && (
            <div className="option-header__badge">
              <Badge extraClass="success" size="xs" plaintext={JSON.stringify(length)} />
            </div>
          )}
        </div>
      </components.ValueContainer>
    );
  };

  Menu = props => {
    if (this.props.labelHeader)
      return (
        <components.Menu {...props}>
          <div className="label-header-options">{this.props.labelHeader}</div>
          {props.children}
        </components.Menu>
      );

    return <components.Menu {...props} />;
  };

  Option = props => {
    return (
      <div>
        <components.Option {...props}>
          <div className="checkbox-inline">
            <div className="form-group">
              <label htmlFor={props.label}>
                <input type="checkbox" onChange={() => null} checked={props.isSelected} />
                <div className={`checkbox ${this.props.size}`} />
                {props.label}
              </label>
            </div>
          </div>
        </components.Option>
      </div>
    );
  };

  render() {
    const {
      intl,
      error,
      name,
      helperText,
      inputLabelProps,
      options = [],
      isClearable = false,
      size = 'sm',
      showDropdownArrow = true,
      showSelectAll,
      valueText,
      isSearchable = false,
      fullWidth = false,
    } = this.props;

    const helper = typeof error === 'string' ? error : helperText;
    const helperTextClasses = classNames('esolidar-select__helper-text', {
      'esolidar-select__helper-text--error': !!error,
    });

    const classes = classNames(
      'esolidar-select',
      { 'esolidar-select-error': !!error },
      `size-${size}`,
      { 'full-width': fullWidth }
    );

    return (
      <div className="multi-select-component form-group">
        {inputLabelProps && <InputLabel {...inputLabelProps} />}
        <span
          className="d-inline-block"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please selecet account(s)"
        >
          <Select
            placeholder={valueText}
            className={classes}
            classNamePrefix="esolidar-select"
            options={options}
            isMulti={true}
            name={name}
            isSearchable={isSearchable}
            noOptionsMessage={() => intl.formatMessage({ id: 'toolkit.select.noOptions' })}
            isClearable={isClearable}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: showDropdownArrow ? components.DropdownIndicator : () => null,
              Option: this.Option,
              Menu: this.Menu,
              ValueContainer: this.ValueContainer,
            }}
            value={this.state.optionSelected}
            onChange={this.handleChange}
            allowSelectAll={showSelectAll}
          />
        </span>
        {!!helper && <div className={helperTextClasses}>{helper}</div>}
      </div>
    );
  }
}

export default injectIntl(MultiSelectField);

MultiSelectField.propTypes = {
  intl: PropTypes.object,
  error: PropTypes.object,
  name: PropTypes.string,
  helperText: PropTypes.string,
  inputLabelProps: PropTypes.object,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  size: PropTypes.string,
  showDropdownArrow: PropTypes.bool,
  showSelectAll: PropTypes.bool,
  valueText: PropTypes.string,
  isSearchable: PropTypes.bool,
  fullWidth: PropTypes.bool,
  labelHeader: PropTypes.object,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

MultiSelectField.defaultProps = {
  size: 'md',
};

const Select = props => {
  const intl = useIntl();
  const allOption = {
    label: intl.formatMessage({ id: 'select-all' }),
    value: '*',
  };

  const handleChange = (selected, event) => {
    if (selected !== null && selected.length > 0) {
      if (selected[selected.length - 1].value === allOption.value) {
        return props.onChange([allOption, ...props.options]);
      }
      let result = [];
      if (selected.length === props.options.length) {
        if (selected.find(i => i.value === '*')) {
          result = selected.filter(option => option.value !== allOption.value);
        } else if (event.action === 'select-option') {
          result = [allOption, ...props.options];
        }
        return props.onChange(result);
      }
    }

    return props.onChange(selected);
  };

  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[allOption, ...props.options]}
        onChange={(selected, event) => handleChange(selected, event)}
      />
    );
  }

  return <ReactSelect {...props} />;
};

Select.propTypes = {
  allowSelectAll: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
