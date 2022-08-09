import React, { FC } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

interface Props {
  text: string;
  remove(text: string): void;
  disabled: boolean;
}

const Tag: FC<Props> = ({ text, remove, disabled }: Props): JSX.Element => {
  const handleOnRemove = e => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={classnames('tag-component__item', { disabled })}>
      <span>{text}</span>
      <button
        type="button"
        onClick={!disabled && handleOnRemove}
        aria-label={`remove ${text}`}
        disabled={disabled}
      >
        <Icon name="X" size="sm" />
      </button>
    </span>
  );
};

export default Tag;
