import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import slugify from 'slugify';
import filter from 'lodash/filter';
import Button from '../button/Button';

const ProjectThumb = ({
  project, serverlessResizeImage, cols, lang, followers, showStatus, status, myProject, select, selectText, selectedIds, selectProject, selectedText,
}) => {
  const hasImages = project.images.length > 0 ? project.images[0].image : '';
  const thumbImage = project.cover ? project.cover : hasImages;
  const link = project.status === 'DRAFT' ? `/${lang}/user/projects/edit/${project.id}` : `/${lang}/projects/detail/${project.id}-${slugify(project.title, {
    replacement: '-',
    remove: /[?$*_+~.,()'"!\-:@]/g,
    lower: true,
  })}${myProject ? `?owner=${myProject}` : ''}`;

  const clickThumb = () => {
    if (select) {
      selectProject(project.id);
    } else {
      window.location.href = link;
    }
  };

  const isSelected = filter(selectedIds, (o) => o === project.id).length;

  return (
    <Col xs={12} sm={6} md={6} lg={cols}>
      <div className="project-thumb">
        <button type="button" className="project-button" onClick={clickThumb}>
          <div>
            {showStatus && (
              <Row className={`status ${project.status}`}>
                <Col xs={6} />
                <Col xs={6}>{status}</Col>
              </Row>
            )}
            <div
              className="thumb"
              style={{ backgroundImage: `url('${serverlessResizeImage}/${thumbImage}')` }}
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
                      <div className="ods" key={item.id} style={{ backgroundImage: `url('https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/ods-${item.id}.png')` }} />
                    );
                  }
                  if (indx === 5) {
                    return (
                      <div className="more-ods" key={item.id}>+</div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="description">{project.description}</div>
            {project.user && (
              <div className="owner">
                <img src={project.user.thumbs.thumb} alt={project.user.name} />
                {project.user.name}
              </div>
            )}
            {followers && (
              <div />
            )}
          </div>
        </button>
        {select && (
          <div className="select-project">
            <Button extraClass={isSelected === 1 ? 'info' : 'dark'} onClick={() => selectProject(project.id)} type="submit" text={isSelected === 1 ? selectedText : selectText} />
          </div>
        )}
      </div>
    </Col>
  );
};

ProjectThumb.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.object,
    ods: PropTypes.array,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    images: PropTypes.array,
  }),
  serverlessResizeImage: PropTypes.string.isRequired,
  cols: PropTypes.number,
  lang: PropTypes.string.isRequired,
  followers: PropTypes.array,
  showStatus: PropTypes.bool,
  status: PropTypes.string,
  myProject: PropTypes.bool,
  select: PropTypes.bool,
  selectText: PropTypes.string,
  selectedText: PropTypes.string,
  selectedIds: PropTypes.array,
  selectProject: PropTypes.func,
};

ProjectThumb.defaultProps = {
  cols: 4,
};

export default ProjectThumb;
