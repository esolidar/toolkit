import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

const ProjectDetailInfo = ({
  project, color,
}) => {
  if (isEmpty(project) || !project) return (<div />);

  return (
    <div className="box">
      <Row>
        {project.form && (
          <Col sm={12}>
            {project.form.map((q) => {
              if (q.type === 'title') {
                return (
                  <h4 style={{ color }}>
                    {q.isPrivate && (
                      <img
                        style={{
                          float: 'left', width: '18px', marginTop: '1px', marginRight: '5px',
                        }}
                        src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-lock.svg"
                        alt="Private"
                      />
                    )}
                    {q.name}
                  </h4>
                );
              }
              if (q.type === 'paragraph') {
                return (
                  <p>
                    {q.isPrivate && (
                      <img
                        style={{
                          float: 'left', width: '18px', marginTop: '3px', marginRight: '5px',
                        }}
                        src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-lock.svg"
                        alt="Private"
                      />
                    )}
                    {q.name}
                  </p>
                );
              }
              if (q.type === 'checkbox') {
                return (
                  <div key={q.name}>
                    <h4 style={{ color }}>
                      {q.isPrivate && (
                        <img
                          style={{
                            float: 'left', width: '18px', marginTop: '1px', marginRight: '5px',
                          }}
                          src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-lock.svg"
                          alt="Private"
                        />
                      )}
                      {q.name}
                    </h4>
                    <ul>
                      {q.checked.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if ((q.type !== 'title') && (q.type !== 'paragraph') && (q.type !== 'ods') && (q.type !== 'dropdown') && (q.type !== 'upload-images') && (q.reply)) {
                return (
                  <div key={q.name}>
                    <h4 style={{ color }}>
                      {q.isPrivate && (
                        <img
                          style={{
                            float: 'left', width: '18px', marginTop: '1px', marginRight: '5px',
                          }}
                          src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-lock.svg"
                          alt="Private"
                        />
                      )}
                      {q.name}
                    </h4>
                    {q.reply.split('\n').map((item, index) => (
                      <p key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                );
              }
            })}
          </Col>
        )}
      </Row>
    </div>
  );
};

ProjectDetailInfo.propTypes = {
  project: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default ProjectDetailInfo;
