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
  className,
  dataTestId,
  placeholder,
  helperText,
  disabled,
  seprators = ['Enter', 'Comma'],
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
    onChange && onChange(tags.filter(tag => tag !== text));
    onRemoved && onRemoved(text);
    const textInput = ref.current;
    textInput.focus();
  };

  const handleOnKeyUp = e => {
    e.stopPropagation();
    const text = e.target.value.trim();

    if (
      text.length >= minLength &&
      text.length <= maxLength &&
      tags.length < maxTags &&
      (seprators.includes(e.key) || seprators.includes(e.code))
    ) {
      if (tags.includes(text)) {
        onExisting && onExisting(text);
        return;
      }
      onChange && onChange([...tags, text]);
      e.target.value = '';
      e.preventDefault();
    }
  };

  return (
    <div className={classnames(`size-${size}`, 'form-group')}>
      {inputLabelProps && <InputLabel {...inputLabelProps} />}
      <div className={classnames('inputTags', { disabled })}>
        {tags.map(tag => (
          <Tag key={tag} text={tag} remove={handleTagRemove} disabled={disabled} />
        ))}
        <input
          ref={ref}
          id={id}
          data-testid={dataTestId}
          className={classnames('inputTags__input', className)}
          type="text"
          name={name}
          placeholder={placeholder}
          onKeyDown={handleOnKeyUp}
          onBlur={onBlur}
          disabled={disabled}
          maxLength={maxLength}
        />
      </div>
      {helperText && <span className="inputTags-helper">{helperText}</span>}
    </div>
  );
};

export default InputTags;
