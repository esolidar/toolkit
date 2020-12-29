import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const DescriptionDetail = ({
  color,
  title,
  description,
  showmoreDesc,
  showMoreDescButton,
}) => (
  <>
    <div className="shipping-header" style={{ color, borderColor: color, 'margin-top': '50px' }}>
      {title}
    </div>
    <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`}>
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
};

export default DescriptionDetail;
