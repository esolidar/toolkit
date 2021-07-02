import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FormattedMessage } from 'react-intl';
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
  renderCause,
  rendeAmount,
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
}) => {
  const renderDate = (cell, row) => {
    if (row.giftcard_institution.length > 0) {
      return (
        <div style={{ whiteSpace: 'initial', textAlign: 'center', fontSize: '13px' }}>
          <Moment utc tz={row.timezone} format="YYYY-MM-DD HH:mm:ss">
            {row.giftcard_institution[0].created_at}
          </Moment>
        </div>
      );
    }
    return (
      <div className="error" style={{ textAlign: 'center' }}>
        <FormattedMessage id="giftcard.expired" defaultMessage="Expired" />
      </div>
    );
  };

  return (
    <Row>
      {giftCardsList.length > 0 && (
        <Pagination
          activePage={giftCardsListActivePage}
          itemsCountPerPage={Number(giftCardsListPerPage)}
          totalItemsCount={giftCardsListTotal}
          onChange={giftCardsListHandlePageChange}
        />
      )}

      <Col sm={12} className="mobile-nopadding">
        <h3>{usedExpiredText}</h3>
        <p>{usedTitleText}</p>
      </Col>
      <Col sm={12} className="giftcards-used-table padding-bottom30 mobile-nopadding">
        <input
          onChange={onSearchTable}
          className="form-control"
          placeholder={InputPlaceholderText}
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
          <TableHeaderColumn dataSort dataField="name">
            {giftcardTableTitleText}
          </TableHeaderColumn>
          <TableHeaderColumn dataSort dataField="institution_name" dataFormat={renderCause}>
            {causeText}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="amount" dataSort dataFormat={rendeAmount} width="130">
            {amountText}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="date" dataFormat={renderDate} dataSort width="130">
            {dateText}
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
  renderCause: PropTypes.func.isRequired,
  rendeAmount: PropTypes.func.isRequired,
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
};
