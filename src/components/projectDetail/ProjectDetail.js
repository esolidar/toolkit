import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import ProjectDetailInfo from '../projectDetailInfo/ProjectDetailInfo';
import ProjectDetailThumb from '../projectDetailThumb/ProjectDetailThumb';

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
        <ProjectDetailThumb
          project={project}
          status={status}
          lang={lang}
          serverlessResizeImage={serverlessResizeImage}
          admin={admin}
        />
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
