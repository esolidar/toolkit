import React, { FC, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import { TwitterPicker } from 'react-color';
import TextField from '../textField';
import Props from './SelectColor.types';

const SelectColor: FC<Props> = ({
  id,
  dataTestId,
  value,
  name,
  size = 'lg',
  className,
  colors,
  trianglePosition = 'top-right',
  onChange,
  inputLabelProps,
  textFieldProps,
}: Props): JSX.Element => {
  const [showTwitterPicker, setShowTwitterPicker] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowTwitterPicker(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleColorChange = (color, event) => {
    event.preventDefault();
    onChange(color.hex);
  };

  return (
    <div
      ref={ref}
      id={id}
      data-testid={dataTestId}
      className={classnames(`size-${size}`, 'form-group selectColor', className, {
        error: textFieldProps?.error,
      })}
    >
      <TextField
        value={value}
        name={name}
        size={size}
        rightIcon={{
          name: 'ChevronDown',
          show: true,
        }}
        className="selectColor__input"
        leftElement={<div className="previewColor" style={{ backgroundColor: value }} />}
        readonly={true}
        onClick={() => setShowTwitterPicker(!showTwitterPicker)}
        {...inputLabelProps}
        {...textFieldProps}
      />

      {showTwitterPicker && (
        <TwitterPicker
          color={value}
          colors={colors}
          triangle={trianglePosition}
          onChangeComplete={handleColorChange}
        />
      )}
    </div>
  );
};

export default SelectColor;
