/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import Dropzone from 'react-dropzone';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import SelectField from '../../elements/selectField';
import CheckboxImage from '../../elements/checkboxImage';
import CheckboxField from '../../elements/checkboxField';
import DropZoneBox from '../../elements/dropZoneBox';
import RadioField from '../../elements/radioField';
import InputLabel from '../../elements/inputLabel';
import slugify from '../../utils/slugify';
import isArray from '../../utils/isArray';
import rawDraftToHtml from '../../utils/rawDraftToHtml';
import getEnvVar from '../../utils/getEnvVar';
import Loading from '../loading';
import { cdnStaticUrl } from '../../constants/env';

const ProjectAddForm = ({
  color,
  form,
  errors,
  ods,
  newImages,
  onSelectOds,
  lang,
  uploadImagesLabel,
  onDrop,
  deleteImageGallery,
  deleteErrorImageGallery,
  hideDropZone,
  categories,
  dragAndDropMessage,
  onChange,
  onChangeCheckbox,
  onChangeRadiobox,
  uploadImagesLabelTitle,
}) => {
  const intl = useIntl();
  const renderFiles = () =>
    newImages.map((image, i) => (
      <div key={i} className="thumb">
        {image.loading && <Loading />}
        {image.error && (
          <button
            type="button"
            className="btn-delete-error-image"
            onClick={e => deleteErrorImageGallery(e, image)}
          >
            <img
              className="image-error"
              src={`${cdnStaticUrl}/frontend/icons/ic-error.svg`}
              alt="Error"
            />
          </button>
        )}
        <img
          src={image.thumbs.thumb}
          alt="Thumb"
          className={image.loading || image.error ? 'image-thumb-loading' : 'image-thumb'}
        />
        {!image.loading && !image.error && (
          <button
            type="button"
            className="btn-delete-image"
            onClick={e => deleteImageGallery(e, image)}
          >
            x
          </button>
        )}
      </div>
    ));

  if (isArray(form)) {
    return (
      <div className="add-project">
        {form.map(field => {
          switch (field.type) {
            case 'title':
              return (
                <h2 style={{ color: color.primaryColor }} key={field.id}>
                  {field.name}
                </h2>
              );

            case 'paragraph':
              return <p key={field.id}>{field.name}</p>;

            case 'input':
              return (
                <TextField
                  key={field.id}
                  label={field.name}
                  onChange={onChange}
                  error={errors[field.id]}
                  value={field.reply}
                  field={field.id}
                  help={field.help}
                />
              );

            case 'textarea':
              return (
                <TextareaField
                  key={field.id}
                  label={field.name}
                  error={errors[field.id]}
                  onChange={onChange}
                  field={field.id}
                  value={field.reply}
                  help={field.help}
                  resize={true}
                />
              );

            case 'dropdown':
              return (
                <SelectField
                  key={field.id}
                  options={categories}
                  value={+field.reply}
                  label={field.name}
                  field={field.id}
                  onChange={onChange}
                  error={errors[field.id]}
                />
              );

            case 'ods':
              return (
                <Row key={field.id} className="ods">
                  <Col sm={12}>
                    <span className="control-label">ODS</span>
                  </Col>
                  <Col sm={12}>
                    {ods.map(o => (
                      <CheckboxImage
                        key={o.ods_id}
                        label={o.tag_name}
                        img={`${cdnStaticUrl}/frontend/assets/ods/${lang}/${o.tag_name}.png`}
                        onChange={onSelectOds}
                        value={o.ods_id}
                        error={errors[field.id]}
                        checked={o.checked}
                      />
                    ))}
                    {errors[field.id] && (
                      <div
                        className="has-error"
                        style={{
                          width: '100%',
                          display: 'inline-block',
                          marginBottom: '15px',
                          marginTop: '-15px',
                        }}
                      >
                        <div className="help-block">{errors[field.id]}</div>
                      </div>
                    )}
                  </Col>
                </Row>
              );

            case 'upload-images':
              return (
                <Row key={field.id} className="upload-image">
                  <Col sm={12}>
                    <span htmlFor="images" className="control-label">
                      {uploadImagesLabel}
                    </span>
                  </Col>
                  <Col sm={12}>
                    <div className="box-images">
                      {!hideDropZone && (
                        <Dropzone
                          onDrop={onDrop}
                          disableClick={true}
                          accept="image/jpeg, image/png"
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {newImages.length === 0 && <p>{dragAndDropMessage}</p>}
                                {renderFiles()}
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      )}
                    </div>
                    {errors[field.id] && (
                      <div
                        className="has-error"
                        style={{
                          width: '100%',
                          display: 'inline-block',
                          marginBottom: '15px',
                          marginTop: '-15px',
                        }}
                      >
                        <div className="help-block">{errors[field.id]}</div>
                      </div>
                    )}
                  </Col>
                </Row>
              );

            case 'checkbox':
              return (
                <div key={field.id}>
                  <div className="form-group">
                    <label htmlFor={field.name} className="control-label">
                      {field.name}
                    </label>
                    <p className="help">{field.help}</p>
                    <div className="checkbox">
                      {field.options.map((option, i) => (
                        <CheckboxField
                          key={i}
                          label={option}
                          onChange={e => onChangeCheckbox(e, field.id)}
                          name={`${slugify(option)}-${i}-${field.id}`}
                          id={`${slugify(option)}-${i}-${field.id}`}
                          value={option}
                          checked={field.checked?.includes(option)}
                        />
                      ))}
                      {errors[field.id] && (
                        <div
                          className="has-error"
                          style={{
                            width: '100%',
                            display: 'inline-block',
                            marginBottom: '15px',
                            marginTop: '-15px',
                          }}
                        >
                          <div className="help-block">{errors[field.id]}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );

            case 'radiobox':
              return (
                <div key={field.id}>
                  <div className="form-group">
                    <label htmlFor={field.name} className="control-label">
                      {field.name}
                    </label>
                    <p className="help">{field.help}</p>
                    <div className="checkbox">
                      {field.options.map((option, i) => (
                        <RadioField
                          key={i}
                          label={option}
                          onChange={e => onChangeRadiobox(e, field.id)}
                          name={`${slugify(option, {
                            replacement: '-',
                            remove: /[?$*_+~.,()'"!\-:@]/g,
                            lower: true,
                          })}-${i}-${field.id}`}
                          id={`${slugify(option, {
                            replacement: '-',
                            remove: /[?$*_+~.,()'"!\-:@]/g,
                            lower: true,
                          })}-${i}-${field.id}`}
                          value={option}
                          checked={field.reply === option}
                        />
                      ))}
                      {errors[field.id] && (
                        <div
                          className="has-error"
                          style={{
                            width: '100%',
                            display: 'inline-block',
                            marginBottom: '15px',
                            marginTop: '-15px',
                          }}
                        >
                          <div className="help-block">{errors[field.id]}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );

            default:
              return <div key={field.id}>{field.type}</div>;
          }
        })}
      </div>
    );
  }

  return (
    <div className="add-project">
      <TextField
        label={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.title' })}
        onChange={onChange}
        error={errors.title}
        value={form.title}
        field="title"
      />
      <TextareaField
        label={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.description' })}
        error={errors.description}
        onChange={onChange}
        field="description"
        value={form.description}
        resize={true}
      />
      {/* TODO: uncomment on phase 2  */}
      {/* <TextField
        label={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.video' })}
        showOptionalLabel={true}
        onChange={onChange}
        error={errors.video}
        value={form.video}
        field="video"
        help={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.video.help' })}
      /> */}

      <DropZoneBox
        accept=".jpg, .jpeg, .png"
        className=""
        deleteImageGallery={deleteImageGallery}
        disabled={false}
        env={{
          serverlessResizeImage: getEnvVar('cdn_uploads_url'),
        }}
        inputLabelProps={{
          help: uploadImagesLabel,
          label: uploadImagesLabelTitle,
        }}
        hasCropper={{
          showCropper: true,
          aspectRatioW: 16,
          aspectRatioH: 9,
          minWidth: 1200,
          minHeight: 680,
        }}
        imagesList={newImages}
        imagesPreviewPosition="bottom"
        isLoading={false}
        maxFiles={5}
        maxSize={5000000}
        multiple={false}
        noClick={false}
        noDrag={false}
        noKeyboard
        onSelect={onDrop}
        showDropArea
        showImagesPreviews
        textSaveCropModal={intl.formatMessage({ id: 'save' })}
        titleCropModal={intl.formatMessage({ id: 'modal.crop.title' })}
        error={errors.images}
      />
      {categories.length > 0 && (
        <SelectField
          options={categories}
          value={+form.category}
          label={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.categories' })}
          field="categories"
          onChange={onChange}
          size="sm"
          error={errors.categories}
          help={intl.formatMessage({
            id: 'toolkit.accelerator.appForm.form.categories.help.preview',
          })}
        />
      )}
      {!!form?.sdg.include && (
        <Row className="ods">
          <Col sm={12}>
            <InputLabel
              label={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.sdgs' })}
            />
          </Col>
          <Col sm={12}>
            {ods.map(o => (
              <CheckboxImage
                key={o.ods_id}
                label={o.tag_name}
                img={`${cdnStaticUrl}/frontend/assets/ods/${lang}/${o.tag_name}.png`}
                onChange={onSelectOds}
                value={o.ods_id}
                error={errors.ods}
                checked={o.checked}
              />
            ))}
            {errors.ods && (
              <div
                className="has-error"
                style={{
                  width: '100%',
                  display: 'inline-block',
                  marginBottom: '15px',
                  marginTop: '-15px',
                }}
              >
                <div className="help-block">{errors.ods}</div>
              </div>
            )}
          </Col>
        </Row>
      )}

      {form.customQuestions.map(field => {
        const isDescriptionString = typeof field.form.description === 'string';

        const isDescriptionEmpty = isDescriptionString
          ? field.form.description
          : field.form.description.blocks[0].text;

        const descriptionPreview = isDescriptionString
          ? field.form.description
          : rawDraftToHtml(field.form.description, 1);

        switch (field.type) {
          case 'section':
            return (
              <div className="form-group">
                <InputLabel label={field.form.title} />
                {isDescriptionEmpty && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: descriptionPreview,
                    }}
                  />
                )}
              </div>
            );

          case 'shortAnswer':
            return (
              <TextField
                key={field.id}
                label={field.form.question}
                onChange={onChange}
                error={errors[field.id]}
                value={field.reply}
                field={field.id}
                help={field.form.description}
              />
            );

          case 'longAnswer':
            return (
              <TextareaField
                key={field.id}
                label={field.form.question}
                error={errors[field.id]}
                onChange={onChange}
                field={field.id}
                value={field.reply}
                help={field.form.description}
                resize={true}
              />
            );

          case 'checkboxes':
            return (
              <div key={field.id}>
                <div className="form-group">
                  <label htmlFor={field.form.question} className="control-label">
                    {field.form.question}
                  </label>
                  <p className="help">{field.form.description}</p>
                  <div className="checkbox">
                    {field.form.options.map((option, i) => (
                      <CheckboxField
                        key={i}
                        label={option.value}
                        onChange={e => onChangeCheckbox(e, field.id)}
                        name={`${slugify(option.value)}-${i}-${field.id}`}
                        id={`${slugify(option.value)}-${i}-${field.id}`}
                        value={option.id}
                        checked={field.reply?.includes(option.id)}
                      />
                    ))}
                    {errors[field.id] && (
                      <div
                        className="has-error"
                        style={{
                          width: '100%',
                          display: 'inline-block',
                          marginBottom: '15px',
                          marginTop: '-15px',
                        }}
                      >
                        <div className="help-block">{errors[field.id]}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

          case 'multiChoice':
            return (
              <div key={field.id}>
                <div className="form-group">
                  <label htmlFor={field.form.question} className="control-label">
                    {field.form.question}
                  </label>
                  <p className="help">{field.form.description}</p>
                  <div className="checkbox">
                    {field.form.options.map(option => (
                      <RadioField
                        key={option.id}
                        label={option.value}
                        onChange={e => onChangeRadiobox(e, field.id)}
                        name={`multiChoice-${field.id}`}
                        id={`${slugify(option.value, {
                          replacement: '-',
                          remove: /[?$*_+~.,()'"!\-:@]/g,
                          lower: true,
                        })}-${field.id}`}
                        value={option.id}
                        checked={field.reply === option.id}
                      />
                    ))}
                    {errors[field.id] && (
                      <div
                        className="has-error"
                        style={{
                          width: '100%',
                          display: 'inline-block',
                          marginBottom: '15px',
                          marginTop: '-15px',
                        }}
                      >
                        <div className="help-block">{errors[field.id]}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

          default:
            return <div key={field.id}>{field.type}</div>;
        }
      })}
    </div>
  );
};

ProjectAddForm.propTypes = {
  color: PropTypes.object,
  form: PropTypes.array.isRequired,
  errors: PropTypes.object,
  ods: PropTypes.array,
  newImages: PropTypes.array,
  onSelectOds: PropTypes.func,
  lang: PropTypes.string.isRequired,
  uploadImagesLabel: PropTypes.string,
  onDrop: PropTypes.func,
  deleteImageGallery: PropTypes.func,
  hideDropZone: PropTypes.bool,
  categories: PropTypes.array,
  dragAndDropMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  deleteErrorImageGallery: PropTypes.func,
  onChangeCheckbox: PropTypes.func,
  onChangeRadiobox: PropTypes.func,
  uploadImagesLabelTitle: PropTypes.string,
};

ProjectAddForm.defaultProps = {
  ods: [],
  newImages: [],
  hideDropZone: true,
};

export default ProjectAddForm;
