/* eslint-disable no-unused-expressions */
import React, { FC, useRef } from 'react';
import classnames from 'classnames';
import InputLabel from '../inputLabel';
import Tag from './Tag';
import Props from './InputTags.types';

const InputTags: FC<Props> = ({
  tags = [],
  name,
  id,
  value,
  className,
  dataTestId,
  placeholder,
  helperText,
  disabled,
  seprators = ['Enter', 'Comma', 'Tab'],
  maxTags = 8,
  minLength = 1,
  maxLength = 30,
  size = 'lg',
  inputLabelProps,
  onChange,
  onRemoved,
  onExisting,
  onBlur,
}: Props): JSX.Element => {
  const ref = useRef(null);

  const handleTagRemove = text => {
    if (onChange) onChange(tags.filter(tag => tag !== text));
    if (onRemoved) onRemoved(text);
    const textInput = ref.current;
    textInput.focus();
  };

  const handleBlur = e => {
    if (onBlur) onBlur(e);
    handleOnKeyUp(e);
  };

  const handleOnKeyUp = e => {
    e.stopPropagation();
    const text = e.target.value.trim();

    if (
      text.length >= minLength &&
      text.length <= maxLength &&
      tags.length < maxTags &&
      ((seprators.includes(e.key) && e.type === 'keydown') ||
        (seprators.includes(e.code) && e.type === 'keydown') ||
        e.type === 'blur')
    ) {
      if (tags.includes(text)) {
        if (onExisting) onExisting(text);
        if (e.type === 'blur') e.target.value = '';
        return;
      }
      if (onChange) onChange([...tags, text]);
      e.target.value = '';
      e.preventDefault();
    }
  };

  return (
    <div className={classnames(`size-${size}`, 'form-group', className)}>
      {inputLabelProps && <InputLabel {...inputLabelProps} />}
      <div className={classnames('inputTags', { disabled })}>
        {tags.map(tag => (
          <Tag key={tag} text={tag} remove={handleTagRemove} disabled={disabled} />
        ))}
        <input
          ref={ref}
          id={id}
          data-testid={dataTestId}
          className="inputTags__input"
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onKeyDown={handleOnKeyUp}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
        />
      </div>
      {helperText && <span className="inputTags-helper">{helperText}</span>}
    </div>
  );
};

export default InputTags;
