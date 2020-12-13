import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { convertToMyCurrency } from '../../utils/index';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';
import CustomModal from '../../elements/customModal/CustomModal';
import CheckboxField from '../../elements/checkboxField/CheckboxField';

const AuctionDetailRigth = ({
  auctionTitle,
  auction,
  auctionSubscribe,
  isShowBid,
  isEnded,
  handleClickBid,
  valueBidTextField,
  error,
  translateMessage,
  minValue,
}) => {
  const [isCheckedEmailStart, setIsCheckedEmailStart] = useState(false);
  const [isCheckedEmailFirstBid, setIsCheckedEmailFirstBid] = useState(false);
  const [isCheckedEmail24H, setIsCheckedEmail24H] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const supported = auction.recipient.institution ? auction.recipient.institution : auction.recipient.causes;

  const selectedCheck = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsCheckedEmailStart(checked);
    if (i === 1) setIsCheckedEmailFirstBid(checked);
    if (i === 2) setIsCheckedEmail24H(checked);
  };

  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;

  return (
    <>
      <Col sm={5}>
        <div>
          <Row>
            <Col sm={12}>
              <h2 className="auction-title">
                {auctionTitle}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="auction-content-label">
              <FormattedMessage
                id="auction.detail.lastbid"
                defaultMessage="Last Bid"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="txt-price-t">
              <FormattedNumber
                value={valueBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="txt-bid-aprox">
              {convertToMyCurrency(valueBid, auction.currency)}
              <FormattedMessage
                id="auction.detail.bidApprox"
                defaultMessage=" approx."
              />
            </Col>
          </Row>
          {(isShowBid && !isEnded) && (
            <Row>
              <Col sm={12} className="auction-content-label">
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={6} className={error && 'has-error'}>
                <TextField
                  className="bid-input"
                  type="text"
                  onChange={(e) => valueBidTextField(e)}
                  error={error}
                  placeholder={translateMessage({ id: 'auction.textfield.minValue', defaultMessage: 'Min. Value: {value}', value: `${minValue + 1}` })}
                />
              </Col>
              <Col sm={6}>
                <Button
                  extraClass="success-full"
                  text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                  onClick={handleClickBid}
                />
              </Col>
              <Col sm={12} className="subscribe-auction mt-5">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => setIsShowModal(true)}
                >
                  <FormattedMessage
                    id="auction.detail.subscribeAuction"
                    defaultMessage="Subscribe the auction"
                  />
                </button>
              </Col>
            </Row>
          )}
          {(isShowBid && isEnded) && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label">
                  <FormattedMessage
                    id="auction.detail.ended"
                    defaultMessage="Ended"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction">
                  <FormattedMessage
                    id="auction.detail.endedAuction"
                    defaultMessage="This auction has ended."
                  />
                </Col>
              </Row>
            </>
          )}
          {supported && (
            <Col sm={12} className="auction-box text-center">
              <div className="text-center">
                <img className="npo-thumb" src={supported.thumbs.thumb} alt="thumb" />
                <FormattedMessage
                  id="auction.detail.proceedsSupport"
                  defaultMessage="Proceeds support "
                />
                <strong>{supported.name}</strong>
              </div>
            </Col>
          )}
        </div>
      </Col>
      <CustomModal
        actionsChildren={(
          <>
            <Button
              extraClass="dark"
              onClick={() => setIsShowModal(false)}
              text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })}
            />
            <Button
              extraClass="success-full"
              onClick={auctionSubscribe(isCheckedEmailStart, isCheckedEmailFirstBid, isCheckedEmail24H)}
              text={translateMessage({ id: 'auction.private.save', defaultMessage: 'Save' })}
            />
          </>
        )}
        bodyChildren={(
          <>
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.subscribe.check1',
                defaultMessage: 'Send me an email when the auction start.',
              })}
              onChange={(e) => selectedCheck(e, 0)}
              checked={isCheckedEmailStart}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.subscribe.check2',
                defaultMessage: 'Send me an email when someone makes the first bid.',
              })}
              onChange={(e) => selectedCheck(e, 1)}
              checked={isCheckedEmailFirstBid}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.subscribe.check3',
                defaultMessage: 'Send me an email 24 hours before the auction ends.',
              })}
              onChange={(e) => selectedCheck(e, 2)}
              checked={isCheckedEmail24H}
            />
          </>
        )}
        onHide={() => setIsShowModal(false)}
        show={isShowModal}
        title={translateMessage({
          id: 'auction.detail.subscribeAuction',
          defaultMessage: 'Subscribe auction leilão',
        })}
      />
    </>
  );
};

AuctionDetailRigth.propTypes = {
  auctionTitle: PropTypes.string,
  auction: PropTypes.object,
  auctionSubscribe: PropTypes.func,
  isShowBid: PropTypes.bool,
  isEnded: PropTypes.bool,
  handleClickBid: PropTypes.func,
  valueBidTextField: PropTypes.func,
  error: PropTypes.string,
  translateMessage: PropTypes.func,
  minValue: PropTypes.number,
};

AuctionDetailRigth.defaultProps = {
  isShowBid: true,
};

export default AuctionDetailRigth;
