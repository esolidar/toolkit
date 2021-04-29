import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { convertToMyCurrency, slugify } from '../../utils/index';
import Button from '../../elements/button';
import TextField from '../../elements/textField';
import SupportedSection from '../supportedSection';

const AuctionDetailRigth = ({
  auctionTitle,
  auction,
  isEnded,
  isCommingSoon,
  handleClickBid,
  error,
  minValue,
  showModalSubscribe,
  user,
  inputBidValue,
  valueBidTextField,
  primaryColor,
  inputRef,
  env,
  domainUrl,
  locale,
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  const isSameCurrency = user ? auction.currency.small === user.currency.small : true;

  let supported = {};
  if (auction.recipient && auction.recipient.institution) {
    supported.title = auction.recipient.institution.name;
    supported.image = auction.recipient.institution.thumbs.thumb;
    supported.id = auction.recipient.institution.id;
    supported.link = `${domainUrl}${locale}/npo/detail/${supported.id}-${slugify(
      auction.recipient.institution.name
    )}`;
  } else if (auction.brand) {
    supported.title = auction.brand.name;
    supported.image = auction.brand.logo_thumbs.thumb;
    supported.id = auction.brand.id;
    supported.link = `${domainUrl}${locale}/${slugify(auction.brand.name)}`;
  } else if (auction.project) {
    supported.title = auction.project.title;
    supported.image = auction.project.images
      ? `${env.cdn_uploads_url}/${auction.project.images[0].image}`
      : `${env.cdn_static_url}/frontend/assets/no-image.jpg`;
    supported.id = auction.project.id;
    supported.link = `/${locale}/projects/detail/${supported.id}-${slugify(auction.project.title)}`;
  } else {
    supported = null;
  }

  let supportedSectionText = null;

  if (!!auction.brand && !!auction.recipient)
    supportedSectionText = (
      <FormattedMessage
        id="auction.detail.brandSupport"
        defaultMessage="{brandName} will benefit {instituionName} with this auction."
        values={{
          brandName: auction.brand.name,
          instituionName: auction.recipient.institution.name,
        }}
      />
    );

  if (!!auction.brand && !auction.recipient)
    supportedSectionText = (
      <FormattedMessage
        id="auction.detail.proceedsSupport"
        defaultMessage="Proceeds support {brandName}"
        values={{ brandName: auction.brand.name }}
      />
    );

  if (!auction.brand && !!auction.recipient)
    supportedSectionText = (
      <FormattedMessage
        id="auction.detail.institutionSupport"
        defaultMessage="Proceeds support {instituionName}"
        values={{ instituionName: auction.recipient.institution.name }}
      />
    );

  return (
    <>
      <Col sm={5}>
        <div>
          <Row>
            <Col sm={12}>
              <h2 className="auction-title d-none d-sm-block" data-testid="auction-title">
                {auctionTitle}
              </h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p
                className="control-label title-last-bid mb-2"
                id={`last-bid-label-${auction.id}`}
                data-testid="title-last-bid"
                style={{ color: primaryColor }}
              >
                {auction.last_bid ? (
                  <FormattedMessage id="auction.detail.lastbid" defaultMessage="Last Bid" />
                ) : (
                  <FormattedMessage id="auction.detail.startbid" defaultMessage="Start Bid" />
                )}
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              className="txt-price-t"
              id={`last-bid-value-${auction.id}`}
              data-testid="value-last-bid"
            >
              <FormattedNumber
                value={valueBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          {!isSameCurrency && (
            <Row>
              <Col sm={12} className="txt-bid-aprox">
                {convertToMyCurrency(valueBid, auction.currency)}
                <FormattedMessage id="auction.detail.bidApprox" defaultMessage=" approx." />
              </Col>
            </Row>
          )}
          {!isEnded && !isCommingSoon && (
            <Row>
              <Col sm={12} className="auction-content-label" style={{ color: primaryColor }}>
                <FormattedMessage id="auction.detail.newBid" defaultMessage="New Bid" />
              </Col>
              <Col sm={6} className={error && 'has-error'}>
                <TextField
                  dataTestId="inputBid"
                  field="id"
                  id="input-bid-detail"
                  className="bid-input"
                  type="text"
                  onChange={valueBidTextField}
                  error={error}
                  value={inputBidValue}
                  placeholder={useIntl().formatMessage(
                    {
                      id: 'auction.textfield.minValue',
                      defaultMessage: 'Min. Value: {value}',
                    },
                    { value: minValue }
                  )}
                  inputRef={inputRef}
                />
              </Col>
              <Col sm={6}>
                <Button
                  dataTestId="btn-bid"
                  extraClass="success-full"
                  text={useIntl().formatMessage({
                    id: 'auction.button.bid',
                    defaultMessage: 'Bid',
                  })}
                  onClick={() => handleClickBid(inputBidValue)}
                />
              </Col>
              <Col sm={12} className="subscribe-auction mt-5">
                <button type="button" className="btn btn-link " onClick={showModalSubscribe}>
                  <FormattedMessage
                    id="auction.detail.subscribeAuction"
                    defaultMessage="Subscribe the auction."
                  />
                </button>
              </Col>
            </Row>
          )}
          {isEnded && (
            <>
              <Row>
                <Col
                  sm={12}
                  className="auction-content-label"
                  data-testid="label-ended"
                  style={{ color: primaryColor }}
                >
                  <FormattedMessage id="auction.detail.ended" defaultMessage="Ended" />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction" data-testid="label-ended-message">
                  <FormattedMessage
                    id="auction.detail.endedAuction"
                    defaultMessage="This auction has ended."
                  />
                </Col>
              </Row>
            </>
          )}
          {isCommingSoon && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label" data-testid="label-ended">
                  <FormattedMessage id="auction.detail.commingSoon" defaultMessage="Comming Soon" />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction" data-testid="label-ended-message">
                  <FormattedMessage
                    id="auction.detail.commingSoonAuction"
                    defaultMessage="You can make bids when this auction starts."
                  />
                </Col>
              </Row>
            </>
          )}
          {supported && (
            <SupportedSection
              href={supported.link}
              imgSrc={supported.image}
              text={supportedSectionText}
            />
          )}
        </div>
      </Col>
    </>
  );
};

AuctionDetailRigth.propTypes = {
  auctionTitle: PropTypes.string,
  auction: PropTypes.object,
  isEnded: PropTypes.bool,
  isCommingSoon: PropTypes.bool,
  handleClickBid: PropTypes.func,
  error: PropTypes.string,
  minValue: PropTypes.number,
  showModalSubscribe: PropTypes.func,
  user: PropTypes.shape({
    currency: PropTypes.shape({
      small: PropTypes.string,
    }),
  }),
  inputBidValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueBidTextField: PropTypes.func,
  primaryColor: PropTypes.string,
  env: PropTypes.object,
  inputRef: PropTypes.object,
  domainUrl: PropTypes.string,
  locale: PropTypes.string,
};

export default AuctionDetailRigth;
