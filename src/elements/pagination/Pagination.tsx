import React, { FC } from 'react';
import Paginator from 'react-js-pagination';
import Props from './Pagination.types';

const PrevPage = () => (
  <div className="prev-page" data-testid="prev-page">
    <strong>Prev</strong>
  </div>
);

const NextPage = () => (
  <div className="next-page" data-testid="next-page">
    <strong>Next</strong>
  </div>
);

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
  const handleChangePage = value => {
    if (value === activePage) return;
    onChange(value);
  };

  return (
    <>
      {totalItemsCount > 0 && (
        <div className="text-center w-100 mt-2" data-testid={dataTestId}>
          <Paginator
            innerClass={`pagination toolkit-pagination ${innerClass || ''}`}
            prevPageText={arrowList[arrowType].prev}
            nextPageText={arrowList[arrowType].next}
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={handleChangePage}
            // hideDisabled
            // hideNavigation
          />
        </div>
      )}
    </>
  );
};

export default Pagination;
