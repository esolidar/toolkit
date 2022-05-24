import React, { FC } from 'react';
import classnames from 'classnames';
import Dropdown from '../dropdown';
import Icon from '../icon';
import Props, { CustomDropdownButtonProps } from './DropdownLabelGroup.types';

const DropdownLabelGroup: FC<Props> = ({
  labelText,
  dropdownText,
  iconLeft,
  iconRight,
  dropdownItems,
  fullWidth,
  transparent = false,
}: Props): JSX.Element => (
  <div className={classnames('DropdownLabelGroup', { fullWidth }, { transparent })}>
    <div className="DropdownLabelGroup__prepend">
      <span className="DropdownLabelGroup__label-text">{labelText}</span>
    </div>
    <div className="DropdownLabelGroup__dropdown">
      <Dropdown
        dropAlign="right"
        customButton={
          <CustomDropdownButton
            iconLeft={iconLeft}
            iconRight={iconRight}
            dropdownText={dropdownText}
          />
        }
        items={dropdownItems}
      />
    </div>
  </div>
);

export default DropdownLabelGroup;

const CustomDropdownButton: FC<CustomDropdownButtonProps> = ({
  dropdownText,
  iconLeft,
  iconRight = 'ChevronDown',
}: CustomDropdownButtonProps): JSX.Element => (
  <div className="DropdownLabelGroup__dropdown-content" role="presentation">
    {iconLeft && <Icon name={iconLeft} size="sm" />}
    <span className="DropdownLabelGroup__dropdown-text">{dropdownText}</span>
    {iconRight && <Icon name={iconRight} size="sm" />}
  </div>
);
