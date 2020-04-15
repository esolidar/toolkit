import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import classnames from 'classnames';
import SelectField from '../../elements/selectField/SelectField';

const InstitutionListSelect = ({
  institutions,
  onChangeInstitutionCategory,
  selectCategoryText,
  error,
  onSearch,
  categories,
  search,
  handlePageChange,
  npoId,
  institutionSelected,
  onChange,
  selectText,
  NoResultsText,
  pagination,
}) => {
  const renderCharities = () => {
    if (institutions) {
      if (institutions.length > 0) {
        return institutions.map((charity) => {
          let userId;
          if (npoId) {
            userId = charity.id;
          } else {
            userId = charity.user_id;
          }
          const divStyle = {
            backgroundImage: `url(${charity.image})`,
          };

          return (
            <div key={charity.id}>
              <div className="npo-thumb" title={charity.name}>
                <label htmlFor="user_id">
                  {institutionSelected
                    && (
                      <input
                        onChange={onChange}
                        type="radio"
                        name="user_id"
                        checked={institutionSelected === charity.id}
                        value={userId}
                      />
                    )}
                  {!institutionSelected
                    && (
                      <input
                        onChange={onChange}
                        type="radio"
                        name="user_id"
                        value={userId}
                      />
                    )}
                  <div className="npo-pin-thumb" style={divStyle} />
                  <div className="name">{charity.name}</div>
                  <div className="btn btn-select">
                    {selectText}
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
          label="CATEGORIES"
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
          name="search"
        />
      </Col>
      <div className={classnames('col-sm-12', { 'has-error': error })}>
        {renderCharities()}
        {error && <span className="help-block">{error}</span>}
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
      </div>
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
  selectText: PropTypes.string.isRequired,
  NoResultsText: PropTypes.string.isRequired,
  selectCategoryText: PropTypes.string.isRequired,
  error: PropTypes.string,
  search: PropTypes.string,
  npoId: PropTypes.number,
  institutionSelected: PropTypes.number,
  pagination: PropTypes.shape({
    activePage: PropTypes.number.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
  }),
};

export default InstitutionListSelect;
