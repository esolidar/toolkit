/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import Button from '../../elements/button';
import Pagination from '../../elements/pagination';
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
  NoResultsText,
  pagination,
  isLoading,
  user_id,
  removeInstitutionSelected,
}) => (
  <Row className="institutions-list">
    <Col md={12}>
      <SelectField
        label={useIntl().formatMessage({ id: 'institution', defaultMessage: 'Nonprofit' })}
        onChange={onChangeInstitutionCategory}
        idLabel="selectCategory"
        field="institution_category"
        selectText={
          selectCategoryText || useIntl().formatMessage({ id: 'giftcard.modal.select-charity' })
        }
        options={categories}
      />
    </Col>
    <Col md={12}>
      <input
        className="form-control search-institutions"
        onChange={onSearch}
        value={search}
        placeholder={
          placeholderSearch || useIntl().formatMessage({ id: 'giftcard.search.charity' })
        }
        name="search"
      />
    </Col>
    {isLoading ? (
      <Col md={12}>
        <Loading />
      </Col>
    ) : (
      <Col md={12} className={classnames({ 'has-error': error })}>
        {!institutions.length ? (
          <div className="text-center no-results">
            {NoResultsText || useIntl().formatMessage({ id: 'noDataText' })}
          </div>
        ) : (
          institutions.map(institution => (
            <InstitutionRow
              key={institution.id}
              institution={institution}
              institutionSelected={institutionSelected}
              onChange={onChange}
              userId={Number(user_id)}
              removeInstitutionSelected={removeInstitutionSelected}
            />
          ))
        )}
        {error && <span className="help-block">{error}</span>}
        {institutions.length > 0 && (
          <Pagination
            activePage={pagination.activePage}
            itemsCountPerPage={pagination.itemsCountPerPage}
            totalItemsCount={pagination.totalItemsCount}
            onChange={handlePageChange}
          />
        )}
      </Col>
    )}
  </Row>
);

InstitutionListSelect.propTypes = {
  categories: PropTypes.array.isRequired,
  institutions: PropTypes.array,
  onChangeInstitutionCategory: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

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

InstitutionListSelect.defaultProps = {
  institutions: [],
};

const InstitutionRow = ({
  institution,
  institutionSelected,
  onChange,
  userId,
  removeInstitutionSelected,
}) => {
  const { id, name, image, user_id } = institution;

  const isSameUserId = userId === Number(user_id);
  const isSameInstitutionId = institutionSelected === Number(id);

  const isSelected = !!(
    (institutionSelected && isSameInstitutionId) ||
    (!institutionSelected && isSameUserId)
  );

  return (
    <div key={id} className="institution-row">
      <div className="info">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <div className={`name ${isSelected ? 'selected' : ''}`} title={name}>
          {name}
        </div>
      </div>
      <Button
        extraClass={isSelected ? 'info-full' : 'info'}
        text={useIntl().formatMessage({
          id: isSelected ? 'institutions.list.selected' : 'institutions.list.select',
        })}
        onClick={() => {
          if (isSameUserId && removeInstitutionSelected) removeInstitutionSelected();
          else if (!isSameUserId) onChange(institution);
        }}
        size="sm"
      />
    </div>
  );
};

InstitutionRow.propTypes = {
  institution: PropTypes.shape({
    id: PropTypes.any,
    image: PropTypes.string,
    name: PropTypes.string,
    user_id: PropTypes.any,
  }),
  institutionSelected: PropTypes.number,
  onChange: PropTypes.func,
  removeInstitutionSelected: PropTypes.func,
  userId: PropTypes.any,
};

export default InstitutionListSelect;
