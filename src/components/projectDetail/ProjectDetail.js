import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import LightboxGallery from '../lightboxGallery/LightboxGallery';

const ProjectDetail = ({
  project, returnUrl, returnText, color, status, lang, serverlessResizeImage,
}) => {
  if (isEmpty(project) || !project) return (<div />);

  return (
    <Row className="project-detail">
      <Col sm={9}>
        <Row>
          <Col sm={12} style={{ color }}>
            <h2>
              {project.title}
            </h2>
          </Col>
          <Col sm={12}>
            <a href={returnUrl} className="back">
              <img src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-go-back.svg" alt="" />
              {returnText}
            </a>
          </Col>
          <Col sm={12} className="box">
            <Row>
              <Col sm={12}>
                <h3>
                  Sobre o projeto
                </h3>
              </Col>
              <Col sm={12}>
                {project.description}
              </Col>
              {project.form && (
                <Col sm={12}>
                  {project.form.map((q) => (
                    <div key={q.name}>
                      <h4 style={{ color }}>{q.name}</h4>
                      <p>{q.answer}</p>
                    </div>
                  ))}
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col sm={3}>
        <div className="project-thumb">
          <Row className={`status ${project.status}`}>
            <Col xs={6} />
            <Col xs={6}>{status}</Col>
          </Row>
          <div
            className="image"
          >
            <LightboxGallery
              images={project.images}
              serverlessResizeImage={serverlessResizeImage}
            />
          </div>
          <div className="ods-thumb">
            <h4 style={{ color }}>
              Category
            </h4>
            <p className="category-name">{project.category.name}</p>
          </div>
          <div className="ods-thumb">
            <h4 style={{ color }}>
              ODS
            </h4>
            {project.ods.map((item) => (
              <div className="ods" key={item} style={{ backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/ods-${item}.png)` }} />
            ))}
          </div>
          {!project.cover && (
            <div className="owner">
              <img src={project.user.thumbs.thumb} alt={project.user.name} />
              {project.user.name}
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  returnUrl: PropTypes.string,
  returnText: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  lang: PropTypes.string.isRequired,
  serverlessResizeImage: PropTypes.string.isRequired,
};

export default ProjectDetail;
