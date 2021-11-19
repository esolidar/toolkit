import React, { FC } from 'react';
import Props from './FilterGroup.types';
import Badge from '../badge';

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
          {item.title}
          {item.counter && <Badge size="xs" className="counter" plaintext={item.counter} />}
        </div>
      </label>
    ))}
  </div>
);

export default FilterGroup;
