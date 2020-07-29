/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import TextField from '../../elements/textField/TextField';
import TextareaField from '../../elements/textareaField/TextareaField';
import SelectField from '../../elements/selectField/SelectField';
import CheckboxImage from '../../elements/checkboxImage/CheckboxImage';
import Loading from '../loading/Loading';

const ProjectAddForm = ({
  color, form, errors, ods, newImages, onSelectOds, lang, uploadImagesLabel, onDrop, deleteImageGallery, deleteErrorImageGallery, hideDropZone, categories, dragAndDropMessage, onChange,
}) => {
  const renderFiles = () => (
    newImages.map((image, i) => (
      <div key={i} className="thumb">
        {image.loading && (
        <Loading />
        )}
        {image.error && (
        <button
          type="button"
          className="btn-delete-error-image"
          onClick={(e) => deleteErrorImageGallery(e, image)}
        >
          <img
            className="image-error"
            src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-error.svg"
            alt="Error"
          />
        </button>
        )}
        <img src={image.thumbs.thumb} alt="Thumb" className={(image.loading || image.error) ? 'image-thumb-loading' : 'image-thumb'} />
        {(!image.loading && !image.error) && (
        <button
          type="button"
          className="btn-delete-image"
          onClick={(e) => deleteImageGallery(e, image)}
        >
              x
        </button>
        )}
      </div>
    ))
  );

  return (
    <div className="add-project">
      {form.map((field) => {
        switch (field.type) {
          case 'title':
            return (
              <h2 style={{ color: color.primaryColor }} key={field.id}>
                {field.name}
              </h2>
            );

          case 'paragraph':
            return (
              <p key={field.id}>
                {field.name}
              </p>
            );

          case 'input':
            return (
              <TextField
                key={field.id}
                label={field.name}
                onChange={onChange}
                error={errors[field.id]}
                defaultValue={field.reply}
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
                defaultValue={field.reply}
                help={field.help}
                resize={true}
              />
            );

          case 'dropdown':
            return (
              <SelectField
                key={field.id}
                options={categories}
                defaultValue={+field.reply}
                label={field.name}
                field={field.id}
                onChange={onChange}
                error={errors[field.id]}
              />
            );

          case 'ods':
            return (
              <Row
                key={field.id}
                className="ods"
              >
                <Col sm={12}>
                  <span className="control-label">
                    ODS
                  </span>
                </Col>
                <Col sm={12}>
                  {ods.map((o) => (
                    <CheckboxImage
                      key={o.ods_id}
                      label={o.tag_name}
                      img={`https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/${o.tag_name}.png`}
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
                        width: '100%', display: 'inline-block', marginBottom: '15px', marginTop: '-15px',
                      }}
                    >
                      <div className="help-block">
                        {errors[field.id]}
                      </div>
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
                              {(newImages.length === 0) && (
                                <p>
                                  {dragAndDropMessage}
                                </p>
                              )}
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
                        width: '100%', display: 'inline-block', marginBottom: '15px', marginTop: '-15px',
                      }}
                    >
                      <div className="help-block">
                        {errors[field.id]}
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            );

          default:
            return (
              <div key={field.id}>
                {field.type}
              </div>
            );
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
};

ProjectAddForm.defaultProps = {
  ods: [],
  newImages: [],
  hideDropZone: true,
};

export default ProjectAddForm;
