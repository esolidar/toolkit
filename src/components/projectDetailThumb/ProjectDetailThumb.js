import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import LightboxGallery from '../lightboxGallery/LightboxGallery';
import Button from '../button/Button';

const ProjectDetailThumb = (props) => {
  const {
    project, status, lang, serverlessResizeImage, color, admin,
  } = props;
  return (
    <div className="project-detail">
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
            <FormattedMessage
              id="category"
              defaultMessage="Category"
            />
          </h4>
          <p className="category-name">{project.project_category.name}</p>
        </div>
        <div className="ods-thumb">
          <h4 style={{ color }}>
            <FormattedMessage
              id="ods"
              defaultMessage="ODS"
            />
          </h4>
          {project.ods.map((item) => (
            <img
              key={item.id}
              className="ods"
              src={`https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/${item.tag_name}.png`}
              alt={item.tag_name}
            />
          ))}
        </div>
        {!project.cover && (
          <div className="owner">
            <img src={project.user.thumbs.thumb} alt={project.user.name} />
            {project.user.name}
          </div>
        )}
      </div>
      {admin && (
        <Row className="admin-buttons">
          <Col sm={12} className="text-center">
            <Button extraClass="warning" onClick={() => admin.changeStatus('IN_REVIEW')} text={admin.inReviewText} disabled={project.status === 'IN_REVIEW'} />
          </Col>
          <Col sm={12} className="text-center">
            <Button extraClass="success" onClick={() => admin.changeStatus('APPROVED')} text={admin.aproveText} disabled={project.status === 'APPROVED'} />
          </Col>
          <Col sm={12} className="text-center">
            <Button extraClass="info" onClick={() => admin.changeStatus('COMPLETED')} text={admin.completeText} disabled={project.status === 'COMPLETED'} />
          </Col>
          <Col sm={12} className="text-center">
            <Button extraClass="danger" onClick={() => admin.changeStatus('REJECTED')} text={admin.rejectText} disabled={project.status === 'REJECTED'} />
          </Col>
        </Row>
      )}
    </div>
  );
};

ProjectDetailThumb.propTypes = {
  project: PropTypes.object.isRequired,
  color: PropTypes.string,
  status: PropTypes.string,
  lang: PropTypes.string.isRequired,
  serverlessResizeImage: PropTypes.string.isRequired,
  admin: PropTypes.shape({
    changeStatus: PropTypes.func,
    inReviewText: PropTypes.string,
    aproveText: PropTypes.string,
    completeText: PropTypes.string,
    rejectText: PropTypes.string,
  }),
};

export default ProjectDetailThumb;
