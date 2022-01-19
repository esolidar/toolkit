import React, { FC } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Props from './Breadcrumbs.types';

const Breadcrumbs: FC<Props> = ({ breadcrumbs, style }: Props): JSX.Element => {
  return (
    <div className="esolidar-breadcrumbs" style={style}>
      {breadcrumbs.map((item, i) => (
        <React.Fragment key={item.title}>
          <button
            type="button"
            onClick={item.handleClick}
            className={classnames('esolidar-breadcrumbs__button', {
              'disabled-item': breadcrumbs.length === i + 1,
            })}
            disabled={breadcrumbs.length === i + 1}
          >
            {item.title}
          </button>
          {breadcrumbs.length !== i + 1 && <Icon name="Dot" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
