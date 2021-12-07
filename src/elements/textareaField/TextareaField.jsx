import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autosize from 'autosize';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';
import Button from '../button';
import isDefined from '../../utils/isDefined';

const TextareaField = ({
  field,
  id,
  value,
  defaultValue,
  label,
  error,
  onChange,
  placeholder,
  message,
  maxLength,
  disabled,
  help,
  required,
  resize,
  className,
  info,
  showOptionalLabel,
  cssClass,
  onPaste,
  dataTestId,
  autofocus,
  onKeyDown,
  onBlur,
  size,
  editButton = false,
  inputLabelProps = false,
}) => {
  if (resize) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const item = document.getElementById(id || field);

        if (!isDefined(item)) return;

        autosize(item);
        const evt = document.createEvent('Event');
        evt.initEvent('autosize:update', true, false);
        item.dispatchEvent(evt);
      }, 500);
    }
  }

  const [editMode, setEditMode] = useState(editButton);

  return (
    <div
      className={classnames(
        'text-area-field',
        'form-group',
        { 'has-error': error || message },
        { required },
        className
      )}
    >
      {label && (
        <InputLabel field={field} label={label} showOptionalLabel={showOptionalLabel} help={help} />
      )}
      {inputLabelProps && <InputLabel {...inputLabelProps} />}
      <div className={classnames(`size-${size}`, ' relative')}>
        {editMode && (
          <div className="edit-button-mode">
            <Button
              className=""
              extraClass="secondary"
              fullWidth={false}
              icon={<Icon iconClass="icon-edit-2" />}
              onClick={() => setEditMode(false)}
              size="md"
              type="icon"
            />
          </div>
        )}
        <textarea
          id={id || field}
          disabled={editMode || disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          name={field}
          maxLength={maxLength || ''}
          placeholder={placeholder}
          className={classnames(
            'form-control',
            { footer: maxLength },
            { 'required-field': error },
            { cssClass }
          )}
          onPaste={onPaste}
          onKeyDown={onKeyDown}
          data-testid={dataTestId}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autofocus}
        />
        {maxLength && !disabled && (
          <div className="footer-maxlength">
            {value?.length}/{maxLength}
          </div>
        )}
      </div>
      {info && <span className="footer-label-info">{info}</span>}
      {error && <span className="help-block">{error}</span>}
      {message && <span className="help-block">{message}</span>}
    </div>
  );
};

TextareaField.propTypes = {
  field: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  message: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  resize: PropTypes.bool,
  className: PropTypes.string,
  info: PropTypes.string,
  cssClass: PropTypes.string,
  showOptionalLabel: PropTypes.bool,
  onPaste: PropTypes.func,
  dataTestId: PropTypes.string,
  autofocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  editButton: PropTypes.bool,
  inputLabelProps: PropTypes.object,
};

TextareaField.defaultProps = {
  showOptionalLabel: false,
  cssClass: '',
  size: 'lg',
};

export default TextareaField;
