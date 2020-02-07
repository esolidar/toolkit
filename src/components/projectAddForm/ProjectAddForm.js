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
  color, form, errors, ods, newImages, onSelectOds, lang, uploadImagesLabel, onDrop, deleteImageGallery,
}) => (
  <div>
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
              onChange={() => { }}
              error={errors[field.name]}
              defaultValue=""
              field={field.id}
              help={field.help}
            />
          );

        case 'textarea':
          return (
            <TextareaField
              key={field.id}
              label={field.name}
              error={errors[field.name]}
              onChange={() => console.log('test')}
              field={field.id}
              defaultValue=""
              maxLength={100}
              help={field.help}
            />
          );

        case 'dropdown':
          return (
            <SelectField
              key={field.id}
              options={field.options}
              defaultValue=""
              label={field.name}
              field="name"
              onChange={() => { }}
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
                  />
                ))}
              </Col>
            </Row>
          );

        case 'upload-imags':
          return (
            <Row className="upload-image">
              <Col sm={12}>
                <span htmlFor="images" className="control-label">
                  {uploadImagesLabel}
                </span>
              </Col>
              <Col sm={12}>
                <div className="box-images">
                  <Dropzone onDrop={onDrop} accept="image/jpeg, image/png">
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {(newImages.length === 0) && (
                          <p>
                            Drag and drop some files here, or click to select files
                            {/*
                            <FormattedMessage
                              id="projects.upload.images.message"
                              defaultMessage="Drag 'n' drop some files here, or click to select files"
                            />
                            */}
                          </p>
                          )}
                          {newImages.map((image) => (
                            <div key={image.position} className="thumb">
                              {image.loading && (
                              <Loading />
                              )}
                              {image.error && (
                              <img
                                className="image-error"
                                src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-error.svg"
                                alt="Error"
                              />
                              )}
                              <img src={image.thumbs.thumb} alt="Thumb" className={(image.loading || image.error) ? 'image-thumb-loading' : 'image-thumb'} />
                              {(!image.loading && !image.error) && (
                              <button
                                type="button"
                                className="btn-delete-image"
                                onClick={() => deleteImageGallery(image.id)}
                              >
                                    x
                              </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
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
};

ProjectAddForm.defaultProps = {
  ods: [],
  newImages: [],
};

export default ProjectAddForm;
