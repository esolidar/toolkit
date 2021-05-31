/* eslint-disable camelcase */

import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import classnames from 'classnames';
import SelectField from '../../elements/selectField';
import Loading from '../loading';

const InstitutionListSelect = ({
  institutions,
  onChangeInstitutionCategory,
  selectCategoryText,
  error,
  onSearch,
  categories,
  search,
  placeholderSearch,
  handlePageChange,
  institutionSelected,
  onChange,
  selectText,
  NoResultsText,
  pagination,
  isLoading,
  user_id,
  removeInstitutionSelected,
}) => {
  const renderCharities = () => {
    if (institutions) {
      if (institutions.length > 0) {
        return institutions.map(charity => {
          const divStyle = {
            backgroundImage: `url(${charity.image})`,
          };

          return (
            <div key={charity.id}>
              <div className="npo-thumb" title={charity.name}>
                <label htmlFor={`input_${charity.id}`}>
                  {institutionSelected ? (
                    <input
                      onChange={onChange}
                      type="radio"
                      name={`input_${charity.id}`}
                      id={`input_${charity.id}`}
                      checked={+institutionSelected === +charity.id}
                      value={charity.id}
                    />
                  ) : (
                    <input
                      onChange={onChange}
                      type="radio"
                      name="user_id"
                      id={`input_${charity.id}`}
                      checked={+user_id === +charity.user_id}
                      value={charity.user_id}
                    />
                  )}
                  <div className="npo-pin-thumb" style={divStyle} />
                  <div className="name">{charity.name}</div>
                  <div className="btn btn-select">
                    {selectText || ''}
                    {!selectText && +user_id !== charity.user_id && (
                      <FormattedMessage id="institutions.list.select" defaultMessage="Select" />
                    )}
                    {!selectText && +user_id === charity.user_id && (
                      <FormattedMessage id="institutions.list.selected" defaultMessage="Selected" />
                    )}
                    {+user_id === charity.user_id && removeInstitutionSelected && (
                      <button
                        onClick={removeInstitutionSelected}
                        className="remove-selected"
                        type="button"
                      >
                        x
                      </button>
                    )}
                  </div>
                </label>
              </div>
            </div>
          );
        });
      }
      return (
        <Row>
          <Col xs={12} className="text-center no-results">
            {NoResultsText}
          </Col>
        </Row>
      );
    }
  };

  return (
    <Row className="institutions-list">
      <Col md={12}>
        <SelectField
          label={useIntl().formatMessage({ id: 'institution', defaultMessage: 'Nonprofit' })}
          onChange={onChangeInstitutionCategory}
          idLabel="selectCategory"
          field="institution_category"
          selectText={selectCategoryText}
          options={categories}
        />
      </Col>
      <Col md={12}>
        <input
          className="form-control search-institutions"
          onChange={onSearch}
          value={search}
          placeholder={placeholderSearch}
          name="search"
        />
      </Col>
      {isLoading && (
        <Col md={12}>
          <Loading />
        </Col>
      )}
      {!isLoading && (
        <div className={classnames('col-sm-12', { 'has-error': error })}>
          {renderCharities()}
          {error && <span className="help-block">{error}</span>}
          {institutions.length > 0 && (
            <Row>
              <Col sm={12} className="text-center">
                <Pagination
                  innerClass="pagination justify-content-center"
                  activePage={pagination.activePage}
                  itemsCountPerPage={pagination.itemsCountPerPage}
                  totalItemsCount={pagination.totalItemsCount}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                />
              </Col>
            </Row>
          )}
        </div>
      )}
    </Row>
  );
};

InstitutionListSelect.propTypes = {
  categories: PropTypes.array.isRequired,
  institutions: PropTypes.array.isRequired,
  onChangeInstitutionCategory: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  selectText: PropTypes.string,
  NoResultsText: PropTypes.string.isRequired,
  selectCategoryText: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  search: PropTypes.string,
  placeholderSearch: PropTypes.string,
  institutionSelected: PropTypes.number,
  pagination: PropTypes.shape({
    activePage: PropTypes.number.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
  }),
  isLoading: PropTypes.bool,
  user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeInstitutionSelected: PropTypes.func,
};

export default InstitutionListSelect;
