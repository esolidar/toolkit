import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './CheckboxCard.types';
import Preview from '../../components/preview';
import Icon from '../icon';

// TODO: needs new icons for active, hover and disabled states
// TODO: check with bruno what happens if title and/or subtitle have multiple lines

const CheckboxCard: FC<Props> = ({
  disabled = false,
  id,
  img,
  disabledImg = img,
  chechedImg = img,
  isChecked,
  name,
  onChange,
  size = 'md',
  subtitle,
  title,
}: Props): JSX.Element => {
  const classes = classnames(
    'checkbox-card',
    { active: isChecked },
    { disabled },
    { [size]: size }
  );

  const handleOnClick = () => {
    if (disabled) return;
    if (onChange) onChange(!isChecked);
  };

  const imageAA = isChecked ? chechedImg : img;

  const image = {
    src: disabled ? disabledImg : imageAA,
    alt: name,
    width: '48px',
    height: '48px',
  };

  return (
    <button className={classes} onClick={handleOnClick} id={id}>
      <div className="checkbox-card__image">
        <Preview img={image} hover={false} />
      </div>
      <div className="checkbox-card__info">
        <strong className="checkbox-card__info--title">{title}</strong>
        {size !== 'sm' && <div className="checkbox-card__info--subtitle">{subtitle}</div>}
      </div>
      <div className="checkbox-card__icon">
        <Icon name="Check" color="#fff" size="sm" />
      </div>
    </button>
  );
};

export default CheckboxCard;
