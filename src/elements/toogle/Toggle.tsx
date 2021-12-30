import React, { FC } from 'react';
import classNames from 'classnames';
import ReactToggle from 'react-toggle';
import Props from './Toggle.types';
import isDefined from '../../utils/isDefined';

const Toggle: FC<Props> = ({
  className,
  defaultChecked,
  isChecked,
  name = 'toggle',
  onChange,
  inputRef,
  isDisabled = false,
}: Props): JSX.Element => {
  const classes = classNames('toggle', className);

  const props: any = {
    defaultChecked,
    icons: false,
    name,
    onChange,
    disabled: isDisabled,
    ref: inputRef,
  };

  if (isDefined(isChecked)) props.checked = isChecked;

  return (
    <div className={classes}>
      <ReactToggle {...props} />
    </div>
  );
};
export default React.memo(Toggle);
