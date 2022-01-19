/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { WithContext as ReactTags } from 'react-tag-input';
import classnames from 'classnames';
import { NotificationManager } from 'react-notifications';
import Datetime from 'react-datetime';
import moment from 'moment-timezone';
import Pagination from '../../elements/pagination';
import convertToUtc from '../../utils/convertToUtc';
import Loading from '../loading';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import TextFieldGroup from '../../elements/textFieldGroup';
import DropZoneBox from '../../elements/dropZoneBox';
import Button from '../../elements/button';
import DatePicker from '../../elements/datePicker';
import InstitutionListSelect from '../institutionListSelect';
import ProjectThumb from '../projectThumb';
import SelectField from '../../elements/selectField';
import BankAccount from '../bankAccounts';
import InputLabel from '../../elements/inputLabel';
import RadioField from '../../elements/radioField';
import validateAuctionForm from './validations';
import isEmpty from '../../utils/isEmpty';

/**
 * Auction add form.
 *
 * @visibleName Auction add form
 */

const AuctionAddForm = ({
  loadingPage,
  action,
  timeZones,
  getInstitutions,
  institutions,
  getInstitutionCategories,
  institutionCategories,
  showInstitutions,
  showProjects,
  showBrands,
  showPrivate,
  projectsList,
  getProjectsList,
  primaryColor,
  getBrandsList,
  brands,
  postUploadImage,
  addImages,
  postAuction,
  addAuction,
  putAuction,
  updatedAuction,
  postAuctionDeleteImage,
  returnUrl,
  userRole,
  subscription,
  auctionId,
  auctionDetail,
  getAuctionDetail,
  esolidarList,
  userBankTransfer,
  putCompanyBankTransfer,
  bankTransfer,
  deleteImages,
  company,
  locale,
}) => {
  const hasWhitelabel = subscription.find(item => item.name === 'whitelabel') || {};
  const hasProjects = !isEmpty(subscription.find(item => item.name === 'projects') || {});
  const [form, setForm] = useState({
    show_on_esolidar: !hasProjects ? 'opened' : '',
    title: '',
    bid_start: '',
    description: '',
    bid_interval: '1',
    bid_max_interval: '100',
    brand_id: '',
    tax: isEmpty(hasWhitelabel) ? company.country.auction_tax * 100 : 0,
    acquisition_value: '0',
    status: 'P',
    private: '0',
    private_code: '',
    shipping_description: '',
    payment_description: '',
    images: [],
    video: '',
    startDate: undefined,
    endDate: undefined,
    tags: '',
    tagsArray: [],
    projectIds: [],
    user_id: '',
    timezone: moment.tz.guess(),
    currency_id: !isEmpty(company) ? company.currency_id : 1,
    position: '1',
  });
  const [pagination, setPagination] = useState({
    institutions: {
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
    },
    projects: {
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
    },
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(loadingPage || false);
  const [disabled, setDisabled] = useState(false);
  const [imagesCount, setImagesCount] = useState(0);
  const [isLoadingInstitutionListSelect, setIsLoadingInstitutionListSelect] = useState(false);
  const [institutionsData, setInstitutionsData] = useState([]);
  const [institutionCategoriesData, setInstitutionCategoriesData] = useState([]);
  const [institutionCategory, setInstitutionCategory] = useState('');
  const [institutionSearch, setInstitutionSearch] = useState(null);
  const [projectsListData, setProjectsListData] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const [imagesList, setImagesList] = useState([]);
  const [cropModalStatus, setCropModalStatus] = useState(false);
  const [saveBankAccount, setSaveBankAccount] = useState(false);
  const [isMyProjet, setIsMyProject] = useState(false);
  const [isValidBankAccount, setIsValidBankAccount] = useState(false);
  const [updloadFileIsLoading, SetUploadFileIsLoading] = useState(false);
  const [beneficiary, setBeneficiary] = useState('');
  const [status, setStatus] = useState('');
  const [deletedImage, setDeletedImage] = useState(null);

  const intl = useIntl();

  useEffect(() => {
    if (auctionId) {
      getAuctionDetail(company.id, auctionId);
    }
    if (showInstitutions) {
      getInstitutionCategories();
    }
    if (showProjects && hasProjects) {
      const whitelabelConfig = company.whitelabel;
      getProjectsList(whitelabelConfig.id, 1, 'APPROVED', undefined, undefined, []);
    }

    if (showBrands) {
      const companyId = company.id;
      getBrandsList(companyId);
    }
  }, []);

  // institutions list
  useEffect(() => {
    if (institutions && institutions.code === 200) {
      setIsLoadingInstitutionListSelect(false);
      setInstitutionsData(institutions.data.institutions.data);
      const data = {
        activePage: institutions.data.institutions.current_page,
        itemsCountPerPage: institutions.data.institutions.per_page,
        totalItemsCount: institutions.data.institutions.total,
      };
      setPagination(prevState => ({ ...prevState, institutions: data }));
    }
  }, [institutions]);

  // category institutions list
  useEffect(() => {
    if (institutionCategories && institutionCategories.code === 200) {
      const { categories } = institutionCategories.data;
      setInstitutionCategoriesData(categories);
    }
  }, [institutionCategories]);

  // Projects list
  useEffect(() => {
    if (projectsList && projectsList.code === 200) {
      const { data } = projectsList;
      setProjectsListData(data.data);
      const dataPaginator = {
        activePage: data.current_page,
        itemsCountPerPage: data.per_page,
        totalItemsCount: data.total,
      };

      setPagination(prevState => ({ ...prevState, projects: dataPaginator }));
    }
  }, [projectsList]);

  // Brands list
  useEffect(() => {
    if (brands && brands.code === 200) {
      const { data } = brands;
      setBrandsList(data);
    }
  }, [brands]);

  // Auction detail
  useEffect(() => {
    if (auctionDetail && auctionDetail.code === 200) {
      const { data } = auctionDetail;

      if (data.status === 'A') {
        NotificationManager.error(
          intl.formatMessage({ id: 'auction.edit.forbidden' }),
          intl.formatMessage({ id: 'error' }),
          15000
        );

        window.location.href = '/auctions';
      }

      const imagesListArray = [];
      const imagesArray = [];

      data.images.map(image => {
        imagesListArray.push({
          id: image.id,
          image: image.image_name,
        });
        imagesArray.push(image.id);
      });

      setImagesList(imagesListArray);

      const institutionName = data.institution ? data.institution.name : '';

      setInstitutionSearch(institutionName);
      getInstitutions(pagination.institutions.activePage, institutionCategory, institutionName);

      const tags = data.tags ? data.tags.split(',') : [];
      const tagsArray = tags.map((tag, idx) => {
        return {
          id: idx,
          text: tag,
        };
      });

      setIsMyProject(
        data.project
          ? data.project.as_company === 1 &&
              data.project.whitelabel_config.company_id === company.id
          : false
      );

      setForm(prevState => ({
        ...prevState,
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
        private: data.private,
        private_code: data.private_code,
        shipping_description: data.shipping_description,
        payment_description: data.payment_description,
        images: imagesArray,
        video: data.video || '',
        startDate: new Date(
          moment.utc(data.dateStart).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss')
        ),
        dateStart: moment.utc(data.dateStart).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss'),
        endDate: new Date(
          moment.utc(data.dateLimit).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss')
        ),
        dateLimit: moment.utc(data.dateLimit).tz(data.timezone).format('YYYY-MM-DD HH:mm:ss'),
        tags: data.tags,
        tagsArray,
        projectIds: data.project_id ? [data.project_id] : [],
        user_id: data.user_id,
        timezone: data.timezone,
        currency_id: data.currency_id,
        position: data.position,
      }));

      setBeneficiary(data.project_id ? 'project' : 'institution');
    }
  }, [auctionDetail]);

  // add Auction
  useEffect(() => {
    if (addAuction && addAuction.code === 200) {
      NotificationManager.success(
        intl.formatMessage({ id: 'success.auction.create' }),
        intl.formatMessage({ id: 'success' }),
        15000
      );
      setDisabled(false);

      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        window.location.href = '/';
      }
      return;
    }
    if (!isEmpty(addAuction)) {
      NotificationManager.error(
        intl.formatMessage({ id: 'error.auction.create' }),
        intl.formatMessage({ id: 'error' }),
        15000
      );

      setDisabled(false);
    }
  }, [addAuction]);

  // update Auction
  useEffect(() => {
    if (updatedAuction && updatedAuction.code === 200) {
      NotificationManager.success(
        intl.formatMessage({ id: 'success.auction.create' }),
        intl.formatMessage({ id: 'success' }),
        15000
      );
      setDisabled(false);

      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        window.location.href = '/';
      }
    }
  }, [updatedAuction]);

  // Images list
  useEffect(() => {
    if (addImages && addImages.code === 200) {
      SetUploadFileIsLoading(false);
      const { image } = addImages.data.images[0];
      const data = imagesList;
      data.push({
        id: image.id,
        image: image.image_name,
      });

      setImagesList(data);
      const { images } = form;
      images.push(image.id);
      setForm(prevState => ({ ...prevState, images }));
      setCropModalStatus(false);
    } else if (addImages && addImages.status === 400) {
      SetUploadFileIsLoading(false);
      setErrors(prevState => ({
        ...prevState,
        images: intl.formatMessage({ id: 'auction.add.error.image' }),
      }));
    }
  }, [addImages]);

  useEffect(() => {
    setSaveBankAccount(false);
    setLoading(false);
  }, [bankTransfer]);

  useEffect(() => {
    if (deleteImages?.code === 200) {
      const { images } = form;
      const { deleted: isDeleted } = deleteImages.data.images;

      if (isDeleted)
        setForm({ ...form, images: images.filter(imageId => imageId !== +deletedImage) });
    }
  }, [deleteImages]);

  useEffect(() => {
    if (beneficiary === 'institution') getInstitutions(1, institutionCategory, institutionSearch);
  }, [beneficiary]);

  const handleChangeInstitutioncategory = e => {
    setIsLoadingInstitutionListSelect(true);
    setInstitutionCategory(e.target.value);
    getInstitutions(1, e.target.value, institutionSearch);
  };

  const handleInstitutionsPageChange = page => {
    setIsLoadingInstitutionListSelect(true);
    getInstitutions(page, institutionCategory, institutionSearch);
  };

  const handleProjectsPageChange = page => {
    // setIsLoadingInstitutionListSelect(true);
    const whitelabelConfig = company.whitelabel;
    getProjectsList(whitelabelConfig.id, page, 'APPROVED', undefined, undefined, []);
  };

  useEffect(() => {
    if (institutionSearch !== null) {
      const handler = setTimeout(() => {
        getInstitutions(1, institutionCategory, institutionSearch);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [institutionSearch]);

  const handleSearchInstitutions = e => {
    setIsLoadingInstitutionListSelect(true);
    setInstitutionSearch(e.target.value);
  };

  const handleChangeForm = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDelete = i => {
    const { tagsArray } = form;
    tagsArray.splice(i, 1);
    setForm({ ...form, tagsArray });
  };

  const handleAddition = tag => {
    const { tagsArray } = form;
    if (tagsArray.some(tagObj => tagObj.text === tag) || tag === '') return;

    tagsArray.push({
      id: tagsArray.length + 1,
      text: tag,
    });
    setForm({ ...form, tagsArray });
  };

  const handleChangeStart = date => {
    const { endDate } = form;
    const newDate = Datetime.moment(date).format('YYYY-MM-DD HH:mm:ss');
    if (!endDate || endDate > date) {
      setForm(prevState => ({ ...prevState, startDate: date }));
      setForm(prevState => ({ ...prevState, dateStart: newDate }));
    } else if (endDate < date) {
      setForm(prevState => ({ ...prevState, startDate: date }));
      setForm(prevState => ({ ...prevState, endDate: '' }));
    }
  };

  const handleChangeEnd = date => {
    const { startDate } = form;
    const newDate = Datetime.moment(date).format('YYYY-MM-DD HH:mm:ss');
    if (!startDate || startDate < date) {
      setForm(prevState => ({ ...prevState, endDate: date }));
      setForm(prevState => ({ ...prevState, dateLimit: newDate }));
    }
  };

  const handleSelectProject = (id, project) => {
    const { projectIds } = form;
    const isSelected = projectIds.filter(o => o === id).length;
    let arrayProjects = projectIds;
    if (isSelected === 0) {
      setIsMyProject(
        project.as_company === 1 && project.whitelabel_config.company_id === company.id
      );
      arrayProjects = [id];
    } else {
      setIsMyProject(false);
      arrayProjects.splice(
        projectIds.findIndex(o => o === id),
        1
      );
    }

    setForm(prevState => ({ ...prevState, projectIds: arrayProjects }));
  };

  const handleSelectImage = files => {
    setImagesCount(imagesCount + files.length);
    const companyId = company.id;
    setCropModalStatus(true);
    SetUploadFileIsLoading(true);
    files.map(file => {
      const data = {
        image: [file],
        position: [imagesCount + 1],
        default: [0],
      };

      postUploadImage(companyId, data);
    });
  };

  const handleDeleteImage = (e, idx) => {
    const { id: companyId } = company;
    const { imageId } = e.target.dataset;
    postAuctionDeleteImage(companyId, imageId);

    imagesList.splice(idx, 1);

    setImagesList(imagesList);
    setImagesCount(imagesCount - 1);
    setDeletedImage(imageId);
  };

  const handleChangeInstitution = institution => {
    setForm(prevState => ({ ...prevState, user_id: institution ? institution.user_id : '' }));
  };

  const checkIsValidBankAccount = resp => {
    setIsValidBankAccount(resp);
  };

  const bankAccountSubmitReset = () => {
    setSaveBankAccount(false);
    setLoading(false);
  };

  const isValid = () => {
    const data = form;
    data.showInstitutions = showInstitutions;
    data.showProjects = showProjects;
    data.showBrands = showBrands;
    data.isMyProjet = isMyProjet;
    data.isValidBankAccount = isValidBankAccount;
    data.beneficiary = beneficiary;

    if (isMyProjet && !isValidBankAccount) return false;

    const { errors, isValid } = validateAuctionForm(data);
    if (!isValid) {
      setErrors(errors);
      setTimeout(() => {
        const errorList = document.getElementsByClassName('help-block');
        const elm = errorList[0];
        elm.scrollIntoView({ block: 'center' });
      }, 0);
      return false;
    }

    return isValid;
  };

  const handleSubmit = s => {
    if (s) setStatus(s);
    if (isMyProjet && !isEmpty(form.projectIds)) {
      setSaveBankAccount(true);
      setLoading(true);
    }

    if (!isValid()) return;

    setLoading(true);
    const companyId = company.id;
    setDisabled(true);

    const data = {
      acquisition_value: form.acquisition_value,
      bid_interval: form.bid_interval,
      bid_max_interval: form.bid_max_interval,
      bid_start: form.bid_start,
      brand_id: form.brand_id,
      currency_id: form.currency_id,
      dateLimit: convertToUtc(form.dateLimit, form.timezone),
      dateStart: convertToUtc(form.dateStart, form.timezone),
      description: form.description,
      show_on_esolidar: form.show_on_esolidar,
      images: form.images,
      payment_description: form.payment_description,
      position: form.position,
      private: form.private,
      private_code: form.private_code,
      shipping_description: form.shipping_description,
      status: s || status,
      tags: form.tagsArray.length ? form.tagsArray.flatMap(tag => tag.text).join(',') : null,
      tax: form.tax,
      timezone: form.timezone,
      title: form.title,
      user_id: form.user_id || null,
      video: form.video,
      project_id: form.projectIds.length ? form.projectIds : null,
    };

    if (!isEmpty(form.projectIds)) {
      data.project_id = form.projectIds.join();
    }

    if (auctionId) {
      putAuction(data, companyId, auctionId);
    } else {
      postAuction(data, companyId);
    }
  };

  const handleChangeBeneficiary = e => {
    setBeneficiary(e.target.value);
    setForm(prevState => ({
      ...prevState,
      projectIds: [],
      user_id: '',
    }));
    setIsMyProject(false);
  };

  useEffect(() => {
    if (isValidBankAccount) handleSubmit();
  }, [isValidBankAccount]);

  const updateLocalstorage = bankTransfer => {
    const newLocalStorage = company;
    newLocalStorage.bank_transfer = JSON.stringify(bankTransfer);
    localStorage.setItem(userRole, JSON.stringify(newLocalStorage));
    setLoading(false);
  };

  return (
    <div className="add-auction">
      {loading && (
        <div className="loading-page">
          <Loading />
        </div>
      )}
      <section className="content-header">
        {action === null && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage id="auctions.add.title" />
          </h1>
        )}
        {action === 'edit' && (
          <h1 style={{ color: primaryColor }} data-testid="auction-edit-title">
            <FormattedMessage id="Auctions.edit" />
          </h1>
        )}
        {action === 'clone' && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage id="auctions.clone.title" />
          </h1>
        )}
        <p className="subtitle">
          <FormattedMessage id="auction.add.subtitle" />
        </p>
      </section>
      <section className="content-form" id="add-auction">
        <Row>
          <Col sm={12}>
            <Row>
              <Col md={8} className="box-ltr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="auction-information"
                    >
                      <FormattedMessage id="auctions.add.form.title" />
                    </h3>
                  </Col>
                  <Col sm={12}>
                    <TextField
                      label={intl.formatMessage({ id: 'title' })}
                      onChange={e => handleChangeForm(e)}
                      error={errors.title}
                      value={form.title}
                      field="title"
                      fieldTranslate="title"
                      maxLength="255"
                      autofocus={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      label={intl.formatMessage({ id: 'description' })}
                      help={intl.formatMessage({ id: 'auction.description.info' })}
                      onChange={handleChangeForm}
                      error={errors.description}
                      value={form.description}
                      field="description"
                      resize={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <div className="form-group">
                      <InputLabel
                        label={intl.formatMessage({ id: 'auction.tags' })}
                        showOptionalLabel={true}
                        help={<FormattedMessage id="auction.tags.help" />}
                        style={{ marginBottom: 0 }}
                      />
                      <ReactTags
                        tags={form.tagsArray}
                        handleInputBlur={handleAddition}
                        delimiters={[32, 188, 13, 186, 9]}
                        handleDelete={handleDelete}
                        placeholder={intl.formatMessage({ id: 'auction.tags.placeholder' })}
                        handleAddition={handleAddition}
                        autofocus={false}
                      />
                      <span className="footer-label-info">
                        <FormattedMessage id="auction.tags.info" />
                      </span>
                    </div>
                  </Col>
                  {showPrivate && (
                    <Col sm={8}>
                      <SelectField
                        label={intl.formatMessage({ id: 'auctions.add.type' })}
                        info={intl.formatMessage({ id: 'auctions.add.type.help' })}
                        options={[
                          {
                            id: '0',
                            name: intl.formatMessage({ id: 'auctionPublic' }),
                          },
                          {
                            id: '1',
                            name: intl.formatMessage({ id: 'auctionPrivate' }),
                          },
                        ]}
                        value={form.private}
                        field="private"
                        onChange={handleChangeForm}
                        hiddenSelectText={true}
                      />
                    </Col>
                  )}
                  {form.private.toString() === '1' && (
                    <Col sm={4}>
                      <TextField
                        label={intl.formatMessage({ id: 'acessCode' })}
                        onChange={e => handleChangeForm(e)}
                        error={errors.private_code}
                        value={form.private_code}
                        field="private_code"
                        maxLength="255"
                      />
                    </Col>
                  )}
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <div className="col-md-12">
                    <div className="help-right-content d-none d-md-block">
                      <h4 style={{ color: primaryColor, borderColor: primaryColor }}>
                        <FormattedMessage id="auctions.add.help" />
                      </h4>
                      <div className="header">
                        <FormattedMessage id="auctions.add.question1" />
                      </div>
                      <div className="text">
                        <FormattedMessage id="auctions.add.answer1" />
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="box-lr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="images"
                      className="title-help"
                    >
                      <FormattedMessage id="auctions.add.multimedia" />
                    </h3>
                  </Col>
                  <div
                    className={classnames('col-sm-12 form-group', { 'has-error': errors.images })}
                  >
                    <span className="help mb-4">
                      <FormattedMessage id="auctions.add.multimedia.help" />
                    </span>
                    <DropZoneBox
                      disabled={imagesCount >= 5}
                      label={intl.formatMessage({ id: 'auction.images' })}
                      accept=".jpg, .jpeg, .png"
                      onSelect={handleSelectImage}
                      showImagesPreviews={true}
                      multiple={false}
                      hasCropper={{
                        showCropper: true,
                        aspectRatioW: 5,
                        aspectRatioH: 4,
                        minWidth: 500,
                        minHeight: 470,
                      }}
                      imagesList={imagesList}
                      env={{
                        serverlessResizeImage: 'https://image.testesolidar.com',
                      }}
                      deleteImageGallery={handleDeleteImage}
                      cropModalStatus={cropModalStatus}
                      titleCropModal={intl.formatMessage({ id: 'auction.add.image' })}
                      textSaveCropModal={intl.formatMessage({ id: 'auction.add.image.crop' })}
                      isLoading={updloadFileIsLoading}
                      hasError={!isEmpty(errors) && !!errors.images}
                    />
                    {errors.images && <div className="help-block">{errors.images}</div>}
                  </div>
                  <Col sm={12}>
                    <TextField
                      showOptionalLabel={true}
                      label={intl.formatMessage({ id: 'auction.video' })}
                      placeholder={intl.formatMessage({ id: 'auction.video.placeholder' })}
                      onChange={handleChangeForm}
                      error={errors.video}
                      value={form.video}
                      field="video"
                      maxLength="255"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row className="row">
                  <div className="col-md-12">
                    <div className="help-right-content d-none d-md-block">
                      <div className="header">
                        <FormattedMessage id="auctions.add.question2" />
                      </div>
                      <div className="text">
                        <FormattedMessage id="auctions.add.answer2" />
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="box-lr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="auction-pricing"
                    >
                      <FormattedMessage id="auctions.pricing.title" />
                    </h3>
                  </Col>
                  <Col sm={6}>
                    <TextFieldGroup
                      label={intl.formatMessage({ id: 'auction.start.bid' })}
                      onChange={handleChangeForm}
                      error={errors.bid_start}
                      value={form.bid_start}
                      field="bid_start"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={6}>
                    <TextFieldGroup
                      label={intl.formatMessage({ id: 'auction.esolidar.tax' })}
                      info={
                        hasWhitelabel
                          ? intl.formatMessage({ id: 'auction.esolidar.no.tax.info' })
                          : intl.formatMessage(
                              { id: 'auction.esolidar.tax.info' },
                              { tax: form.tax }
                            )
                      }
                      onChange={() => {}}
                      error={errors.tax}
                      value={isEmpty(hasWhitelabel) ? form.tax : '0'}
                      field="tax"
                      type="number"
                      groupText="%"
                      disabled={true}
                    />
                  </Col>
                  <Col sm={6}>
                    <TextFieldGroup
                      label={intl.formatMessage({ id: 'auctionBidInterval' })}
                      onChange={handleChangeForm}
                      error={errors.bid_interval}
                      value={form.bid_interval}
                      field="bid_interval"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={6}>
                    <TextFieldGroup
                      label={intl.formatMessage({ id: 'auctionBidMaxInterval' })}
                      onChange={handleChangeForm}
                      error={errors.bid_max_interval}
                      value={form.bid_max_interval}
                      field="bid_max_interval"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      showOptionalLabel={true}
                      label={intl.formatMessage({ id: 'auction.description.payment' })}
                      help={intl.formatMessage({ id: 'auction.description.payment.help' })}
                      onChange={handleChangeForm}
                      error={errors.payment_description}
                      value={form.payment_description}
                      field="payment_description"
                      placeholder={intl.formatMessage({
                        id: 'auction.description.payment.placeholder',
                      })}
                      resize={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      showOptionalLabel={true}
                      label={intl.formatMessage({ id: 'auction.description.shipping' })}
                      help={intl.formatMessage({ id: 'auction.description.shipping.help' })}
                      onChange={handleChangeForm}
                      error={errors.shipping_description}
                      value={form.shipping_description}
                      field="shipping_description"
                      placeholder={intl.formatMessage({
                        id: 'auction.description.shipping.placeholder',
                      })}
                      resize={true}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={4} />
            </Row>
            <Row>
              <Col md={8} className="box-lr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="select-dates"
                    >
                      <FormattedMessage id="auctions.add.selectDates" />
                    </h3>
                  </Col>
                  <div className="col-md-12">
                    <Row>
                      <Col sm={4}>
                        <DatePicker
                          label={intl.formatMessage({ id: 'auctions.add.startDate' })}
                          locale={locale}
                          selected={form.startDate}
                          selectsStart
                          startDate={form.startDate}
                          endDate={form.endDate}
                          showTimeSelect
                          onChange={handleChangeStart}
                          className="form-control"
                          placeholderText={intl.formatMessage({ id: 'dd-mm-yyyy' })}
                          timeCaption={intl.formatMessage({ id: 'hour' })}
                          dateFormat="d-MM-yyyy h:mm aa"
                          minDate={new Date()}
                          errors={errors.dateStart}
                        />
                      </Col>
                      <Col sm={4}>
                        <DatePicker
                          label={intl.formatMessage({ id: 'auctions.add.endDate' })}
                          locale={locale}
                          selected={form.endDate}
                          selectsStart
                          startDate={form.startDate}
                          endDate={form.endDate}
                          onChange={handleChangeEnd}
                          showTimeSelect
                          className="form-control"
                          timeCaption={intl.formatMessage({ id: 'hour' })}
                          placeholderText={intl.formatMessage({ id: 'dd-mm-yyyy' })}
                          dateFormat="d-MM-yyyy h:mm aa"
                          minDate={form.startDate}
                          errors={errors.dateLimit}
                        />
                      </Col>
                      <Col sm={4}>
                        <SelectField
                          label={intl.formatMessage({ id: 'auctions.timezone' })}
                          options={timeZones}
                          value={form.timezone}
                          field="timezone"
                          onChange={handleChangeForm}
                          hiddenSelectText={true}
                        />
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col md={4} />
            </Row>
            <Row>
              <Col md={8} className="box-lr">
                <Row>
                  {(showBrands || esolidarList) && (
                    <Col sm={12}>
                      <h3
                        style={{ color: primaryColor, borderColor: primaryColor }}
                        data-testid="private"
                      >
                        <FormattedMessage id="auctions.visibility.esolidar" />
                      </h3>
                    </Col>
                  )}
                  {showBrands && (
                    <Col sm={8}>
                      <SelectField
                        label={intl.formatMessage({ id: 'auction.brand' })}
                        options={brandsList}
                        value={form.brand_id}
                        field="brand_id"
                        error={errors.brand_id}
                        onChange={handleChangeForm}
                        selectText={intl.formatMessage({ id: 'auctions.addBrand' })}
                      />
                    </Col>
                  )}
                  {esolidarList && (
                    <Col sm={4}>
                      <SelectField
                        label={intl.formatMessage({ id: 'auctions.show.esolidar' })}
                        options={[
                          {
                            id: 'no',
                            name: intl.formatMessage({ id: 'no' }),
                          },
                          {
                            id: 'opened',
                            name: intl.formatMessage({ id: 'yes' }),
                          },
                        ]}
                        value={form.show_on_esolidar}
                        field="show_on_esolidar"
                        onChange={handleChangeForm}
                        hiddenSelectText={true}
                        info={intl.formatMessage({ id: 'auctions.show.esolidar.info' })}
                      />
                    </Col>
                  )}
                </Row>
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="select-institution"
                      className="title-help"
                    >
                      <FormattedMessage id="toolkit.beneficiary" />
                    </h3>
                  </Col>
                  {showProjects && hasProjects && (
                    <Col
                      sm={12}
                      className={classnames('form-group', { 'has-error': errors.beneficiary })}
                    >
                      <span className="help mb-4">
                        <FormattedMessage id="auction.beneficiary.help" />
                      </span>
                      <RadioField
                        label={intl.formatMessage({ id: 'institution' })}
                        onChange={handleChangeBeneficiary}
                        name="auction_beneficiary_institution"
                        value="institution"
                        checked={beneficiary === 'institution'}
                      />
                      <RadioField
                        label={intl.formatMessage({ id: 'auction.project' })}
                        onChange={handleChangeBeneficiary}
                        name="auction_beneficiary_project"
                        value="project"
                        checked={beneficiary === 'project'}
                      />
                    </Col>
                  )}
                  {errors.beneficiary && (
                    <Col sm={12} className={classnames({ 'has-error': errors.beneficiary })}>
                      <div className="help-block">{errors.beneficiary}</div>
                    </Col>
                  )}
                  {((showInstitutions && beneficiary === 'institution') ||
                    (!hasProjects && beneficiary === '')) && (
                    <Col sm={12}>
                      <InstitutionListSelect
                        user_id={form.user_id || ''}
                        institutions={institutionsData}
                        categories={institutionCategoriesData}
                        onChangeInstitutionCategory={handleChangeInstitutioncategory}
                        handlePageChange={handleInstitutionsPageChange}
                        onSearch={handleSearchInstitutions}
                        onChange={handleChangeInstitution}
                        placeholderSearch={intl.formatMessage({
                          id: 'auction.institution.search.placeholder',
                        })}
                        NoResultsText={intl.formatMessage({ id: 'auction.no.institution.results' })}
                        selectCategoryText={intl.formatMessage({ id: 'select.category' })}
                        error={errors.user_id}
                        search={institutionSearch}
                        pagination={pagination.institutions}
                        isLoading={isLoadingInstitutionListSelect}
                        removeInstitutionSelected={handleChangeInstitution}
                      />
                    </Col>
                  )}
                  {showProjects && beneficiary === 'project' && hasProjects && (
                    <>
                      <Col sm={12}>
                        <label className="control-label">
                          <FormattedMessage id="projects" />
                        </label>
                      </Col>
                      <Col sm={12} className={classnames({ 'has-error': errors.projectIds })}>
                        {projectsListData.length > 0 && (
                          <>
                            <Row>
                              {projectsListData.map(project => (
                                <ProjectThumb
                                  key={project.id}
                                  project={project}
                                  serverlessResizeImage="https://image.testesolidar.com"
                                  lang={locale}
                                  cols={6}
                                  showStatus={false}
                                  myProject={true}
                                  select={true}
                                  selectProject={handleSelectProject}
                                  selectText={intl.formatMessage({ id: 'select' })}
                                  selectedText={intl.formatMessage({ id: 'selected' })}
                                  isSelected={true}
                                  selectedIds={form.projectIds}
                                  status={status}
                                />
                              ))}
                              <Col
                                sm={12}
                                className={classnames('form-group', {
                                  'has-error': errors.projectIds,
                                })}
                              >
                                {errors.projectIds && (
                                  <div className="help-block d-block">{errors.projectIds}</div>
                                )}
                              </Col>
                            </Row>
                            <Row>
                              <Pagination
                                activePage={pagination.projects.activePage}
                                itemsCountPerPage={pagination.projects.itemsCountPerPage}
                                totalItemsCount={pagination.projects.totalItemsCount}
                                onChange={handleProjectsPageChange}
                              />
                            </Row>
                          </>
                        )}
                        {projectsListData.length === 0 && (
                          <Col sm={12} className="text-center">
                            <FormattedMessage id="auction.no.project" />
                          </Col>
                        )}
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
              <Col md={4}>
                {!isEmpty(hasWhitelabel) && userRole === 'company' && (
                  <Row className="row">
                    <div className="col-md-12">
                      <div className="help-right-content d-none d-md-block">
                        <div className="header">
                          <FormattedMessage id="auctions.add.question0" />
                        </div>
                        <div className="text mb-5">
                          <FormattedMessage id="auctions.add.answer0" />
                        </div>
                      </div>
                    </div>
                  </Row>
                )}
              </Col>
            </Row>
            <Row>
              {isMyProjet &&
                isEmpty(userBankTransfer[company.country] || [] || userBankTransfer[1] || []) &&
                !isEmpty(form.projectIds) && (
                  <Col md={8} className="box-lr">
                    <BankAccount
                      countryId={company.country_id}
                      postBankTransfer={putCompanyBankTransfer}
                      getBankTransfer={userBankTransfer}
                      bankTransfer={bankTransfer}
                      userBankTransfer={JSON.parse(company.bank_transfer || '{}')}
                      userId={company.id}
                      updateLocalstorage={updateLocalstorage}
                      saveBankAccount={saveBankAccount}
                      hideSaveButton={true}
                      cols={6}
                      bankAccountSubmitReset={bankAccountSubmitReset}
                      checkIsValidBankAccount={checkIsValidBankAccount}
                    />
                    {errors.bankAccount && (
                      <div className="has-error">
                        <div className="help-block">{errors.bankAccount}</div>
                      </div>
                    )}
                  </Col>
                )}
              <Col md={8} className="box-lr text-center">
                <Row>
                  {!isMyProjet && !isEmpty(form.projectIds) && (
                    <Col sm={12}>
                      <span className="subtext">
                        <FormattedMessage id="auction.add.project.member" />
                      </span>
                    </Col>
                  )}
                  {isEmpty(hasWhitelabel) && (
                    <Col sm={12}>
                      <span className="subtext mb-3">
                        <FormattedMessage id="auction.add.submit.text" />
                      </span>
                    </Col>
                  )}
                </Row>
              </Col>
              <Col md={8} className="box-lbr">
                <div className="d-flex justify-content-between">
                  <Button
                    dataTestId="btn-cancel"
                    extraClass="dark"
                    href="/needs/auctions"
                    text={intl.formatMessage({ id: 'cancel' })}
                  />
                  {!isEmpty(hasWhitelabel) && userRole === 'company' && (
                    <Button
                      dataTestId="btn-submit-draft"
                      extraClass="info-full"
                      onClick={() => handleSubmit('P')}
                      text={intl.formatMessage({ id: 'auctions.add.submit.draft' })}
                      disabled={disabled}
                    />
                  )}
                  {action === null && (
                    <Button
                      dataTestId="btn-submit"
                      extraClass="success-full btn-submit"
                      onClick={() => handleSubmit(isEmpty(hasWhitelabel) ? 'P' : 'A')}
                      text={intl.formatMessage({ id: 'auctions.add.submitAuction' })}
                      disabled={disabled}
                    />
                  )}
                  {action === 'edit' && (
                    <Button
                      dataTestId="btn-submit-edit"
                      extraClass="success-full btn-submit"
                      onClick={() => handleSubmit(isEmpty(hasWhitelabel) ? 'P' : 'A')}
                      text={intl.formatMessage({ id: 'auctions.edit.submitAuction' })}
                      disabled={disabled}
                    />
                  )}
                  {action === 'clone' && (
                    <Button
                      dataTestId="btn-submit-clone"
                      extraClass="success-full btn-submit"
                      onClick={() => handleSubmit(isEmpty(hasWhitelabel) ? 'P' : 'A')}
                      text={intl.formatMessage({ id: 'auctions.clone.title' })}
                      disabled={disabled}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

AuctionAddForm.propTypes = {
  /**
   * The action for the form 'null', 'edit' or 'clone'
   */
  action: PropTypes.string,
  /**
   * The response from the API when post the form
   */
  addAuction: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.object,
  }),
  /**
   * The response from the API when post the images
   */
  addImages: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      images: PropTypes.object,
    }),
    status: PropTypes.number,
  }),
  /**
   * The response from the API when get brands
   */
  brands: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.array,
  }),
  /**
   * Action to get brands list
   */
  getBrandsList: PropTypes.func,
  /**
   * Action to get Institution Categories list
   */
  getInstitutionCategories: PropTypes.func,
  /**
   * Action to get Institution list
   */
  getInstitutions: PropTypes.func,
  /**
   * Action to get Projects list (whitelabelId, page, status, categotyId, title, projectOds = [])
   * @param {number} whitelabelId
   * @param {number} page
   * @param {string} status
   * @param {number} categotyId
   * @param {string} title
   * @param {array} projectOds
   */
  getProjectsList: PropTypes.func,
  institutionCategories: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      categories: PropTypes.array,
    }),
  }),
  institutions: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      institutions: PropTypes.shape({
        current_page: PropTypes.number,
        data: PropTypes.array,
        per_page: PropTypes.number,
        total: PropTypes.number,
      }),
    }),
  }),
  /**
   * @ignore
   */
  loadingPage: PropTypes.bool,
  postAuction: PropTypes.func,
  postAuctionDeleteImage: PropTypes.func,
  postUploadImage: PropTypes.func,
  primaryColor: PropTypes.string,
  projectsList: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      data: PropTypes.array,
      current_page: PropTypes.number,
      per_page: PropTypes.number,
      total: PropTypes.number,
    }),
  }),
  showBrands: PropTypes.bool,
  esolidarList: PropTypes.bool,
  showInstitutions: PropTypes.bool,
  showPrivate: PropTypes.bool,
  showProjects: PropTypes.bool,
  timeZones: PropTypes.array,
  returnUrl: PropTypes.string,
  userRole: PropTypes.oneOf(['user', 'company']),
  subscription: PropTypes.array,
  auctionId: PropTypes.string,
  getAuctionDetail: PropTypes.func,
  putAuction: PropTypes.func,
  updatedAuction: PropTypes.object,
  auctionDetail: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.object,
  }),
  userBankTransfer: PropTypes.object,
  bankTransfer: PropTypes.object,
  putCompanyBankTransfer: PropTypes.func,
  deleteImages: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      images: PropTypes.array,
    }),
  }),
  company: PropTypes.object,
  locale: PropTypes.string,
};

export default AuctionAddForm;
