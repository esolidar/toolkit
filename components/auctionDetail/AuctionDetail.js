"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactStickyEl = _interopRequireDefault(require("react-sticky-el"));

var _utils = require("../../utils");

var _button = _interopRequireDefault(require("../../elements/button"));

var _noMatch = _interopRequireDefault(require("../noMatch"));

var _loading = _interopRequireDefault(require("../loading"));

var _comments = _interopRequireDefault(require("../comments"));

var _AuctionLastBid = _interopRequireDefault(require("./AuctionLastBid"));

var _countdown = _interopRequireDefault(require("../countdown"));

var _createComment = _interopRequireDefault(require("../comments/createComment"));

var _AuctionDetailRigth = _interopRequireDefault(require("./AuctionDetailRigth"));

var _auctionsList = _interopRequireDefault(require("./auctionsList"));

var _projectThumb = _interopRequireDefault(require("../projectThumb"));

var _shareNetwork = _interopRequireDefault(require("../shareNetwork"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _creditCardList = _interopRequireDefault(require("../creditCardList"));

var _customModal = _interopRequireDefault(require("../../elements/customModal"));

var _descriptionDetail = _interopRequireDefault(require("../descriptionDetail"));

var _checkboxField = _interopRequireDefault(require("../../elements/checkboxField"));

var _contributesListBox = _interopRequireDefault(require("../contributesListBox"));

var _convertToMyTimezone = _interopRequireDefault(require("../convertToMyTimezone"));

var _sliderImagesLightbox = _interopRequireDefault(require("../sliderImagesLightbox"));

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _validateTelephone = _interopRequireDefault(require("../validateTelephone"));

var _jsxRuntime = require("react/jsx-runtime");

var AuctionDetail = function AuctionDetail(_ref) {
  var auctionId = _ref.auctionId,
      getAuctionDetail = _ref.getAuctionDetail,
      auctionDetail = _ref.auctionDetail,
      postNewBid = _ref.postNewBid,
      newBid = _ref.newBid,
      getAuctionBidList = _ref.getAuctionBidList,
      auctionBidList = _ref.auctionBidList,
      getAuctionList = _ref.getAuctionList,
      auctionList = _ref.auctionList,
      companyId = _ref.companyId,
      getAuctionSubscribe = _ref.getAuctionSubscribe,
      auctionSubscribe = _ref.auctionSubscribe,
      auctionSubscribeList = _ref.auctionSubscribeList,
      postAuctionSubscribe = _ref.postAuctionSubscribe,
      getAuctionComment = _ref.getAuctionComment,
      auctionComments = _ref.auctionComments,
      user = _ref.user,
      requireLogin = _ref.requireLogin,
      env = _ref.env,
      postAuctionUserComment = _ref.postAuctionUserComment,
      auctionUserComment = _ref.auctionUserComment,
      postAuctionCompanyComment = _ref.postAuctionCompanyComment,
      getAuctionUserCommentResponse = _ref.getAuctionUserCommentResponse,
      auctionUserCommentsResponse = _ref.auctionUserCommentsResponse,
      deleteAuctionComment = _ref.deleteAuctionComment,
      deleteComment = _ref.deleteComment,
      getStripeCreditCardlist = _ref.getStripeCreditCardlist,
      postStripeCreditCard = _ref.postStripeCreditCard,
      stripeCreditCardList = _ref.stripeCreditCardList,
      stripeCreditCard = _ref.stripeCreditCard,
      mobileValidatePost = _ref.mobileValidatePost,
      validatePhone = _ref.validatePhone,
      mobileConfirmPost = _ref.mobileConfirmPost,
      confirmPhone = _ref.confirmPhone,
      pusherData = _ref.pusherData,
      postUpdatedUser = _ref.postUpdatedUser,
      updatedUser = _ref.updatedUser,
      showAlert = _ref.showAlert,
      primaryColor = _ref.primaryColor,
      domainUrl = _ref.domainUrl,
      locale = _ref.locale;

  // Modals
  var _useState = (0, _react.useState)(false),
      isShowModal = _useState[0],
      setIsShowModal = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isShowModalSubscribe = _useState2[0],
      setIsShowModalSubscribe = _useState2[1];

  var _useState3 = (0, _react.useState)({
    isOpen: false,
    commentId: null
  }),
      modalDelete = _useState3[0],
      setModalDelete = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      isConfirmBid = _useState4[0],
      setIsConfirmBid = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      isAnonymous = _useState5[0],
      setIsAnonymous = _useState5[1];

  var _useState6 = (0, _react.useState)(false),
      isCheckedLegal = _useState6[0],
      setIsCheckedLegal = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      isCheckedTerms = _useState7[0],
      setIsCheckedTerms = _useState7[1];

  var _useState8 = (0, _react.useState)(false),
      isCheckedNotifications = _useState8[0],
      setIsCheckedNotifications = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      valueBid = _useState9[0],
      setValueBid = _useState9[1]; // List Bids


  var _useState10 = (0, _react.useState)([]),
      listUsersBid = _useState10[0],
      setListUsersBid = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      listBidTotal = _useState11[0],
      setListBidTotal = _useState11[1];

  var _useState12 = (0, _react.useState)(1),
      page = _useState12[0],
      setPage = _useState12[1];

  var _useState13 = (0, _react.useState)(true),
      isLoadingContributesList = _useState13[0],
      setIsLoadingContributesList = _useState13[1]; // Create Comments


  var _useState14 = (0, _react.useState)([]),
      userComment = _useState14[0],
      setUserComment = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      loadingNewComment = _useState15[0],
      setLoadingNewComment = _useState15[1];

  var _useState16 = (0, _react.useState)(''),
      reply = _useState16[0],
      setReply = _useState16[1];

  var _useState17 = (0, _react.useState)(''),
      error = _useState17[0],
      setError = _useState17[1]; // Comments


  var _useState18 = (0, _react.useState)([]),
      comments = _useState18[0],
      setComments = _useState18[1];

  var _useState19 = (0, _react.useState)(0),
      totalComments = _useState19[0],
      setTotalComments = _useState19[1];

  var _useState20 = (0, _react.useState)(false),
      loadingPostReply = _useState20[0],
      setLoadingPostReply = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      loadingMoreComments = _useState21[0],
      setLoadingMoreComments = _useState21[1];

  var _useState22 = (0, _react.useState)([]),
      listAuctions = _useState22[0],
      setlistAuctions = _useState22[1]; // Private Auction


  var _useState23 = (0, _react.useState)(''),
      privateCode = _useState23[0],
      setPrivateCode = _useState23[1];

  var _useState24 = (0, _react.useState)(''),
      errorPrivateCode = _useState24[0],
      setErrorPrivateCode = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      accessAuction = _useState25[0],
      setAccessAuction = _useState25[1];

  var _useState26 = (0, _react.useState)({}),
      auctionDetailInfo = _useState26[0],
      setAuctionDetailInfo = _useState26[1];

  var _useState27 = (0, _react.useState)(true),
      isLoadingAuction = _useState27[0],
      setIsLoadingAuction = _useState27[1]; // Subscribe


  var _useState28 = (0, _react.useState)(false),
      isCheckedEmailStart = _useState28[0],
      setIsCheckedEmailStart = _useState28[1];

  var _useState29 = (0, _react.useState)(false),
      isCheckedEmailFirstBid = _useState29[0],
      setIsCheckedEmailFirstBid = _useState29[1];

  var _useState30 = (0, _react.useState)(false),
      isCheckedEmail24H = _useState30[0],
      setIsCheckedEmail24H = _useState30[1];

  var _useState31 = (0, _react.useState)(false),
      isloadingContributes = _useState31[0],
      setIsloadingContributes = _useState31[1];

  var _useState32 = (0, _react.useState)(false),
      isErrorSelectCard = _useState32[0],
      setIsErrorSelectCard = _useState32[1];

  var _useState33 = (0, _react.useState)(false),
      hasCardSelected = _useState33[0],
      setHasCardSelected = _useState33[1];

  var _useState34 = (0, _react.useState)(''),
      lastFour = _useState34[0],
      setLastFour = _useState34[1];

  var _useState35 = (0, _react.useState)(false),
      errorCheckLegal = _useState35[0],
      setErrorCheckLegal = _useState35[1];

  var _useState36 = (0, _react.useState)(false),
      errorCheckedNotifications = _useState36[0],
      setErrorCheckedNotifications = _useState36[1];

  var _useState37 = (0, _react.useState)(false),
      errorCheckedTerms = _useState37[0],
      setErrorCheckedTerms = _useState37[1];

  var _useState38 = (0, _react.useState)(false),
      hasSubmitModalBid = _useState38[0],
      setHasSubmitModalBid = _useState38[1];

  var _useState39 = (0, _react.useState)(false),
      hasPhoneValidate = _useState39[0],
      setHasPhoneValidate = _useState39[1];

  var _useState40 = (0, _react.useState)(false),
      showPhoneValidate = _useState40[0],
      setShowPhoneValidate = _useState40[1]; // Not Valid Auction


  var _useState41 = (0, _react.useState)(false),
      isAuctionForbiden = _useState41[0],
      setIsAuctionForbiden = _useState41[1];

  var todaysDate = new Date(_momentTimezone["default"].tz(new Date(), _momentTimezone["default"].tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));

  var _useState42 = (0, _react.useState)(false),
      isEnded = _useState42[0],
      setIsEnded = _useState42[1];

  var _useState43 = (0, _react.useState)(false),
      isCommingSoon = _useState43[0],
      setIsCommingSoon = _useState43[1];

  var _useState44 = (0, _react.useState)(user ? user.notifications : 0),
      hasNotifications = _useState44[0],
      setHasNotifications = _useState44[1];

  var _useState45 = (0, _react.useState)(''),
      value = _useState45[0],
      setValue = _useState45[1];

  var _useState46 = (0, _react.useState)(''),
      bid = _useState46[0],
      setBid = _useState46[1];

  var inputRef = (0, _react.useRef)(null);
  var perPage = 5;
  var isLoggedIn = (0, _utils.isDefined)(user) ? !!Object.keys(user).length : false;

  var handleCloseModalBid = function handleCloseModalBid() {
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

  (0, _react.useEffect)(function () {
    getAuctionDetail(auctionId);

    if (isLoggedIn) {
      var phones = user.phones;
      setHasPhoneValidate((phones || []).some(function (phone) {
        return phone.verified === 1;
      }));
    }
  }, []);
  (0, _react.useEffect)(function () {
    if ((0, _isEmpty["default"])(auctionDetail)) return;

    if (auctionDetail.code === 200) {
      setIsLoadingAuction(false);
      setAuctionDetailInfo(auctionDetail.data);
      setAccessAuction(true);
      setIsCommingSoon(todaysDate < new Date(auctionDetail.data.dateStart));
      setIsEnded(todaysDate > new Date(auctionDetail.data.dateLimit));
      getAuctionBidList(auctionId, page, perPage);
      getAuctionList(companyId, 1, 'dateLimit,desc', '', 5, undefined, undefined, undefined);
      getAuctionComment(auctionId, 1, '4');

      if (auctionDetail.data["private"] === 1) {
        var auctionPrivateCode = localStorage.privateCode ? JSON.parse(localStorage.privateCode) : [];
        var auctionCode = auctionPrivateCode.find(function (item) {
          return +item.id === +auctionId;
        });

        if (auctionCode) {
          setPrivateCode(auctionCode.code);
        }
      }
    } else if (auctionDetail.data.code === 403) {
      setAccessAuction(false);
      setIsLoadingAuction(false);

      if (privateCode) {
        setErrorPrivateCode((0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.error.privateCode',
          defaultMessage: 'The code is wrong.'
        }));
      }
    } else {
      setIsAuctionForbiden(true);
      setIsLoadingAuction(false);
    }
  }, [auctionDetail]);
  (0, _react.useEffect)(function () {
    if (auctionList.code === 200) {
      var list = auctionList.data.data.filter(function (item) {
        return item.id !== +auctionId;
      });
      var listActive = list.filter(function (item) {
        return new Date(item.dateLimit) > todaysDate;
      });
      if (listActive > 0) listActive.length = 3;
      setlistAuctions(listActive);
    }
  }, [auctionList]);
  (0, _react.useEffect)(function () {
    if (auctionComments.code === 200) {
      var data = auctionComments.data.data;
      setComments(data);
      data.forEach(function (comment) {
        getAuctionUserCommentResponse(auctionId, comment.id);
      });
    }
  }, [auctionComments]);
  (0, _react.useEffect)(function () {
    if (newBid.code === 200) {
      setIsShowModal(false);
      setShowPhoneValidate(false);
      setIsConfirmBid(false);
      var newAuctionDetailInfo = auctionDetailInfo;
      newAuctionDetailInfo.dateLimit = newBid.data.dateLimit;

      if (newAuctionDetailInfo.last_bid) {
        newAuctionDetailInfo.last_bid.value = newBid.data.value;
      } else {
        newAuctionDetailInfo.last_bid = {
          value: newBid.data.value
        };
      }

      setAuctionDetailInfo(newAuctionDetailInfo);
      var existBid = listUsersBid.find(function (item) {
        return item.id === newBid.data.id;
      });

      if (!existBid) {
        var newBidData = {
          id: newBid.data.id,
          dateAdded: newBid.data.dateAdded,
          hidden: newBid.data.hidden,
          value: newBid.data.value,
          user: null,
          blink: true
        };

        if (newBid.data.hidden === 0) {
          newBidData.user = {
            name: newBid.data.user.name,
            thumbs: newBid.data.user.thumbs
          };
        }

        setListUsersBid([newBidData].concat(listUsersBid));
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
          messageId: 'auctions.modal.success.newBid'
        }
      });
    } else if (newBid.status === 400) {
      switch (newBid.data.data) {
        case 'AUCTION_IS_NOT_ON_GOING':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'The auction is over!',
              messageId: 'auctions.modal.error.auctionEnded'
            }
          });
          break;

        case 'INVALID_BID_AMOUNT':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'Your {bidValue} bid was not accepted. However, your bid has been exceeded!',
              messageId: 'auctions.modal.error.invalidBid',
              values: {
                bidValue: valueBid
              }
            }
          });
          setTimeout(function () {
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
              messageId: 'auctions.modal.error.userNotNotifiable'
            }
          });
          break;

        case 'USER_IS_NOT_ACTIVE':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'User is not active!',
              messageId: 'auctions.modal.error.userNotActive'
            }
          });
          break;

        case 'USER_DOES_NOT_HAVE_VALIDATED_PHONE':
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'User dont have validated phone!',
              messageId: 'auctions.modal.error.userNotValidatedPhone'
            }
          });
          break;

        default:
          showAlert({
            alertBox: {
              alertVisible: true,
              alertClass: 'danger',
              message: 'An error has occurred!',
              messageId: 'auctions.modal.error.userNotValidatedPhone'
            }
          });
      }

      setIsConfirmBid(false);
    }
  }, [newBid]);
  (0, _react.useEffect)(function () {
    if (auctionUserComment && auctionUserComment.code === 200) {
      var newComment = [auctionUserComment.data];

      if (auctionUserComment.data.comment_id === null) {
        setComments([].concat(newComment, comments));
        setTotalComments(totalComments + 1);
        setLoadingNewComment(false);
      } else {
        var arrayIndx = comments.findIndex(function (o) {
          return o.id === auctionUserComment.data.comment_id;
        });
        var repliesArray = comments[arrayIndx].replies || [];
        comments[arrayIndx].replies = [].concat(auctionUserComment.data, repliesArray);
        comments[arrayIndx].totalReplies = comments[arrayIndx].replies.length;
        setComments(comments);
        setLoadingPostReply(false);
      }
    }
  }, [auctionUserComment]);
  (0, _react.useEffect)(function () {
    if (deleteComment.code === 200) {
      setModalDelete((0, _extends2["default"])({}, modalDelete, {
        isOpen: false
      }));
      showAlert({
        alertBox: {
          alertVisible: true,
          alertClass: 'success',
          message: 'Your comment has been successfully deleted',
          messageId: 'auctions.modal.success.deleteComment'
        }
      });
    }
  }, [deleteComment]);
  (0, _react.useEffect)(function () {
    if (auctionUserCommentsResponse.code === 200) {
      var commentsArray = [].concat(comments);
      var _auctionUserCommentsR = auctionUserCommentsResponse.data,
          data = _auctionUserCommentsR.data,
          total = _auctionUserCommentsR.total;

      if (data.length > 0) {
        var arrayIndx = commentsArray.findIndex(function (o) {
          return o.id === data[0].comment_id;
        });
        commentsArray[arrayIndx].replies = data;
        commentsArray[arrayIndx].totalReplies = total;
        setComments(commentsArray);
      }
    }
  }, [auctionUserCommentsResponse]);
  (0, _react.useEffect)(function () {
    if (auctionBidList.code === 200) {
      setListUsersBid((0, _utils.filterUnique)([].concat(listUsersBid, auctionBidList.data.data), 'id'));
      setListBidTotal(auctionBidList.data.total);
      setPage(auctionBidList.data.current_page);
      setIsloadingContributes(false);
      setIsLoadingContributesList(false);
    }
  }, [auctionBidList]);
  (0, _react.useEffect)(function () {
    if (auctionSubscribeList.code === 200) {
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_on_start) setIsCheckedEmailStart(true);
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_first_bid) setIsCheckedEmailFirstBid(true);
      if (auctionSubscribeList.data && auctionSubscribeList.data.auction_24h_end) setIsCheckedEmail24H(true);
      setIsShowModalSubscribe(true);
    }
  }, [auctionSubscribeList]);
  (0, _react.useEffect)(function () {
    if (auctionSubscribe.code === 200) {
      showAlert({
        alertBox: {
          alertVisible: true,
          alertClass: 'success',
          message: 'Your subscription was successful',
          messageId: 'auctions.modal.success.subscribe'
        }
      });
    }
  }, [auctionSubscribe]);
  (0, _react.useEffect)(function () {
    if (pusherData) {
      var newAuctionDetailInfo = auctionDetailInfo;
      newAuctionDetailInfo.dateLimit = pusherData.dateLimit;

      if (newAuctionDetailInfo.last_bid === null) {
        newAuctionDetailInfo.last_bid = {
          value: pusherData.value
        };
      } else {
        newAuctionDetailInfo.last_bid.value = pusherData.value;
      }

      newAuctionDetailInfo.blink = true;
      setAuctionDetailInfo(newAuctionDetailInfo);
      var existBid = listUsersBid.find(function (item) {
        return item.id === pusherData.id;
      });

      if (!existBid) {
        var newPusherData = {
          id: pusherData.id,
          dateAdded: pusherData.dateAdded,
          hidden: pusherData.userName ? 0 : 1,
          value: pusherData.value,
          user: {
            name: pusherData.userName,
            thumbs: pusherData.userThumbs
          },
          blink: true
        };
        setListBidTotal(listBidTotal + 1);
        setListUsersBid([newPusherData].concat(listUsersBid));
      }
    }
  }, [pusherData]);
  (0, _react.useEffect)(function () {
    if (updatedUser && updatedUser.code === 200) {
      var _user = updatedUser.data;
      var userLocalStorage = JSON.parse(localStorage.user);
      userLocalStorage.notifications = _user.notifications;
      localStorage.setItem('user', JSON.stringify(userLocalStorage));
      setHasNotifications(1);
      if (hasNotifications === 0 && isCheckedNotifications) postNewBid(bid, auctionDetailInfo.id);
    }
  }, [updatedUser]);
  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
    if (confirmPhone.code === 200) setHasPhoneValidate(true);
  }, [confirmPhone]);
  if (isLoadingAuction) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {});

  var auctionTitle = function auctionTitle() {
    var title;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = auctionDetailInfo.title;
    } else if (!auctionDetailInfo.title_en) {
      title = auctionDetailInfo.title;
    } else {
      title = auctionDetailInfo.title_en;
    }

    return title;
  };

  var auctionDescriptionLang = function auctionDescriptionLang(type) {
    var description;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      description = auctionDetailInfo[type];
    } else if (auctionDetailInfo[type + "_en"]) {
      description = auctionDetailInfo[type + "_en"];
    } else {
      description = auctionDetailInfo[type];
    }

    return description;
  };

  var selectedCheck = function selectedCheck(e, i) {
    var checked = e.target.checked;

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

  var modalShowSubscribe = function modalShowSubscribe() {
    if (!requireLogin()) {
      return;
    }

    getAuctionSubscribe(auctionId);
  };

  var selectedCheckSubscribe = function selectedCheckSubscribe(e, i) {
    var checked = e.target.checked;
    if (i === 0) setIsCheckedEmailStart(checked);
    if (i === 1) setIsCheckedEmailFirstBid(checked);
    if (i === 2) setIsCheckedEmail24H(checked);
  };

  var handleCancelModalSubscribe = function handleCancelModalSubscribe() {
    setIsCheckedEmailStart(false);
    setIsCheckedEmailFirstBid(false);
    setIsCheckedEmail24H(false);
    setIsShowModalSubscribe(false);
  };

  var handleClickBid = function handleClickBid(value) {
    if (!requireLogin()) {
      return;
    } // StartBid


    if (!auctionDetailInfo.last_bid) {
      if (value < auctionDetailInfo.bid_start || value > auctionDetailInfo.bid_start + auctionDetailInfo.bid_max_interval) {
        setError((0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.error.startBidInvalid',
          defaultMessage: 'Put a numeric value between {bidStart} and {maxBid}'
        }, {
          bidStart: auctionDetailInfo.bid_start,
          maxBid: auctionDetailInfo.bid_start + auctionDetailInfo.bid_max_interval
        }));
        return;
      }
    }

    if (auctionDetailInfo.last_bid) {
      if (value <= auctionDetailInfo.last_bid.value || value > auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_max_interval || value < auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval) {
        setError((0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.error.startBidInvalid',
          defaultMessage: 'Put a numeric value between {bidStart} and {maxBid}'
        }, {
          bidStart: auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval,
          maxBid: auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_max_interval
        }));
        return;
      }
    }

    var _JSON$parse = JSON.parse(localStorage.user || '{ "phones": [] }'),
        phones = _JSON$parse.phones;

    setShowPhoneValidate(phones.some(function (phone) {
      return phone.verified === 1;
    }));
    setIsShowModal(true);
    setError('');
    setValueBid(value);
  };

  var showMoreContributes = function showMoreContributes() {
    getAuctionBidList(auctionDetailInfo.id, Math.floor(listUsersBid.length / perPage) + 1, perPage);
    setIsloadingContributes(true);
  };

  var handleConfirmBid = function handleConfirmBid(isAnonymous) {
    var _JSON$parse2 = JSON.parse(localStorage.user),
        phones = _JSON$parse2.phones;

    setHasPhoneValidate(phones.some(function (phone) {
      return phone.verified === 1;
    }));
    setHasSubmitModalBid(true);
    if (!isCheckedLegal) setErrorCheckLegal(true);
    if (!isCheckedNotifications) setErrorCheckedNotifications(true);
    if (!isCheckedTerms) setErrorCheckedTerms(true);

    if (auctionDetailInfo.cc === 1 && !hasCardSelected) {
      setIsErrorSelectCard(true);
      return;
    }

    if (auctionDetailInfo.cc === 1 && hasCardSelected) setIsErrorSelectCard(false);
    if (!isCheckedLegal || hasNotifications === 0 && !isCheckedNotifications || !isCheckedTerms || !hasPhoneValidate || auctionDetailInfo.cc === 1 && !hasCardSelected) return;
    var bid = {
      value: parseInt(+valueBid, 10),
      hidden: isAnonymous || 0,
      private_code: privateCode
    };
    if (auctionDetailInfo.cc === 1) bid.last4 = lastFour;

    if (hasNotifications === 0 && isCheckedNotifications) {
      setBid(bid);
      postUpdatedUser(JSON.parse(localStorage.user).id, {
        notifications: '1'
      });
    } else {
      postNewBid(bid, auctionDetailInfo.id);
    }

    setIsConfirmBid(true);
    setValue('');
  };

  var handleChangePrivateCode = function handleChangePrivateCode(e) {
    setPrivateCode(e.target.value);
  };

  var handleConfirmPrivateCode = function handleConfirmPrivateCode() {
    if (privateCode) {
      var auctionPrivateCode = localStorage.privateCode ? JSON.parse(localStorage.privateCode) : [];
      var auctionCode = auctionPrivateCode.find(function (item) {
        return +item.id === +auctionId;
      });

      if (auctionCode) {
        auctionCode.code = privateCode;
      } else {
        auctionPrivateCode.push({
          id: auctionId,
          code: privateCode
        });
      }

      localStorage.setItem('privateCode', JSON.stringify(auctionPrivateCode));
      getAuctionDetail(auctionId, privateCode);
    }
  };

  var textPrivacyandTerms = function textPrivacyandTerms() {
    var initialText = (0, _reactIntl.useIntl)().formatMessage({
      id: 'auctions.private.iagree',
      defaultMessage: 'I agree with eSolidar’s '
    });
    var privacyPolicy = (0, _reactIntl.useIntl)().formatMessage({
      id: 'auctions.private.privacy',
      defaultMessage: 'Privacy policy'
    });
    var html = "\n      <span>" + initialText + "</span>\n      <a target='_blank' href='/privacy'>" + privacyPolicy + "</a>\n    ";
    return html;
  };

  var handleConfirmSubscribe = function handleConfirmSubscribe(isCheckedEmailStart, isCheckedEmailFirstBid, isCheckedEmail24H) {
    var auctionStart = isCheckedEmailStart || 0;
    var auctionFirstBid = isCheckedEmailFirstBid || 0;
    var auction24hEnd = isCheckedEmail24H || 0;
    var subscribeChecked = {
      auction_on_start: auctionStart,
      auction_first_bid: auctionFirstBid,
      auction_24h_end: auction24hEnd,
      private_code: privateCode
    };
    postAuctionSubscribe(auctionId, subscribeChecked);
    setIsShowModalSubscribe(false);
  };

  var onSubmitComment = function onSubmitComment(e) {
    e.preventDefault();

    if (userComment && requireLogin()) {
      postAuctionUserComment(auctionId, {
        comment: userComment,
        private_code: privateCode
      });
      setLoadingNewComment(true);
      setUserComment('');
    }
  };

  var onSubmitResponse = function onSubmitResponse(e, commentId) {
    e.preventDefault();

    if (reply) {
      setLoadingPostReply(true);
      postAuctionUserComment(auctionId, {
        comment: reply,
        comment_id: commentId,
        private_code: privateCode
      });
      setReply('');
    }
  };

  var loadMore = function loadMore(commentId, page) {
    deleteAuctionComment(auctionId, commentId, 3, page + 1);
  };

  var handleOpenDeleteCommentModal = function handleOpenDeleteCommentModal(commentId) {
    setModalDelete({
      isOpen: true,
      commentId: commentId
    });
  };

  var handleDeleteComment = function handleDeleteComment(commentId) {
    deleteAuctionComment(auctionId, commentId);
    var deleteComment = commentId;
    var currentComments = comments;

    var _loop = function _loop(i) {
      if (currentComments[i].id === deleteComment) {
        currentComments.splice(i, 1);
        currentComments.totalReplies = currentComments.length - 1;
        setTotalComments(currentComments.totalReplies);
        return "break";
      } else if (currentComments[i].replies) {
        currentComments[i].replies.forEach(function (reply, indx) {
          if (reply) {
            if (reply.id === deleteComment) {
              currentComments[i].replies.splice(indx, 1);
              comments[i].totalReplies -= 1;
            }
          }
        });
      }
    };

    for (var i = 0; i < currentComments.length; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    }
  };

  var loadMoreComments = function loadMoreComments() {
    setLoadingMoreComments(true);
    getAuctionComment(auctionId, page + 1, perPage);
  };

  var selectedCard = function selectedCard(card) {
    setLastFour(card);
    setHasCardSelected(true);
  };

  var onExpiry = function onExpiry() {
    setIsEnded(true);
  };

  var onStart = function onStart() {
    setIsCommingSoon(false);
  };

  var valueBidTextField = function valueBidTextField(e) {
    setValue(e.target.value.replace(/[^0-9]/gi, ''));
  };

  var handleMinValue = function handleMinValue() {
    if (!auctionDetailInfo.last_bid) return auctionDetailInfo.bid_start;
    if (auctionDetailInfo.last_bid) return auctionDetailInfo.last_bid.value + auctionDetailInfo.bid_interval;
  };

  var supported = {};

  if (accessAuction && auctionDetailInfo.recipient && auctionDetailInfo.recipient.institution) {
    supported.title = auctionDetailInfo.recipient.institution.name;
    supported.image = auctionDetailInfo.recipient.institution.thumbs.thumb;
    supported.id = auctionDetailInfo.recipient.institution.id;
    supported.link = "" + domainUrl + locale + "/npo/detail/" + supported.id + "-" + (0, _utils.slugify)(auctionDetailInfo.recipient.institution.name);
  } else if (auctionDetailInfo.project) {
    supported.title = auctionDetailInfo.project.title;
    supported.image = auctionDetailInfo.project.images ? env.cdn_uploads_url + "/" + auctionDetailInfo.project.images[0].image : env.cdn_static_url + "/frontend/assets/no-image.jpg";
    supported.id = auctionDetailInfo.project.id;
    supported.link = "/" + locale + "/projects/detail/" + supported.id + "-" + (0, _utils.slugify)(auctionDetailInfo.project.title);
  } else {
    supported = null;
  }

  var userType = user ? user.type : 'guest';
  var thumb = '';

  if (userType === 'guest') {
    thumb = env.cdn_static_url + "/frontend/assets/no-image.png";
  } else if (userType === 'npo') {
    thumb = user.institution.thumbs.thumb;
  } else {
    thumb = user.thumbs.thumb;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Container, {
    className: "auction-detail mt-3",
    children: [isAuctionForbiden && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "not-found mt-5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_noMatch["default"], {
        color: primaryColor,
        errorMessage: (0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.not.found'
        }),
        link: "/auction/list",
        linkText: (0, _reactIntl.useIntl)().formatMessage({
          id: 'back.to.auctions'
        })
      })
    }), !isAuctionForbiden && !accessAuction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 6,
        className: "mdPrivateCode mx-auto mt-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "pb-4 mb-4",
            "data-testid": "title-private",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auctions.private.supportes",
              defaultMessage: "Insert the access code to display and bid on the auction"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
            dataTestId: "input-private-code",
            field: "input-code",
            className: "private-code pb-5",
            type: "text",
            onChange: handleChangePrivateCode,
            error: errorPrivateCode,
            placeholder: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.private.insertCode',
              defaultMessage: 'Insert the code'
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 6,
              className: "d-flex",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                dataTestId: "btn-private-cancel",
                className: "auction-private-cancel mr-3",
                extraClass: "dark",
                href: "/auction/list",
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'auction.private.cancel',
                  defaultMessage: 'Cancel'
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                dataTestId: "btn-private-validate",
                className: "auction-private-cancel",
                extraClass: "success-full",
                onClick: handleConfirmPrivateCode,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'auction.private.validate',
                  defaultMessage: 'Validate'
                })
              })]
            })
          })
        })]
      })
    }), !isAuctionForbiden && accessAuction && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "d-none d-sm-block",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          md: 12,
          className: "content-wrapper",
          children: supported && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            className: "content-header hidden-xs",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "text-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "auction-supported",
                "data-testid": "auction-support",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auctions.public.supportes",
                  defaultMessage: "This auctions supports:"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                className: "auction-supported-link",
                href: supported.link,
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
                  className: "text-center",
                  style: {
                    color: primaryColor
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    src: supported.image,
                    alt: "thumb-supported"
                  }), supported.title]
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          lg: 10,
          className: "offset-lg-1",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            className: "box mb-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "countdown text-center hidden-xs",
              "data-testid": "div-countdown",
              children: [(auctionDetailInfo.status === 'A' || auctionDetailInfo.status === 'F') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_countdown["default"], {
                onExpiry: onExpiry,
                onStart: onStart,
                dataTestId: "auction-detail",
                startDate: auctionDetailInfo.dateStart,
                endDate: auctionDetailInfo.dateLimit
              }), auctionDetailInfo.status === 'P' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "status-" + auctionDetailInfo.status,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auction.detail.status.pending",
                  defaultMessage: "This auction is pending."
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              className: "text-center hidden-xs",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "end-date",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "mb-2",
                  "data-testid": "end-date-info",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "auction.detail.ends",
                    defaultMessage: "This auction ended in: "
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_convertToMyTimezone["default"], {
                    date: auctionDetailInfo.dateLimit,
                    locale: locale,
                    format: "LLLL"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auction.detail.infoBid",
                  defaultMessage: "Any bid made in the last 2 minutes of the auction will automatically reset the auction timer to 2 minutes remaining."
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                    className: "auction-title mb-2 d-block d-sm-none",
                    children: auctionTitle()
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
                  md: 7,
                  "data-testid": "slide-image-multiple",
                  children: [auctionDetailInfo.images && auctionDetailInfo.images.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_sliderImagesLightbox["default"], {
                    video: auctionDetailInfo.video,
                    images: auctionDetailInfo.images,
                    env: env
                  }), auctionDetailInfo.images && auctionDetailInfo.images.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    "data-testid": "slide-one-image",
                    className: "slider-image",
                    style: {
                      backgroundImage: "url(" + env.img_cdn + "/frontend/assets/no-image.jpg)"
                    }
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionDetailRigth["default"], {
                  isEnded: isEnded,
                  isCommingSoon: isCommingSoon,
                  auctionTitle: auctionTitle(),
                  auction: auctionDetailInfo,
                  handleClickBid: handleClickBid,
                  showModalSubscribe: modalShowSubscribe,
                  minValue: handleMinValue(),
                  error: error,
                  user: user,
                  inputBidValue: value,
                  valueBidTextField: valueBidTextField,
                  primaryColor: primaryColor,
                  env: env,
                  inputRef: inputRef,
                  domainUrl: domainUrl,
                  locale: locale
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_shareNetwork["default"], {
        title: auctionTitle(),
        image: auctionDetailInfo.images[0].image_name,
        description: auctionDetailInfo.description
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStickyEl["default"], {
            style: {
              position: 'relative'
            },
            stickyClassName: "sticky-sidebar",
            topOffset: 0,
            bottomOffset: 0,
            hideOnBoundaryHit: false,
            boundaryElement: ".content",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionLastBid["default"], {
              auction: auctionDetailInfo,
              isEnded: isEnded,
              isCommingSoon: isCommingSoon,
              handleClickBid: handleClickBid,
              isShowModal: modalShowSubscribe,
              error: error,
              minValue: handleMinValue(),
              inputBidValue: value,
              valueBidTextField: valueBidTextField,
              primaryColor: primaryColor
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          sm: 12,
          md: 12,
          lg: {
            span: 6,
            offset: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_descriptionDetail["default"], {
            dataTestIdTitle: "description",
            dataTestIdDescription: "description-text",
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.description',
              defaultMessage: 'Description'
            }),
            description: auctionDescriptionLang('description'),
            color: primaryColor
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_descriptionDetail["default"], {
            dataTestIdTitle: "shipping",
            dataTestIdDescription: "shipping-text",
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.shipping',
              defaultMessage: 'Shipping'
            }),
            description: auctionDescriptionLang('shipping_description'),
            color: primaryColor
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_descriptionDetail["default"], {
            dataTestIdTitle: "payment",
            dataTestIdDescription: "payment-text",
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.payment',
              defaultMessage: 'Payment'
            }),
            description: auctionDescriptionLang('payment_description'),
            color: primaryColor
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.detail.titleComments",
              defaultMessage: "Comments"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "comments-box",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_createComment["default"], {
              onSubmitComment: onSubmitComment,
              onChange: function onChange(e) {
                return setUserComment(e.target.value);
              },
              comment: userComment,
              postAsUser: postAuctionUserComment,
              postAsCompany: postAuctionCompanyComment,
              loadingNewComment: loadingNewComment,
              thumb: thumb,
              env: env
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_comments["default"], {
              requireLogin: requireLogin,
              onSubmitResponse: onSubmitResponse,
              getEmployeeName: _utils.getEmployeeName,
              onChange: function onChange(e) {
                return setReply(e.target.value);
              },
              comments: comments,
              reply: reply,
              laodingPostReply: loadingPostReply,
              deleteComment: handleOpenDeleteCommentModal,
              totalComments: totalComments,
              loadMore: loadMore,
              loadingMoreComments: loadingMoreComments,
              loadMoreComments: loadMoreComments,
              user: user || {},
              thumb: thumb,
              env: env.cdn_static_url,
              primaryColor: primaryColor
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          className: "mt-5",
          sm: 12,
          md: 12,
          lg: {
            span: 4,
            offset: 0
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_contributesListBox["default"], {
            isAuction: true,
            testeId: "ContributesListBox",
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.last.bids',
              defaultMessage: 'Lat Bids'
            }),
            contributesList: listUsersBid,
            loadingContributesList: isLoadingContributesList,
            loadingContributes: isloadingContributes,
            total: listBidTotal,
            showMoreContributes: showMoreContributes,
            currency: auctionDetailInfo.currency.small,
            env: env,
            primaryColor: primaryColor
          }), auctionDetailInfo.project && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            className: "mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_projectThumb["default"], {
              project: auctionDetailInfo.project,
              serverlessResizeImage: env.cdn_uploads_url,
              lang: localStorage.lang || 'pt',
              cols: 12,
              showStatus: false,
              status: ""
            })
          })]
        })]
      }), listAuctions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_auctionsList["default"], {
        title: (0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.otherAuctions',
          defaultMessage: 'Other Auctions'
        }),
        listAuctions: listAuctions,
        buttonTitle: (0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.seeAll',
          defaultMessage: 'See all auctions'
        }),
        primaryColor: primaryColor,
        env: env
      })]
    }), accessAuction && isLoggedIn && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
        bodyPadding: "14px",
        dialogClassName: "auction-modal-bid",
        onHide: function onHide() {
          return handleCloseModalBid();
        },
        show: isShowModal,
        title: (0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.modal.bid.confirm',
          defaultMessage: 'Confirm bid'
        }),
        actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "dark",
            onClick: function onClick() {
              return handleCloseModalBid();
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.private.cancel',
              defaultMessage: 'Cancel'
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "success-full",
            onClick: function onClick() {
              return handleConfirmBid(isAnonymous);
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.private.confirm',
              defaultMessage: 'Confirm'
            }),
            disabled: isConfirmBid
          })]
        }),
        bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "font-weight-bold",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.modal.bid.confirmText",
              defaultMessage: "Your bid is {value}",
              values: {
                value: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
                  value: parseInt(+valueBid, 10),
                  style: "currency",
                  currency: auctionDetailInfo.currency.small
                })
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-3",
            children: [(0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.modal.bid.email',
              defaultMessage: 'If you are the winner you will receive an email to: '
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), user.email, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: " ("
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "/user/settings",
              title: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.modal.bid.chageEmail',
                defaultMessage: 'change e-mail'
              }),
              children: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.modal.bid.chageEmail',
                defaultMessage: 'change e-mail'
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: ")"
            })]
          }), auctionDetailInfo.cc === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_creditCardList["default"], {
            getStripeCreditCardlist: getStripeCreditCardlist,
            postStripeCreditCard: postStripeCreditCard,
            stripeCreditCardList: stripeCreditCardList,
            stripeCreditCard: stripeCreditCard,
            showAddBtnCreditCard: true,
            env: env.stripe,
            isErrorSelectCard: isErrorSelectCard,
            selectedCard: selectedCard
          }), !showPhoneValidate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_validateTelephone["default"], {
            localStorage: localStorage,
            mobileValidatePost: mobileValidatePost,
            validatePhone: validatePhone,
            mobileConfirmPost: mobileConfirmPost,
            confirmPhone: confirmPhone,
            hasError: !hasPhoneValidate && hasSubmitModalBid
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mb-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
              dataTestId: "checkbox-anonymous",
              className: "mb-2 checkbox-modal-bid",
              label: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.modal.bid.anonymousBid',
                defaultMessage: 'Anonymous bid'
              }),
              onChange: function onChange(e) {
                return selectedCheck(e, 0);
              },
              checked: isAnonymous
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
              className: "checkbox-modal-bid",
              label: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.modal.bid.check1',
                defaultMessage: 'eSolidar and the charity/cause for which it is intended the amount raised in this auction, we reserve the legal right to take legal action against any act that puts into question the normal operation of it.'
              }),
              onChange: function onChange(e) {
                return selectedCheck(e, 1);
              },
              checked: isCheckedLegal
            }), errorCheckLegal && hasSubmitModalBid && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "hasError",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auctions.modal.required",
                defaultMessage: "Required field"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-2",
            children: [hasNotifications === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
              className: "checkbox-modal-bid",
              label: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.modal.bid.check3',
                defaultMessage: 'To be able to bid you must first accept to receive our notifications. This will allow us to inform you whenever you win an auction.'
              }),
              onChange: function onChange(e) {
                return selectedCheck(e, 3);
              },
              checked: isCheckedNotifications
            }), hasNotifications === 0 && errorCheckedNotifications && hasSubmitModalBid && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "hasError",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auctions.modal.required",
                defaultMessage: "Required field"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
              className: "checkbox-modal-bid",
              label: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: textPrivacyandTerms()
                }
              }),
              onChange: function onChange(e) {
                return selectedCheck(e, 2);
              },
              checked: isCheckedTerms
            }), errorCheckedTerms && hasSubmitModalBid && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "hasError",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auctions.modal.required",
                defaultMessage: "Required field"
              })
            })]
          })]
        }),
        size: "lg"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
        bodyPadding: "14px",
        dialogClassName: "auction-modal-subscribe",
        actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "dark",
            onClick: function onClick() {
              return handleCancelModalSubscribe();
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.private.cancel',
              defaultMessage: 'Cancel'
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "success-full",
            onClick: function onClick() {
              return handleConfirmSubscribe(isCheckedEmailStart, isCheckedEmailFirstBid, isCheckedEmail24H);
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.private.save',
              defaultMessage: 'Save'
            })
          })]
        }),
        bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
            dataTestId: "checkStart",
            label: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.modal.subscribe.check1',
              defaultMessage: 'Send me an email when the auction start.'
            }),
            onChange: function onChange(e) {
              return selectedCheckSubscribe(e, 0);
            },
            checked: isCheckedEmailStart
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
            dataTestId: "checkEmailBid",
            label: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.modal.subscribe.check2',
              defaultMessage: 'Send me an email when someone makes the first bid.'
            }),
            onChange: function onChange(e) {
              return selectedCheckSubscribe(e, 1);
            },
            checked: isCheckedEmailFirstBid
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
            dataTestId: "checkEmail24",
            label: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.modal.subscribe.check3',
              defaultMessage: 'Send me an email 24 hours before the auction ends.'
            }),
            onChange: function onChange(e) {
              return selectedCheckSubscribe(e, 2);
            },
            checked: isCheckedEmail24H
          })]
        }),
        onHide: function onHide() {
          return handleCancelModalSubscribe();
        },
        show: isShowModalSubscribe,
        title: (0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.detail.subscribeAuction',
          defaultMessage: 'Subscribe auction leilão'
        })
      })]
    }), modalDelete.isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
      bodyPadding: "14px",
      dialogClassName: "auction-modal-comment-delete",
      actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "dark",
          onClick: function onClick() {
            return setModalDelete((0, _extends2["default"])({}, modalDelete, {
              isOpen: false
            }));
          },
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'auction.private.cancel',
            defaultMessage: 'Cancel'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "success-full",
          onClick: function onClick() {
            return handleDeleteComment(modalDelete.commentId);
          },
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'auction.modal.comment.Confirm',
            defaultMessage: 'Confirm'
          })
        })]
      }),
      bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "auctions.comment.message.delete",
        defaultMessage: "Do you really want to delete this comment?"
      }),
      onHide: function onHide() {
        return setModalDelete((0, _extends2["default"])({}, modalDelete, {
          isOpen: false
        }));
      },
      show: modalDelete.isOpen,
      title: (0, _reactIntl.useIntl)().formatMessage({
        id: 'auction.modal.comment.title',
        defaultMessage: 'Delete comment'
      })
    })]
  });
};

AuctionDetail.propTypes = process.env.NODE_ENV !== "production" ? {
  auctionId: _propTypes["default"].string,
  getAuctionDetail: _propTypes["default"].func,
  auctionDetail: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      code: _propTypes["default"].number,
      id: _propTypes["default"].number,
      status: _propTypes["default"].string,
      "private": _propTypes["default"].number,
      bid_start: _propTypes["default"].number,
      currency: _propTypes["default"].object,
      dateLimit: _propTypes["default"].string,
      dateStart: _propTypes["default"].string,
      images: _propTypes["default"].array,
      bid_max_interval: _propTypes["default"].number,
      bid_interval: _propTypes["default"].number,
      sub_category_id: _propTypes["default"].number,
      listBid: _propTypes["default"].number,
      last_bid_value: _propTypes["default"].shape({
        value: _propTypes["default"].number
      }),
      recipient: _propTypes["default"].shape({
        institution: _propTypes["default"].shape({
          name: _propTypes["default"].string,
          thumbs: _propTypes["default"].shape({
            thumb: _propTypes["default"].string
          })
        }),
        causes: _propTypes["default"].object
      }),
      user: _propTypes["default"].shape({
        institution: _propTypes["default"].shape({
          name: _propTypes["default"].string,
          thumbs: _propTypes["default"].shape({
            thumb: _propTypes["default"].string
          })
        })
      }),
      last_bid: _propTypes["default"].shape({
        user: _propTypes["default"].object,
        value: _propTypes["default"].number
      }),
      video: _propTypes["default"].string,
      title: _propTypes["default"].string,
      title_en: _propTypes["default"].string
    })
  }),
  auctionUserComment: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].object,
    total: _propTypes["default"].number
  }),
  getAuctionComment: _propTypes["default"].func,
  getAuctionBidList: _propTypes["default"].func,
  getAuctionList: _propTypes["default"].func,
  getAuctionSubscribe: _propTypes["default"].func,
  getAuctionUserCommentResponse: _propTypes["default"].func,
  getStripeCreditCardlist: _propTypes["default"].func,
  postStripeCreditCard: _propTypes["default"].func,
  stripeCreditCardList: _propTypes["default"].object,
  stripeCreditCard: _propTypes["default"].object,
  postAuctionUserComment: _propTypes["default"].func,
  postNewBid: _propTypes["default"].func,
  postAuctionCompanyComment: _propTypes["default"].func,
  postAuctionSubscribe: _propTypes["default"].func,
  newBid: _propTypes["default"].object,
  auctionList: _propTypes["default"].object,
  auctionBidList: _propTypes["default"].object,
  requireLogin: _propTypes["default"].func,
  companyId: _propTypes["default"].number,
  auctionSubscribe: _propTypes["default"].object,
  auctionSubscribeList: _propTypes["default"].object,
  auctionComments: _propTypes["default"].object,
  auctionUserCommentsResponse: _propTypes["default"].object,
  deleteAuctionComment: _propTypes["default"].func,
  deleteComment: _propTypes["default"].object,
  mobileValidatePost: _propTypes["default"].func,
  validatePhone: _propTypes["default"].object,
  mobileConfirmPost: _propTypes["default"].func,
  confirmPhone: _propTypes["default"].object,
  user: _propTypes["default"].object,
  env: _propTypes["default"].shape({
    img_cdn: _propTypes["default"].string,
    cdn_static_url: _propTypes["default"].string,
    cdn_uploads_url: _propTypes["default"].string,
    stripe: _propTypes["default"].object
  }),
  pusherData: _propTypes["default"].object,
  postUpdatedUser: _propTypes["default"].func,
  updatedUser: _propTypes["default"].object,
  showAlert: _propTypes["default"].func,
  primaryColor: _propTypes["default"].string,
  domainUrl: _propTypes["default"].string,
  locale: _propTypes["default"].string
} : {};
var _default = AuctionDetail;
exports["default"] = _default;
module.exports = exports.default;