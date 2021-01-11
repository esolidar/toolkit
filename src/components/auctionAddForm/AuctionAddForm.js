import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import { WithContext as ReactTags } from 'react-tag-input';
import classnames from 'classnames';
import DatePicker, { registerLocale } from 'react-datepicker';
import Datetime from 'react-datetime';
import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';
import Loading from '../loading/Loading';
import TextField from '../../elements/textField/TextField';
import TextareaField from '../../elements/textareaField/TextareaField';
import TextFieldGroup from '../../elements/textFieldGroup/TextFieldGroup';
import DropZoneBox from '../../elements/dropZoneBox/DropZoneBox';
import Button from '../button/Button';
import InstitutionListSelect from '../institutionListSelect/InstitutionListSelect';
import ProjectThumb from '../projectThumb/ProjectThumb';
import '../../assets/sass/_react-datepicker.scss';

registerLocale('pt', pt);
registerLocale('en', en);

const AuctionAddForm = ({
  loadingPage,
  action,
  intl,
  timeZones,
  institutions,
  categories,
  showInstitutions,
  showProjects,
  projectsList,
  primaryColor,
}) => {
  const [form, setForm] = useState({
    title: '',
    bid_start: '',
    description: '',
    shipping_description: '',
    payment_description: '',
    images: [],
    video: '',
    startDate: '',
    endDate: '',
    timeZone: '',
    tags: '',
    tagsObj: [],
    tagsArray: [],
    projectIds: [],
    user_id: '',
  });
  const [pagination, setPagination] = useState(
    {
      activePage: 1,
      itemsCountPerPage: 6,
      totalItemsCount: 50,
    },
  );
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [imagesCount, setImagesCount] = useState(0);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTagBlur = () => {
    const { tagsArray } = form;
    form.tags = tagsArray.join();
    setForm(form);
  };

  const handleDelete = (i) => {
    form.tagsObj.splice(i, 1);
    form.tagsArray.splice(i, 1);
    setForm(form);
  };

  const handleAddition = (tag) => {
    const { tagsObj } = form;
    if (tag !== '') {
      tagsObj.push({
        id: tagsObj.length + 1,
        text: tag,
      });
      form.tagsArray.push(tag);
      setForm(form);
    }
  };

  const handleChangeStart = (date) => {
    const { endDate } = form;
    const newDate = Datetime.moment(date).format('YYYY-MM-DD HH:mm:ss');
    if (!endDate || endDate > date) {
      setForm((prevState) => ({ ...prevState, startDate: date }));
      setForm((prevState) => ({ ...prevState, dateStart: newDate }));
    }
  };

  const handleChangeEnd = (date) => {
    const { startDate } = form;
    const newDate = Datetime.moment(date).format('YYYY-MM-DD HH:mm:ss');

    if (!startDate || startDate < date) {
      form.endDate = date;
      form.dateLimit = newDate;
      setForm(form);
    }
  };

  const handleSelectProject = (id) => {
    const { projectIds } = form;
    const isSelected = projectIds.filter((o) => o === id).length;
    let arrayProjects = projectIds;
    if (isSelected === 0) {
      arrayProjects = [...arrayProjects, id];
    } else {
      arrayProjects.splice(projectIds.findIndex((o) => o === id), 1);
    }

    setForm((prevState) => ({ ...prevState, projectIds: arrayProjects }));
  };

  const handleSelectImage = (files) => {
    setImagesCount(imagesCount + files.length);

    files.map((file, i) => {
      debugger;
      // this.props.uploadUserImageCrowdfunding([file], this.state.imagesCount, i);
    });
  };

  const onSubmit = () => {
    console.log('form', form);
    debugger;
  };

  return (
    <Container className="add-auction">
      {loadingPage && (
        <div className="loading-page">
          <Loading />
        </div>
      )}
      <section className="content-header">
        {action === null && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage
              id="auctions.add.title"
              defaultMessage="Add Auction"
            />
          </h1>
        )}
        {action === 'edit' && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage
              id="auctions.edit.title"
              defaultMessage="Edit Auction"
            />
          </h1>
        )}
        {action === 'clone' && (
          <h1 style={{ color: primaryColor }}>
            <FormattedMessage
              id="auctions.clone.title"
              defaultMessage="Clone Auction"
            />
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
                  <div className="col-sm-12">
                    <h3 style={{ color: primaryColor, borderColor: primaryColor }}>
                      <FormattedMessage
                        id="Auctions.add.formTitle"
                        defaultMessage="Auction information"
                      />
                    </h3>
                  </div>
                  <div className="col-sm-8">
                    <TextField
                      label={intl.formatMessage({ id: 'auctionTitle', defaultMessage: 'AUCTION TITLE' })}
                      onChange={(e) => handleChangeForm(e)}
                      error={errors.title}
                      value={form.title}
                      field="title"
                      fieldTranslate="auctionTitle"
                    />
                  </div>
                  <div className="col-sm-4">
                    <TextFieldGroup
                      label="STARTING BID"
                      onChange={handleChangeForm}
                      error={errors.bid_start}
                      value={form.bid_start}
                      field="bid_start"
                      placeholder="0.00"
                      type="number"
                      groupText={localStorage.npo ? JSON.parse(localStorage.npo).currency.symbol : '€'}
                      fieldTranslate="auctionStartBid"
                    />
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="control-label">
                        <FormattedMessage
                          id="auctionKeywords"
                          defaultMessage="Keywords"
                        />
                      </label>
                      <div className="tabs-box">
                        <ReactTags
                          tags={form.tagsObj}
                          handleInputBlur={handleTagBlur}
                          delimiters={[32, 188, 13, 186, 9] /* space, comma, enter, semicolon, tab */}
                          handleDelete={handleDelete}
                          placeholder="Tags"
                          handleAddition={handleAddition}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <TextareaField
                      label={intl.formatMessage({ id: 'auctionDescription', defaultMessage: 'AUCTION DESCRIPTION' })}
                      onChange={handleChangeForm}
                      error={errors.description}
                      value={form.description}
                      field="description"
                      fieldTranslate="auctionDescription"
                    />
                  </div>
                  <div className="col-sm-12">
                    <TextareaField
                      label={intl.formatMessage({ id: 'auctionDescriptionShipping', defaultMessage: 'SHIPMENT COSTS' })}
                      onChange={handleChangeForm}
                      error={errors.shipping_description}
                      value={form.shipping_description}
                      field="shipping_description"
                      placeholder={intl.formatMessage({
                        id: 'auctionShippingText',
                        defaultMessage: 'Information about the shipping costs of the prize to the winner.',
                      })}
                      fieldTranslate="auctionDescriptionShipping"
                    />
                  </div>
                  <div className="col-sm-12">
                    <TextareaField
                      label={intl.formatMessage({ id: 'auctionDescriptionPayment', defaultMessage: 'PAYMENT' })}
                      onChange={handleChangeForm}
                      error={errors.payment_description}
                      value={form.payment_description}
                      field="payment_description"
                      placeholder={intl.formatMessage({
                        id: 'auctionPaymentText',
                        defaultMessage: 'Give instructions about how the winner will make the payment.',
                      })}
                    />
                  </div>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <div className="col-md-12">
                    <div className="help-right-content">
                      <h4 style={{ color: primaryColor, borderColor: primaryColor }}>
                        <FormattedMessage
                          id="Auctions.add.help"
                          defaultMessage="Help"
                        />
                      </h4>
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
                  <div className="col-sm-12">
                    <h3 style={{ color: primaryColor }}>
                      <FormattedMessage
                        id="Auctions.add.formImages"
                        defaultMessage="Images"
                      />
                    </h3>
                  </div>
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
                      }}
                      imagesList={[{
                        crowdfunding_id: 87,
                        id: 385,
                        image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
                      }]}
                      env={{
                        serverlessResizeImage: 'https://image.testesolidar.com',
                      }}
                      deleteImageGallery={() => { }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <TextField
                      label={intl.formatMessage({ id: 'auctionVideo', defaultMessage: 'VIDEO (Only Youtube videos URL)' })}
                      onChange={handleChangeForm}
                      error={errors.video}
                      value={form.video}
                      field="video"
                    />
                  </div>
                </Row>
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
            </Row>
            <Row>
              <Col md={8} className="box-lr">
                <Row>
                  <div className="col-sm-12">
                    <h3 style={{ color: primaryColor }}>
                      <FormattedMessage
                        id="Auctions.add.selectDates"
                        defaultMessage="Select dates"
                      />
                    </h3>
                  </div>
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
                          {errors.dateStart
                            && (
                              <span
                                className="help-block"
                              >
                                {errors.dateStart}
                              </span>
                            )}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div
                          className={classnames('form-group', { 'has-error': errors.dateLimit })}
                        >
                          <label className="control-label">
                            <FormattedMessage
                              id="Auctions.add.endDate"
                              defaultMessage="End Date"
                            />
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
                          {errors.dateLimit
                            && (
                              <span
                                className="help-block"
                              >
                                {errors.dateLimit}
                              </span>
                            )}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div className="form-group">
                          <label className="control-label">
                            <FormattedMessage
                              id="auctions.timezone"
                              defaultMessage="Time zone"
                            />
                          </label>
                          <select
                            className="form-control"
                            onChange={handleChangeForm}
                            name="timezone"
                            value={form.timezone}
                          >
                            {timeZones.map((timeZone) => (
                              <option value={timeZone} key={timeZone}>{timeZone}</option>
                            ))}
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
            {showInstitutions && (
              <Row>
                <Col md={8} className="box-lr">
                  <InstitutionListSelect
                    selectText={intl.formatMessage({ id: 'select.charity', defaultMessage: 'Select charity' })}
                    user_id={form.user_id}
                    institutions={institutions}
                    categories={categories}
                    // onChangeInstitutionCategory={this.onChangeInstitutioncategory}
                    // handlePageChange={this.institutionsPageChange}
                    // onSearch={onSearch}
                    onChange={handleChangeForm}
                    NoResultsText={intl.formatMessage({ id: 'no.results', defaultMessage: 'There are no results' })}
                    selectCategoryText={intl.formatMessage({ id: 'select.category', defaultMessage: 'Select category' })}
                    error={errors.user_id}
                    search={form.search}
                    pagination={pagination}
                    isLoading={form.isLoadingInstitutionList}
                  />
                </Col>
              </Row>
            )}
            {showProjects && (
              <Row>
                <Col md={8} className="box-lr">
                  <Row>
                    {projectsList.map((project) => (
                      <ProjectThumb
                        project={project}
                        serverlessResizeImage="https://image.testesolidar.com"
                        lang="pt"
                        cols={6}
                        showStatus={false}
                        myProject={true}
                        select={true}
                        selectProject={handleSelectProject}
                        selectText={intl.formatMessage({ id: 'select', defaultMessage: 'Select' })}
                        selectedText={intl.formatMessage({ id: 'selected', defaultMessage: 'Selected' })}
                        isSelected={true}
                        selectedIds={form.projectIds}
                      />
                    ))}
                  </Row>
                </Col>
              </Row>
            )}
            <Row>
              <Col md={8} className="box-lbr text-center">
                <div className="add-product-content">
                  <span className="subtext">
                    <FormattedMessage
                      id="auction.add.submit.text"
                      defaultMessage="The auction will be submitted but will not be available until our team approve it. We will contact you soon."
                    />
                  </span>
                  {action === null && (
                    <Button
                      extraClass="success-full btn-submit"
                      onClick={onSubmit}
                      text={intl.formatMessage({ id: 'auctions.add.submitAuction', defaultMessage: 'Submit auction' })}
                      disabled={disabled}
                    />
                  )}
                  {action === 'edit' && (
                    <Button
                      extraClass="success-full btn-submit"
                      onClick={onSubmit}
                      text={intl.formatMessage({ id: 'auctions.edit.submitAuction', defaultMessage: 'Update auction' })}
                      disabled={disabled}
                    />
                  )}
                  {action === 'clone' && (
                    <Button
                      extraClass="success-full btn-submit"
                      onClick={onSubmit}
                      text={intl.formatMessage({ id: 'auctions.clone.submitAuction', defaultMessage: 'Clone auction' })}
                      disabled={disabled}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

AuctionAddForm.propTypes = {
  action: PropTypes.string,
  categories: PropTypes.any,
  institutions: PropTypes.any,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  loadingPage: PropTypes.any,
  primaryColor: PropTypes.any,
  showInstitutions: PropTypes.any,
  showProjects: PropTypes.any,
  timeZones: PropTypes.array,
  projectsList: PropTypes.array,
};

export default injectIntl(AuctionAddForm);
