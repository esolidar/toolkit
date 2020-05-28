import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import { FormattedMessage } from 'react-intl';
import LightboxGallery from '../lightboxGallery/LightboxGallery';
import Button from '../button/Button';
import ProjectDetailInfo from '../projectDetailInfo/ProjectDetailInfo';

const ProjectDetail = ({
  project, returnText, color, status, lang, serverlessResizeImage, admin,
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
            <button type="button" onClick={() => window.history.back()} className="back">
              <img src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-go-back.svg" alt="" />
              {returnText}
            </button>
          </Col>
          <Col sm={12} className="box">
            <ProjectDetailInfo project={project} color={color} />
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
              <div className="ods" key={item.id} style={{ backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/${item.tag_name}.png)` }} />
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
      </Col>
    </Row>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  returnText: PropTypes.string,
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

export default ProjectDetail;
