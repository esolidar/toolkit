import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

const ProjectDetailInfo = ({
  project, color,
}) => {
  if (isEmpty(project) || !project) return (<div />);

  return (
    <Row>
      <Col sm={12} className="box">
        <Row>
          {project.form && (
            <Col sm={12}>
              {project.form.map((q) => {
                if ((q.type !== 'title') && (q.type !== 'paragraph') && (q.type !== 'ods') && (q.type !== 'dropdown') && (q.type !== 'upload-images') && (q.reply)) {
                  return (
                    <div key={q.name}>
                      <h4 style={{ color }}>{q.name}</h4>
                      <p>{q.reply}</p>
                    </div>
                  );
                }
              })}
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

ProjectDetailInfo.propTypes = {
  project: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default ProjectDetailInfo;
