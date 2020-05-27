import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { filter } from 'lodash';
import { FormattedMessage } from 'react-intl';
import TextareaField from '../../elements/textareaField/TextareaField';
import Button from '../button/Button';
import getEmployeeName from '../../utils/getEmployeeName';

const Reviews = (props) => {
  const {
    reviews, companyId, serverlessResizeImage, noReviewsText, texts, myUser, onChange, submitReview,
  } = props;
  const [showMyReview, setShowMyReview] = useState(filter(reviews, ['user_id', myUser.id]).length);

  return (
    <div className="reviews">
      {texts.intro && (
        <p>
          {texts.intro}
        </p>
      )}
      <h3>
        {texts.reviewTitle}
      </h3>
      {reviews.length === 0 && (
        <div className="no-viviews">
          {noReviewsText}
        </div>
      )}
      {reviews.length > 0 && (
        <Accordion>
          {reviews.map((review, indx) => (
            <Card key={review.id}>
              <Accordion.Toggle as={Card.Header} eventKey={indx}>
                <div className="header-user">
                  <img src={review.user.s3_key ? `${serverlessResizeImage}/${review.user.s3_key}?width=40` : 'https://static.esolidar.com/frontend/assets/no-image.png'} alt={getEmployeeName(companyId, review.user)} />
                  {getEmployeeName(companyId, review.user)}
                  {myUser.id === review.user_id && (
                    <button className="edit-review" type="button" onClick={() => setShowMyReview(0)}>
                      {texts.editReviewButton}
                    </button>
                  )}
                  <Rating
                    className="rating"
                    emptySymbol={(
                      <img
                        alt="Rating"
                        src="https://static.esolidar.com/frontend/icons/star-empty.svg"
                        className="icon"
                      />
                    )}
                    fullSymbol={(
                      <img
                        alt="Rating"
                        src="https://static.esolidar.com/frontend/icons/star-full.svg"
                        className="icon"
                      />
                    )}
                    readonly={true}
                    initialRating={review.rate ? review.rate : 0}
                  />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={indx}>
                <Card.Body>
                  {review.review}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
      {(showMyReview === 0) && (
        <div className="add-review">
          <h4>
            {`${texts.myReviewTitle} ${getEmployeeName(companyId, myUser)}`}
          </h4>
          <div className="box">
            <img className="my-user-thumb" src={myUser.s3_key ? `${serverlessResizeImage}/${myUser.s3_key}?width=40` : 'https://static.esolidar.com/frontend/assets/no-image.png'} alt={getEmployeeName(companyId, myUser)} />
            <TextareaField
              className="input"
              onChange={onChange}
              defaultValue={filter(reviews, ['user_id', myUser.id]).length === 1 ? filter(reviews, ['user_id', myUser.id])[0].review : ''}
              minRows={5}
              placeholder={texts.writeReview}
            />
            <div className="rate">
              <FormattedMessage
                id="projects.review.rate"
                defaultMessage="Review this project"
              />
              <Rating
                className="rating"
                emptySymbol={(
                  <img
                    alt="Rate"
                    src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/star-empty.svg"
                    className="icon"
                  />
                )}
                fullSymbol={(
                  <img
                    alt="Rate"
                    src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/star-full.svg"
                    className="icon"
                  />
                )}
                initialRating={filter(reviews, ['user_id', myUser.id]).length === 1 ? filter(reviews, ['user_id', myUser.id])[0].rate : 0}
                onChange={(rate) => props.onChangeRate(rate)}
              />
            </div>
          </div>
          <div className="text-center">
            <Button extraClass="success-full" onClick={submitReview} text={filter(reviews, ['user_id', myUser.id]).length === 1 ? texts.updateLabel : texts.saveLabel} />
          </div>
        </div>
      )}
    </div>
  );
};

Reviews.propTypes = {
  companyId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  serverlessResizeImage: PropTypes.string.isRequired,
  noReviewsText: PropTypes.string,
  texts: PropTypes.object,
  myUser: PropTypes.object.isRequired,
  onChangeRate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submitReview: PropTypes.func.isRequired,
};

Reviews.defaultProps = {
  texts: {
    reviewTitle: 'Reviews',
    myReviewTitle: 'Review from',
    editReviewButton: '(Edit)',
    writeReview: 'Write a review of this project',
    updateLabel: 'Update my review',
    saveLabel: 'Save my review',
  },
};

export default Reviews;
