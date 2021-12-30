import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './CheckboxCard.types';
import Preview from '../../components/preview';

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
    if (onChange) onChange(!isChecked);
  };

  const image = {
    src: img,
    alt: name,
    width: '64px',
    height: '64px',
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
        {/* TODO: change svg for new icon from product team */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
            fill={disabled ? '#ABB1B3' : '#0C8380'}
          />
          <path
            d="M9.5 17.5L11.9267 20.2952C12.049 20.4385 12.2024 20.5536 12.3758 20.6323C12.5492 20.7109 12.7383 20.7511 12.9295 20.75C13.1207 20.7489 13.3093 20.7065 13.4817 20.6258C13.6542 20.5452 13.8061 20.4283 13.9267 20.2835L22 11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default CheckboxCard;
