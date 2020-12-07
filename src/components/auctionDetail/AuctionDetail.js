import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ConvertToMyTimezone from '../convertToMyTimezone/ConvertToMyTimezone';
import AuctionDetailRigth from './AuctionDetailRigth';
import TextField from '../../elements/textField/TextField';
import Button from '../button/Button';
import AuctionSupport from './AuctionSupport';
import Countdown from '../countdown/Countdown';
import SliderImagesLightbox from '../sliderImagesLightbox/SliderImagesLightbox';
import ShareNetwork from '../shareNetwork/ShareNetwork';
import AuctionLastBid from './AuctionLastBid';
import Comments from '../comments/Comments';
import AuctionThumb from '../auctionThumb/AuctionThumb';
import AuctionListBidBox from './auctionListBids/AuctionListBidBox';
import DescriptionDetail from '../descriptionDetail/DescriptionDetail';
import CustomModal from '../../elements/customModal/CustomModal';
import CheckboxField from '../../elements/checkboxField/CheckboxField';
import RadioField from '../../elements/radioField/RadioField';

const AuctionDetail = ({
  auction,
  isPrivate,
  translateMessage,
  env,
}) => {
  const [isShowmoreDesc] = useState(false);
  const [isShowMoreDescButton] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCheckedLegal, setIsCheckedLegal] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isRadioCc, setIsRadioCc] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const auctionTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = auction.title;
    } else if (!auction.title_en) {
      title = auction.title;
    } else {
      title = auction.title_en;
    }
    return title;
  };

  const auctionDescriptionLang = (type) => {
    let description;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      description = auction[type];
    } else {
      description = auction[`${type}_en`];
    }
    return description;
  };

  // const showMoreDescAction = () => {
  //   setIsShowmoreDesc(true);
  //   setIsShowMoreDescButton(false);
  // };

  const selectedCheck = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsAnonymous(checked);
    if (i === 1) setIsCheckedLegal(checked);
    if (i === 2) setIsCheckedTerms(checked);
  };

  const supported = auction.recipient ? auction.recipient : auction.user;

  return (
    <Container className="auction-detail">
      {isPrivate && (
        <Row>
          <Col className="mdPrivateCode">
            <Row>
              <h3 className="pb-4">
                <FormattedMessage
                  id="auctions.supportes"
                  defaultMessage="Insert the access code to display and bid on the auction:"
                />
              </h3>
            </Row>
            <Row>
              <TextField
                className="private-code pb-5"
                label=""
                type="text"
                onChange={() => { }}
                error=""
                placeholder="Insert the code"
                defaultValue=""
                field="forCompanies"
              />
            </Row>
            <div className="text-right">
              <Button
                className="auction-private-cancel mr-3"
                extraClass="dark"
                text="Cancel"
              />
              <Button
                className="auction-private-cancel"
                extraClass="success-full"
                text="Confirm"
              />
            </div>
          </Col>
        </Row>
      )}
      {!isPrivate && (
        <>
          <Row>
            <Col md={12} className="content-wrapper">
              {supported.institution && (
                <Row className="content-header hidden-xs">
                  <Col sm={12} className="text-center">
                    <div className="auction-supported">
                      <FormattedMessage
                        id="auctions.supportes"
                        defaultMessage="This auctions supports:"
                      />
                    </div>
                    <h1 className="text-center">
                      <img src={supported.institution.thumbs.thumb} alt="" />
                      {supported.institution.name}
                    </h1>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={10} className="offset-md-1 mobile-nopadding">
              <Row className="box mobile-nopadding">
                <Col sm={12} className="countdown text-center hidden-xs">
                  {(auction.status === 'A' || auction.status === 'F') && (
                    <Countdown
                      endDate={auction.dateStart}
                      startDate={auction.dateLimit}
                    />
                  )}
                  {auction.status === 'P' && (
                    <div className={`status-${auction.status}`}>
                      <FormattedMessage
                        id="auction.detail.status.pending"
                        defaultMessage="This crowdfunding campaign is pending."
                      />
                      &nbsp;
                      <a style={{ color: '#716247' }} href={`/npo/auction/edit/${auction.id}`}>
                        <FormattedMessage
                          id="editAuction"
                          defaultMessage="Edit auction"
                        />
                      </a>
                    </div>
                  )}
                </Col>
                <Col sm={12} className="text-center hidden-xs">
                  <div className="end-date">
                    <FormattedMessage
                      id="auction.detail.ends"
                      defaultMessage="This auction ends in: "
                    />
                    <ConvertToMyTimezone date={auction.dateLimit} format="LLLL" />
                    <br />
                    <FormattedMessage
                      id="auction.detail.infoBid"
                      defaultMessage="Any bid made in the last 2 minutes of the auction will automatically reset the auction timer to 2 minutes remaining."
                    />
                  </div>
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col md={7} className="mobile-nopadding">
                      {auction.images && auction.images.length > 0 && (
                        <SliderImagesLightbox
                          video={auction.video}
                          images={auction.images}
                          env={env}
                        />
                      )}
                      {auction.images && auction.images.length === 0 && (
                        <div
                          className="slider-image"
                          style={{ backgroundImage: `url(${env.img_cdn}/frontend/assets/no-image.jpg)` }}
                        />
                      )}
                    </Col>
                    <AuctionDetailRigth
                      auctionTitle={auctionTitle()}
                      auction={auction}
                      isShowBid={true}
                      handleClickBid={() => setIsShowModal(true)}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <ShareNetwork
            title={auctionTitle()}
            image={auction.images}
            description=""
          />
          <Row>
            <Col xs={12} sm={9}>
              <DescriptionDetail
                color=""
                title={translateMessage({ id: 'auction.description', defaultMessage: 'Description' })}
                description={auctionDescriptionLang('description')}
                showmoreDesc={isShowmoreDesc}
                showMoreDescButton={isShowMoreDescButton}
              />
              <DescriptionDetail
                color=""
                title={translateMessage({ id: 'auction.shipping', defaultMessage: 'Shipping' })}
                description={auctionDescriptionLang('shipping_description')}
                showmoreDesc={isShowmoreDesc}
                showMoreDescButton={isShowMoreDescButton}
              />
              <DescriptionDetail
                color=""
                title={translateMessage({ id: 'auction.payment', defaultMessage: 'payment' })}
                description={auctionDescriptionLang('payment_description')}
                showmoreDesc={isShowmoreDesc}
                showMoreDescButton={isShowMoreDescButton}
              />
            </Col>
            <Col xs={12} sm={3}>
              <AuctionLastBid
                auction={auction}
                isEnded={false}
                handleClickBid={() => setIsShowModal(true)}
              />
            </Col>
            <Col sm={9} className="comments-box mt-5">
              <h3>
                <FormattedMessage
                  id="auction.detail.titleComments"
                  defaultMessage="Comments"
                />
              </h3>
              <Comments
                comments={[]}
                replies={[]}
                getEmployeeName={() => 'Miguel Rocha'}
                env="https://static.testesolidar.com"
                user={{
                  id: 9,
                }}
              />
            </Col>
            <Col xs={12} sm={3}>
              <AuctionListBidBox
                contributesList={auction.last_bid.user}
                loadingContributes={false}
                total={10}
                showMoreContributes={() => { }}
                env={{
                  cdn_static_url: 'https://static.esolidar.com',
                  cdn_uploads_url: 'https://cdn.testesolidar.com',
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <AuctionSupport
                auction={auction}
              />
            </Col>
          </Row>
          <Row className="other-auctions">
            <Col sm={12} className="text-center">
              <h4>
                <FormattedMessage
                  id="auction.detail.otherAuctions"
                  defaultMessage="Other auctions"
                />
              </h4>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <AuctionThumb
                auction={auction}
              />
            </Col>
            <Col sm={3}>
              <AuctionThumb
                auction={auction}
              />
            </Col>
            <Col sm={3}>
              <AuctionThumb
                auction={auction}
              />
            </Col>
            <Col sm={3}>
              <AuctionThumb
                auction={auction}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="mx-auto">
              <Button
                extraClass="info"
                href="/auctions/"
                text="See all auctions"
              />
            </Col>
          </Row>
        </>
      )}
      <CustomModal
        actionsChildren={(
          <>
            <Button extraClass="dark" onClick={() => setIsShowModal(false)} text="Cancel" />
            <Button extraClass="success-full" onClick={() => { }} text="Confirm" />
          </>
        )}
        bodyChildren={(
          <>
            <div>If you are the winner you will receive an email to:</div>

            <ul>
              <li className="border border-dark rounded p-3 mb-2">
                <RadioField
                  label="Credit card number: "
                  onChange={() => setIsRadioCc(0)}
                  value={0}
                  checked={isRadioCc === 0}
                />
              </li>
              <li className="border border-dark rounded p-3 mb-2">
                <RadioField
                  label="Credit card number 2: "
                  onChange={() => setIsRadioCc(1)}
                  value={1}
                  checked={isRadioCc === 1}
                />
              </li>
            </ul>

            <CheckboxField
              label="Anonymous bid"
              onChange={(e) => selectedCheck(e, 0)}
              checked={isAnonymous}
            />
            <CheckboxField
              label="eSolidar and the charity/cause for which it is intended the amount raised in this auction, we reserve the legal right to take legal action against any act that puts into question the normal operation of it."
              onChange={(e) => selectedCheck(e, 1)}
              checked={isCheckedLegal}
            />
            <CheckboxField
              label="I agree with eSolidar’s Privacy Policy and Terms and Conditions ."
              onChange={(e) => selectedCheck(e, 2)}
              checked={isCheckedTerms}
            />
          </>
        )}
        onHide={() => setIsShowModal(false)}
        show={isShowModal}
        title="Confirm bid €111"
        size="lg"
      />
    </Container>
  );
};

AuctionDetail.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    private: PropTypes.bool,
    bid_start: PropTypes.number,
    currency: PropTypes.object,
    dateLimit: PropTypes.string,
    dateStart: PropTypes.string,
    images: PropTypes.array,
    last_bid_value: PropTypes.shape({
      value: PropTypes.number,
    }),
    recipient: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    user: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    last_bid: PropTypes.shape({
      user: PropTypes.object,
    }),
    video: PropTypes.string,
    title: PropTypes.string,
    title_en: PropTypes.string,
  }),
  isPrivate: PropTypes.bool,
  env: PropTypes.shape({
    img_cdn: PropTypes.string,
  }),
  translateMessage: PropTypes.func.isRequired,
};

AuctionDetail.defaultProps = {
  isPrivate: false,
};

export default AuctionDetail;
