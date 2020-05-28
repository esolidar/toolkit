import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReadMoreText = (props) => {
  const {
    text, charLimit, color, readMoreTextTranslation, readLessTextTranslation,
  } = props;
  const regex = /(<([^>]+)>)/ig;
  const result = text.replace(regex, '');
  const readMore = result.length > charLimit;
  const [showReadMoreButton, setShowReadMoreButton] = useState(true);
  const [showReadLessButton, setShowReadLessButton] = useState(false);

  return (
    <div>
      {readMore && (
        <div>
          {showReadMoreButton && (
            <div>
              {result.substr(0, charLimit)}
              ...
              &nbsp;
              <button
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '14px',
                  textDecoration: 'underline',
                  padding: '0',
                  color,
                }}
                type="button"
                onClick={() => {
                  setShowReadMoreButton(false);
                  setShowReadLessButton(true);
                }}
              >
                {readMoreTextTranslation}
              </button>
            </div>
          )}
          {showReadLessButton && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: text }} />
              <button
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '14px',
                  textDecoration: 'underline',
                  padding: '0',
                  color,
                }}
                type="button"
                onClick={() => {
                  setShowReadMoreButton(true);
                  setShowReadLessButton(false);
                }}
              >
                {readLessTextTranslation}
              </button>
            </div>
          )}
        </div>
      )}
      {!readMore && (
        <div dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </div>
  );
};

ReadMoreText.propTypes = {
  text: PropTypes.string.isRequired,
  charLimit: PropTypes.number,
  color: PropTypes.string,
  readMoreTextTranslation: PropTypes.string,
  readLessTextTranslation: PropTypes.string,
};

ReadMoreText.defaultProps = {
  charLimit: 250,
  color: '#04C7E5',
  readMoreTextTranslation: 'Read more',
  readLessTextTranslation: 'Read less',
};

export default ReadMoreText;
