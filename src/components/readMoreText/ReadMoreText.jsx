import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../elements/button';

const regex = /(<([^>]+)>)/gi;

const ReadMoreText = ({
  text,
  charLimit,
  readMoreTextTranslation,
  readLessTextTranslation,
  showReadMoreLink = true,
  gradient = false,
}) => {
  const [showReadMoreButton, setShowReadMoreButton] = useState(true);
  const [showReadLessButton, setShowReadLessButton] = useState(false);

  const result = text.replace(regex, '');
  const readMore = result.length > charLimit;

  return (
    <>
      {readMore ? (
        <>
          {showReadMoreButton && (
            <div className="read-more">
              {`${result.substr(0, charLimit)}... `}
              {showReadMoreLink && (
                <div className={`read-more__btn ${gradient ? 'read-more--gradient' : ''}`}>
                  <Button
                    extraClass="link"
                    className="px-0"
                    onClick={() => {
                      setShowReadMoreButton(false);
                      setShowReadLessButton(true);
                    }}
                    text={readMoreTextTranslation}
                    size="sm"
                  />
                </div>
              )}
            </div>
          )}
          {showReadLessButton && (
            <div className="read-more">
              <div dangerouslySetInnerHTML={{ __html: text }} />
              <div className="read-more__btn">
                <Button
                  extraClass="link"
                  className="px-0"
                  onClick={() => {
                    setShowReadMoreButton(true);
                    setShowReadLessButton(false);
                  }}
                  text={readLessTextTranslation}
                  size="sm"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </>
  );
};

ReadMoreText.propTypes = {
  text: PropTypes.string.isRequired,
  charLimit: PropTypes.number,
  readMoreTextTranslation: PropTypes.string,
  readLessTextTranslation: PropTypes.string,
  showReadMoreLink: PropTypes.bool,
  gradient: PropTypes.bool,
};

ReadMoreText.defaultProps = {
  charLimit: 250,
  readMoreTextTranslation: 'Read more',
  readLessTextTranslation: 'Read less',
};

export default ReadMoreText;
