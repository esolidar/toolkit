import React, { FC } from 'react';
import Props from './Pagination.types';
import Paginator from 'react-js-pagination';

const PrevPage = () => <div className="prev-page" data-testid="prev-page" />;

const NextPage = () => <div className="next-page" data-testid="next-page" />;

const arrowList = [
  { prev: undefined, next: undefined },
  { prev: <PrevPage />, next: <NextPage /> },
];

const Pagination: FC<Props> = ({
  innerClass,
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed = 5,
  arrowType = 1,
  dataTestId = 'pagination',
  onChange,
}: Props): JSX.Element => {
  return (
    <>
      {totalItemsCount > 0 && (
        <div className="text-center w-100 mt-2" data-testid="pagination">
          <Paginator
            innerClass={`pagination toolkit-pagination ${innerClass}`}
            prevPageText={arrowList[arrowType].prev}
            nextPageText={arrowList[arrowType].next}
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={onChange}
            data-testid={dataTestId}
          />
        </div>
      )}
    </>
  );
};

export default Pagination;