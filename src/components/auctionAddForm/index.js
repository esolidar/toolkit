/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { FormattedMessage, injectIntl } from 'react-intl';
import { WithContext as ReactTags } from 'react-tag-input';
import classnames from 'classnames';
import DatePicker, { registerLocale } from 'react-datepicker';
import { NotificationManager } from 'react-notifications';
import Datetime from 'react-datetime';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import moment from 'moment-timezone';
import Loading from '../loading';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import TextFieldGroup from '../../elements/textFieldGroup';
import DropZoneBox from '../../elements/dropZoneBox';
import Button from '../../elements/button';
import InstitutionListSelect from '../institutionListSelect';
import ProjectThumb from '../projectThumb';
import '../../assets/sass/_react-datepicker.scss';
import SelectField from '../../elements/selectField';
import BankAccount from '../bankAccounts';
import validateAuctionForm from './validations';
import { isEmpty } from '../../utils';

registerLocale('pt', pt);
registerLocale('en', en);

/**
 * Auction add form.
 *
 * @visibleName Auction add form
 */

const AuctionAddForm = ({
  loadingPage,
  action,
  intl,
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
  translateMessage,
}) => {
  const company = JSON.parse(localStorage[userRole] || '{}');
  const hasWhitelabel = subscription.find(item => item.name === 'whitelabel') || {};
  const hasProjects = !isEmpty(subscription.find(item => item.name === 'projects') || {});
  const [form, setForm] = useState({
    show_on_esolidar: !hasProjects ? 'opened' : '',
    title: '',
    bid_start: '',
    description: '',
    bid_interval: '1',
    bid_max_interval: '100',
    tax: isEmpty(hasWhitelabel) ? company.country.auction_tax * 100 : 0,
    acquisition_value: '0',
    status: 'P',
    private: '0',
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
  const [isLoadingInstitutionListSelect, setIsLoadingInstitutionListSelect] = useState(true);
  const [institutionsData, setInstitutionsData] = useState([]);
  const [institutionCategoriesData, setInstitutionCategoriesData] = useState([]);
  const [institutionCategory, setInstitutionCategory] = useState('');
  const [institutionSearch, setInstitutionSearch] = useState('');
  const [projectsListData, setProjectsListData] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const [imagesList, setImagesList] = useState([]);
  const [cropModalStatus, setCropModalStatus] = useState(false);
  const [saveBankAccount, setSaveBankAccount] = useState(false);
  const [isMyProjet, setIsMyProject] = useState(false);
  const [isValidBankAccount, setIsValidBankAccount] = useState(false);

  useEffect(() => {
    if (auctionId) {
      getAuctionDetail(company.id, auctionId);
    }
    if (showInstitutions) {
      getInstitutions(pagination.institutions.activePage, institutionCategory, institutionSearch);
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
        video: data.video,
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
    }
  }, [auctionDetail]);

  // add Auction
  useEffect(() => {
    if (addAuction && addAuction.code === 200) {
      NotificationManager.success(
        intl.formatMessage({
          id: 'success.auction.create',
          defaultMessage:
            'Your auction was successfully created. Our team will validate it and contact you soon.',
        }),
        intl.formatMessage({
          id: 'success',
          defaultMessage: 'Success:',
        }),
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
        intl.formatMessage({
          id: 'error.auction.create',
          defaultMessage: 'An error has occurred, please try again!',
        }),
        intl.formatMessage({
          id: 'error',
          defaultMessage: 'Error:',
        }),
        15000
      );

      setDisabled(false);
    }
  }, [addAuction]);

  // update Auction
  useEffect(() => {
    if (updatedAuction && updatedAuction.code === 200) {
      NotificationManager.success(
        intl.formatMessage({
          id: 'success.auction.create',
          defaultMessage:
            'Your auction was successfully edited. Our team will validate it and contact you soon.',
        }),
        intl.formatMessage({
          id: 'success',
          defaultMessage: 'Success:',
        }),
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
      setErrors(prevState => ({
        ...prevState,
        images: translateMessage({
          id: 'auction.add.error.image',
          defaultMessage: 'There was an error sending the image',
        }),
      }));
    }
  }, [addImages]);

  useEffect(() => {
    setSaveBankAccount(false);
    setLoading(false);
  }, [bankTransfer]);

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
    const handler = setTimeout(() => {
      getInstitutions(1, institutionCategory, institutionSearch);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
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
    const companyId = company.id;
    postAuctionDeleteImage(companyId, e.target.dataset.imageId);

    imagesList.splice(idx, 1);

    setImagesList(imagesList);
    setImagesCount(imagesCount - 1);
  };

  const handleChangeInstitution = e => {
    const { name, value } = e.target;
    if (value === '') {
      e.preventDefault();
      setForm(prevState => ({ ...prevState, user_id: '' }));
    } else {
      setForm(prevState => ({ ...prevState, [name]: value }));
    }
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

    if (isMyProjet && !isValidBankAccount) return false;

    const { errors, isValid } = validateAuctionForm(data);
    if (!isValid) {
      setErrors(errors);
      setTimeout(() => {
        const firstError = document.getElementsByClassName('required-field');

        if (firstError[0]) {
          firstError[0].focus();
        } else {
          document
            .getElementById('add-auction')
            .scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }, 0);
    }
    return isValid;
  };

  const handleSubmit = () => {
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
      dateLimit: form.dateLimit,
      dateStart: form.dateStart,
      description: form.description,
      show_on_esolidar: form.show_on_esolidar,
      images: form.images,
      payment_description: form.payment_description,
      position: form.position,
      private: form.private,
      private_code: form.private_code,
      shipping_description: form.shipping_description,
      status: form.status,
      tags: form.tagsArray.length ? form.tagsArray.flatMap(tag => tag.text).join(',') : '',
      tax: form.tax,
      timezone: form.timezone,
      title: form.title,
      user_id: form.user_id || null,
      video: form.video,
      projectIds: form.projectIds || null,
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
    <Container className="add-auction">
      {loading && (
        <div className="loading-page">
          <Loading />
        </div>
      )}
      <section className="content-header">
        {action === null && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage id="auctions.add.title" defaultMessage="Add Auction" />
          </h1>
        )}
        {action === 'edit' && (
          <h1 style={{ color: primaryColor }} data-testId="auction-edit-title">
            <FormattedMessage id="auctions.edit.title" defaultMessage="Edit Auction" />
          </h1>
        )}
        {action === 'clone' && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage id="auctions.clone.title" defaultMessage="Clone Auction" />
          </h1>
        )}
        <p className="subtitle">
          <FormattedMessage
            id="auction.add.subtitle"
            defaultMessage="Charity auctions are an easy way to raise funds"
          />
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
                      <FormattedMessage
                        id="Auctions.add.formTitle"
                        defaultMessage="Auction information"
                      />
                    </h3>
                  </Col>
                </Row>
                {!isEmpty(hasWhitelabel) && userRole === 'company' && (
                  <Row>
                    <Col sm={4}>
                      <SelectField
                        label={intl.formatMessage({
                          id: 'auctions.status',
                          defaultMessage: 'Auction status',
                        })}
                        options={[
                          {
                            id: 'P',
                            name: intl.formatMessage({
                              id: 'pending',
                              defaultMessage: 'Pending',
                            }),
                          },
                          {
                            id: 'A',
                            name: intl.formatMessage({
                              id: 'active',
                              defaultMessage: 'Active',
                            }),
                          },
                        ]}
                        value={form.status}
                        field="status"
                        onChange={handleChangeForm}
                        hiddenSelectText={true}
                      />
                    </Col>
                    {esolidarList && (
                      <Col sm={4}>
                        <SelectField
                          label={intl.formatMessage({
                            id: 'auctions.show.esolidar',
                            defaultMessage: 'Show in eSoldiar.com',
                          })}
                          options={[
                            {
                              id: 'no',
                              name: intl.formatMessage({
                                id: 'no',
                                defaultMessage: 'No',
                              }),
                            },
                            {
                              id: 'opened',
                              name: intl.formatMessage({
                                id: 'yes',
                                defaultMessage: 'Yes',
                              }),
                            },
                          ]}
                          value={form.show_on_esolidar}
                          field="show_on_esolidar"
                          onChange={handleChangeForm}
                          hiddenSelectText={true}
                        />
                      </Col>
                    )}
                  </Row>
                )}
                <Row>
                  <Col sm={12}>
                    <TextField
                      label={intl.formatMessage({
                        id: 'auctionTitle',
                        defaultMessage: 'AUCTION TITLE',
                      })}
                      onChange={e => handleChangeForm(e)}
                      error={errors.title}
                      value={form.title}
                      field="title"
                      fieldTranslate="auctionTitle"
                    />
                  </Col>
                  <Col sm={3}>
                    <TextFieldGroup
                      label={intl.formatMessage({
                        id: 'auctionStartBid',
                        defaultMessage: 'STARTING BID',
                      })}
                      onChange={handleChangeForm}
                      error={errors.bid_start}
                      value={form.bid_start}
                      field="bid_start"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={3}>
                    <TextFieldGroup
                      label={intl.formatMessage({
                        id: 'auctionBidInterval',
                        defaultMessage: 'BID INTERVAL',
                      })}
                      onChange={handleChangeForm}
                      error={errors.bid_interval}
                      value={form.bid_interval}
                      field="bid_interval"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={3}>
                    <TextFieldGroup
                      label={intl.formatMessage({
                        id: 'auctionBidMaxInterval',
                        defaultMessage: 'MAX BID INTERVAL',
                      })}
                      onChange={handleChangeForm}
                      error={errors.bid_max_interval}
                      value={form.bid_max_interval}
                      field="bid_max_interval"
                      placeholder="0.00"
                      type="number"
                      groupText={!isEmpty(company) ? company.currency.symbol : '€'}
                    />
                  </Col>
                  <Col sm={3}>
                    <TextFieldGroup
                      label={intl.formatMessage({
                        id: 'auctionEsolidarTax',
                        defaultMessage: 'ESOLIDAR TAX',
                      })}
                      onChange={() => {}}
                      error={errors.tax}
                      value={isEmpty(hasWhitelabel) ? form.tax : '0'}
                      field="tax"
                      type="number"
                      groupText="%"
                      disabled={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="control-label">
                        <FormattedMessage id="auctionKeywords" defaultMessage="Keywords" />
                      </label>
                      <ReactTags
                        tags={form.tagsArray}
                        handleInputBlur={handleAddition}
                        delimiters={[32, 188, 13, 186, 9] /* space, comma, enter, semicolon, tab */}
                        handleDelete={handleDelete}
                        placeholder="Tags"
                        handleAddition={handleAddition}
                      />
                    </div>
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      label={intl.formatMessage({
                        id: 'auctionDescription',
                        defaultMessage: 'AUCTION DESCRIPTION',
                      })}
                      onChange={handleChangeForm}
                      error={errors.description}
                      value={form.description}
                      field="description"
                      resize={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      label={intl.formatMessage({
                        id: 'auctionDescriptionShipping',
                        defaultMessage: 'SHIPMENT COSTS',
                      })}
                      onChange={handleChangeForm}
                      error={errors.shipping_description}
                      value={form.shipping_description}
                      field="shipping_description"
                      placeholder={intl.formatMessage({
                        id: 'auctionShippingText',
                        defaultMessage:
                          'Information about the shipping costs of the prize to the winner.',
                      })}
                      resize={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <TextareaField
                      label={intl.formatMessage({
                        id: 'auctionDescriptionPayment',
                        defaultMessage: 'PAYMENT',
                      })}
                      onChange={handleChangeForm}
                      error={errors.payment_description}
                      value={form.payment_description}
                      field="payment_description"
                      placeholder={intl.formatMessage({
                        id: 'auctionPaymentText',
                        defaultMessage:
                          'Give instructions about how the winner will make the payment.',
                      })}
                      resize={true}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <div className="col-md-12">
                    <div className="help-right-content">
                      <h4 style={{ color: primaryColor, borderColor: primaryColor }}>
                        <FormattedMessage id="Auctions.add.help" defaultMessage="Help" />
                      </h4>
                      {!isEmpty(hasWhitelabel) && userRole === 'company' && (
                        <>
                          <div className="header">
                            <FormattedMessage
                              id="Auctions.add.question0"
                              defaultMessage="SHOW IN ESOLIDAR.COM"
                            />
                          </div>
                          <div className="text mb-5">
                            <FormattedMessage
                              id="Auctions.add.answer0"
                              defaultMessage="The auction can also appear on the eSolidar.com community website. To do so choose the Yes option in the Show in eSolidar.com field. If you activate this feature, the auction will be pending approval by the eSolidar team. Once the auction is approved, you will receive a notification/email."
                            />
                          </div>
                        </>
                      )}
                      <div className="header">
                        <FormattedMessage
                          id="Auctions.add.question1"
                          defaultMessage="What is keywords?"
                        />
                      </div>
                      <div className="text">
                        <FormattedMessage
                          id="Auctions.add.answer1"
                          defaultMessage="Include keywords that buyers would use to search for your item."
                        />
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col md={8} className="box-lr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="images"
                    >
                      <FormattedMessage id="Auctions.add.formImages" defaultMessage="Images" />
                    </h3>
                  </Col>
                  <div
                    className={classnames('col-sm-12 form-group', { 'has-error': errors.images })}
                  >
                    <DropZoneBox
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
                    />
                    {errors.images && <span className="help-block">{errors.images}</span>}
                  </div>
                  <Col sm={12}>
                    <TextField
                      label={intl.formatMessage({
                        id: 'auctionVideo',
                        defaultMessage: 'VIDEO (Only Youtube videos URL)',
                      })}
                      onChange={handleChangeForm}
                      error={errors.video}
                      value={form.video}
                      field="video"
                    />
                  </Col>
                  {showBrands && (
                    <Col sm={12}>
                      <h3
                        style={{ color: primaryColor, borderColor: primaryColor }}
                        data-testid="brands"
                      >
                        <FormattedMessage id="Auctions.add.brand" defaultMessage="Brand" />
                      </h3>
                      <SelectField
                        options={brandsList}
                        value={form.brand_id}
                        field="brand_id"
                        error={errors.brand_id}
                        onChange={handleChangeForm}
                        selectText={intl.formatMessage({
                          id: 'Auctions.addBrand',
                          defaultMessage: 'Select Brand',
                        })}
                      />
                    </Col>
                  )}
                </Row>
                {showPrivate && (
                  <Row>
                    <Col sm={12}>
                      <h3
                        style={{ color: primaryColor, borderColor: primaryColor }}
                        data-testid="private"
                      >
                        <FormattedMessage id="Auctions.add.private" defaultMessage="Private" />
                      </h3>
                    </Col>
                    <Col sm={6}>
                      <SelectField
                        label={intl.formatMessage({
                          id: 'Auctions.add.type',
                          defaultMessage: 'Auction type',
                        })}
                        options={[
                          {
                            id: '0',
                            name: intl.formatMessage({
                              id: 'auctionPublic',
                              defaultMessage: 'Public',
                            }),
                          },
                          {
                            id: '1',
                            name: intl.formatMessage({
                              id: 'auctionPrivate',
                              defaultMessage: 'Private',
                            }),
                          },
                        ]}
                        value={form.private}
                        field="private"
                        onChange={handleChangeForm}
                        hiddenSelectText={true}
                      />
                    </Col>
                    {form.private === '1' && (
                      <Col sm={6}>
                        <TextField
                          label={intl.formatMessage({
                            id: 'acessCode',
                            defaultMessage: 'Access code',
                          })}
                          onChange={e => handleChangeForm(e)}
                          error={errors.private_code}
                          value={form.private_code}
                          field="private_code"
                        />
                      </Col>
                    )}
                  </Row>
                )}
              </Col>
              <Col md={4}>
                <Row className="row">
                  <div className="col-md-12">
                    <div className="help-right-content">
                      <div className="header">
                        <FormattedMessage
                          id="Auctions.add.question2"
                          defaultMessage="Add item photos"
                        />
                      </div>
                      <div className="text">
                        <FormattedMessage
                          id="Auctions.add.answer2"
                          defaultMessage="Select one image each time. The maximum size is 5Mb"
                        />
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col md={8} className="box-lr">
                <Row>
                  <Col sm={12}>
                    <h3
                      style={{ color: primaryColor, borderColor: primaryColor }}
                      data-testid="select-dates"
                    >
                      <FormattedMessage
                        id="Auctions.add.selectDates"
                        defaultMessage="Select dates"
                      />
                    </h3>
                  </Col>
                  <div className="col-md-12">
                    <Row>
                      <Col sm={4}>
                        <div
                          className={classnames('form-group', { 'has-error': errors.dateStart })}
                        >
                          <label className="control-label">
                            <FormattedMessage
                              id="Auctions.add.startDate"
                              defaultMessage="Start Date"
                            />
                          </label>
                          <DatePicker
                            locale={localStorage.lang === 'en' ? 'en' : 'pt'}
                            selected={form.startDate}
                            selectsStart
                            startDate={form.startDate}
                            endDate={form.endDate}
                            showTimeSelect
                            onChange={handleChangeStart}
                            className="form-control"
                            placeholderText={intl.formatMessage({
                              id: 'dd-mm-yyyy',
                              defaultMessage: 'DD-MM-YYYY',
                            })}
                            timeCaption={intl.formatMessage({ id: 'hour', defaultMessage: 'Hour' })}
                            dateFormat="d-MM-yyyy h:mm aa"
                          />
                          {errors.dateStart && (
                            <span className="help-block d-block">{errors.dateStart}</span>
                          )}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div
                          className={classnames('form-group', { 'has-error': errors.dateLimit })}
                        >
                          <label className="control-label">
                            <FormattedMessage id="Auctions.add.endDate" defaultMessage="End Date" />
                          </label>
                          <DatePicker
                            locale={localStorage.lang === 'en' ? 'en' : 'pt'}
                            selected={form.endDate}
                            selectsStart
                            startDate={form.startDate}
                            endDate={form.endDate}
                            onChange={handleChangeEnd}
                            showTimeSelect
                            className="form-control"
                            timeCaption={intl.formatMessage({ id: 'hour', defaultMessage: 'Hour' })}
                            placeholderText={intl.formatMessage({
                              id: 'dd-mm-yyyy',
                              defaultMessage: 'DD-MM-YYYY',
                            })}
                            dateFormat="d-MM-yyyy h:mm aa"
                          />
                          {errors.dateLimit && (
                            <span className="help-block d-block">{errors.dateLimit}</span>
                          )}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <SelectField
                          label={intl.formatMessage({
                            id: 'auctions.timezone',
                            defaultMessage: 'Time zone',
                          })}
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
              {showInstitutions && (
                <Col md={8} className="box-lr">
                  <Row>
                    <Col sm={12}>
                      <h3
                        style={{ color: primaryColor, borderColor: primaryColor }}
                        data-testid="select-institution"
                      >
                        <FormattedMessage
                          id="crowdfunding.select.institution"
                          defaultMessage="Select one institution"
                        />
                      </h3>
                    </Col>
                    <Col sm={12}>
                      <InstitutionListSelect
                        user_id={form.user_id}
                        institutions={institutionsData}
                        categories={institutionCategoriesData}
                        onChangeInstitutionCategory={handleChangeInstitutioncategory}
                        handlePageChange={handleInstitutionsPageChange}
                        onSearch={handleSearchInstitutions}
                        onChange={handleChangeInstitution}
                        NoResultsText={intl.formatMessage({
                          id: 'no.results',
                          defaultMessage: 'There are no results',
                        })}
                        selectCategoryText={intl.formatMessage({
                          id: 'select.category',
                          defaultMessage: 'Select category',
                        })}
                        error={errors.user_id}
                        search={institutionSearch}
                        pagination={pagination.institutions}
                        isLoading={isLoadingInstitutionListSelect}
                        removeInstitutionSelected={handleChangeInstitution}
                        translateMessage={translateMessage}
                      />
                    </Col>
                  </Row>
                </Col>
              )}
              {showProjects && hasProjects && (
                <Col md={8} className="box-lr">
                  <Row>
                    <Col sm={12}>
                      <h3
                        style={{ color: primaryColor, borderColor: primaryColor }}
                        data-testid="select-projects"
                      >
                        <FormattedMessage
                          id="auction.select.one.project"
                          defaultMessage="Select one project"
                        />
                      </h3>
                    </Col>
                    {projectsListData.length > 0 && (
                      <Col
                        sm={12}
                        className={classnames('form-group', { 'has-error': errors.projectIds })}
                      >
                        <Row>
                          {projectsListData.map(project => (
                            <ProjectThumb
                              key={project.id}
                              project={project}
                              serverlessResizeImage="https://image.testesolidar.com"
                              lang={localStorage.lang}
                              cols={6}
                              showStatus={false}
                              myProject={true}
                              select={true}
                              selectProject={handleSelectProject}
                              selectText={intl.formatMessage({
                                id: 'select',
                                defaultMessage: 'Select',
                              })}
                              selectedText={intl.formatMessage({
                                id: 'selected',
                                defaultMessage: 'Selected',
                              })}
                              isSelected={true}
                              selectedIds={form.projectIds}
                            />
                          ))}
                          <Col
                            sm={12}
                            className={classnames('form-group', { 'has-error': errors.projectIds })}
                          >
                            {errors.projectIds && (
                              <span className="help-block d-block">{errors.projectIds}</span>
                            )}
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                            <Pagination
                              innerClass="pagination justify-content-center"
                              activePage={pagination.projects.activePage}
                              itemsCountPerPage={pagination.projects.itemsCountPerPage}
                              totalItemsCount={pagination.projects.totalItemsCount}
                              pageRangeDisplayed={5}
                              onChange={handleProjectsPageChange}
                            />
                          </Col>
                        </Row>
                      </Col>
                    )}
                    {projectsListData.length === 0 && (
                      <Col sm={12} className="text-center">
                        <FormattedMessage id="auction.no.project" />
                      </Col>
                    )}
                  </Row>
                </Col>
              )}
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
                        <span className="help-block">{errors.bankAccount}</span>
                      </div>
                    )}
                  </Col>
                )}
              <Col md={8} className="box-lbr text-center">
                <Row>
                  {!isMyProjet && !isEmpty(form.projectIds) && (
                    <Col sm={12} className="pb-5">
                      <span className="subtext">
                        <FormattedMessage
                          id="auction.add.project.member"
                          defaultMessage="We will send an email to the person that created the project informing him that you have built an auction to help raise funds."
                        />
                      </span>
                    </Col>
                  )}
                  {isEmpty(hasWhitelabel) && (
                    <Col sm={12} className="pb-5">
                      <span className="subtext">
                        <FormattedMessage
                          id="auction.add.submit.text"
                          defaultMessage="The auction will be submitted but will not be available until our team approve it. We will contact you soon."
                        />
                      </span>
                    </Col>
                  )}
                  <Col sm={12} className="mt-5">
                    {action === null && (
                      <Button
                        dataTestId="btn-submit"
                        extraClass="success-full btn-submit"
                        onClick={handleSubmit}
                        text={intl.formatMessage({
                          id: 'auctions.add.submitAuction',
                          defaultMessage: 'Submit auction',
                        })}
                        disabled={disabled}
                      />
                    )}
                    {action === 'edit' && (
                      <Button
                        dataTestId="btn-submit"
                        extraClass="success-full btn-submit"
                        onClick={handleSubmit}
                        text={intl.formatMessage({
                          id: 'auctions.edit.submitAuction',
                          defaultMessage: 'Edit auction',
                        })}
                        disabled={disabled}
                      />
                    )}
                    {action === 'clone' && (
                      <Button
                        dataTestId="btn-submit"
                        extraClass="success-full btn-submit"
                        onClick={handleSubmit}
                        text={intl.formatMessage({
                          id: 'auctions.clone.submitAuction',
                          defaultMessage: 'Clone auction',
                        })}
                        disabled={disabled}
                      />
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
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
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
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
  translateMessage: PropTypes.func.isRequired,
};

export default injectIntl(AuctionAddForm);
