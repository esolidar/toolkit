import React, { useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import TextareaField from '../../elements/textareaField';
import Button from '../../elements/button';
import { getEmployeeName, isDefined } from '../../utils';

const Reviews = ({
  averageRate,
  companyId,
  errors,
  myUser,
  review,
  onClickCancel,
  onClickEdit,
  onChangeRate,
  onChangeText,
  otherReviewsList,
  serverlessResizeImage,
  showEditReviewForm,
  submitReview,
  texts,
  totalReviews,
  userReview,
}) => {
  const maxRate = '/5';
  const noImagePlaceholder = 'https://static.esolidar.com/frontend/assets/no-image.png';

  const Average = () =>
    useMemo(() => (
      <div className="box overall-rating" data-testid="average-review">
        <h3 className="title">{texts.averageTitle}</h3>
        <div className="info">
          <div className="numbers">
            <span className="average">{averageRate}</span>
            <span>{maxRate}</span>
          </div>
          <Rating
            className="rating"
            emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
            fullSymbol={<FontAwesomeIcon className="full" icon={faStar} />}
            readonly={true}
            initialRating={averageRate}
          />
        </div>
      </div>
    ));

  const OtherReviews = () =>
    useMemo(() => (
      <div className="box other-reviews">
        <h3 className="title">{texts.reviewTitle}</h3>
        {!otherReviewsList.length && (
          <div className="no-reviews" data-testid="no-reviews">
            {texts.noReviews}
          </div>
        )}
        {!!otherReviewsList.length &&
          otherReviewsList.map(review => (
            <div key={review.id} className="review" data-testid="other-review">
              <div className="header">
                <img
                  className="img"
                  src={
                    review.user.s3_key
                      ? `${serverlessResizeImage}/${review.user.s3_key}?width=40`
                      : noImagePlaceholder
                  }
                  alt={getEmployeeName(companyId, review.user)}
                />
                <div className="name">{getEmployeeName(companyId, review.user)}</div>
                <Rating
                  className="rating"
                  emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                  fullSymbol={<FontAwesomeIcon className="full" icon={faStar} />}
                  readonly={true}
                  initialRating={review.rate || 0}
                />
              </div>
              {!!review.review && (
                <div className="body">
                  <p>{review.review}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    ));

  return (
    <div className="reviews">
      <Row>
        {totalReviews > 0 && (
          <Col md={12}>
            <Average />
          </Col>
        )}
        <Col md={12}>
          <div className="box user-review" data-testid="user-review">
            <h3 className="title">{texts.myReview}</h3>
            <div className="review">
              <div className="header">
                <img
                  className="img"
                  src={
                    myUser.s3_key
                      ? `${serverlessResizeImage}/${myUser.s3_key}?width=40`
                      : noImagePlaceholder
                  }
                  alt={getEmployeeName(companyId, myUser)}
                />
                <div className="name">{getEmployeeName(companyId, myUser)}</div>
                {!showEditReviewForm && (
                  <Rating
                    className="rating"
                    emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                    fullSymbol={<FontAwesomeIcon className="full" icon={faStar} />}
                    readonly={true}
                    initialRating={isDefined(userReview) ? userReview.rate : 0}
                  />
                )}
              </div>
              {!showEditReviewForm && (
                <>
                  <div className="body">
                    {isDefined(userReview) && <p>{userReview.review}</p>}
                    <Button
                      extraClass="info"
                      className="edit-button"
                      onClick={onClickEdit}
                      text={texts.editReviewButton}
                    />
                  </div>
                </>
              )}
              {showEditReviewForm && (
                <>
                  <div className="form" data-testid="edit-form">
                    <TextareaField
                      className="input"
                      field="review"
                      onChange={onChangeText}
                      value={review.review}
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
                        emptySymbol={<FontAwesomeIcon className="empty" icon={farStar} />}
                        fullSymbol={<FontAwesomeIcon className="full" icon={faStar} />}
                        initialRating={review.rate}
                        onChange={rate => onChangeRate(rate)}
                      />
                    </div>
                  </div>
                  {isDefined(errors.rate) && (
                    <div
                      className="has-error"
                      style={{ display: 'inline' }}
                      data-testid="rate-error"
                    >
                      <span className="help-block">{errors.rate}</span>
                    </div>
                  )}
                  <div className="actions">
                    {isDefined(userReview) && (
                      <Button extraClass="dark" onClick={onClickCancel} text={texts.cancel} />
                    )}
                    <Button
                      extraClass="success-full"
                      onClick={submitReview}
                      text={isDefined(userReview) ? texts.updateLabel : texts.saveLabel}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <OtherReviews />
        </Col>
      </Row>
    </div>
  );
};

Reviews.propTypes = {
  averageRate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  companyId: PropTypes.number.isRequired,
  errors: PropTypes.object,
  myUser: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onChangeRate: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  otherReviewsList: PropTypes.array.isRequired,
  serverlessResizeImage: PropTypes.string.isRequired,
  showEditReviewForm: PropTypes.bool.isRequired,
  submitReview: PropTypes.func.isRequired,
  texts: PropTypes.object,
  totalReviews: PropTypes.number.isRequired,
  userReview: PropTypes.object.isRequired,
};

Reviews.defaultProps = {
  texts: {
    averageTitle: 'Overall rating',
    myReview: 'My review',
    reviewTitle: 'Reviews',
    myReviewTitle: 'Review from',
    editReviewButton: '(Edit)',
    writeReview: 'Write a review of this project',
    updateLabel: 'Update',
    saveLabel: 'Save',
    cancel: 'Cancel',
    noReviews: 'This project has no other reviews yet',
  },
};

export default Reviews;
