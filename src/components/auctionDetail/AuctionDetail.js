import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import moment from 'moment-timezone';
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
import CreateComment from '../comments/CreateComment';
import DescriptionDetail from '../descriptionDetail/DescriptionDetail';
import CustomModal from '../../elements/customModal/CustomModal';
import CheckboxField from '../../elements/checkboxField/CheckboxField';
import AuctionOthers from './auctionOthers/AuctionOthers';
import CrowdfundingContributesListBox from '../crowdfundingContributesListBox/CrowdfundingContributesListBox';

const AuctionDetail = ({
  auction,
  listAuctions,
  listBid,
  listBidTotal,
  showMoreContributes,
  comments,
  loadingNewComment,
  onSubmitComment,
  postAsUser,
  postAsCompany,
  translateMessage,
  env,
}) => {
  const [isShowmoreDesc] = useState(false);
  const [isShowMoreDescButton] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCheckedLegal, setIsCheckedLegal] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [valueBid, setValueBid] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [error, setError] = useState('');

  const todaysDate = new Date(moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));
  const isEnded = (todaysDate > new Date(auction.dateLimit));
  const bidValueAuction = auction.last_bid ? auction.last_bid.value : auction.bid_start;

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

  const valueBidTextField = (e) => {
    setValueBid(e.target.value);
  };

  const selectedCheck = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsAnonymous(checked);
    if (i === 1) setIsCheckedLegal(checked);
    if (i === 2) setIsCheckedTerms(checked);
  };

  const modalShow = () => {
    setIsShowModal(true);
  };

  const handleClickBid = () => {
    if (valueBid > auction.bid_max_interval) {
      setError();
      setError(translateMessage({ id: 'auction.detail.error.bidLower', defaultMessage: `Put a numeric value equal or lower than ${bidValueAuction + auction.bid_max_interval} ` }));
      return false;
    }

    if (valueBid > bidValueAuction) {
      setIsShowModal(true);
      setError('');
    } else {
      setError(translateMessage({ id: 'auction.detail.error.bid', defaultMessage: `Put a numeric value equal or higher than ${bidValueAuction + 1}` }));
    }
  };

  const onChangeComments = (e) => {
    setUserComment(e.target.value);
  };

  const supported = auction.recipient.institution ? auction.recipient.institution : auction.recipient.causes;

  const userType = localStorage.user ? JSON.parse(localStorage.user).type : 'guest';
  let thumb = '';

  if (userType === 'guest') {
    thumb = `${env.cdn_static_url}/frontend/assets/no-image.png`;
  } else if (userType === 'npo') {
    thumb = JSON.parse(localStorage.user).institution.thumbs.thumb;
  } else {
    thumb = JSON.parse(localStorage.user).thumbs.thumb;
  }

  return (
    <Container className="auction-detail mt-3">
      {auction.private === 1 && (
        <Row>
          <Col className="mdPrivateCode">
            <Row>
              <h3 className="pb-4">
                <FormattedMessage
                  id="auctions.private.supportes"
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
                placeholder={translateMessage({ id: 'auction.private.insertCode', defaultMessage: 'Insert the code' })}
              />
            </Row>
            <div className="text-right">
              <Button
                className="auction-private-cancel mr-3"
                extraClass="dark"
                text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })}
              />
              <Button
                className="auction-private-cancel"
                extraClass="success-full"
                text={translateMessage({ id: 'auction.private.confirm', defaultMessage: 'Confirm' })}
              />
            </div>
          </Col>
        </Row>
      )}
      {auction.private === 0 && (
        <>
          <Row>
            <Col md={12} className="content-wrapper">
              {supported && (
                <Row className="content-header hidden-xs">
                  <Col sm={12} className="text-center">
                    <div className="auction-supported">
                      <FormattedMessage
                        id="auctions.public.supportes"
                        defaultMessage="This auctions supports:"
                      />
                    </div>
                    <h1 className="text-center">
                      <img src={supported.thumbs.thumb} alt="" />
                      {supported.name}
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
                        defaultMessage="This auction is pending."
                      />
                      &nbsp;
                      {/* <a style={{ color: '#716247' }} href={`/npo/auction/edit/${auction.id}`}>
                        <FormattedMessage
                          id="auction.detail.edit"
                          defaultMessage="Edit auction"
                        />
                      </a> */}
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
                      isEnded={isEnded}
                      auctionTitle={auctionTitle()}
                      auction={auction}
                      isShowBid={true}
                      handleClickBid={handleClickBid}
                      valueBidTextField={valueBidTextField}
                      translateMessage={translateMessage}
                      error={error}
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
            <Col sm={12} md={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={8}>
                  <DescriptionDetail
                    title={translateMessage({ id: 'auction.description', defaultMessage: 'Description' })}
                    description={auctionDescriptionLang('description')}
                    showmoreDesc={isShowmoreDesc}
                    showMoreDescButton={isShowMoreDescButton}
                  />
                  <DescriptionDetail
                    title={translateMessage({ id: 'auction.shipping', defaultMessage: 'Shipping' })}
                    description={auctionDescriptionLang('shipping_description')}
                    showmoreDesc={isShowmoreDesc}
                    showMoreDescButton={isShowMoreDescButton}
                  />
                  <DescriptionDetail
                    title={translateMessage({ id: 'auction.payment', defaultMessage: 'Payment' })}
                    description={auctionDescriptionLang('payment_description')}
                    showmoreDesc={isShowmoreDesc}
                    showMoreDescButton={isShowMoreDescButton}
                  />
                </Col>
                <Col xs={12} sm={4}>
                  <AuctionLastBid
                    auction={auction}
                    isEnded={isEnded}
                    handleClickBid={handleClickBid}
                    isShowModal={modalShow}
                    error={error}
                    translateMessage={translateMessage}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={8} className="comments-box mt-5">
                  <h3>
                    <FormattedMessage
                      id="auction.detail.titleComments"
                      defaultMessage="Comments"
                    />
                  </h3>
                  <CreateComment
                    onSubmitComment={onSubmitComment}
                    onChange={onChangeComments}
                    comment={comments}
                    env={env}
                    postAsCompany={postAsCompany}
                    postAsUser={postAsUser}
                    translateMessage={translateMessage}
                    loadingNewComment={loadingNewComment}
                    thumb={thumb}
                  />
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
                <Col xs={12} sm={4}>
                  <CrowdfundingContributesListBox
                    contributesList={listBid}
                    loadingContributes={false}
                    total={listBidTotal}
                    showMoreContributes={showMoreContributes}
                    env={env}
                    currency={auction.currency.small}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <AuctionSupport
                auction={auction}
                translateMessage={translateMessage}
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
            <AuctionOthers
              listAuctions={listAuctions}
            />
          </Row>
          <Row>
            <Col sm={3} className="mx-auto">
              <Button
                extraClass="info"
                href="/auctions/list"
                text={translateMessage({ id: 'auction.detail.seeAll', defaultMessage: 'See all auctions' })}
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
            <div>
              {translateMessage({
                id: 'auction.modal.bid.email',
                defaultMessage: 'If you are the winner you will receive an email to:',
              })}
            </div>

            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.bid.anonymousBid',
                defaultMessage: 'Anonymous bid',
              })}
              onChange={(e) => selectedCheck(e, 0)}
              checked={isAnonymous}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.bid.check1',
                defaultMessage: 'eSolidar and the charity/cause for which it is intended the amount raised in this auction, we reserve the legal right to take legal action against any act that puts into question the normal operation of it.',
              })}
              onChange={(e) => selectedCheck(e, 1)}
              checked={isCheckedLegal}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.bid.check2',
                defaultMessage: 'I agree with eSolidar’s Privacy Policy and Terms and Conditions.',
              })}
              onChange={(e) => selectedCheck(e, 2)}
              checked={isCheckedTerms}
            />
          </>
        )}
        onHide={() => setIsShowModal(false)}
        show={isShowModal}
        title={
          translateMessage({
            id: 'auction.modal.bid.confirm',
            defaultMessage: 'Confirm bid value',
          })
        }
        size="lg"
      />
    </Container>
  );
};

AuctionDetail.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    private: PropTypes.number,
    bid_start: PropTypes.number,
    currency: PropTypes.object,
    dateLimit: PropTypes.string,
    dateStart: PropTypes.string,
    images: PropTypes.array,
    bid_max_interval: PropTypes.number,
    bid_interval: PropTypes.number,
    sub_category_id: PropTypes.number,
    listBid: PropTypes.number,
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
      causes: PropTypes.object,
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
      value: PropTypes.number,
    }),
    video: PropTypes.string,
    title: PropTypes.string,
    title_en: PropTypes.string,
  }),
  env: PropTypes.shape({
    img_cdn: PropTypes.string,
    cdn_static_url: PropTypes.string,
  }),
  listBidTotal: PropTypes.number,
  showMoreContributes: PropTypes.func,
  translateMessage: PropTypes.func,
  listAuctions: PropTypes.array,
  listBid: PropTypes.array,
  postAsCompany: PropTypes.func,
  postAsUser: PropTypes.func,
  comments: PropTypes.array,
  loadingNewComment: PropTypes.func,
  onSubmitComment: PropTypes.func,
};

export default AuctionDetail;
