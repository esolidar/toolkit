import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import Props from './Slider.types';
import Button from '../button';
import Icon from '../../components/icon';
import 'rc-slider/assets/index.css';

const SliderComponent: FC<Props> = ({
  className,
  min,
  max,
  defaultValue,
  disabled = false,
  showButtons = false,
  step = 1,
  onChange,
}: Props): JSX.Element => {
  const classes = classNames('esolidar-slider', className);
  const [value, setValue] = useState<number>(defaultValue);
  const [isMinusDisable, setIsMinusDisable] = useState<boolean>(false);
  const [isPlusDisable, setIsPlusDisable] = useState<boolean>(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClickPlus = () => {
    const val = value + step > max ? max : value + step;
    setValue(val);
    onChange(val, 'right');

    if (val === max) {
      setIsPlusDisable(true);
      setIsMinusDisable(false);
    } else {
      setIsMinusDisable(false);
      setIsPlusDisable(false);
    }
  };

  const handleClickMinus = () => {
    const val = value - step < min ? min : value - step;
    setValue(val);
    onChange(val, 'left');

    if (val === min) {
      setIsMinusDisable(true);
      setIsPlusDisable(false);
    } else {
      setIsMinusDisable(false);
      setIsPlusDisable(false);
    }
  };

  const handleChange = val => {
    setValue(val);
    if (val === min) {
      setIsMinusDisable(true);
      setIsPlusDisable(false);
    } else if (val === max) {
      setIsMinusDisable(false);
      setIsPlusDisable(true);
    } else {
      setIsMinusDisable(false);
      setIsPlusDisable(false);
    }
    if (value > val) onChange(val, 'left');
    else onChange(val, 'right');
  };

  return (
    <div className={classes}>
      {showButtons && (
        <Button
          disabled={isMinusDisable}
          extraClass="ghost"
          onClick={handleClickMinus}
          icon={<Icon iconClass="icon-minus" />}
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
          disabled={isPlusDisable}
          extraClass="ghost"
          onClick={handleClickPlus}
          icon={<Icon iconClass="icon-plus1" />}
        />
      )}
    </div>
  );
};
export default SliderComponent;
