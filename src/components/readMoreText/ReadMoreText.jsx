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
            <>
              {`${result.substr(0, charLimit)}... `}
              {showReadMoreLink && (
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
              )}
            </>
          )}
          {showReadLessButton && (
            <>
              <div dangerouslySetInnerHTML={{ __html: text }} />
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
            </>
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
};

ReadMoreText.defaultProps = {
  charLimit: 250,
  readMoreTextTranslation: 'Read more',
  readLessTextTranslation: 'Read less',
};

export default ReadMoreText;
