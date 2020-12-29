import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import {
  isEmpty, forEach, findIndex,
} from 'lodash';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { getEmployeeName } from '../../utils';
import Button from '../button/Button';
import Loading from '../loading/Loading';
import Comments from '../comments/Comments';
import AuctionLastBid from './AuctionLastBid';
import Countdown from '../countdown/Countdown';
import CreateComment from '../comments/CreateComment';
import AuctionDetailRigth from './AuctionDetailRigth';
import AuctionsList from './auctionsList/AuctionsList';
import ShareNetwork from '../shareNetwork/ShareNetwork';
import TextField from '../../elements/textField/TextField';
import CreditCardList from '../creditCardList/CreditCardList';
import CustomModal from '../../elements/customModal/CustomModal';
import DescriptionDetail from '../descriptionDetail/DescriptionDetail';
import CheckboxField from '../../elements/checkboxField/CheckboxField';
import ContributesListBox from '../contributesListBox/ContributesListBox';
import ConvertToMyTimezone from '../convertToMyTimezone/ConvertToMyTimezone';
import SliderImagesLightbox from '../sliderImagesLightbox/SliderImagesLightbox';
import ValidateTelephone from '../validateTelephone/ValidateTelephone';

const AuctionDetail = ({
  auctionId,
  getAuctionDetail,
  auctionDetail,
  userPrivateCode,
  postNewBid,
  newBid,
  getAuctionBidList,
  auctionBidList,
  getAuctionList,
  auctionList,
  companyId,
  getAuctionSubscribe,
  auctionSubscribeList,
  postAuctionSubscribe,
  getAuctionComment,
  auctionComments,
  user,
  translateMessage,
  requireLogin,
  env,
  postAuctionUserComment,
  auctionUserComment,
  postAuctionCompanyComment,
  getAuctionUserCommentResponse,
  auctionUserCommentsResponse,
  deleteAuctionComment,
  getStripeCreditCardlist,
  postStripeCreditCard,
  stripeCreditCardList,
  stripeCreditCard,
  mobileValidatePost,
  validatePhone,
  mobileConfirmPost,
  confirmPhone,
  intl,
}) => {
  // Modals
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalSubscribe, setIsShowModalSubscribe] = useState(false);

  const [isShowmoreDesc] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCheckedLegal, setIsCheckedLegal] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedNotifications, setIsCheckedNotifications] = useState(false);
  const [valueBid, setValueBid] = useState(0);

  // List Bids
  const [listUsersBid, setListUsersBid] = useState([]);
  const [listBidTotal, setListBidTotal] = useState(0);
  const [page, setPage] = useState(1);

  // Create Comments
  const [userComment, setUserComment] = useState([]);
  const [loadingNewComment, setLoadingNewComment] = useState(false);
  const [reply, setReply] = useState('');
  const [error, setError] = useState('');

  // Comments
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [loadingPostReply, setLoadingPostReply] = useState(false);
  const [loadingMoreComments, setLoadingMoreComments] = useState(false);
  // const [commentId, setCommentId] = useState(0);
  const [listAuctions, setlistAuctions] = useState([]);

  // Private Auction
  const [privateCode, setPrivateCode] = useState('');
  const [errorPrivateCode, setErrorPrivateCode] = useState('');
  const [accessAuction, setAccessAuction] = useState(false);
  const [auctionDetailInfo, setAuctionDetailInfo] = useState({});
  const [isLoadingAuction, setIsLoadingAuction] = useState(true);

  // Subscribe
  const [isCheckedEmailStart, setIsCheckedEmailStart] = useState(false);
  const [isCheckedEmailFirstBid, setIsCheckedEmailFirstBid] = useState(false);
  const [isCheckedEmail24H, setIsCheckedEmail24H] = useState(false);

  const [isloadingContributes, setIsloadingContributes] = useState(false);
  const [isErrorSelectCard, setIsErrorSelectCard] = useState(false);
  const [hasCardSelected, setHasCardSelected] = useState(false);

  const perPage = 2;

  const { phones } = JSON.parse(localStorage.user);
  const hasPhoneValidate = phones.some((phone) => phone.verified === 1);

  useEffect(() => {
    getAuctionDetail(auctionId, userPrivateCode);
    getAuctionBidList(auctionId, page, perPage);
    getAuctionList(companyId, 1, 'dateLimit', 'desc', '', 4, undefined, undefined, undefined);
    getAuctionComment(auctionId, 1, '4');
  }, []);

  useEffect(() => {
    if (isEmpty(auctionDetail)) return;
    if (auctionDetail.code === 200) {
      setIsLoadingAuction(false);
      setAuctionDetailInfo(auctionDetail.data);
      setAccessAuction(true);
      if (privateCode) localStorage.setItem('privateCode', privateCode);
    } else if (auctionDetail.data.code === 403) {
      setAccessAuction(false);
      setIsLoadingAuction(false);
      if (privateCode) {
        setErrorPrivateCode(translateMessage({ id: 'auction.detail.error.privateCode', defaultMessage: 'The code is wrong.' }));
      }
    }

    if (auctionList.code === 200) {
      setlistAuctions(auctionList.data.data);
    }

    if (auctionComments.code === 200) {
      const { data } = auctionComments.data;
      setComments(data);

      data.forEach((comment) => {
        getAuctionUserCommentResponse(auctionId, comment.id);
      });
    }

    if (newBid.code === 200) {
      getAuctionDetail(auctionId, userPrivateCode);
      setIsShowModal(false);
    }

    if (auctionUserComment && auctionUserComment.code === 200) {
      const newComment = [auctionUserComment.data];
      if (auctionUserComment.data.comment_id === null) {
        setComments([...newComment, ...comments]);
        setTotalComments(totalComments + 1);
        setLoadingNewComment(false);
      } else {
        const arrayIndx = findIndex(comments, (o) => o.id === auctionUserComment.data.comment_id);
        const repliesArray = comments[arrayIndx].replies || [];
        comments[arrayIndx].replies = [...auctionUserComment.data, ...repliesArray];
        comments[arrayIndx].totalReplies = comments[arrayIndx].replies.length;
        setComments(comments);
        setLoadingPostReply(false);
      }
    }
  }, [auctionDetail, auctionList, auctionComments, newBid, auctionUserComment]);

  useEffect(() => {
    if (auctionUserCommentsResponse.code === 200) {
      const commentsArray = [...comments];
      const { data, total } = auctionUserCommentsResponse.data;

      if (data.length > 0) {
        const arrayIndx = findIndex(commentsArray, (o) => o.id === data[0].comment_id);
        commentsArray[arrayIndx].replies = data;
        commentsArray[arrayIndx].totalReplies = total;
        setComments(commentsArray);
      }
    }
  }, [auctionUserCommentsResponse]);

  useEffect(() => {
    if (auctionBidList.code === 200) {
      setListUsersBid([...listUsersBid, ...auctionBidList.data.data]);
      setListBidTotal(auctionBidList.data.total);
      setPage(auctionBidList.data.current_page);
      setIsloadingContributes(false);
    }
  }, [auctionBidList]);

  useEffect(() => {
    if (auctionSubscribeList.code === 200) {
      if (auctionSubscribeList.data.auction_on_start) setIsCheckedEmailStart(true);
      if (auctionSubscribeList.data.auction_first_bid) setIsCheckedEmailFirstBid(true);
      if (auctionSubscribeList.data.auction_24h_end) setIsCheckedEmail24H(true);
      setIsShowModalSubscribe(true);
    }
  }, [auctionSubscribeList]);

  if (isLoadingAuction) return (<Loading />);

  const todaysDate = new Date(moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));
  const isEnded = (todaysDate > new Date(auctionDetailInfo.dateLimit));
  const bidValueAuction = auctionDetailInfo.last_bid ? auctionDetailInfo.last_bid.value : auctionDetailInfo.bid_start;

  const auctionTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = auctionDetailInfo.title;
    } else if (!auctionDetailInfo.title_en) {
      title = auctionDetailInfo.title;
    } else {
      title = auctionDetailInfo.title_en;
    }
    return title;
  };

  const auctionDescriptionLang = (type) => {
    let description;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      description = auctionDetailInfo[type];
    } else {
      description = auctionDetailInfo[`${type}_en`];
    }
    return description;
  };

  const selectedCheck = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsAnonymous(checked);
    if (i === 1) setIsCheckedLegal(checked);
    if (i === 2) setIsCheckedTerms(checked);
    if (i === 3) setIsCheckedNotifications(checked);
  };

  const modalShowSubscribe = () => {
    getAuctionSubscribe(auctionId);
  };

  const selectedCheckSubscribe = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsCheckedEmailStart(checked);
    if (i === 1) setIsCheckedEmailFirstBid(checked);
    if (i === 2) setIsCheckedEmail24H(checked);
  };

  const handleClickBid = (value) => {
    if (value > auctionDetailInfo.bid_max_interval) {
      setError(
        intl.formatMessage(
          {
            id: 'auction.detail.error.bidLower',
            defaultMessage: 'Put a numeric value equal or lower than {value}',
          },
          { value: bidValueAuction + auctionDetailInfo.bid_max_interval },
        ),
      );
      return false;
    }

    if (value >= bidValueAuction + auctionDetailInfo.bid_interval) {
      setIsShowModal(true);
      setError('');
      setValueBid(value);
    } else {
      setError(
        intl.formatMessage(
          {
            id: 'auction.detail.error.bid',
            defaultMessage: 'Put a numeric value equal or higher than {value}',
          },
          { value: bidValueAuction + auctionDetailInfo.bid_interval },
        ),
      );
    }
  };

  const showMoreContributes = () => {
    getAuctionBidList(auctionDetailInfo.id, page + 1, perPage);
    setIsloadingContributes(true);
  };

  const handleConfirmBid = (isAnonymous) => {
    if (!hasCardSelected) {
      setIsErrorSelectCard(true);
      return;
    }
    const bidValues = {
      value: valueBid,
      hidden: isAnonymous || 0,
      last4: 1234,
    };

    postNewBid(bidValues, auctionDetailInfo.id);
  };

  const handleChangePrivateCode = (e) => {
    setPrivateCode(e.target.value);
  };

  const handleConfirmPrivateCode = () => {
    if (privateCode) {
      getAuctionDetail(auctionDetailInfo.id, privateCode);
    }
  };

  const textPrivacyandTerms = () => {
    const initialText = translateMessage({ id: 'auctions.private.supportes1', defaultMessage: 'I agree with eSolidar’s ' });
    const privacyPolicy = translateMessage({ id: 'auctions.private.privacy', defaultMessage: 'Privacy Policy' });
    const and = translateMessage({ id: 'auctions.private.and', defaultMessage: 'and' });
    const terms = translateMessage({ id: 'auctions.private.terms', defaultMessage: 'Terms and Conditions' });

    const html = `
      <span>${initialText}</span>
      <a href='#'>${privacyPolicy}</a>
      <span>${and}</span>
      <a href='#'>${terms}</a>
    `;

    return html;
  };

  const handleConfirmSubscribe = (isCheckedEmailStart, isCheckedEmailFirstBid, isCheckedEmail24H) => {
    const auctionStart = isCheckedEmailStart || 0;
    const auctionFirstBid = isCheckedEmailFirstBid || 0;
    const auction24hEnd = isCheckedEmail24H || 0;

    const subscribeChecked = {
      auction_on_start: auctionStart,
      auction_first_bid: auctionFirstBid,
      auction_24h_end: auction24hEnd,
    };
    postAuctionSubscribe(auctionId, subscribeChecked);
    setIsShowModalSubscribe(false);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    requireLogin();

    if (userComment && requireLogin()) {
      postAuctionUserComment(auctionId, { comment: userComment });
      setLoadingNewComment(true);
      setUserComment('');
    }
  };

  const onSubmitResponse = (e, commentId) => {
    e.preventDefault();

    if (e.target.value) {
      setLoadingPostReply(true);
      postAuctionUserComment(auctionId, { comment: e.target.value, comment_id: commentId });
      setReply('');
    }
  };

  const loadMore = (commentId, page) => {
    deleteAuctionComment(auctionId, commentId, 3, page + 1);
  };

  const handleDeleteComment = (commentId) => {
    // setCommentId(commentId);
    deleteAuctionComment(auctionId, commentId);
    const deleteComment = commentId;
    const currentComments = comments;
    for (let i = 0; i < currentComments.length; i += 1) {
      if (currentComments[i].id === deleteComment) {
        currentComments.splice(i, 1);
        currentComments.totalReplies = currentComments.length - 1;
        setTotalComments(currentComments.totalReplies);
        break;
      } else if (currentComments[i].replies) {
        forEach(currentComments[i].replies, (reply, indx) => {
          if (reply) {
            if (reply.id === deleteComment) {
              currentComments[i].replies.splice(indx, 1);
              comments[i].totalReplies -= 1;
            }
          }
        });
      }
    }
  };

  const loadMoreComments = () => {
    setLoadingMoreComments(true);
    getAuctionComment(auctionId, page + 1, perPage);
  };

  const showMoreDescButton = () => {

  };

  const handleOnSelect = () => {
    setHasCardSelected(true);
  };

  let supported = '';
  if (accessAuction) {
    supported = auctionDetailInfo.recipient.institution ? auctionDetailInfo.recipient.institution : auctionDetailInfo.recipient.causes;
  }

  const userType = user ? user.type : 'guest';
  let thumb = '';

  if (userType === 'guest') {
    thumb = `${env.cdn_static_url}/frontend/assets/no-image.png`;
  } else if (userType === 'npo') {
    thumb = user.institution.thumbs.thumb;
  } else {
    thumb = user.thumbs.thumb;
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
                error={errorPrivateCode}
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
                    onClick={handleConfirmPrivateCode}
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
          <Col sm={12} md={10} className="offset-md-1 mobile-nopadding">
            <Row className="box mobile-nopadding">
              <Col sm={12} className="countdown text-center hidden-xs">
                {(auctionDetailInfo.status === 'A' || auctionDetailInfo.status === 'F') && (
                  <Countdown
                    endDate={auctionDetailInfo.dateStart}
                    startDate={auctionDetailInfo.dateLimit}
                  />
                )}
                {auctionDetailInfo.status === 'P' && (
                  <div className={`status-${auctionDetailInfo.status}`}>
                    <FormattedMessage
                      id="auction.detail.status.pending"
                      defaultMessage="This auction is pending."
                    />
                  </div>
                )}
              </Col>
              <Col sm={12} className="text-center hidden-xs">
                <div className="end-date">
                  <FormattedMessage
                    id="auction.detail.ends"
                    defaultMessage="This auction ends in: "
                  />
                  <ConvertToMyTimezone date={auctionDetailInfo.dateLimit} format="LLLL" />
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
                    {auctionDetailInfo.images && auctionDetailInfo.images.length > 0 && (
                      <SliderImagesLightbox
                        video={auctionDetailInfo.video}
                        images={auctionDetailInfo.images}
                        env={env}
                      />
                    )}
                    {auctionDetailInfo.images && auctionDetailInfo.images.length === 0 && (
                      <div
                        className="slider-image"
                        style={{ backgroundImage: `url(${env.img_cdn}/frontend/assets/no-image.jpg)` }}
                      />
                    )}
                  </Col>
                  <AuctionDetailRigth
                    isEnded={isEnded}
                    auctionTitle={auctionTitle()}
                    auction={auctionDetailInfo}
                    isShowBid={true}
                    handleClickBid={handleClickBid}
                    translateMessage={translateMessage}
                    showModalSubscribe={modalShowSubscribe}
                    minValue={bidValueAuction + auctionDetailInfo.bid_interval}
                    error={error}
                    user={user}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
          <ShareNetwork
            title={auctionTitle()}
            image={auctionDetailInfo.images}
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
                    showMoreDescButton={showMoreDescButton}
                  />
                  <DescriptionDetail
                    title={translateMessage({ id: 'auction.shipping', defaultMessage: 'Shipping' })}
                    description={auctionDescriptionLang('shipping_description')}
                    showmoreDesc={isShowmoreDesc}
                    showMoreDescButton={showMoreDescButton}
                  />
                  <DescriptionDetail
                    title={translateMessage({ id: 'auction.payment', defaultMessage: 'Payment' })}
                    description={auctionDescriptionLang('payment_description')}
                    showmoreDesc={isShowmoreDesc}
                    showMoreDescButton={showMoreDescButton}
                  />
                </Col>
                <Col xs={12} sm={4}>
                  <AuctionLastBid
                    auction={auctionDetailInfo}
                    isEnded={isEnded}
                    handleClickBid={handleClickBid}
                    isShowModal={modalShowSubscribe}
                    error={error}
                    translateMessage={translateMessage}
                    minValue={bidValueAuction + auctionDetailInfo.bid_interval}
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
                    onChange={(e) => setUserComment(e.target.value)}
                    comment={userComment}
                    postAsUser={postAuctionUserComment}
                    postAsCompany={postAuctionCompanyComment}
                    loadingNewComment={loadingNewComment}
                    translateMessage={translateMessage}
                    thumb={thumb}
                    env={env}
                  />
                  <Comments
                    requireLogin={requireLogin}
                    onSubmitResponse={onSubmitResponse}
                    getEmployeeName={getEmployeeName}
                    onChange={(e) => setReply(e.target.value)}
                    comments={comments}
                    reply={reply}
                    laodingPostReply={loadingPostReply}
                    deleteComment={handleDeleteComment}
                    totalComments={totalComments}
                    loadMore={loadMore}
                    loadingMoreComments={loadingMoreComments}
                    loadMoreComments={loadMoreComments}
                    user={user}
                    thumb={thumb}
                    env={env.cdn_static_url}
                    translateMessage={translateMessage}
                  />
                </Col>
                <Col xs={12} sm={4} className="mt-5">
                  <ContributesListBox
                    isAuction={true}
                    testeId="ContributesListBox"
                    title={translateMessage({ id: 'auction.last.bids', defaultMessage: 'Lat Bids' })}
                    contributesList={listUsersBid}
                    loadingContributes={isloadingContributes}
                    total={listBidTotal}
                    showMoreContributes={showMoreContributes}
                    currency={auctionDetailInfo.currency.small}
                    env={env}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <AuctionsList
            title={translateMessage({ id: 'auction.detail.otherAuctions', defaultMessage: 'Other Auctions' })}
            listAuctions={listAuctions}
            buttonTitle={translateMessage({ id: 'auction.detail.seeAll', defaultMessage: 'See all auctions' })}
          />
        </>
      )}
      <CustomModal
        dialogClassName="auction-modal-bid"
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
                  currency={auctionDetailInfo.currency.small}
                />,
              }}
            />
          </h2>
        )}
        actionsChildren={(
          <>
            <Button
              extraClass="dark"
              onClick={() => setIsShowModal(false)}
              text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })}
            />
            <Button
              extraClass="success-full"
              onClick={() => handleConfirmBid(isAnonymous)}
              disabled={(!isCheckedLegal || !isCheckedNotifications || !isCheckedTerms)}
              text={translateMessage({ id: 'auction.private.confirm', defaultMessage: 'Confirm' })}
            />
          </>
        )}
        bodyChildren={(
          <>
            <div className="mb-3">
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
            {(hasPhoneValidate && auctionDetailInfo.cc === 1) && (
              <CreditCardList
                getStripeCreditCardlist={getStripeCreditCardlist}
                postStripeCreditCard={postStripeCreditCard}
                stripeCreditCardList={stripeCreditCardList}
                stripeCreditCard={stripeCreditCard}
                showAddBtnCreditCard={true}
                translateMessage={translateMessage}
                env={env.stripe}
                isErrorSelectCard={isErrorSelectCard}
                selectedCard={handleOnSelect}
              />
            )}
            {!hasPhoneValidate && (
              <ValidateTelephone
                localStorage={localStorage}
                mobileValidatePost={mobileValidatePost}
                validatePhone={validatePhone}
                mobileConfirmPost={mobileConfirmPost}
                confirmPhone={confirmPhone}
              />
            )}
            <div className="mb-2">
              <CheckboxField
                className="mb-2 checkbox-modal-bid"
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
                className="checkbox-modal-bid"
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
                className="checkbox-modal-bid"
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
                className="checkbox-modal-bid"
                label={
                  <div dangerouslySetInnerHTML={{ __html: textPrivacyandTerms() }} />
                }
                onChange={(e) => selectedCheck(e, 2)}
                checked={isCheckedTerms}
              />
            </div>
          </>
        )}
        size="lg"
      />
      <CustomModal
        bodyPadding="15px"
        dialogClassName="auction-modal-subscribe"
        actionsChildren={(
          <>
            <Button
              extraClass="dark"
              onClick={() => setIsShowModalSubscribe(false)}
              text={translateMessage({ id: 'auction.private.cancel', defaultMessage: 'Cancel' })}
            />
            <Button
              extraClass="success-full"
              onClick={() => handleConfirmSubscribe(isCheckedEmailStart, isCheckedEmailFirstBid, isCheckedEmail24H)}
              text={translateMessage({ id: 'auction.private.save', defaultMessage: 'Save' })}
            />
          </>
        )}
        bodyChildren={(
          <div>
            <CheckboxField
              dataTestId="checkStart"
              label={translateMessage({
                id: 'auction.modal.subscribe.check1',
                defaultMessage: 'Send me an email when the auction start.',
              })}
              onChange={(e) => selectedCheckSubscribe(e, 0)}
              checked={isCheckedEmailStart}
            />
            <CheckboxField
              dataTestId="checkEmailBid"
              label={translateMessage({
                id: 'auction.modal.subscribe.check2',
                defaultMessage: 'Send me an email when someone makes the first bid.',
              })}
              onChange={(e) => selectedCheckSubscribe(e, 1)}
              checked={isCheckedEmailFirstBid}
            />
            <CheckboxField
              dataTestId="checkEmail24"
              label={translateMessage({
                id: 'auction.modal.subscribe.check3',
                defaultMessage: 'Send me an email 24 hours before the auction ends.',
              })}
              onChange={(e) => selectedCheckSubscribe(e, 2)}
              checked={isCheckedEmail24H}
            />
          </div>
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
  auctionId: PropTypes.string,
  getAuctionDetail: PropTypes.func,
  auctionDetail: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      code: PropTypes.number,
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
  }),
  auctionUserComment: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.object,
    total: PropTypes.number,
  }),
  getAuctionComment: PropTypes.func,
  getAuctionBidList: PropTypes.func,
  getAuctionList: PropTypes.func,
  getAuctionSubscribe: PropTypes.func,
  getAuctionUserCommentResponse: PropTypes.func,
  getStripeCreditCardlist: PropTypes.func,
  postStripeCreditCard: PropTypes.func,
  stripeCreditCardList: PropTypes.object,
  stripeCreditCard: PropTypes.object,
  postAuctionUserComment: PropTypes.func,
  postNewBid: PropTypes.func,
  postAuctionCompanyComment: PropTypes.func,
  postAuctionSubscribe: PropTypes.func,
  userPrivateCode: PropTypes.number,
  newBid: PropTypes.object,
  auctionList: PropTypes.object,
  auctionBidList: PropTypes.object,
  requireLogin: PropTypes.func,
  companyId: PropTypes.number,
  auctionSubscribeList: PropTypes.object,
  auctionComments: PropTypes.object,
  auctionUserCommentsResponse: PropTypes.object,
  deleteAuctionComment: PropTypes.func,
  mobileValidatePost: PropTypes.func,
  validatePhone: PropTypes.object,
  mobileConfirmPost: PropTypes.func,
  confirmPhone: PropTypes.object,
  user: PropTypes.object,
  env: PropTypes.shape({
    img_cdn: PropTypes.string,
    cdn_static_url: PropTypes.string,
    stripe: PropTypes.object,
  }),
  translateMessage: PropTypes.func,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(AuctionDetail);
