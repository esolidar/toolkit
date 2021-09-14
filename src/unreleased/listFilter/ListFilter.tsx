import React, { FC } from 'react';
import Props from './ListFilter.types';

const ListFilter: FC<Props> = ({ items }: Props): JSX.Element => (
  <div className="list-filter" data-testid="list-filter">
    {items.map((item, i) => {
      if (item === 'space') return <div key={i} className="list-filter__space" />;
      return item;
    })}
  </div>
);

export default ListFilter;
