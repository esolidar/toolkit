import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Col, Modal, Row } from 'react-bootstrap';
import { FormattedDate, FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import Moment from 'react-moment';
import LightboxGallery from '../../lightboxGallery';
import TextareaField from '../../../elements/textareaField';
import Button from '../../../elements/button';
import { cdnStaticUrl } from '../../../constants/env';

const RequestDetailThumb = ({
  request,

  onReviewRequest,
  onCloseRequest,
  errors,
  admin,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [allowEmployees, setAllowEmployees] = useState('1');
  const [comment, setComment] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);

  const intl = useIntl();

  const statusPivot = request.pivot ? request.pivot.status : request.status;
  let status;
  let statusText;
  let joinedStatus = 'join-request';
  let joinedStatusText = intl.formatMessage({ id: 'joinRequest' });

  const onChangCheckBox = e => {
    if (e.target.checked === true) {
      setAllowEmployees('1');
    } else {
      setAllowEmployees('0');
    }
  };

  const onImin = () => {
    setDisabledButton(true);
    // postImin(institutionId, requestId, this.state);
  };

  switch (statusPivot) {
    case 'A':
      status = 'status-box status-active';
      statusText = intl.formatMessage({ id: 'statusActive' });
      joinedStatus = 'joined-active';
      joinedStatusText = intl.formatMessage({ id: 'joinRequest' });
      break;
    case 'P':
      status = 'status-box status-pending';
      statusText = intl.formatMessage({ id: 'statusPending' });
      joinedStatus = 'joined-pending';
      joinedStatusText = intl.formatMessage({ id: 'joinedStatusTextPending' });
      break;
    case 'F':
      if (request.pivot) {
        if (request.pivot.review) {
          status = 'status-box status-reviewed';
          statusText = intl.formatMessage({ id: 'statusReviewed' });
          joinedStatus = 'joined-finished';
          joinedStatusText = intl.formatMessage({ id: 'statusReviewed' });
        } else {
          status = 'status-box status-ended';
          statusText = intl.formatMessage({ id: 'toolkit.ended' });
          joinedStatus = 'joined-finished';
          joinedStatusText = intl.formatMessage({ id: 'toolkit.ended' });
        }
      } else {
        status = 'status-box status-ended';
        statusText = intl.formatMessage({ id: 'toolkit.ended' });
        joinedStatus = 'joined-finished';
        joinedStatusText = intl.formatMessage({ id: 'toolkit.ended' });
      }
      break;
    case 'D':
      status = 'status-box status-deleted';
      statusText = intl.formatMessage({ id: 'toolkit.ended' });
      joinedStatus = 'joined-declined';
      joinedStatusText = intl.formatMessage({ id: 'toolkit.ended' });
      break;
    default:
      status = 'status-box';
      statusText = '';
  }

  return (
    <div className={status}>
      <Row className="header">
        <Col xs={4} sm={4}>
          <FormattedMessage id="project.tickets.status" />
        </Col>
        <Col xs={8} sm={8} className="text-right">
          <span>
            <b>{statusText}</b>
          </span>
        </Col>
      </Row>
      <Row className="m-0 mt-3">
        <Col sm={12}>
          <LightboxGallery images={request.images.map(({ image }) => ({ image }))} thumbs={false} />
        </Col>
        <Col sm={12}>
          {statusPivot === 'A' && (
            <div className="pt-3 d-flex justify-content-center">
              <Button
                extraClass={`info-full ${joinedStatus}`}
                onClick={() => setShowModal(true)}
                disabled={!!request.pivot || admin}
                text={joinedStatusText}
              />
            </div>
          )}
          {request.pivot && statusPivot === 'A' && (
            <div className="pt-3 d-flex justify-content-center">
              <Button
                extraClass="dark"
                onClick={() => onCloseRequest}
                text={intl.formatMessage({ id: 'charityneeds.detail.btn.close.request' })}
              />
            </div>
          )}
          {request.pivot && statusPivot === 'F' && !request.pivot.review && (
            <div className="pt-3 d-flex justify-content-center">
              <Button
                extraClass="dark"
                onClick={() => onReviewRequest}
                text={intl.formatMessage({ id: 'charityneeds.detail.btn.review' })}
              />
            </div>
          )}
          <ul className="pt-3 pb-3">
            {request.end_date && (
              <li>
                <img alt="Calendar" src={`${cdnStaticUrl}/frontend/icons/ic-box-calendar.svg`} />
                <FormattedDate
                  value={request.start_date.split(' ')[0]}
                  month="short"
                  day="2-digit"
                />
                <span> - </span>
                <FormattedDate value={request.end_date.split(' ')[0]} month="short" day="2-digit" />
              </li>
            )}
            {request.local && (
              <li>
                <img alt="location" src={`${cdnStaticUrl}/frontend/icons/ic-location.svg`} />
                <span>{request.local}</span>
              </li>
            )}
            <li>
              <img alt="timer" src={`${cdnStaticUrl}/frontend/icons/ic-box-clock-timer.svg`} />
              <span>
                <Moment utc to={request.start_date} ago>
                  {request.end_date}
                </Moment>
              </span>
            </li>
            <li>
              <img
                alt="companies"
                src={`${cdnStaticUrl}/frontend/icons/ic-box-companies-joined.svg`}
              />
              <FormattedMessage
                id="request.detail.companies.joined"
                values={{ value: request.companies_joined }}
              />
            </li>
            {request.donation === 1 && (
              <li>
                <img
                  alt="donations"
                  src={`${cdnStaticUrl}/frontend/icons/ic-box-wallet-donation.svg`}
                />
                <FormattedNumber
                  value={request.donation_value}
                  style="currency"
                  currency={request.institution.currency.small}
                />
              </li>
            )}
          </ul>
        </Col>
      </Row>
      <Row className="footer">
        <Col sm={12}>
          <img src={request.institution.thumbs.thumb} alt={request.institution.name} />
          <span>{request.institution.sigla}</span>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} className="md-request-im-in">
        <Modal.Header closeButton>
          <Row>
            <div className="col-xs-12">
              <Modal.Title>
                <FormattedMessage id="request.detail.modal.imIn.title" />
              </Modal.Title>
            </div>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="col-sm-12">
              <div className="checkbox-inline">
                <div className="form-group">
                  <FormattedMessage id="request.detail.modal.make.available" />
                  <input
                    type="checkbox"
                    name="allow_employees"
                    value="1"
                    onChange={() => onChangCheckBox()}
                    checked={allowEmployees === '1'}
                  />
                  <div className="checkbox" style={{ marginTop: '10px' }} />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <TextareaField
                label="Message"
                onChange={e => setComment(e.target.value)}
                error={errors.comment}
                value={comment}
                field="comment"
                fieldTranslate="requests.message"
              />
            </div>
            <div className="col-sm-12 text-center buttons-box">
              <button
                type="button"
                className="btn btn-confirm-modal"
                onClick={() => onImin()}
                disabled={disabledButton}
              >
                <FormattedMessage id="confirm" />
              </button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

RequestDetailThumb.propTypes = {
  onCloseRequest: PropTypes.string,
  onReviewRequest: PropTypes.string,
  request: PropTypes.shape({
    companies_joined: PropTypes.number,
    donation: PropTypes.number,
    donation_value: PropTypes.string,
    end_date: PropTypes.string,
    images: PropTypes.array,
    institution: PropTypes.shape({
      currency: PropTypes.shape({
        small: PropTypes.string,
      }),
      name: PropTypes.string,
      sigla: PropTypes.string,
      thumbs: PropTypes.shape({
        thumb: PropTypes.string,
      }),
    }),
    local: PropTypes.string,
    pivot: PropTypes.shape({
      review: PropTypes.bool,
      status: PropTypes.string,
    }),
    start_date: PropTypes.string,
    status: PropTypes.string,
  }),

  errors: PropTypes.object,
  admin: PropTypes.bool,
};

export default RequestDetailThumb;

RequestDetailThumb.defaultProps = {
  admin: false,
};
