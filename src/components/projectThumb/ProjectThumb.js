import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const ProjectThumb = ({
  project, serverlessResizeImage, cols, lang, followers, showStatus, status,
}) => (
  <Col sm={cols}>
    <div className="project-thumb">
      {showStatus && (
      <Row className={`status ${project.status}`}>
        <Col xs={6} />
        <Col xs={6}>{status}</Col>
      </Row>
      )}
      <div
        className="thumb"
        style={{ backgroundImage: `url(${serverlessResizeImage}/${project.cover})` }}
      >
        <div className="content">
          <div className="title">
            {project.title}
          </div>
        </div>
        <div className="ods-thumb">
          {project.ods.map((item, indx) => {
            if (indx < 4) {
              return (
                <div className="ods" key={item} style={{ backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/ods-${item}.png)` }} />
              );
            }
            if (indx === 5) {
              return (
                <div className="more-ods" key={item}>+</div>
              );
            }
          })}
        </div>
      </div>
      <div className="description">{project.description}</div>
      <div className="owner">
        <img src={project.user.thumbs.thumb} alt={project.user.name} />
        {project.user.name}
      </div>
      {followers && (
      <div />
      )}
    </div>
  </Col>
);

ProjectThumb.propTypes = {
  project: PropTypes.shape({
    user: PropTypes.object,
    ods: PropTypes.array,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  serverlessResizeImage: PropTypes.string.isRequired,
  cols: PropTypes.number,
  lang: PropTypes.string.isRequired,
  followers: PropTypes.array,
  showStatus: PropTypes.bool,
  status: PropTypes.string,
};

ProjectThumb.defaultProps = {
  cols: 4,
};

export default ProjectThumb;
