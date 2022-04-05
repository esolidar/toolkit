import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Moment from 'react-moment';
import Pagination from '../../elements/pagination';
import Loading from '../loading';

const Giftcards = ({
  giftCardsList,
  giftcardTableTitleText,
  usedExpiredText,
  usedTitleText,
  InputPlaceholderText,
  causeText,
  amountText,
  dateText,
  onSearchTable,
  giftCardsListUsed,
  options,
  giftCardsListActivePage,
  giftCardsListPerPage,
  giftCardsListTotal,
  giftCardsListHandlePageChange,
  activePageUsed,
  itemsPerPage,
  totalUsed,
  handlePageChangeUsed,
  loading,
  searchTerm,
  statusText,
}) => {
  const intl = useIntl();

  const renderDate = (cell, row) => {
    if (row.giftcard_institution.length > 0) {
      return (
        <div style={{ whiteSpace: 'initial', fontSize: '13px' }}>
          <Moment utc tz={row.timezone} format="YYYY-MM-DD HH:mm:ss">
            {row.giftcard_institution[0].created_at}
          </Moment>
        </div>
      );
    }
    return <div style={{ textAlign: 'center' }}>--</div>;
  };

  const renderStatus = (cell, row) => {
    if (row.giftcard_institution.length > 0) {
      return (
        <div>
          <FormattedMessage id="toolkit.spent" />
        </div>
      );
    }
    return (
      <div className="error">
        <FormattedMessage id="giftcard.expired" />
      </div>
    );
  };

  const renderCause = (cell, row) => {
    if (row.giftcard_institution.length > 0) {
      return <span>{row.giftcard_institution[0].institution.name}</span>;
    }
    return '--';
  };

  const renderAmount = (cell, row) => (
    <FormattedNumber value={row.amount} style="currency" currency={row.currency.small} />
  );

  return (
    <Row className="gift-cards">
      {giftCardsList.length > 0 && (
        <Pagination
          activePage={giftCardsListActivePage}
          itemsCountPerPage={Number(giftCardsListPerPage)}
          totalItemsCount={giftCardsListTotal}
          onChange={giftCardsListHandlePageChange}
        />
      )}

      <Col sm={12} className="mobile-nopadding">
        <h3>{usedExpiredText || intl.formatMessage({ id: 'toolkit.history' })}</h3>
        {usedTitleText && <p>{usedTitleText}</p>}
      </Col>
      <Col sm={12} className="giftcards-used-table padding-bottom30 mobile-nopadding">
        <input
          onChange={onSearchTable}
          className="form-control"
          placeholder={
            InputPlaceholderText || intl.formatMessage({ id: 'toolkit.search.vouchers' })
          }
          value={searchTerm}
        />
      </Col>
      <Col sm={12} className="giftcards-used-table mobile-nopadding">
        {loading && (
          <div className="loading-list">
            <Loading />
          </div>
        )}
        <BootstrapTable
          tableHeaderClass="table-header"
          trClassName="tableRow"
          tableBodyClass="table-body"
          options={options}
          data={giftCardsListUsed}
          remote={true}
        >
          <TableHeaderColumn dataField="id" isKey={true} hidden />
          <TableHeaderColumn dataSort dataField="name" width="200">
            {giftcardTableTitleText || intl.formatMessage({ id: 'toolkit.voucher' })}
          </TableHeaderColumn>
          <TableHeaderColumn
            dataSort
            dataField="institution_name"
            dataFormat={renderCause}
            width="240"
          >
            {causeText || intl.formatMessage({ id: 'toolkit.beneficiary' })}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="amount" dataSort dataFormat={renderAmount} width="120">
            {amountText || intl.formatMessage({ id: 'toolkit.value' })}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="date" dataFormat={renderDate} dataSort width="140">
            {dateText || intl.formatMessage({ id: 'toolkit.spentOn' })}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="status" dataFormat={renderStatus} dataSort width="120">
            {statusText || intl.formatMessage({ id: 'toolkit.status' })}
          </TableHeaderColumn>
        </BootstrapTable>
      </Col>
      <Pagination
        activePage={activePageUsed}
        itemsCountPerPage={Number(itemsPerPage)}
        totalItemsCount={totalUsed}
        onChange={handlePageChangeUsed}
      />
    </Row>
  );
};

export default Giftcards;

Giftcards.propTypes = {
  giftCardsList: PropTypes.array.isRequired,
  onSearchTable: PropTypes.func.isRequired,
  giftCardsListUsed: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  giftCardsListActivePage: PropTypes.number.isRequired,
  giftCardsListPerPage: PropTypes.number.isRequired,
  giftCardsListTotal: PropTypes.number.isRequired,
  giftCardsListHandlePageChange: PropTypes.func.isRequired,
  activePageUsed: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalUsed: PropTypes.number.isRequired,
  handlePageChangeUsed: PropTypes.func.isRequired,
  giftcardTableTitleText: PropTypes.string,
  usedExpiredText: PropTypes.string,
  usedTitleText: PropTypes.string,
  InputPlaceholderText: PropTypes.string,
  causeText: PropTypes.string,
  amountText: PropTypes.string,
  dateText: PropTypes.string,
  loading: PropTypes.bool,
  searchTerm: PropTypes.string,
  statusText: PropTypes.string,
};
