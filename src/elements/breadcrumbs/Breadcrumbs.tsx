import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './Breadcrumbs.types';

const Breadcrumbs: FC<Props> = ({ breadcrumbs }: Props): JSX.Element => {
  return (
    <div className="esolidar-breadcrumbs">
      {breadcrumbs.map((item, i) => (
        <div key={item.title} className="esolidar-breadcrumbs__item">
          <button
            type="button"
            onClick={item.handleClick}
            className={classnames('esolidar-breadcrumbs__button', {
              disabled: breadcrumbs.length === i + 1,
            })}
            disabled={breadcrumbs.length === i + 1}
          >
            {item.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
