import { useState } from 'react';
import PropTypes from 'prop-types';

const FaqItem = ({ env, id, faqId, changeId, type, title, cardBody }) => {
  const [isOpen, setIsOpen] = useState(faqId.toString() === id);
  const handleClick = id => {
    setIsOpen(!isOpen);
    changeId(type, id);
  };

  const renderHtmlFaqItem = () => ({ __html: cardBody });

  return (
    <div className="accordion-wrapper">
      <div className="panel">
        <div
          className={`accordion-title ${isOpen ? 'open' : ''}`}
          onClick={() => handleClick(faqId)}
          aria-hidden="true"
        >
          {title}
          <img
            src={`${env.cdn_static_url}/frontend/icons/ic-arrow-down-blue.svg`}
            className="arrow"
            alt="Arrow"
          />
          <div className="dot-line" />
        </div>
        <div className={`accordion-item ${isOpen ? '' : 'collapsed'}`}>
          <div className="accordion-content">
            <div dangerouslySetInnerHTML={renderHtmlFaqItem()} />
          </div>
        </div>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  title: PropTypes.string.isRequired,
  cardBody: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
  id: PropTypes.number,
  faqId: PropTypes.number,
  changeId: PropTypes.func,
  type: PropTypes.string,
};

export default FaqItem;
