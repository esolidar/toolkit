/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Paginator from 'react-js-pagination';
import Icon from '../../components/icon';
import Props from './Pagination.types';

const PrevPage = ({ intl }) => (
  <div className="prev-page" data-testid="prev-page">
    <Icon iconClass="icon-left-arrow" />
    <strong>{intl.formatMessage({ id: 'toolkit.prev' })}</strong>
  </div>
);

const NextPage = ({ intl }) => (
  <div className="next-page" data-testid="next-page">
    <strong>{intl.formatMessage({ id: 'toolkit.next' })}</strong>
    <Icon iconClass="icon-right-arrow" />
  </div>
);

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
  const intl = useIntl();

  const handleChangePage = value => {
    if (value === activePage) return;
    onChange(value);
  };

  const arrowList = [
    { prev: undefined, next: undefined },
    { prev: <PrevPage intl={intl} />, next: <NextPage intl={intl} /> },
  ];

  return (
    <>
      {totalItemsCount > 0 && (
        <div data-testid={dataTestId}>
          <Paginator
            innerClass={`pagination toolkit-pagination ${innerClass || ''}`}
            prevPageText={arrowList[arrowType].prev}
            nextPageText={arrowList[arrowType].next}
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={handleChangePage}
          />
        </div>
      )}
    </>
  );
};

export default Pagination;
