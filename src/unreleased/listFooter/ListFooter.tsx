/* eslint-disable camelcase */
import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Pagination from '../../elements/pagination';
import SelectPerPage from '../../elements/selectPerPage';
import Props from './ListFooter.types';

const ListFooter: FC<Props> = ({
  labelResultText,
  onChangeSelectPerPage,
  onChangePagination,
  total,
  current_page,
  per_page,
  perPageOptions = [6, 12, 18, 24],
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  return (
    <div className="component-list-footer" data-testid="list-footer">
      <div className="component-list-footer-results">{`${total} ${
        labelResultText || intl.formatMessage({ id: 'toolkit.results' })
      }`}</div>
      <div>
        <Pagination
          activePage={current_page}
          arrowType={0}
          dataTestId="pagination"
          itemsCountPerPage={+per_page}
          onChange={onChangePagination}
          totalItemsCount={total}
        />
      </div>
      <div className="component-list-footer-perpage">
        <SelectPerPage
          onChange={onChangeSelectPerPage}
          options={perPageOptions}
          value={+per_page}
        />
      </div>
    </div>
  );
};

export default ListFooter;
