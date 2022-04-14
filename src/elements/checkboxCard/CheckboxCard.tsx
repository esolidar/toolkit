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
}: Props): JSX.Element => {
  const classes = classnames(
    'checkbox-card',
    { 'no-hover': disabledHover },
    { active: isChecked },
    { disabled },
    { [size]: size },
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
    width: '56px',
    height: '56px',
  };

  return (
    <div
      className={classes}
      onKeyPress={handleOnClick}
      onClick={handleOnClick}
      id={id}
      style={style}
    >
      <div className="checkbox-card__image">
        <Preview img={image} hover={false} />
      </div>
      <div className="checkbox-card__info">
        <strong className="checkbox-card__info--title">{title}</strong>
        {size !== 'sm' && <div className="checkbox-card__info--subtitle">{subtitle}</div>}
      </div>
      {!!dropdownItems.length && (
        <div className="checkbox-card__dropdown">
          <Dropdown items={dropdownItems} />
        </div>
      )}
      <div className="checkbox-card__icon">
        <Icon name="Check" color="#fff" size="sm" />
      </div>
    </div>
  );
};

export default CheckboxCard;
