import React, { FC } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Props from './Slider.types';

const SliderComponent: FC<Props> = ({ className, handleChange }: Props): JSX.Element => {
  const classes = classNames('esolidar-slider', className);

  return (
    <div className={classes}>
      <Slider min={0} max={100} defaultValue={3} onChange={handleChange} />
    </div>
  );
};
export default SliderComponent;
