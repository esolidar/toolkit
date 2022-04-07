import React, { FC } from 'react';

import Props from './FilterGroup.types';
import Badge from '../badge';
import Icon from '../icon';

const FilterGroup: FC<Props> = ({ groupName, items, onChange }: Props): JSX.Element => (
  <div className="filter-group">
    {items.map(item => (
      <label htmlFor={item.value} key={item.value} className="filter-group__label">
        <input
          className="filter-group__radio"
          type="radio"
          id={item.value}
          onChange={onChange}
          name={groupName}
          value={item.value}
          disabled={item.disabled}
          checked={item.checked}
        />
        <div className="filter-group-btn-label">
          <Icon name={item.icon} />
          <span>{item.title}</span>
          {item.counter && item.counter !== '0' && (
            <Badge size="xs" className="counter" plaintext={item.counter} />
          )}
        </div>
      </label>
    ))}
  </div>
);

export default FilterGroup;
