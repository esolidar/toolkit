import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const DescriptionDetail = ({
  color,
  title,
  description,
  dataTestIdTitle,
  dataTestIdDescription,
}) => {
  const [showMoreDescButton, setShowMoreDescButton] = useState(
    description && description.length > 500
  );
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  const showMoreDescAction = () => {
    setShowMoreDesc(true);
    setShowMoreDescButton(false);
  };

  return (
    <>
      <div
        className="shipping-header"
        style={{ color, borderColor: color, marginTop: '50px' }}
        data-testid={dataTestIdTitle}
      >
        {title}
      </div>
      <div
        className={`description-text ${showMoreDesc ? 'description-show-all' : ''}`}
        data-testid={dataTestIdDescription}
      >
        {description &&
          description.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
      </div>
      {showMoreDescButton && (
        <div className="d-block d-sm-none text-center">
          <button type="button" onClick={showMoreDescAction} className="readmore-button">
            <FormattedMessage id="readmore" />
          </button>
        </div>
      )}
    </>
  );
};

DescriptionDetail.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  dataTestIdTitle: PropTypes.string,
  dataTestIdDescription: PropTypes.string,
};

export default DescriptionDetail;
