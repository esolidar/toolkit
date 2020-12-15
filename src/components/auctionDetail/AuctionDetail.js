import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import moment from 'moment-timezone';
import ConvertToMyTimezone from '../convertToMyTimezone/ConvertToMyTimezone';
import AuctionDetailRigth from './AuctionDetailRigth';
import TextField from '../../elements/textField/TextField';
import Button from '../button/Button';
import Countdown from '../countdown/Countdown';
import SliderImagesLightbox from '../sliderImagesLightbox/SliderImagesLightbox';
import ShareNetwork from '../shareNetwork/ShareNetwork';
import AuctionLastBid from './AuctionLastBid';
import DescriptionDetail from '../descriptionDetail/DescriptionDetail';
import CrowdfundingContributesListBox from '../crowdfundingContributesListBox/CrowdfundingContributesListBox';
import Comments from '../comments/Comments';
import CreateComment from '../comments/CreateComment';
import CustomModal from '../../elements/customModal/CustomModal';
import CheckboxField from '../../elements/checkboxField/CheckboxField';
import AuctionOthers from './auctionOthers/AuctionOthers';

const AuctionDetail = ({
  accessAuction,
  handleChangePrivateCode,
  errorMsgPrivateCode,
  confirmPrivateCode,
  auction,
  auctionSubscribe,
  loadingNewComment,
  onSubmitComment,
  postAsUser,
  postAsCompany,
  translateMessage,
  requireLogin,
  user,
  reply,
  env,
  postNewBid,
  newBid,
  getAuctionBidList,
  auctionBidList,
  auctionList,
  companyId,
  getAuctionList,
  getAuctionComment,
  auctionComments,
}) => {
  const [isShowmoreDesc] = useState(false);
  const [isShowMoreDescButton] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCheckedLegal, setIsCheckedLegal] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedNotifications, setIsCheckedNotifications] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalSubscribe, setIsShowModalSubscribe] = useState(false);
  const [valueBid, setValueBid] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [error, setError] = useState('');

  const [listUsersBid, setListUsersBid] = useState([]);
  const [listBidTotal, setListBidTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [auctionOthers, setauctionOthers] = useState([]);
  const [commentsList, setComments] = useState([]);

  const [isCheckedEmailStart, setIsCheckedEmailStart] = useState(false);
  const [isCheckedEmailFirstBid, setIsCheckedEmailFirstBid] = useState(false);
  const [isCheckedEmail24H, setIsCheckedEmail24H] = useState(false);

  const todaysDate = new Date(moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));
  const isEnded = (todaysDate > new Date(auction.dateLimit));
  const bidValueAuction = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  const perPage = 2;

  useEffect(() => {
    getAuctionBidList(auction.id, page, perPage);
    getAuctionList(companyId, 1, 'dateLimit', 'desc', 'A', '4', '&active');
    getAuctionComment(auction.id, 1, '4');
  }, []);

  useEffect(() => {
    if (auctionBidList.code === 200) {
      setListUsersBid([...listUsersBid, ...auctionBidList.data.data]);
      setListBidTotal(auctionBidList.data.total);
      setPage(auctionBidList.data.current_page);
    }

    if (auctionList.code === 200) {
      setauctionOthers(auctionList.data.data);
    }

    if (auctionComments.code === 200) {
      setComments(auctionComments.data.data);
    }

    if (newBid.code === 200) {
      setIsShowModal(false);
    }
  }, [auctionBidList, auctionList, auctionComments, newBid]);

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
    if (i === 3) setIsCheckedNotifications(checked);
  };

  const modalShowSubscribe = () => {
    setIsShowModalSubscribe(true);
  };

  const selectedCheckSubscribe = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsCheckedEmailStart(checked);
    if (i === 1) setIsCheckedEmailFirstBid(checked);
    if (i === 2) setIsCheckedEmail24H(checked);
  };

  const handleClickBid = () => {
    if (valueBid > auction.bid_max_interval) {
      setError();
      setError(translateMessage({ id: 'auction.detail.error.bidLower', defaultMessage: `Put a numeric value equal or lower than ${bidValueAuction + auction.bid_max_interval} ` }));
      return false;
    }

    if (valueBid >= bidValueAuction + auction.bid_interval) {
      setIsShowModal(true);
      setError('');
    } else {
      setError(translateMessage({ id: 'auction.detail.error.bid', defaultMessage: `Put a numeric value equal or higher than ${bidValueAuction + auction.bid_interval}` }));
    }
  };

  const onChangeComments = (e) => {
    setUserComment(e.target.value);
  };

  const showMoreContributes = () => {
    getAuctionBidList(auction.id, page + 1, perPage);
  };

  const handleConfirmBid = () => {
    const bidValues = {
      value: valueBid,
      hidden: 0,
      last4: 1234,
    };

    postNewBid(bidValues, auction.id);
  };

  let supported = '';
  if (accessAuction) {
    supported = auction.recipient.institution ? auction.recipient.institution : auction.recipient.causes;
  }

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
      {!accessAuction && (
        <Row>
          <Col sm={6} className="mdPrivateCode offset-md-3">
            <Row>
              <h3 className="pb-4">
                <FormattedMessage
                  id="auctions.private.supportes"
                  defaultMessage="Insert the access code to display and bid on the auction"
                />
              </h3>
            </Row>
            <Row>
              <TextField
                className="private-code pb-5"
                type="text"
                onChange={handleChangePrivateCode}
                error={errorMsgPrivateCode}
                placeholder={translateMessage({ id: 'auction.private.insertCode', defaultMessage: 'Insert the code' })}
              />
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Col sm={6} className="d-flex">
                  <Button
                    className="auction-private-cancel mr-3"
                    extraClass="dark"
                    text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })}
                  />
                  <Button
                    className="auction-private-cancel"
                    extraClass="success-full"
                    onClick={confirmPrivateCode}
                    text={translateMessage({ id: 'auction.private.validate', defaultMessage: 'Validate' })}
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {accessAuction && (
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
                      showModalSubscribe={modalShowSubscribe}
                      minValue={bidValueAuction + auction.bid_interval}
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
                    isShowModal={modalShowSubscribe}
                    error={error}
                    translateMessage={translateMessage}
                    minValue={bidValueAuction + auction.bid_interval}
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
                    comment={auctionComments}
                    env={env}
                    postAsCompany={postAsCompany}
                    postAsUser={postAsUser}
                    translateMessage={translateMessage}
                    loadingNewComment={loadingNewComment}
                    thumb={thumb}
                  />
                  <Comments
                    requireLogin={requireLogin}
                    comments={commentsList}
                    replies={reply}
                    user={user}
                    env="https://static.testesolidar.com"
                  />
                </Col>
                <Col xs={12} sm={4}>
                  <CrowdfundingContributesListBox
                    testeId="CrowdfundingContributesListBox"
                    contributesList={listUsersBid}
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
              listAuctions={auctionOthers}
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
        onHide={() => setIsShowModal(false)}
        show={isShowModal}
        title={(
          <h2>
            <FormattedMessage
              id="auction.modal.bid.confirm"
              defaultMessage="Confirm bid value {value}"
              values={{
                value: <FormattedNumber
                  value={valueBid}
                  style="currency"
                  currency={auction.currency.small}
                />,
              }}
            />

          </h2>
        )}
        actionsChildren={(
          <>
            <Button extraClass="dark" onClick={() => setIsShowModal(false)} text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })} />
            <Button extraClass="success-full" onClick={handleConfirmBid} text={translateMessage({ id: 'auction.private.confirm', defaultMessage: 'Confirm' })} />
          </>
        )}
        bodyChildren={(
          <>
            <div className="mb-5">
              {translateMessage({
                id: 'auction.modal.bid.email',
                defaultMessage: 'If you are the winner you will receive an email to: ',
              })}
              <br />
              {user.email}
              <span> (</span>
              <a href="/user/settings" title={translateMessage({ id: 'auction.modal.bid.chageEmail', defaultMessage: 'change e-mail' })}>
                {translateMessage({ id: 'auction.modal.bid.chageEmail', defaultMessage: 'change e-mail' })}
              </a>
              <span>)</span>
            </div>
            <div className="mb-2">
              <CheckboxField
                className="mb-2"
                label={translateMessage({
                  id: 'auction.modal.bid.anonymousBid',
                  defaultMessage: 'Anonymous bid',
                })}
                onChange={(e) => selectedCheck(e, 0)}
                checked={isAnonymous}
              />
            </div>
            <div className="mb-2">
              <CheckboxField
                label={translateMessage({
                  id: 'auction.modal.bid.check1',
                  defaultMessage: 'eSolidar and the charity/cause for which it is intended the amount raised in this auction, we reserve the legal right to take legal action against any act that puts into question the normal operation of it.',
                })}
                onChange={(e) => selectedCheck(e, 1)}
                checked={isCheckedLegal}
              />
            </div>
            <div className="mb-2">
              <CheckboxField
                label={translateMessage({
                  id: 'auction.modal.bid.check3',
                  defaultMessage: 'To be able to bid you must first accept to receive our notifications. This will allow us to inform you whenever you win an auction.',
                })}
                onChange={(e) => selectedCheck(e, 3)}
                checked={isCheckedNotifications}
              />
            </div>
            <div className="mb-2">
              <CheckboxField
                label={translateMessage({
                  id: 'auction.modal.bid.check2',
                  defaultMessage: 'I agree with eSolidar’s Privacy Policy and Terms and Conditions.',
                })}
                onChange={(e) => selectedCheck(e, 2)}
                checked={isCheckedTerms}
              />
            </div>
          </>
        )}
        size="lg"
      />
      <CustomModal
        actionsChildren={(
          <>
            <Button
              extraClass="dark"
              onClick={() => setIsShowModalSubscribe(false)}
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
              onChange={(e) => selectedCheckSubscribe(e, 0)}
              checked={isCheckedEmailStart}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.subscribe.check2',
                defaultMessage: 'Send me an email when someone makes the first bid.',
              })}
              onChange={(e) => selectedCheckSubscribe(e, 1)}
              checked={isCheckedEmailFirstBid}
            />
            <CheckboxField
              label={translateMessage({
                id: 'auction.modal.subscribe.check3',
                defaultMessage: 'Send me an email 24 hours before the auction ends.',
              })}
              onChange={(e) => selectedCheckSubscribe(e, 2)}
              checked={isCheckedEmail24H}
            />
          </>
        )}
        onHide={() => setIsShowModalSubscribe(false)}
        show={isShowModalSubscribe}
        title={translateMessage({
          id: 'auction.detail.subscribeAuction',
          defaultMessage: 'Subscribe auction leilão',
        })}
      />
    </Container>
  );
};

AuctionDetail.propTypes = {
  accessAuction: PropTypes.bool,
  handleChangePrivateCode: PropTypes.func,
  errorMsgPrivateCode: PropTypes.func,
  confirmPrivateCode: PropTypes.func,
  auctionSubscribe: PropTypes.func,
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
  translateMessage: PropTypes.func,
  postAsCompany: PropTypes.func,
  postAsUser: PropTypes.func,
  loadingNewComment: PropTypes.func,
  onSubmitComment: PropTypes.func,
  requireLogin: PropTypes.func,
  user: PropTypes.number,
  reply: PropTypes.array,
  postNewBid: PropTypes.func,
  newBid: PropTypes.array,
  getAuctionBidList: PropTypes.func,
  auctionBidList: PropTypes.array,
  getAuctionList: PropTypes.func,
  auctionList: PropTypes.array,
  companyId: PropTypes.number,
  getAuctionComment: PropTypes.func,
  auctionComments: PropTypes.array,
};

export default injectIntl(AuctionDetail);
