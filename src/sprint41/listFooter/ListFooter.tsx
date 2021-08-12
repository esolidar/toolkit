import React, { FC } from 'react';
import Pagination from '../../elements/pagination';
import SelectPerPage from '../../elements/selectPerPage';
import Props from './ListFooter.types';

const ListFooter: FC<Props> = ({
  labelResultText,
  onChangeSelectPerPage,
  onChangePagination,
  data,
  perPageOptions = [6, 12, 18, 24],
}: Props): JSX.Element => {
  return (
    <div className="component-list-footer">
      <div className="component-list-footer-results">{`${data.total} ${labelResultText}`}</div>
      <div>
        <Pagination
          activePage={data.current_page}
          arrowType={0}
          dataTestId="pagination"
          itemsCountPerPage={+data.per_page}
          onChange={onChangePagination}
          totalItemsCount={data.total}
        />
      </div>
      <div className="component-list-footer-perpage">
        <SelectPerPage onChange={onChangeSelectPerPage} options={perPageOptions} value={10} />
      </div>
    </div>
  );
};

export default ListFooter;
