import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import TextField from '../../elements/textField';
import CheckboxField from '../../elements/checkboxField';
import SelectField from '../../elements/selectField';
import Button from '../../elements/button';
import { cdnStaticUrl } from '../../constants/env';

const ProjectFilters = ({
  searchTitleLabel,
  onChangeInput,
  searchLabelPlaceholder,
  filtersTitleLabel,
  color,
  odsLabel,
  ods,
  onSelectOds,
  categoriesLabel,
  statusLabel,
  applyFilter,
  onSelectCategory,
  onSelectStatus,
  categories,
  status,
  categoryValue,
  statusValue,
  applyButtonLabel,
  search,
  showFiltersBox,
}) => {
  const [showFilters, setShowFilters] = useState(showFiltersBox);
  return (
    <div className="box project-filters">
      <Row>
        <Col sm={12}>
          <h3>{searchTitleLabel}</h3>
        </Col>
        <Col sm={12}>
          <TextField
            type="text"
            onChange={onChangeInput}
            error=""
            placeholder={searchLabelPlaceholder}
            defaultValue=""
            field="search"
            value={search}
          />
        </Col>

        <Col sm={12} className="filters">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="filter-button"
            style={{ color }}
          >
            <h4>
              {filtersTitleLabel}
              <img alt="Open" src={`${cdnStaticUrl}/frontend/icons/caret.png`} />
            </h4>
          </button>
        </Col>
      </Row>
      {showFilters && (
        <div>
          <Row>
            <Col sm={12}>
              <label htmlFor={odsLabel} className="control-label">
                {odsLabel}
              </label>
            </Col>
            {ods.map((o, idx) => (
              <Col sm={6} key={o.ods_id}>
                <CheckboxField
                  label={o.name}
                  error=""
                  onChange={x => onSelectOds(x, idx)}
                  name={o.tag_name}
                  value={o.ods_id}
                  checked={o.checked}
                  disabled={false}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={6}>
              <SelectField
                value={categoryValue}
                options={categories}
                label={categoriesLabel}
                field="category"
                onChange={onSelectCategory}
                selectText="- -"
              />
            </Col>
            <Col sm={6}>
              <SelectField
                value={statusValue}
                options={status}
                label={statusLabel}
                field="status"
                onChange={onSelectStatus}
                selectText="- -"
              />
            </Col>
            <Col sm={12} className="d-flex justify-content-end">
              <Button extraClass="success-full" onClick={applyFilter} text={applyButtonLabel} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
ProjectFilters.propTypes = {
  searchTitleLabel: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  searchLabelPlaceholder: PropTypes.string.isRequired,
  filtersTitleLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  odsLabel: PropTypes.string.isRequired,
  ods: PropTypes.array.isRequired,
  onSelectOds: PropTypes.func.isRequired,
  categoriesLabel: PropTypes.string.isRequired,
  statusLabel: PropTypes.string.isRequired,
  applyFilter: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onSelectStatus: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  status: PropTypes.array.isRequired,
  categoryValue: PropTypes.string,
  statusValue: PropTypes.string,
  applyButtonLabel: PropTypes.string,
  search: PropTypes.string,
  showFiltersBox: PropTypes.bool,
};

ProjectFilters.defaultProps = {
  showFiltersBox: false,
};

export default ProjectFilters;
