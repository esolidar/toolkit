import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const DescriptionDetail = ({
  color,
  title,
  description,
  showmoreDesc,
  showMoreDescButton,
  dataTestIdTitle,
  dataTestIdDescription,
}) => (
  <>
    <div className="shipping-header" style={{ color, borderColor: color, marginTop: '50px' }} data-testid={dataTestIdTitle}>
      {title}
    </div>
    <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`} data-testid={dataTestIdDescription}>
      <span>{description}</span>
    </div>
    {showMoreDescButton && (
    <div className="d-block d-sm-none text-center">
      <button type="button" onClick={showMoreDescButton} className="readmore-button">
        <FormattedMessage
          id="readmore"
          defaultMessage="Read more"
        />
      </button>
    </div>
    )}
  </>
);

DescriptionDetail.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  showmoreDesc: PropTypes.bool,
  showMoreDescButton: PropTypes.func,
  dataTestIdTitle: PropTypes.string,
  dataTestIdDescription: PropTypes.string,
};

export default DescriptionDetail;
