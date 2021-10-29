import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './CheckboxCard.types';

// TODO: needs new icons for active, hover and disabled states
// TODO: check with bruno what happens if title and/or subtitle have multiple lines

const CheckboxCard: FC<Props> = ({
  disabled = false,
  id,
  img,
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
    onChange(!isChecked);
  };

  return (
    <button className={classes} onClick={handleOnClick} id={id}>
      <img className="checkbox-card__img" src={img} alt={name} />
      <div className="checkbox-card__info">
        <strong className="checkbox-card__info--title">{title}</strong>
        {size !== 'sm' && <div className="checkbox-card__info--subtitle">{subtitle}</div>}
      </div>
      <div className="checkbox-card__icon" />
    </button>
  );
};

export default CheckboxCard;
