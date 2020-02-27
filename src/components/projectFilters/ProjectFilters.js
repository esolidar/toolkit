import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import TextField from '../../elements/textField/TextField';
import CheckboxField from '../../elements/checkboxField/CheckboxField';
import SelectField from '../../elements/selectField/SelectField';
import Button from '../button/Button';

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
}) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="box project-filters">
      <Row>
        <Col sm={12}>
          <h3>
            {searchTitleLabel}
          </h3>
        </Col>
        <Col sm={12}>
          <TextField
            type="text"
            onChange={onChangeInput}
            error=""
            placeholder={searchLabelPlaceholder}
            defaultValue=""
            field="search"
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
              <img
                alt="Open"
                src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/caret.png"
              />
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
            {ods.map((o) => (
              <Col sm={6} key={o.ods_id}>
                <CheckboxField
                  label={o.name}
                  error=""
                  onChange={(x) => onSelectOds(x)}
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
            <Col sm={12} className="text-right">
              <Button
                extraClass="success-full"
                onClick={applyFilter}
                text={applyButtonLabel}
              />
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
};

export default ProjectFilters;
