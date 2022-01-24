import React, { FC } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Tooltip from '../tooltip';
import Props from './Breadcrumbs.types';
import { convertFromUtcToCustomTimezone } from '../../utils/convertDates';

const Breadcrumbs: FC<Props> = ({ breadcrumbs, style }: Props): JSX.Element => {
  console.log(
    'date 05',
    convertFromUtcToCustomTimezone('2022-05-14 13:00:00', 'America/Sao_Paulo')
  );
  console.log(
    'date 01',
    convertFromUtcToCustomTimezone('2022-01-14 13:00:00', 'America/Sao_Paulo')
  );
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
          >
            {item.title.length <= 20 ? (
              item.title
            ) : (
              <Tooltip
                placement="top"
                tooltipBodyChild={<>{`${item.title.substring(0, 20)}...`}</>}
                overlay={<>{item.title}</>}
              />
            )}
          </button>
          {breadcrumbs.length !== i + 1 && <Icon name="Dot" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
