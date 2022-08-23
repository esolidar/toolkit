import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './CheckboxCard.types';
import Preview from '../../components/preview';
import Icon from '../icon';
import Dropdown from '../dropdown';

const CheckboxCard: FC<Props> = ({
  disabled = false,
  id,
  disabledHover = false,
  defaultImg,
  disabledImg = defaultImg,
  checkedImg = defaultImg,
  isChecked,
  name,
  onChange,
  size = 'md',
  subtitle,
  title,
  className,
  style,
  dropdownItems = [],
  icon,
  fullWith = false,
  roundedIcon = false,
}: Props): JSX.Element => {
  const classes = classnames(
    'checkbox-card',
    { 'no-hover': disabledHover },
    { active: isChecked },
    { disabled },
    { [size]: size },
    { 'full-with': fullWith },
    className
  );

  const handleOnClick = () => {
    if (disabled) return;
    if (onChange) onChange(!isChecked);
  };

  const imageAA = isChecked ? checkedImg : defaultImg;

  const image = {
    src: disabled ? disabledImg : imageAA,
    alt: name,
    width: roundedIcon ? '40px' : '56px',
    height: roundedIcon ? '40px' : '56px',
    borderRadius: roundedIcon ? '50%' : '',
  };

  return (
    <div
      className={classes}
      onKeyPress={handleOnClick}
      onClick={handleOnClick}
      id={id}
      style={style}
    >
      <div
        className={classnames(
          { 'checkbox-card__image': image.src },
          { 'checkbox-card__image-icon': icon }
        )}
      >
        {image.src && !icon && <Preview img={image} hover={false} />}
        {!image.src && icon && <Icon name={icon} />}
      </div>
      <div className="checkbox-card__info">
        <strong className="checkbox-card__info--title">{title}</strong>
        {size !== 'sm' && subtitle && (
          <div className="checkbox-card__info--subtitle">{subtitle}</div>
        )}
      </div>
      {!!dropdownItems.length && (
        <div className="checkbox-card__dropdown">
          <Dropdown items={dropdownItems} />
        </div>
      )}
      <div className="checkbox-card__icon">
        <Icon name="Check" color="#fff" size="sm" className="check" />
        <Icon name="X" color="#fff" size="sm" className="uncheck" />
      </div>
    </div>
  );
};

export default CheckboxCard;
