import React, { FC } from 'react';
import Props from './Pagination.types';
import Paginator from 'react-js-pagination';

const PrevPage = () => <div className="prev-page" data-testid="prev-page" />;

const NextPage = () => <div className="next-page" data-testid="next-page" />;

const Pagination: FC<Props> = ({
  innerClass,
  prevPageText = <PrevPage />,
  nextPageText = <NextPage />,
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed = 5,
  onChange,
}: Props): JSX.Element => {
  const hasPrevAndNextPage = !!(totalItemsCount > itemsCountPerPage);

  return (
    <div className="text-center w-100 mt-2" data-testid="pagination">
      <Paginator
        innerClass={`pagination toolkit-pagination ${innerClass}`}
        prevPageText={hasPrevAndNextPage ? prevPageText : ''}
        nextPageText={hasPrevAndNextPage ? nextPageText : ''}
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
