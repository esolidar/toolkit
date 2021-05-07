import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import Sticky from 'react-sticky-el';
import { getEmployeeName, isDefined, filterUnique, slugify } from '../../utils';
import Button from '../../elements/button';
import NoMatch from '../noMatch';
import Loading from '../loading';
import Comments from '../comments';
import AuctionLastBid from './AuctionLastBid';
import Countdown from '../countdown';
import CreateComment from '../comments/createComment';
import AuctionDetailRigth from './AuctionDetailRigth';
import AuctionsList from './auctionsList';
import ProjectThumb from '../projectThumb';
import ShareNetwork from '../shareNetwork';
import TextField from '../../elements/textField';
import CreditCardList from '../creditCardList';
import CustomModal from '../../elements/customModal';
import DescriptionDetail from '../descriptionDetail';
import CheckboxField from '../../elements/checkboxField';
import ContributesListBox from '../contributesListBox';
import ConvertToMyTimezone from '../convertToMyTimezone';
import SliderImagesLightbox from '../sliderImagesLightbox';
import isEmpty from '../../utils/isEmpty';
import ValidateTelephone from '../validateTelephone';

const AuctionDetail = ({
  auctionId,
  getAuctionDetail,
  auctionDetail,
  postNewBid,
  newBid,
  getAuctionBidList,
  auctionBidList,
  getAuctionList,
  auctionList,
  companyId,
  getAuctionSubscribe,
  auctionSubscribe,
  auctionSubscribeList,
  postAuctionSubscribe,
  getAuctionComment,
  auctionComments,
  user,
  requireLogin,
  env,
  postAuctionUserComment,
  auctionUserComment,
  postAuctionCompanyComment,
  getAuctionUserCommentResponse,
  auctionUserCommentsResponse,
  deleteAuctionComment,
  deleteComment,
  getStripeCreditCardlist,
  postStripeCreditCard,
  stripeCreditCardList,
  stripeCreditCard,
  mobileValidatePost,
  validatePhone,
  mobileConfirmPost,
  confirmPhone,
  pusherData,
  postUpdatedUser,
  updatedUser,
  showAlert,
  primaryColor,
  domainUrl,
  locale,
}) => {
  const intl = useIntl();
  // Modals
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalSubscribe, setIsShowModalSubscribe] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    isOpen: false,
    commentId: null,
  });
  const [isConfirmBid, setIsConfirmBid] = useState(false);

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCheckedLegal, setIsCheckedLegal] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedNotifications, setIsCheckedNotifications] = useState(false);
  const [valueBid, setValueBid] = useState(0);

  // List Bids
  const [listUsersBid, setListUsersBid] = useState([]);
  const [listBidTotal, setListBidTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoadingContributesList, setIsLoadingContributesList] = useState(true);

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

  const [lastFour, setLastFour] = useState('');
  const [errorCheckLegal, setErrorCheckLegal] = useState(false);
  const [errorCheckedNotifications, setErrorCheckedNotifications] = useState(false);
  const [errorCheckedTerms, setErrorCheckedTerms] = useState(false);
  const [hasSubmitModalBid, setHasSubmitModalBid] = useState(false);
  const [hasPhoneValidate, setHasPhoneValidate] = useState(false);
  const [showPhoneValidate, setShowPhoneValidate] = useState(false);

  // Not Valid Auction
  const [isAuctionForbiden, setIsAuctionForbiden] = useState(false);

  const todaysDate = new Date(
    moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss')
  );

  const [isEnded, setIsEnded] = useState(false);
  const [isCommingSoon, setIsCommingSoon] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(user ? user.notifications : 0);
  const [value, setValue] = useState('');

  const [bid, setBid] = useState('');

  const inputRef = useRef(null);

  const perPage = 4;

  const isLoggedIn = isDefined(user) ? !!Object.keys(user).length : false;

  const handleCloseModalBid = () => {
    setIsAnonymous(false);
    setIsCheckedLegal(false);
    setIsCheckedTerms(false);
    setIsCheckedNotifications(false);
    setIsShowModal(false);
    setErrorCheckLegal(false);
    setErrorCheckedNotifications(false);
    setErrorCheckedTerms(false);
    setIsErrorSelectCard(false);
    setHasSubmitModalBid(false);
    setIsConfirmBid(false);
    setHasCardSelected(false);
    setLastFour('');
  };

  useEffect(() => {
    getAuctionDetail(auctionId);

    if (isLoggedIn) {
      const { phones } = user;
      setHasPhoneValidate((phones || []).some(phone => phone.verified === 1));
    }
  }, []);

  useEffect(() => {
    if (isEmpty(auctionDetail)) return;
    if (auctionDetail.code === 200) {
      setIsLoadingAuction(false);
      setAuctionDetailInfo(auctionDetail.data);
      setAccessAuction(true);
      setIsCommingSoon(todaysDate < new Date(auctionDetail.data.dateStart));
      setIsEnded(todaysDate > new Date(auctionDetail.data.dateLimit));
      getAuctionBidList(auctionId, page, perPage);
      getAuctionList(companyId, 1, 'dateLimit,desc', '', 5, undefined, undefined, undefined);
      getAuctionComment(auctionId, 1, '4');
      if (auctionDetail.data.private === 1) {
        const auctionPrivateCode = localStorage.privateCode
          ? JSON.parse(localStorage.privateCode)
          : [];
        const auctionCode = auctionPrivateCode.find(item => +item.id === +auctionId);
        if (auctionCode) {
          setPrivateCode(auctionCode.code);
        }
      }
    } else if (auctionDetail.data.code === 403) {
      setAccessAuction(false);
      setIsLoadingAuction(false);
      if (privateCode) {
        setErrorPrivateCode(
          useIntl().formatMessage({
            id: 'auction.detail.error.privateCode',
          })
        );
      }
    } else {
      setIsAuctionForbiden(true);
      setIsLoadingAuction(false);
    }
  }, [auctionDetail]);

  useEffect(() => {
    if (auctionList.code === 200) {
      const list = auctionList.data.data.filter(item => item.id !== +auctionId);
      const listActive = list.filter(item => new Date(item.dateLimit) > todaysDate);
      if (listActive > 0) listActive.length = 3;
      setlistAuctions(listActive);
    }
  }, [auctionList]);

  useEffect(() => {
    if (auctionComments.code === 200) {
      const { data, total } = auctionComments.data;
      setComments([...comments, ...data]);
      setTotalComments(total);
      setLoadingMoreComments(false);

      data.forEach(comment => {
        getAuctionUserCommentResponse(auctionId, comment.id);
      });
    }
  }, [auctionComments]);

  useEffect(() => {
    if (newBid.code === 200) {
      setIsShowModal(false);
      setShowPhoneValidate(false);
      setIsConfirmBid(false);
      const newAuctionDetailInfo = auctionDetailInfo;
      newAuctionDetailInfo.dateLimit = newBid.data.dateLimit;

      if (newAuctionDetailInfo.last_bid) {
        newAuctionDetailInfo.last_bid.value = newBid.data.value;
      } else {
        newAuctionDetailInfo.last_bid = {
          value: newBid.data.value,
        };
      }

      setAuctionDetailInfo(newAuctionDetailInfo);

      const existBid = listUsersBid.find(item => item.id === newBid.data.id);

      if (!existBid) {
        const newBidData = {
          id: newBid.data.id,
          dateAdded: newBid.data.dateAdded,
          hidden: newBid.data.hidden,
          value: newBid.data.value,
          user: null,
          blink: true,
        };

        if (newBid.data.hidden === 0) {
          newBidData.user = {
            name: newBid.data.user.name,
            thumbs: newBid.data.user.thumbs,
          };
        }
        setListUsersBid([newBidData, ...listUsersBid]);
      }

      setHasSubmitModalBid(false);
      setLastFour(null);
      setValueBid('');
      setHasCardSelected(false);

      showAlert({
        alertBox: {
          alertVisible: true,
          alertClass: 'success',
          message: 'Your bid was successful',
          messageId: 'auctions.modal.success.newBid',
        },
      });
    } else if (newBid.status === 400) {
      switch (newBid.data.data) {
        case 'AUCTION_IS_NOT_ON_GOING':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'The auction is over!',
              messageId: 'auctions.modal.error.auctionEnded',
            },
          });
          break;
        case 'INVALID_BID_AMOUNT':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'Your {bidValue} bid was not accepted. However, your bid has been exceeded!',
              messageId: 'auctions.modal.error.invalidBid',
              values: { bidValue: valueBid },
            },
          });
          setTimeout(() => {
            inputRef.current.focus();
          }, 500);
          handleCloseModalBid();
          break;
        case 'USER_IS_NOT_NOTIFIABLE':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'User is not notifiable!',
              messageId: 'auctions.modal.error.userNotNotifiable',
            },
          });
          break;
        case 'USER_IS_NOT_ACTIVE':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'User is not active!',
              messageId: 'auctions.modal.error.userNotActive',
            },
          });
          break;
        case 'USER_DOES_NOT_HAVE_VALIDATED_PHONE':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'User dont have validated phone!',
              messageId: 'auctions.modal.error.userNotValidatedPhone',
            },
          });
          break;
        default:
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'An error has occurred!',
              messageId: 'auctions.modal.error.userNotValidatedPhone',
            },
          });
      }
      setIsConfirmBid(false);
    }
  }, [newBid]);

  useEffect(() => {
    if (auctionUserComment && auctionUserComment.code === 200) {
      const newComment = [auctionUserComment.data];
      if (auctionUserComment.data.comment_id === null) {
        setComments([...newComment, ...comments]);
        setTotalComments(totalComments + 1);
        setLoadingNewComment(false);
      } else {
        const arrayIndx = comments.findIndex(o => o.id === auctionUserComment.data.comment_id);
        const repliesArray = comments[arrayIndx].replies || [];
        comments[arrayIndx].replies = [...auctionUserComment.data, ...repliesArray];
        comments[arrayIndx].totalReplies = comments[arrayIndx].replies.length;
        setComments(comments);
        setLoadingPostReply(false);
      }
    }
  }, [auctionUserComment]);

  useEffect(() => {
    if (deleteComment.code === 200) {
      setModalDelete({ ...modalDelete, isOpen: false });
      showAlert({
        alertBox: {
          alertVisible: true,
          alertClass: 'success',
          message: 'Your comment has been successfully deleted',
          messageId: 'auctions.modal.success.deleteComment',
        },
      });
    }
  }, [deleteComment]);

  useEffect(() => {
    if (auctionUserCommentsResponse.code === 200) {
      const commentsArray = [...comments];
      const { data, total } = auctionUserCommentsResponse.data;

      if (data.length > 0) {
        const arrayIndx = commentsArray.findIndex(o => o.id === data[0].comment_id);
        commentsArray[arrayIndx].replies = data;
        commentsArray[arrayIndx].totalReplies = total;
        setComments(commentsArray);
      }
    }
  }, [auctionUserCommentsResponse]);

  useEffect(() => {
    if (auctionBidList.code === 200) {
      setListUsersBid(filterUnique([...listUsersBid, ...auctionBidList.data.data], 'id'));
      setListBidTotal(auctionBidList.data.total);
      setPage(auctionBidList.data.current_page);
      setIsloadingContributes(false);
      setIsLoadingContributesList(false);
    }
  }, [auctionBidList]);

  useEffect(() => {
    if (auctionSubscribeList.code === 200) {
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_on_start)
        setIsCheckedEmailStart(true);
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_first_bid)
        setIsCheckedEmailFirstBid(true);
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_24h_end)
        setIsCheckedEmail24H(true);
      setIsShowModalSubscribe(true);
    }
  }, [auctionSubscribeList]);

  useEffect(() => {
    if (auctionSubscribe.code === 200) {
      showAlert({
        alertBox: {
          alertVisible: true,
          alertClass: 'success',
          message: 'Your subscription was successful',
          messageId: 'auctions.modal.success.subscribe',
        },
      });
    }
  }, [auctionSubscribe]);

  useEffect(() => {
    if (pusherData) {
      const newAuctionDetailInfo = auctionDetailInfo;
      newAuctionDetailInfo.dateLimit = pusherData.dateLimit;
      if (newAuctionDetailInfo.last_bid === null) {
        newAuctionDetailInfo.last_bid = { value: pusherData.value };
      } else {
        newAuctionDetailInfo.last_bid.value = pusherData.value;
      }
      newAuctionDetailInfo.blink = true;
      setAuctionDetailInfo(newAuctionDetailInfo);
      const existBid = listUsersBid.find(item => item.id === pusherData.id);
      if (!existBid) {
        const newPusherData = {
          id: pusherData.id,
          dateAdded: pusherData.dateAdded,
          hidden: pusherData.userName ? 0 : 1,
          value: pusherData.value,
          user: {
            name: pusherData.userName,
            thumbs: pusherData.userThumbs,
          },
          blink: true,
        };
        setListBidTotal(listBidTotal + 1);
        setListUsersBid([newPusherData, ...listUsersBid]);
      }
    }
  }, [pusherData]);

  useEffect(() => {
    if (updatedUser && updatedUser.code === 200) {
      const user = updatedUser.data;
      const userLocalStorage = JSON.parse(localStorage.user);
      userLocalStorage.notifications = user.notifications;
      localStorage.setItem('user', JSON.stringify(userLocalStorage));
      setHasNotifications(1);
      if (hasNotifications === 0 && isCheckedNotifications) postNewBid(bid, auctionDetailInfo.id);
    }
  }, [updatedUser]);

  useEffect(() => {
    if (!isShowModal) {
      setIsAnonymous(false);
      setIsCheckedLegal(false);
      setIsCheckedTerms(false);
      setIsCheckedNotifications(false);

      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isShowModal]);

  useEffect(() => {
    if (confirmPhone.code === 200) setHasPhoneValidate(true);
  }, [confirmPhone]);

  if (isLoadingAuction) return <Loading />;

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

  const auctionDescriptionLang = type => {
    let description;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      description = auctionDetailInfo[type];
    } else if (auctionDetailInfo[`${type}_en`]) {
      description = auctionDetailInfo[`${type}_en`];
    } else {
      description = auctionDetailInfo[type];
    }
    return description;
  };

  const selectedCheck = (e, i) => {
    const { checked } = e.target;

    if (i === 0) {
      setIsAnonymous(checked);
    } else if (i === 1) {
      setIsCheckedLegal(checked);
      if (errorCheckLegal && checked) setErrorCheckLegal(false);
    } else if (i === 2) {
      setIsCheckedTerms(checked);
      if (errorCheckedTerms && checked) setErrorCheckedTerms(false);
    } else if (i === 3) {
      setIsCheckedNotifications(checked);
      if (errorCheckedNotifications && checked) setErrorCheckedNotifications(false);
    }
  };

  const modalShowSubscribe = () => {
    if (!requireLogin()) {
      return;
    }
    getAuctionSubscribe(auctionId);
  };

  const selectedCheckSubscribe = (e, i) => {
    const { checked } = e.target;

    if (i === 0) setIsCheckedEmailStart(checked);
    if (i === 1) setIsCheckedEmailFirstBid(checked);
    if (i === 2) setIsCheckedEmail24H(checked);
  };

  const handleCancelModalSubscribe = () => {
    setIsCheckedEmailStart(false);
    setIsCheckedEmailFirstBid(false);
    setIsCheckedEmail24H(false);
    setIsShowModalSubscribe(false);
  };

  const handleClickBid = value => {
    if (!requireLogin()) {
      return;
    }

    // StartBid
    if (!auctionDetailInfo.last_bid) {
      if (
        value < auctionDetailInfo.bid_start ||
        value > auctionDetailInfo.bid_start + auctionDetailInfo.bid_max_interval
      ) {
        setError(
          intl.formatMessage(
            {
              id: 'auction.detail.error.startBidInvalid',
            },
            {
              bidStart: auctionDetailInfo.bid_start,
              maxBid: auctionDetailInfo.bid_start + auctionDetailInfo.bid_max_interval,
            }
          )
        );
        return;
      }
    }

    if (auctionDetailInfo.last_bid) {
      if (
        value <= auctionDetailInfo.last_bid.value ||
        value > auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_max_interval ||
        value < auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval
      ) {
        setError(
          intl.formatMessage(
            {
              id: 'auction.detail.error.startBidInvalid',
            },
            {
              bidStart: auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval,
              maxBid: auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_max_interval,
            }
          )
        );
        return;
      }
    }
    const { phones } = JSON.parse(localStorage.user || '{ "phones": [] }');
    setShowPhoneValidate(phones.some(phone => phone.verified === 1));
    setIsShowModal(true);
    setError('');
    setValueBid(value);
  };

  const showMoreContributes = () => {
    getAuctionBidList(auctionDetailInfo.id, Math.floor(listUsersBid.length / perPage) + 1, perPage);
    setIsloadingContributes(true);
  };

  const handleConfirmBid = isAnonymous => {
    const { phones } = JSON.parse(localStorage.user);
    setHasPhoneValidate(phones.some(phone => phone.verified === 1));

    setHasSubmitModalBid(true);

    if (!isCheckedLegal) setErrorCheckLegal(true);
    if (!isCheckedNotifications) setErrorCheckedNotifications(true);
    if (!isCheckedTerms) setErrorCheckedTerms(true);

    if (auctionDetailInfo.cc === 1 && !hasCardSelected) {
      setIsErrorSelectCard(true);
      return;
    }
    if (auctionDetailInfo.cc === 1 && hasCardSelected) setIsErrorSelectCard(false);

    if (
      !isCheckedLegal ||
      (hasNotifications === 0 && !isCheckedNotifications) ||
      !isCheckedTerms ||
      !hasPhoneValidate ||
      (auctionDetailInfo.cc === 1 && !hasCardSelected)
    )
      return;

    const bid = {
      value: parseInt(+valueBid, 10),
      hidden: isAnonymous || 0,
      private_code: privateCode,
    };

    if (auctionDetailInfo.cc === 1) bid.last4 = lastFour;

    if (hasNotifications === 0 && isCheckedNotifications) {
      setBid(bid);
      postUpdatedUser(JSON.parse(localStorage.user).id, { notifications: '1' });
    } else {
      postNewBid(bid, auctionDetailInfo.id);
    }

    setIsConfirmBid(true);
    setValue('');
  };

  const handleChangePrivateCode = e => {
    setPrivateCode(e.target.value);
  };

  const handleConfirmPrivateCode = () => {
    if (privateCode) {
      const auctionPrivateCode = localStorage.privateCode
        ? JSON.parse(localStorage.privateCode)
        : [];
      const auctionCode = auctionPrivateCode.find(item => +item.id === +auctionId);
      if (auctionCode) {
        auctionCode.code = privateCode;
      } else {
        auctionPrivateCode.push({
          id: auctionId,
          code: privateCode,
        });
      }

      localStorage.setItem('privateCode', JSON.stringify(auctionPrivateCode));
      getAuctionDetail(auctionId, privateCode);
    }
  };

  const textPrivacyandTerms = () => {
    const initialText = useIntl().formatMessage({
      id: 'auctions.private.iagree',
    });
    const privacyPolicy = useIntl().formatMessage({
      id: 'auctions.private.privacy',
    });
    // TODO: Uncomment when there is content on the terms and conditions page
    // const textAnd = useIntl().formatMessage({
    //   id: 'and',
    // });
    // const termsConditions = useIntl().formatMessage({
    //   id: 'footer.menu.terms',
    // });

    // const html = `
    //   ${initialText}
    //   <a target='_blank' href='/privacy'>${privacyPolicy}</a>
    //   ${textAnd}
    //   <a target='_blank' href='/terms'>${termsConditions}</a>.
    // `;

    const html = `
      ${initialText}
      <a target='_blank' href='/privacy'>${privacyPolicy}</a>.
    `;

    return html;
  };

  const handleConfirmSubscribe = (
    isCheckedEmailStart,
    isCheckedEmailFirstBid,
    isCheckedEmail24H
  ) => {
    const auctionStart = isCheckedEmailStart || 0;
    const auctionFirstBid = isCheckedEmailFirstBid || 0;
    const auction24hEnd = isCheckedEmail24H || 0;

    const subscribeChecked = {
      auction_on_start: auctionStart,
      auction_first_bid: auctionFirstBid,
      auction_24h_end: auction24hEnd,
      private_code: privateCode,
    };
    postAuctionSubscribe(auctionId, subscribeChecked);
    setIsShowModalSubscribe(false);
  };

  const onSubmitComment = e => {
    e.preventDefault();

    if (userComment && requireLogin()) {
      postAuctionUserComment(auctionId, { comment: userComment, private_code: privateCode });
      setLoadingNewComment(true);
      setUserComment('');
    }
  };

  const onSubmitResponse = (e, commentId) => {
    e.preventDefault();

    if (reply) {
      setLoadingPostReply(true);
      postAuctionUserComment(auctionId, {
        comment: reply,
        comment_id: commentId,
        private_code: privateCode,
      });
      setReply('');
    }
  };

  const loadMore = (commentId, page) => {
    deleteAuctionComment(auctionId, commentId, 3, page + 1);
  };

  const handleOpenDeleteCommentModal = commentId => {
    setModalDelete({
      isOpen: true,
      commentId,
    });
  };

  const handleDeleteComment = commentId => {
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
        currentComments[i].replies.forEach((reply, indx) => {
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
    setPage(page + 1);
  };

  const selectedCard = card => {
    setLastFour(card);
    setHasCardSelected(true);
  };

  const onExpiry = () => {
    setIsEnded(true);
  };

  const onStart = () => {
    setIsCommingSoon(false);
  };

  const valueBidTextField = e => {
    setValue(e.target.value.replace(/[^0-9]/gi, ''));
  };

  const handleMinValue = () => {
    if (!auctionDetailInfo.last_bid) return auctionDetailInfo.bid_start;
    if (auctionDetailInfo.last_bid)
      return auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval;
  };

  let supported = {};
  if (accessAuction && auctionDetailInfo.recipient && auctionDetailInfo.recipient.institution) {
    supported.title = auctionDetailInfo.recipient.institution.name;
    supported.image = auctionDetailInfo.recipient.institution.thumbs.thumb;
    supported.id = auctionDetailInfo.recipient.institution.id;
    supported.link = `${domainUrl}${locale}/npo/detail/${supported.id}-${slugify(
      auctionDetailInfo.recipient.institution.name
    )}`;
  } else if (auctionDetailInfo.project) {
    supported.title = auctionDetailInfo.project.title;
    supported.image = auctionDetailInfo.project.images
      ? `${env.cdn_uploads_url}/${auctionDetailInfo.project.images[0].image}`
      : `${env.cdn_static_url}/frontend/assets/no-image.jpg`;
    supported.id = auctionDetailInfo.project.id;
    supported.link = `/${locale}/projects/detail/${supported.id}-${slugify(
      auctionDetailInfo.project.title
    )}`;
  } else {
    supported = null;
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
      {isAuctionForbiden && (
        <Row className="not-found mt-5">
          <NoMatch
            color={primaryColor}
            errorMessage={useIntl().formatMessage({ id: 'auction.not.found' })}
            link="/auction/list"
            linkText={useIntl().formatMessage({ id: 'back.to.auctions' })}
          />
        </Row>
      )}
      {!isAuctionForbiden && !accessAuction && (
        <Row>
          <Col sm={6} className="mdPrivateCode mx-auto mt-5">
            <Row>
              <h3 className="pb-4 mb-4" data-testid="title-private">
                <FormattedMessage id="auctions.private.supportes" />
              </h3>
            </Row>
            <Row>
              <TextField
                dataTestId="input-private-code"
                field="input-code"
                className="private-code pb-5"
                type="text"
                onChange={handleChangePrivateCode}
                error={errorPrivateCode}
                placeholder={useIntl().formatMessage({
                  id: 'auction.private.insertCode',
                })}
              />
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Col sm={6} className="d-flex">
                  <Button
                    dataTestId="btn-private-cancel"
                    className="auction-private-cancel mr-3"
                    extraClass="dark"
                    href="/auction/list"
                    text={useIntl().formatMessage({
                      id: 'auction.private.cancel',
                    })}
                  />
                  <Button
                    dataTestId="btn-private-validate"
                    className="auction-private-cancel"
                    extraClass="success-full"
                    onClick={handleConfirmPrivateCode}
                    text={useIntl().formatMessage({
                      id: 'auction.private.validate',
                    })}
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {!isAuctionForbiden && accessAuction && (
        <>
          <Row className="d-none d-sm-block">
            <Col md={12} className="content-wrapper">
              {supported && (
                <Row className="content-header hidden-xs">
                  <Col sm={12} className="text-center">
                    <div className="auction-supported" data-testid="auction-support">
                      <FormattedMessage id="auctions.public.supportes" />
                    </div>
                    <a
                      className="auction-supported-link"
                      href={supported.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h1 className="text-center" style={{ color: primaryColor }}>
                        <img src={supported.image} alt="thumb-supported" />
                        {supported.title}
                      </h1>
                    </a>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={10} className="offset-lg-1">
              <Row className="box mb-4">
                <Col
                  sm={12}
                  className="countdown text-center hidden-xs"
                  data-testid="div-countdown"
                >
                  {(auctionDetailInfo.status === 'A' || auctionDetailInfo.status === 'F') && (
                    <Countdown
                      onExpiry={onExpiry}
                      onStart={onStart}
                      dataTestId="auction-detail"
                      startDate={auctionDetailInfo.dateStart}
                      endDate={auctionDetailInfo.dateLimit}
                    />
                  )}
                  {auctionDetailInfo.status === 'P' && (
                    <div className={`status-${auctionDetailInfo.status}`}>
                      <FormattedMessage id="auction.detail.status.pending" />
                    </div>
                  )}
                </Col>
                <Col sm={12} className="text-center hidden-xs">
                  <div className="end-date">
                    <div className="mb-2" data-testid="end-date-info">
                      <FormattedMessage id="auction.detail.ends" />
                      <ConvertToMyTimezone
                        date={auctionDetailInfo.dateLimit}
                        locale={locale}
                        format="LLLL"
                      />
                    </div>
                    <FormattedMessage id="auction.detail.infoBid" />
                  </div>
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col sm={12}>
                      <h2 className="auction-title mb-2 d-block d-sm-none">{auctionTitle()}</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} data-testid="slide-image-multiple">
                      {auctionDetailInfo.images && auctionDetailInfo.images.length > 0 && (
                        <SliderImagesLightbox
                          video={auctionDetailInfo.video}
                          images={auctionDetailInfo.images}
                          env={env}
                        />
                      )}
                      {auctionDetailInfo.images && auctionDetailInfo.images.length === 0 && (
                        <div
                          data-testid="slide-one-image"
                          className="slider-image"
                          style={{
                            backgroundImage: `url(${env.img_cdn}/frontend/assets/no-image.jpg)`,
                          }}
                        />
                      )}
                    </Col>
                    <AuctionDetailRigth
                      isEnded={isEnded}
                      isCommingSoon={isCommingSoon}
                      auctionTitle={auctionTitle()}
                      auction={auctionDetailInfo}
                      handleClickBid={handleClickBid}
                      showModalSubscribe={modalShowSubscribe}
                      minValue={handleMinValue()}
                      error={error}
                      user={user}
                      inputBidValue={value}
                      valueBidTextField={valueBidTextField}
                      primaryColor={primaryColor}
                      env={env}
                      inputRef={inputRef}
                      domainUrl={domainUrl}
                      locale={locale}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <ShareNetwork
            title={auctionTitle()}
            image={auctionDetailInfo.images[0].image_name}
            description={auctionDetailInfo.description}
          />
          <Row className="content">
            <Col sm={12}>
              <Sticky
                style={{ position: 'relative' }}
                stickyClassName="sticky-sidebar"
                topOffset={0}
                bottomOffset={0}
                hideOnBoundaryHit={false}
                boundaryElement=".content"
              >
                <AuctionLastBid
                  auction={auctionDetailInfo}
                  isEnded={isEnded}
                  isCommingSoon={isCommingSoon}
                  handleClickBid={handleClickBid}
                  isShowModal={modalShowSubscribe}
                  error={error}
                  minValue={handleMinValue()}
                  inputBidValue={value}
                  valueBidTextField={valueBidTextField}
                  primaryColor={primaryColor}
                />
              </Sticky>
            </Col>
            <Col sm={12} md={12} lg={{ span: 6, offset: 1 }}>
              <DescriptionDetail
                dataTestIdTitle="description"
                dataTestIdDescription="description-text"
                title={useIntl().formatMessage({
                  id: 'auction.description',
                })}
                description={auctionDescriptionLang('description')}
                color={primaryColor}
              />
              <DescriptionDetail
                dataTestIdTitle="shipping"
                dataTestIdDescription="shipping-text"
                title={useIntl().formatMessage({
                  id: 'auction.shipping',
                })}
                description={auctionDescriptionLang('shipping_description')}
                color={primaryColor}
              />
              <DescriptionDetail
                dataTestIdTitle="payment"
                dataTestIdDescription="payment-text"
                title={useIntl().formatMessage({
                  id: 'auction.payment',
                })}
                description={auctionDescriptionLang('payment_description')}
                color={primaryColor}
              />
              <h3 className="mt-5">
                <FormattedMessage id="auction.detail.titleComments" />
              </h3>
              <div className="comments-box">
                <CreateComment
                  onSubmitComment={onSubmitComment}
                  onChange={e => setUserComment(e.target.value)}
                  comment={userComment}
                  postAsUser={postAuctionUserComment}
                  postAsCompany={postAuctionCompanyComment}
                  loadingNewComment={loadingNewComment}
                  thumb={thumb}
                  env={env}
                />
                <Comments
                  requireLogin={requireLogin}
                  onSubmitResponse={onSubmitResponse}
                  getEmployeeName={getEmployeeName}
                  onChange={e => setReply(e.target.value)}
                  comments={comments}
                  reply={reply}
                  laodingPostReply={loadingPostReply}
                  deleteComment={handleOpenDeleteCommentModal}
                  totalComments={totalComments}
                  loadMore={loadMore}
                  loadingMoreComments={loadingMoreComments}
                  loadMoreComments={loadMoreComments}
                  user={user || {}}
                  thumb={thumb}
                  env={env.cdn_static_url}
                  primaryColor={primaryColor}
                />
              </div>
            </Col>
            <Col className="mt-5" sm={12} md={12} lg={{ span: 4, offset: 0 }}>
              <ContributesListBox
                isAuction={true}
                testeId="ContributesListBox"
                title={useIntl().formatMessage({
                  id: 'auction.last.bids',
                })}
                contributesList={listUsersBid}
                loadingContributesList={isLoadingContributesList}
                loadingContributes={isloadingContributes}
                total={listBidTotal}
                showMoreContributes={showMoreContributes}
                currency={auctionDetailInfo.currency.small}
                env={env}
                primaryColor={primaryColor}
              />
              {auctionDetailInfo.project && (
                <Row className="mt-5">
                  <ProjectThumb
                    project={auctionDetailInfo.project}
                    serverlessResizeImage={env.cdn_uploads_url}
                    lang={localStorage.lang || 'pt'}
                    cols={12}
                    showStatus={false}
                    status=""
                  />
                </Row>
              )}
            </Col>
          </Row>
          {listAuctions.length > 0 && (
            <AuctionsList
              title={useIntl().formatMessage({
                id: 'auction.detail.otherAuctions',
              })}
              listAuctions={listAuctions}
              buttonTitle={useIntl().formatMessage({
                id: 'auction.detail.seeAll',
              })}
              primaryColor={primaryColor}
              env={env}
            />
          )}
        </>
      )}
      {accessAuction && isLoggedIn && (
        <>
          <CustomModal
            bodyPadding="14px"
            dialogClassName="auction-modal-bid"
            onHide={() => handleCloseModalBid()}
            show={isShowModal}
            title={useIntl().formatMessage({
              id: 'auction.modal.bid.confirm',
            })}
            actionsChildren={
              <>
                <Button
                  extraClass="dark"
                  onClick={() => handleCloseModalBid()}
                  text={useIntl().formatMessage({
                    id: 'auction.private.cancel',
                  })}
                />
                <Button
                  extraClass="success-full"
                  onClick={() => handleConfirmBid(isAnonymous)}
                  text={useIntl().formatMessage({
                    id: 'auction.private.confirm',
                  })}
                  disabled={isConfirmBid}
                />
              </>
            }
            bodyChildren={
              <>
                <p className="font-weight-bold">
                  <FormattedMessage
                    id="auction.modal.bid.confirmText"
                    values={{
                      value: (
                        <FormattedNumber
                          value={parseInt(+valueBid, 10)}
                          style="currency"
                          currency={auctionDetailInfo.currency.small}
                        />
                      ),
                    }}
                  />
                </p>
                <div className="mb-3">
                  {useIntl().formatMessage({
                    id: 'auction.modal.bid.email',
                  })}
                  <br />
                  {user.email}
                  <span> (</span>
                  <a
                    href="/user/settings"
                    title={useIntl().formatMessage({
                      id: 'auction.modal.bid.chageEmail',
                    })}
                  >
                    {useIntl().formatMessage({
                      id: 'auction.modal.bid.chageEmail',
                    })}
                  </a>
                  <span>)</span>
                </div>
                {auctionDetailInfo.cc === 1 && (
                  <CreditCardList
                    getStripeCreditCardlist={getStripeCreditCardlist}
                    postStripeCreditCard={postStripeCreditCard}
                    stripeCreditCardList={stripeCreditCardList}
                    stripeCreditCard={stripeCreditCard}
                    showAddBtnCreditCard={true}
                    env={env.stripe}
                    isErrorSelectCard={isErrorSelectCard}
                    selectedCard={selectedCard}
                  />
                )}
                {!showPhoneValidate && (
                  <ValidateTelephone
                    localStorage={localStorage}
                    mobileValidatePost={mobileValidatePost}
                    validatePhone={validatePhone}
                    mobileConfirmPost={mobileConfirmPost}
                    confirmPhone={confirmPhone}
                    hasError={!hasPhoneValidate && hasSubmitModalBid}
                  />
                )}
                <div className="mb-2">
                  <CheckboxField
                    dataTestId="checkbox-anonymous"
                    className="mb-2 checkbox-modal-bid"
                    label={useIntl().formatMessage({
                      id: 'auction.modal.bid.anonymousBid',
                    })}
                    onChange={e => selectedCheck(e, 0)}
                    checked={isAnonymous}
                  />
                </div>
                <div className="mb-2">
                  <CheckboxField
                    className="checkbox-modal-bid"
                    label={useIntl().formatMessage({
                      id: 'auction.modal.bid.check1',
                    })}
                    onChange={e => selectedCheck(e, 1)}
                    checked={isCheckedLegal}
                  />
                  {errorCheckLegal && hasSubmitModalBid && (
                    <span className="hasError">
                      <FormattedMessage id="auctions.modal.required" />
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  {hasNotifications === 0 && (
                    <CheckboxField
                      className="checkbox-modal-bid"
                      label={useIntl().formatMessage({
                        id: 'auction.modal.bid.check3',
                      })}
                      onChange={e => selectedCheck(e, 3)}
                      checked={isCheckedNotifications}
                    />
                  )}
                  {hasNotifications === 0 && errorCheckedNotifications && hasSubmitModalBid && (
                    <span className="hasError">
                      <FormattedMessage id="auctions.modal.required" />
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <CheckboxField
                    className="checkbox-modal-bid"
                    label={<div dangerouslySetInnerHTML={{ __html: textPrivacyandTerms() }} />}
                    onChange={e => selectedCheck(e, 2)}
                    checked={isCheckedTerms}
                  />
                  {errorCheckedTerms && hasSubmitModalBid && (
                    <span className="hasError">
                      <FormattedMessage id="auctions.modal.required" />
                    </span>
                  )}
                </div>
              </>
            }
            size="lg"
          />
          <CustomModal
            bodyPadding="14px"
            dialogClassName="auction-modal-subscribe"
            actionsChildren={
              <>
                <Button
                  extraClass="dark"
                  onClick={() => handleCancelModalSubscribe()}
                  text={useIntl().formatMessage({
                    id: 'auction.private.cancel',
                  })}
                />
                <Button
                  extraClass="success-full"
                  onClick={() =>
                    handleConfirmSubscribe(
                      isCheckedEmailStart,
                      isCheckedEmailFirstBid,
                      isCheckedEmail24H
                    )
                  }
                  text={useIntl().formatMessage({
                    id: 'auction.private.save',
                  })}
                />
              </>
            }
            bodyChildren={
              <div>
                <CheckboxField
                  dataTestId="checkStart"
                  label={useIntl().formatMessage({
                    id: 'auction.modal.subscribe.check1',
                  })}
                  onChange={e => selectedCheckSubscribe(e, 0)}
                  checked={isCheckedEmailStart}
                />
                <CheckboxField
                  dataTestId="checkEmailBid"
                  label={useIntl().formatMessage({
                    id: 'auction.modal.subscribe.check2',
                  })}
                  onChange={e => selectedCheckSubscribe(e, 1)}
                  checked={isCheckedEmailFirstBid}
                />
                <CheckboxField
                  dataTestId="checkEmail24"
                  label={useIntl().formatMessage({
                    id: 'auction.modal.subscribe.check3',
                  })}
                  onChange={e => selectedCheckSubscribe(e, 2)}
                  checked={isCheckedEmail24H}
                />
              </div>
            }
            onHide={() => handleCancelModalSubscribe()}
            show={isShowModalSubscribe}
            title={useIntl().formatMessage({
              id: 'auction.detail.subscribeAuction',
            })}
          />
        </>
      )}
      {modalDelete.isOpen && (
        <CustomModal
          bodyPadding="14px"
          dialogClassName="auction-modal-comment-delete"
          actionsChildren={
            <>
              <Button
                extraClass="dark"
                onClick={() => setModalDelete({ ...modalDelete, isOpen: false })}
                text={useIntl().formatMessage({
                  id: 'auction.private.cancel',
                })}
              />
              <Button
                extraClass="success-full"
                onClick={() => handleDeleteComment(modalDelete.commentId)}
                text={useIntl().formatMessage({
                  id: 'auction.modal.comment.Confirm',
                })}
              />
            </>
          }
          bodyChildren={<FormattedMessage id="auctions.comment.message.delete" />}
          onHide={() => setModalDelete({ ...modalDelete, isOpen: false })}
          show={modalDelete.isOpen}
          title={useIntl().formatMessage({
            id: 'auction.modal.comment.title',
          })}
        />
      )}
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
  newBid: PropTypes.object,
  auctionList: PropTypes.object,
  auctionBidList: PropTypes.object,
  requireLogin: PropTypes.func,
  companyId: PropTypes.number,
  auctionSubscribe: PropTypes.object,
  auctionSubscribeList: PropTypes.object,
  auctionComments: PropTypes.object,
  auctionUserCommentsResponse: PropTypes.object,
  deleteAuctionComment: PropTypes.func,
  deleteComment: PropTypes.object,
  mobileValidatePost: PropTypes.func,
  validatePhone: PropTypes.object,
  mobileConfirmPost: PropTypes.func,
  confirmPhone: PropTypes.object,
  user: PropTypes.object,
  env: PropTypes.shape({
    img_cdn: PropTypes.string,
    cdn_static_url: PropTypes.string,
    cdn_uploads_url: PropTypes.string,
    stripe: PropTypes.object,
  }),
  pusherData: PropTypes.object,
  postUpdatedUser: PropTypes.func,
  updatedUser: PropTypes.object,
  showAlert: PropTypes.func,
  primaryColor: PropTypes.string,
  domainUrl: PropTypes.string,
  locale: PropTypes.string,
};

export default AuctionDetail;
