import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import Props from './Slider.types';
import Button from '../button';
import Icon from '../icon';
import 'rc-slider/assets/index.css';

const SliderComponent: FC<Props> = ({
  className,
  min,
  max,
  defaultValue,
  disabled = false,
  showButtons = false,
  step = 1,
  reset = false,
  onChange,
}: Props): JSX.Element => {
  const classes = classNames('esolidar-slider', className);
  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (reset) {
      setValue(0);
    }
  }, [reset]);

  const handleClickPlus = () => {
    const val = value + step > max ? max : value + step;
    handleChange(val);
  };

  const handleClickMinus = () => {
    const val = value - step < min ? min : value - step;
    handleChange(val);
  };

  const handleChange = val => {
    setValue(val);

    if (value > val) onChange(val, 'left');
    else onChange(val, 'right');
  };

  const isMinusDisabled: boolean = value <= min;
  const isPlusDisabled: boolean = value >= max;

  return (
    <div className={classes}>
      {showButtons && (
        <Button
          disabled={isMinusDisabled}
          extraClass="primary-full"
          onClick={handleClickMinus}
          icon={<Icon name="Minus" size="sm" />}
          ghost
        />
      )}
      <Slider
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        disabled={disabled}
      />
      {showButtons && (
        <Button
          disabled={isPlusDisabled}
          extraClass="primary-full"
          onClick={handleClickPlus}
          icon={<Icon name="Plus" size="sm" />}
          ghost
        />
      )}
    </div>
  );
};
export default SliderComponent;
