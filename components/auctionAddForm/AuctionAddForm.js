"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _reactIntl = require("react-intl");

var _reactTagInput = require("react-tag-input");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _reactNotifications = require("react-notifications");

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _pt = _interopRequireDefault(require("date-fns/locale/pt"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _loading = _interopRequireDefault(require("../loading"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _textFieldGroup = _interopRequireDefault(require("../../elements/textFieldGroup"));

var _dropZoneBox = _interopRequireDefault(require("../../elements/dropZoneBox"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _institutionListSelect = _interopRequireDefault(require("../institutionListSelect"));

var _projectThumb = _interopRequireDefault(require("../projectThumb"));

require("../../assets/sass/_react-datepicker.scss");

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _bankAccounts = _interopRequireDefault(require("../bankAccounts"));

var _inputLabel = _interopRequireDefault(require("../../elements/inputLabel"));

var _radioField = _interopRequireDefault(require("../../elements/radioField"));

var _validations = _interopRequireDefault(require("./validations"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable max-len */

/* eslint-disable jsx-a11y/label-has-associated-control */
(0, _reactDatepicker.registerLocale)('pt', _pt["default"]);
(0, _reactDatepicker.registerLocale)('en', _enUS["default"]);
/**
 * Auction add form.
 *
 * @visibleName Auction add form
 */

var AuctionAddForm = function AuctionAddForm(_ref) {
  var loadingPage = _ref.loadingPage,
      action = _ref.action,
      timeZones = _ref.timeZones,
      getInstitutions = _ref.getInstitutions,
      institutions = _ref.institutions,
      getInstitutionCategories = _ref.getInstitutionCategories,
      institutionCategories = _ref.institutionCategories,
      showInstitutions = _ref.showInstitutions,
      showProjects = _ref.showProjects,
      showBrands = _ref.showBrands,
      showPrivate = _ref.showPrivate,
      projectsList = _ref.projectsList,
      getProjectsList = _ref.getProjectsList,
      primaryColor = _ref.primaryColor,
      getBrandsList = _ref.getBrandsList,
      brands = _ref.brands,
      postUploadImage = _ref.postUploadImage,
      addImages = _ref.addImages,
      postAuction = _ref.postAuction,
      addAuction = _ref.addAuction,
      putAuction = _ref.putAuction,
      updatedAuction = _ref.updatedAuction,
      postAuctionDeleteImage = _ref.postAuctionDeleteImage,
      returnUrl = _ref.returnUrl,
      userRole = _ref.userRole,
      subscription = _ref.subscription,
      auctionId = _ref.auctionId,
      auctionDetail = _ref.auctionDetail,
      getAuctionDetail = _ref.getAuctionDetail,
      esolidarList = _ref.esolidarList,
      userBankTransfer = _ref.userBankTransfer,
      putCompanyBankTransfer = _ref.putCompanyBankTransfer,
      bankTransfer = _ref.bankTransfer;
  var company = JSON.parse(localStorage[userRole] || '{}');
  var hasWhitelabel = subscription.find(function (item) {
    return item.name === 'whitelabel';
  }) || {};
  var hasProjects = !(0, _utils.isEmpty)(subscription.find(function (item) {
    return item.name === 'projects';
  }) || {});

  var _useState = (0, _react.useState)({
    show_on_esolidar: !hasProjects ? 'opened' : '',
    title: '',
    bid_start: '',
    description: '',
    bid_interval: '1',
    bid_max_interval: '100',
    tax: (0, _utils.isEmpty)(hasWhitelabel) ? company.country.auction_tax * 100 : 0,
    acquisition_value: '0',
    status: 'P',
    "private": '0',
    private_code: '',
    shipping_description: '',
    payment_description: '',
    images: [],
    video: '',
    startDate: '',
    endDate: '',
    tags: '',
    tagsArray: [],
    projectIds: [],
    user_id: '',
    timezone: _momentTimezone["default"].tz.guess(),
    currency_id: !(0, _utils.isEmpty)(company) ? company.currency_id : 1,
    position: '1'
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = (0, _react.useState)({
    institutions: {
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1
    },
    projects: {
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1
    }
  }),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var _useState4 = (0, _react.useState)(loadingPage || false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      disabled = _useState5[0],
      setDisabled = _useState5[1];

  var _useState6 = (0, _react.useState)(0),
      imagesCount = _useState6[0],
      setImagesCount = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      isLoadingInstitutionListSelect = _useState7[0],
      setIsLoadingInstitutionListSelect = _useState7[1];

  var _useState8 = (0, _react.useState)([]),
      institutionsData = _useState8[0],
      setInstitutionsData = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      institutionCategoriesData = _useState9[0],
      setInstitutionCategoriesData = _useState9[1];

  var _useState10 = (0, _react.useState)(''),
      institutionCategory = _useState10[0],
      setInstitutionCategory = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      institutionSearch = _useState11[0],
      setInstitutionSearch = _useState11[1];

  var _useState12 = (0, _react.useState)([]),
      projectsListData = _useState12[0],
      setProjectsListData = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      brandsList = _useState13[0],
      setBrandsList = _useState13[1];

  var _useState14 = (0, _react.useState)([]),
      imagesList = _useState14[0],
      setImagesList = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      cropModalStatus = _useState15[0],
      setCropModalStatus = _useState15[1];

  var _useState16 = (0, _react.useState)(false),
      saveBankAccount = _useState16[0],
      setSaveBankAccount = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      isMyProjet = _useState17[0],
      setIsMyProject = _useState17[1];

  var _useState18 = (0, _react.useState)(false),
      isValidBankAccount = _useState18[0],
      setIsValidBankAccount = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      updloadFileIsLoading = _useState19[0],
      SetUploadFileIsLoading = _useState19[1];

  var _useState20 = (0, _react.useState)(''),
      beneficiary = _useState20[0],
      setBeneficiary = _useState20[1];

  var _useState21 = (0, _react.useState)(''),
      status = _useState21[0],
      setStatus = _useState21[1];

  (0, _react.useEffect)(function () {
    if (auctionId) {
      getAuctionDetail(company.id, auctionId);
    }

    if (showInstitutions) {
      getInstitutionCategories();
    }

    if (showProjects && hasProjects) {
      var whitelabelConfig = company.whitelabel;
      getProjectsList(whitelabelConfig.id, 1, 'APPROVED', undefined, undefined, []);
    }

    if (showBrands) {
      var companyId = company.id;
      getBrandsList(companyId);
    }
  }, []); // institutions list

  (0, _react.useEffect)(function () {
    if (institutions && institutions.code === 200) {
      setIsLoadingInstitutionListSelect(false);
      setInstitutionsData(institutions.data.institutions.data);
      var data = {
        activePage: institutions.data.institutions.current_page,
        itemsCountPerPage: institutions.data.institutions.per_page,
        totalItemsCount: institutions.data.institutions.total
      };
      setPagination(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          institutions: data
        });
      });
    }
  }, [institutions]); // category institutions list

  (0, _react.useEffect)(function () {
    if (institutionCategories && institutionCategories.code === 200) {
      var categories = institutionCategories.data.categories;
      setInstitutionCategoriesData(categories);
    }
  }, [institutionCategories]); // Projects list

  (0, _react.useEffect)(function () {
    if (projectsList && projectsList.code === 200) {
      var data = projectsList.data;
      setProjectsListData(data.data);
      var dataPaginator = {
        activePage: data.current_page,
        itemsCountPerPage: data.per_page,
        totalItemsCount: data.total
      };
      setPagination(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          projects: dataPaginator
        });
      });
    }
  }, [projectsList]); // Brands list

  (0, _react.useEffect)(function () {
    if (brands && brands.code === 200) {
      var data = brands.data;
      setBrandsList(data);
    }
  }, [brands]); // Auction detail

  (0, _react.useEffect)(function () {
    if (auctionDetail && auctionDetail.code === 200) {
      var data = auctionDetail.data;

      if (data.status === 'A') {
        _reactNotifications.NotificationManager.error((0, _reactIntl.useIntl)().formatMessage({
          id: 'auction.edit.forbidden'
        }), (0, _reactIntl.useIntl)().formatMessage({
          id: 'error'
        }), 15000);

        window.location.href = '/auctions';
      }

      var imagesListArray = [];
      var imagesArray = [];
      data.images.map(function (image) {
        imagesListArray.push({
          id: image.id,
          image: image.image_name
        });
        imagesArray.push(image.id);
      });
      setImagesList(imagesListArray);
      var institutionName = data.institution ? data.institution.name : '';
      setInstitutionSearch(institutionName);
      getInstitutions(pagination.institutions.activePage, institutionCategory, institutionName);
      var tags = data.tags ? data.tags.split(',') : [];
      var tagsArray = tags.map(function (tag, idx) {
        return {
          id: idx,
          text: tag
        };
      });
      setIsMyProject(data.project ? data.project.as_company === 1 && data.project.whitelabel_config.company_id === company.id : false);
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          show_on_esolidar: data.show_on_esolidar,
          title: data.title,
          description: data.description,
          bid_interval: data.bid_interval.toString(),
          bid_max_interval: data.bid_max_interval.toString(),
          bid_start: data.bid_start.toString(),
          brand_id: data.brand_id,
          tax: data.tax,
          acquisition_value: data.acquisition_value,
          status: data.status,
          "private": data["private"],
          private_code: data.private_code,
          shipping_description: data.shipping_description,
          payment_description: data.payment_description,
          images: imagesArray,
          video: data.video,
          startDate: new Date(_momentTimezone["default"].utc(data.dateStart).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss')),
          dateStart: _momentTimezone["default"].utc(data.dateStart).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss'),
          endDate: new Date(_momentTimezone["default"].utc(data.dateLimit).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss')),
          dateLimit: _momentTimezone["default"].utc(data.dateLimit).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss'),
          tags: data.tags,
          tagsArray: tagsArray,
          projectIds: data.project_id ? [data.project_id] : [],
          user_id: data.user_id,
          timezone: data.timezone,
          currency_id: data.currency_id,
          position: data.position
        });
      });
      setBeneficiary(data.project_id ? 'project' : 'institution');
    }
  }, [auctionDetail]); // add Auction

  (0, _react.useEffect)(function () {
    if (addAuction && addAuction.code === 200) {
      _reactNotifications.NotificationManager.success((0, _reactIntl.useIntl)().formatMessage({
        id: 'success.auction.create'
      }), (0, _reactIntl.useIntl)().formatMessage({
        id: 'success'
      }), 15000);

      setDisabled(false);

      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        window.location.href = '/';
      }

      return;
    }

    if (!(0, _utils.isEmpty)(addAuction)) {
      _reactNotifications.NotificationManager.error((0, _reactIntl.useIntl)().formatMessage({
        id: 'error.auction.create'
      }), (0, _reactIntl.useIntl)().formatMessage({
        id: 'error'
      }), 15000);

      setDisabled(false);
    }
  }, [addAuction]); // update Auction

  (0, _react.useEffect)(function () {
    if (updatedAuction && updatedAuction.code === 200) {
      _reactNotifications.NotificationManager.success((0, _reactIntl.useIntl)().formatMessage({
        id: 'success.auction.create'
      }), (0, _reactIntl.useIntl)().formatMessage({
        id: 'success'
      }), 15000);

      setDisabled(false);

      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        window.location.href = '/';
      }
    }
  }, [updatedAuction]); // Images list

  (0, _react.useEffect)(function () {
    if (addImages && addImages.code === 200) {
      SetUploadFileIsLoading(false);
      var image = addImages.data.images[0].image;
      var data = imagesList;
      data.push({
        id: image.id,
        image: image.image_name
      });
      setImagesList(data);
      var images = form.images;
      images.push(image.id);
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          images: images
        });
      });
      setCropModalStatus(false);
    } else if (addImages && addImages.status === 400) {
      SetUploadFileIsLoading(false);
      setErrors(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          images: (0, _reactIntl.useIntl)().formatMessage({
            id: 'auction.add.error.image'
          })
        });
      });
    }
  }, [addImages]);
  (0, _react.useEffect)(function () {
    setSaveBankAccount(false);
    setLoading(false);
  }, [bankTransfer]);

  var handleChangeInstitutioncategory = function handleChangeInstitutioncategory(e) {
    setIsLoadingInstitutionListSelect(true);
    setInstitutionCategory(e.target.value);
    getInstitutions(1, e.target.value, institutionSearch);
  };

  var handleInstitutionsPageChange = function handleInstitutionsPageChange(page) {
    setIsLoadingInstitutionListSelect(true);
    getInstitutions(page, institutionCategory, institutionSearch);
  };

  var handleProjectsPageChange = function handleProjectsPageChange(page) {
    // setIsLoadingInstitutionListSelect(true);
    var whitelabelConfig = company.whitelabel;
    getProjectsList(whitelabelConfig.id, page, 'APPROVED', undefined, undefined, []);
  };

  (0, _react.useEffect)(function () {
    if (institutionSearch !== null) {
      var handler = setTimeout(function () {
        getInstitutions(1, institutionCategory, institutionSearch);
      }, 500);
      return function () {
        clearTimeout(handler);
      };
    }
  }, [institutionSearch]);

  var handleSearchInstitutions = function handleSearchInstitutions(e) {
    setIsLoadingInstitutionListSelect(true);
    setInstitutionSearch(e.target.value);
  };

  var handleChangeForm = function handleChangeForm(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setForm(function (prevState) {
      var _extends2;

      return (0, _extends4["default"])({}, prevState, (_extends2 = {}, _extends2[name] = value, _extends2));
    });
  };

  var handleDelete = function handleDelete(i) {
    var tagsArray = form.tagsArray;
    tagsArray.splice(i, 1);
    setForm((0, _extends4["default"])({}, form, {
      tagsArray: tagsArray
    }));
  };

  var handleAddition = function handleAddition(tag) {
    var tagsArray = form.tagsArray;
    if (tagsArray.some(function (tagObj) {
      return tagObj.text === tag;
    }) || tag === '') return;
    tagsArray.push({
      id: tagsArray.length + 1,
      text: tag
    });
    setForm((0, _extends4["default"])({}, form, {
      tagsArray: tagsArray
    }));
  };

  var handleChangeStart = function handleChangeStart(date) {
    var endDate = form.endDate;

    var newDate = _reactDatetime["default"].moment(date).format('YYYY-MM-DD HH:mm:ss');

    if (!endDate || endDate > date) {
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          startDate: date
        });
      });
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          dateStart: newDate
        });
      });
    }
  };

  var handleChangeEnd = function handleChangeEnd(date) {
    var startDate = form.startDate;

    var newDate = _reactDatetime["default"].moment(date).format('YYYY-MM-DD HH:mm:ss');

    if (!startDate || startDate < date) {
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          endDate: date
        });
      });
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          dateLimit: newDate
        });
      });
    }
  };

  var handleSelectProject = function handleSelectProject(id, project) {
    var projectIds = form.projectIds;
    var isSelected = projectIds.filter(function (o) {
      return o === id;
    }).length;
    var arrayProjects = projectIds;

    if (isSelected === 0) {
      setIsMyProject(project.as_company === 1 && project.whitelabel_config.company_id === company.id);
      arrayProjects = [id];
    } else {
      setIsMyProject(false);
      arrayProjects.splice(projectIds.findIndex(function (o) {
        return o === id;
      }), 1);
    }

    setForm(function (prevState) {
      return (0, _extends4["default"])({}, prevState, {
        projectIds: arrayProjects
      });
    });
  };

  var handleSelectImage = function handleSelectImage(files) {
    setImagesCount(imagesCount + files.length);
    var companyId = company.id;
    setCropModalStatus(true);
    SetUploadFileIsLoading(true);
    files.map(function (file) {
      var data = {
        image: [file],
        position: [imagesCount + 1],
        "default": [0]
      };
      postUploadImage(companyId, data);
    });
  };

  var handleDeleteImage = function handleDeleteImage(e, idx) {
    var companyId = company.id;
    postAuctionDeleteImage(companyId, e.target.dataset.imageId);
    imagesList.splice(idx, 1);
    setImagesList(imagesList);
    setImagesCount(imagesCount - 1);
  };

  var handleChangeInstitution = function handleChangeInstitution(e) {
    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;

    if (value === '') {
      e.preventDefault();
      setForm(function (prevState) {
        return (0, _extends4["default"])({}, prevState, {
          user_id: ''
        });
      });
    } else {
      setForm(function (prevState) {
        var _extends3;

        return (0, _extends4["default"])({}, prevState, (_extends3 = {}, _extends3[name] = value, _extends3));
      });
    }
  };

  var checkIsValidBankAccount = function checkIsValidBankAccount(resp) {
    setIsValidBankAccount(resp);
  };

  var bankAccountSubmitReset = function bankAccountSubmitReset() {
    setSaveBankAccount(false);
    setLoading(false);
  };

  var isValid = function isValid() {
    var data = form;
    data.showInstitutions = showInstitutions;
    data.showProjects = showProjects;
    data.showBrands = showBrands;
    data.isMyProjet = isMyProjet;
    data.isValidBankAccount = isValidBankAccount;
    data.beneficiary = beneficiary;
    if (isMyProjet && !isValidBankAccount) return false;

    var _validateAuctionForm = (0, _validations["default"])(data),
        errors = _validateAuctionForm.errors,
        isValid = _validateAuctionForm.isValid;

    if (!isValid) {
      setErrors(errors);
      setTimeout(function () {
        var firstError = document.getElementsByClassName('required-field');

        if (firstError[0]) {
          firstError[0].focus();
        } else {
          document.getElementById('add-auction').scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          });
        }
      }, 0);
    }

    return isValid;
  };

  var handleSubmit = function handleSubmit(s) {
    if (s) setStatus(s);

    if (isMyProjet && !(0, _utils.isEmpty)(form.projectIds)) {
      setSaveBankAccount(true);
      setLoading(true);
    }

    if (!isValid()) return;
    setLoading(true);
    var companyId = company.id;
    setDisabled(true);
    var data = {
      acquisition_value: form.acquisition_value,
      bid_interval: form.bid_interval,
      bid_max_interval: form.bid_max_interval,
      bid_start: form.bid_start,
      brand_id: form.brand_id,
      currency_id: form.currency_id,
      dateLimit: form.dateLimit,
      dateStart: form.dateStart,
      description: form.description,
      show_on_esolidar: form.show_on_esolidar,
      images: form.images,
      payment_description: form.payment_description,
      position: form.position,
      "private": form["private"],
      private_code: form.private_code,
      shipping_description: form.shipping_description,
      status: s || status,
      tags: form.tagsArray.length ? form.tagsArray.flatMap(function (tag) {
        return tag.text;
      }).join(',') : null,
      tax: form.tax,
      timezone: form.timezone,
      title: form.title,
      user_id: form.user_id || null,
      video: form.video,
      project_id: form.projectIds.length ? form.projectIds : null
    };

    if (!(0, _utils.isEmpty)(form.projectIds)) {
      data.project_id = form.projectIds.join();
    }

    if (auctionId) {
      putAuction(data, companyId, auctionId);
    } else {
      postAuction(data, companyId);
    }
  };

  var handleChangeBeneficiary = function handleChangeBeneficiary(e) {
    setBeneficiary(e.target.value);
    setForm(function (prevState) {
      return (0, _extends4["default"])({}, prevState, {
        projectIds: [],
        user_id: ''
      });
    });
  };

  (0, _react.useEffect)(function () {
    if (isValidBankAccount) handleSubmit();
  }, [isValidBankAccount]);

  var updateLocalstorage = function updateLocalstorage(bankTransfer) {
    var newLocalStorage = company;
    newLocalStorage.bank_transfer = JSON.stringify(bankTransfer);
    localStorage.setItem(userRole, JSON.stringify(newLocalStorage));
    setLoading(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "add-auction",
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loading-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
      className: "content-header",
      children: [action === null && /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        style: {
          color: primaryColor
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "auctions.add.title"
        })
      }), action === 'edit' && /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        style: {
          color: primaryColor
        },
        "data-testid": "auction-edit-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "Auctions.edit"
        })
      }), action === 'clone' && /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        style: {
          color: primaryColor
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "auctions.clone.title"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "subtitle",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "auction.add.subtitle"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "content-form",
      id: "add-auction",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          sm: 12,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-ltr",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "auction-information",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.add.form.title"
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctionTitle'
                    }),
                    onChange: function onChange(e) {
                      return handleChangeForm(e);
                    },
                    error: errors.title,
                    value: form.title,
                    field: "title",
                    fieldTranslate: "auctionTitle"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctionDescription'
                    }),
                    help: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.info'
                    }),
                    onChange: handleChangeForm,
                    error: errors.description,
                    value: form.description,
                    field: "description",
                    resize: true
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_inputLabel["default"], {
                      label: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'auction.tags'
                      }),
                      showOptionalLabel: true
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                      className: "help",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auction.tags.help"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTagInput.WithContext, {
                      tags: form.tagsArray,
                      handleInputBlur: handleAddition,
                      delimiters: [32, 188, 13, 186, 9]
                      /* space, comma, enter, semicolon, tab */
                      ,
                      handleDelete: handleDelete,
                      placeholder: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'auction.tags.placeholder'
                      }),
                      handleAddition: handleAddition
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "footer-label-info",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auction.tags.info"
                      })
                    })]
                  })
                }), showPrivate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 8,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.add.type'
                    }),
                    info: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.add.type.help'
                    }),
                    options: [{
                      id: '0',
                      name: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'auctionPublic'
                      })
                    }, {
                      id: '1',
                      name: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'auctionPrivate'
                      })
                    }],
                    value: form["private"],
                    field: "private",
                    onChange: handleChangeForm,
                    hiddenSelectText: true
                  })
                }), form["private"] === '1' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 4,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'acessCode'
                    }),
                    onChange: function onChange(e) {
                      return handleChangeForm(e);
                    },
                    error: errors.private_code,
                    value: form.private_code,
                    field: "private_code"
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "help-right-content",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                      style: {
                        color: primaryColor,
                        borderColor: primaryColor
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.help"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "header",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.question1"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.answer1"
                      })
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "images",
                    className: "title-help",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.add.multimedia"
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classnames["default"])('col-sm-12 form-group', {
                    'has-error': errors.images
                  }),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "help mb-4",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.add.multimedia.help"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dropZoneBox["default"], {
                    disabled: imagesCount >= 5,
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.images'
                    }),
                    accept: ".jpg, .jpeg, .png",
                    onSelect: handleSelectImage,
                    showImagesPreviews: true,
                    multiple: false,
                    hasCropper: {
                      showCropper: true,
                      aspectRatioW: 5,
                      aspectRatioH: 4,
                      minWidth: 500,
                      minHeight: 470
                    },
                    imagesList: imagesList,
                    env: {
                      serverlessResizeImage: 'https://image.testesolidar.com'
                    },
                    deleteImageGallery: handleDeleteImage,
                    cropModalStatus: cropModalStatus,
                    titleCropModal: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.add.image'
                    }),
                    textSaveCropModal: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.add.image.crop'
                    }),
                    isLoading: updloadFileIsLoading
                  }), errors.images && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "help-block",
                    children: errors.images
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                    showOptionalLabel: true,
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.video'
                    }),
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.video.placeholder'
                    }),
                    onChange: handleChangeForm,
                    error: errors.video,
                    value: form.video,
                    field: "video"
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                className: "row",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "help-right-content",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "header",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.question2"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.answer2"
                      })
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "auction-pricing",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.pricing.title"
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 6,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textFieldGroup["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.start.bid'
                    }),
                    onChange: handleChangeForm,
                    error: errors.bid_start,
                    value: form.bid_start,
                    field: "bid_start",
                    placeholder: "0.00",
                    type: "number",
                    groupText: !(0, _utils.isEmpty)(company) ? company.currency.symbol : '€'
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 6,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textFieldGroup["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.esolidar.tax'
                    }),
                    info: hasWhitelabel ? (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.esolidar.no.tax.info'
                    }) : (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.esolidar.tax.info'
                    }, {
                      tax: form.tax
                    }),
                    onChange: function onChange() {},
                    error: errors.tax,
                    value: (0, _utils.isEmpty)(hasWhitelabel) ? form.tax : '0',
                    field: "tax",
                    type: "number",
                    groupText: "%",
                    disabled: true
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 6,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textFieldGroup["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctionBidInterval'
                    }),
                    onChange: handleChangeForm,
                    error: errors.bid_interval,
                    value: form.bid_interval,
                    field: "bid_interval",
                    placeholder: "0.00",
                    type: "number",
                    groupText: !(0, _utils.isEmpty)(company) ? company.currency.symbol : '€'
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 6,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textFieldGroup["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctionBidMaxInterval'
                    }),
                    onChange: handleChangeForm,
                    error: errors.bid_max_interval,
                    value: form.bid_max_interval,
                    field: "bid_max_interval",
                    placeholder: "0.00",
                    type: "number",
                    groupText: !(0, _utils.isEmpty)(company) ? company.currency.symbol : '€'
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                    showOptionalLabel: true,
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.payment'
                    }),
                    help: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.payment.help'
                    }),
                    onChange: handleChangeForm,
                    error: errors.payment_description,
                    value: form.payment_description,
                    field: "payment_description",
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.payment.placeholder'
                    }),
                    resize: true
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                    showOptionalLabel: true,
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.shipping'
                    }),
                    help: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.shipping.help'
                    }),
                    onChange: handleChangeForm,
                    error: errors.shipping_description,
                    value: form.shipping_description,
                    field: "shipping_description",
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.description.shipping.placeholder'
                    }),
                    resize: true
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 4
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "select-dates",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.add.selectDates"
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                      sm: 4,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: (0, _classnames["default"])('form-group', {
                          'has-error': errors.dateStart
                        }),
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                          className: "control-label",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                            id: "auctions.add.startDate"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDatepicker["default"], {
                          locale: localStorage.lang === 'en' ? 'en' : 'pt',
                          selected: form.startDate,
                          selectsStart: true,
                          startDate: form.startDate,
                          endDate: form.endDate,
                          showTimeSelect: true,
                          onChange: handleChangeStart,
                          className: "form-control",
                          placeholderText: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'dd-mm-yyyy'
                          }),
                          timeCaption: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'hour'
                          }),
                          dateFormat: "d-MM-yyyy h:mm aa"
                        }), errors.dateStart && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "help-block d-block",
                          children: errors.dateStart
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                      sm: 4,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: (0, _classnames["default"])('form-group', {
                          'has-error': errors.dateLimit
                        }),
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                          className: "control-label",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                            id: "auctions.add.endDate"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDatepicker["default"], {
                          locale: localStorage.lang === 'en' ? 'en' : 'pt',
                          selected: form.endDate,
                          selectsStart: true,
                          startDate: form.startDate,
                          endDate: form.endDate,
                          onChange: handleChangeEnd,
                          showTimeSelect: true,
                          className: "form-control",
                          timeCaption: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'hour'
                          }),
                          placeholderText: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'dd-mm-yyyy'
                          }),
                          dateFormat: "d-MM-yyyy h:mm aa"
                        }), errors.dateLimit && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "help-block d-block",
                          children: errors.dateLimit
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                      sm: 4,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                        label: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'auctions.timezone'
                        }),
                        options: timeZones,
                        value: form.timezone,
                        field: "timezone",
                        onChange: handleChangeForm,
                        hiddenSelectText: true
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 4
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [(showBrands || esolidarList) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "private",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auctions.visibility.esolidar"
                    })
                  })
                }), showBrands && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 8,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.brand'
                    }),
                    options: brandsList,
                    value: form.brand_id,
                    field: "brand_id",
                    error: errors.brand_id,
                    onChange: handleChangeForm,
                    selectText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.addBrand'
                    })
                  })
                }), esolidarList && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 4,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.show.esolidar'
                    }),
                    options: [{
                      id: 'no',
                      name: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'no'
                      })
                    }, {
                      id: 'opened',
                      name: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'yes'
                      })
                    }],
                    value: form.show_on_esolidar,
                    field: "show_on_esolidar",
                    onChange: handleChangeForm,
                    hiddenSelectText: true,
                    info: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.show.esolidar.info'
                    })
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    style: {
                      color: primaryColor,
                      borderColor: primaryColor
                    },
                    "data-testid": "select-institution",
                    className: "title-help",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auction.beneficiary"
                    })
                  })
                }), showProjects && hasProjects && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
                  sm: 12,
                  className: (0, _classnames["default"])('form-group', {
                    'has-error': errors.beneficiary
                  }),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "help mb-4",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auction.beneficiary.help"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radioField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.institution'
                    }),
                    onChange: handleChangeBeneficiary,
                    name: "auction_beneficiary_institution",
                    value: "institution",
                    checked: beneficiary === 'institution'
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_radioField["default"], {
                    label: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.project'
                    }),
                    onChange: handleChangeBeneficiary,
                    name: "auction_beneficiary_project",
                    value: "project",
                    checked: beneficiary === 'project'
                  }), errors.beneficiary && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "help-block",
                    children: errors.beneficiary
                  })]
                }), (showInstitutions && beneficiary === 'institution' || !hasProjects && beneficiary === '') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_institutionListSelect["default"], {
                    user_id: form.user_id || '',
                    institutions: institutionsData,
                    categories: institutionCategoriesData,
                    onChangeInstitutionCategory: handleChangeInstitutioncategory,
                    handlePageChange: handleInstitutionsPageChange,
                    onSearch: handleSearchInstitutions,
                    onChange: handleChangeInstitution,
                    placeholderSearch: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.institution.search.placeholder'
                    }),
                    NoResultsText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auction.no.institution.results'
                    }),
                    selectCategoryText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'select.category'
                    }),
                    error: errors.user_id,
                    search: institutionSearch,
                    pagination: pagination.institutions,
                    isLoading: isLoadingInstitutionListSelect,
                    removeInstitutionSelected: handleChangeInstitution
                  })
                }), showProjects && beneficiary === 'project' && hasProjects && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                    sm: 12,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      className: "control-label",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "projects"
                      })
                    })
                  }), projectsListData.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
                    sm: 12,
                    className: (0, _classnames["default"])('form-group', {
                      'has-error': errors.projectIds
                    }),
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                      children: [projectsListData.map(function (project) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_projectThumb["default"], {
                          project: project,
                          serverlessResizeImage: "https://image.testesolidar.com",
                          lang: localStorage.lang,
                          cols: 6,
                          showStatus: false,
                          myProject: true,
                          select: true,
                          selectProject: handleSelectProject,
                          selectText: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'select'
                          }),
                          selectedText: (0, _reactIntl.useIntl)().formatMessage({
                            id: 'selected'
                          }),
                          isSelected: true,
                          selectedIds: form.projectIds
                        }, project.id);
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                        sm: 12,
                        className: (0, _classnames["default"])('form-group', {
                          'has-error': errors.projectIds
                        }),
                        children: errors.projectIds && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "help-block d-block",
                          children: errors.projectIds
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                        sm: 12,
                        className: "text-center",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsPagination["default"], {
                          innerClass: "pagination justify-content-center",
                          activePage: pagination.projects.activePage,
                          itemsCountPerPage: pagination.projects.itemsCountPerPage,
                          totalItemsCount: pagination.projects.totalItemsCount,
                          pageRangeDisplayed: 5,
                          onChange: handleProjectsPageChange
                        })
                      })
                    })]
                  }), projectsListData.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                    sm: 12,
                    className: "text-center",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auction.no.project"
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 4,
              children: !(0, _utils.isEmpty)(hasWhitelabel) && userRole === 'company' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                className: "row",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "help-right-content",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "header",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.question0"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text mb-5",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "auctions.add.answer0"
                      })
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [isMyProjet && (0, _utils.isEmpty)(userBankTransfer[company.country] || [] || userBankTransfer[1] || []) && !(0, _utils.isEmpty)(form.projectIds) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bankAccounts["default"], {
                countryId: company.country_id,
                postBankTransfer: putCompanyBankTransfer,
                getBankTransfer: userBankTransfer,
                bankTransfer: bankTransfer,
                userBankTransfer: JSON.parse(company.bank_transfer || '{}'),
                userId: company.id,
                updateLocalstorage: updateLocalstorage,
                saveBankAccount: saveBankAccount,
                hideSaveButton: true,
                cols: 6,
                bankAccountSubmitReset: bankAccountSubmitReset,
                checkIsValidBankAccount: checkIsValidBankAccount
              }), errors.bankAccount && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "has-error",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "help-block",
                  children: errors.bankAccount
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lr text-center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
                children: [!isMyProjet && !(0, _utils.isEmpty)(form.projectIds) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "subtext",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auction.add.project.member"
                    })
                  })
                }), (0, _utils.isEmpty)(hasWhitelabel) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                  sm: 12,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "subtext",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "auction.add.submit.text"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              md: 8,
              className: "box-lbr",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
                  sm: 12,
                  className: "mt-5 text-center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                    dataTestId: "btn-cancel",
                    extraClass: "dark mr-3",
                    href: "/auctions",
                    text: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel'
                    })
                  }), !(0, _utils.isEmpty)(hasWhitelabel) && userRole === 'company' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                    dataTestId: "btn-submit-draft",
                    extraClass: "info-full mr-3",
                    onClick: function onClick() {
                      return handleSubmit('P');
                    },
                    text: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.add.submit.draft'
                    }),
                    disabled: disabled
                  }), action === null && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                    dataTestId: "btn-submit",
                    extraClass: "success-full btn-submit",
                    onClick: function onClick() {
                      return handleSubmit((0, _utils.isEmpty)(hasWhitelabel) ? 'P' : 'A');
                    },
                    text: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.add.submitAuction'
                    }),
                    disabled: disabled
                  }), action === 'edit' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                    dataTestId: "btn-submit-edit",
                    extraClass: "success-full btn-submit",
                    text: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.edit.submitAuction'
                    }),
                    disabled: disabled
                  }), action === 'clone' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                    dataTestId: "btn-submit-clone",
                    extraClass: "success-full btn-submit",
                    onClick: function onClick() {
                      return handleSubmit((0, _utils.isEmpty)(hasWhitelabel) ? 'P' : 'A');
                    },
                    text: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'auctions.clone.submitAuction'
                    }),
                    disabled: disabled
                  })]
                })
              })
            })]
          })]
        })
      })
    })]
  });
};

AuctionAddForm.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action for the form 'null', 'edit' or 'clone'
   */
  action: _propTypes["default"].string,

  /**
   * The response from the API when post the form
   */
  addAuction: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].object
  }),

  /**
   * The response from the API when post the images
   */
  addImages: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      images: _propTypes["default"].object
    }),
    status: _propTypes["default"].number
  }),

  /**
   * The response from the API when get brands
   */
  brands: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].array
  }),

  /**
   * Action to get brands list
   */
  getBrandsList: _propTypes["default"].func,

  /**
   * Action to get Institution Categories list
   */
  getInstitutionCategories: _propTypes["default"].func,

  /**
   * Action to get Institution list
   */
  getInstitutions: _propTypes["default"].func,

  /**
   * Action to get Projects list (whitelabelId, page, status, categotyId, title, projectOds = [])
   * @param {number} whitelabelId
   * @param {number} page
   * @param {string} status
   * @param {number} categotyId
   * @param {string} title
   * @param {array} projectOds
   */
  getProjectsList: _propTypes["default"].func,
  institutionCategories: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      categories: _propTypes["default"].array
    })
  }),
  institutions: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      institutions: _propTypes["default"].shape({
        current_page: _propTypes["default"].number,
        data: _propTypes["default"].array,
        per_page: _propTypes["default"].number,
        total: _propTypes["default"].number
      })
    })
  }),

  /**
   * @ignore
   */
  loadingPage: _propTypes["default"].bool,
  postAuction: _propTypes["default"].func,
  postAuctionDeleteImage: _propTypes["default"].func,
  postUploadImage: _propTypes["default"].func,
  primaryColor: _propTypes["default"].string,
  projectsList: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      data: _propTypes["default"].array,
      current_page: _propTypes["default"].number,
      per_page: _propTypes["default"].number,
      total: _propTypes["default"].number
    })
  }),
  showBrands: _propTypes["default"].bool,
  esolidarList: _propTypes["default"].bool,
  showInstitutions: _propTypes["default"].bool,
  showPrivate: _propTypes["default"].bool,
  showProjects: _propTypes["default"].bool,
  timeZones: _propTypes["default"].array,
  returnUrl: _propTypes["default"].string,
  userRole: _propTypes["default"].oneOf(['user', 'company']),
  subscription: _propTypes["default"].array,
  auctionId: _propTypes["default"].string,
  getAuctionDetail: _propTypes["default"].func,
  putAuction: _propTypes["default"].func,
  updatedAuction: _propTypes["default"].object,
  auctionDetail: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].object
  }),
  userBankTransfer: _propTypes["default"].object,
  bankTransfer: _propTypes["default"].object,
  putCompanyBankTransfer: _propTypes["default"].func
} : {};
var _default = AuctionAddForm;
exports["default"] = _default;
module.exports = exports.default;