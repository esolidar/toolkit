import classNames from 'classnames';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Icon from '../icon';
import Props from './Tag.types';

const Tag: FC<Props> = ({
  className,
  dataTestId,
  style,
  rightIcon,
  leftIcon,
  leftImage,
  iconDataTestId,
  text,
  plaintext,
  id,
  name,
  value,
  onChange,
  checked,
  disabled,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className={classNames('tag-component', { 'tag-component-disabled': disabled })}>
      <label htmlFor={name}>
        <input
          data-testid={dataTestId}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <div
          data-testid={dataTestId}
          className={classNames(
            'tag-component__item',
            className,
            { 'with-image': leftImage },
            { 'not-rounded': leftIcon }
          )}
          style={style}
        >
          {leftImage && (
            <img
              data-testId="left-image"
              src={leftImage}
              alt={text ? intl.formatMessage({ id: text }) : plaintext}
            />
          )}
          {leftIcon && (
            <Icon
              name={leftIcon}
              className="tag-component__item-left-icon"
              data-testid="left-icon"
              size="xs"
            />
          )}
          {text && <span>{intl.formatMessage({ id: text })}</span>}
          {plaintext && plaintext}
          {rightIcon && (
            <div className="tag-component__item-right-icon">
              <div className="fixed">
                <Icon name={rightIcon} dataTestId={iconDataTestId} size="xs" />
              </div>
              <div className="unchecked">
                <Icon name="X" dataTestId={iconDataTestId} size="xs" />
              </div>
              <div className="checked">
                <Icon name="Check" dataTestId={iconDataTestId} size="xs" />
              </div>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Tag;
