import React from 'react';
import PropTypes from 'prop-types';
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import filter from 'lodash/filter';
import Button from '../../elements/button/Button';
import { slugify } from '../../utils/index';

const ProjectThumb = ({
  project, serverlessResizeImage, cols, lang, followers, showStatus, status, myProject, select, selectText, selectedIds, selectProject, selectedText, whitelabelUrl, intl,
}) => {
  const hasImages = project.images.length > 0 ? project.images[0].image : '';
  const thumbImage = project.cover ? project.cover : hasImages;
  const link = project.status === 'DRAFT' ? `/${lang}/user/projects/edit/${project.id}` : `/${lang}/projects/detail/${project.id}-${slugify(project.title)}${myProject ? `?owner=${myProject}` : ''}`;

  const clickThumb = () => {
    if (select) {
      selectProject(project.id);
    } else if (whitelabelUrl) {
      window.open(`https://${whitelabelUrl}${link}`);
    } else {
      window.location.href = link;
    }
  };

  const editThumb = () => {
    window.location.href = (project.status === 'DRAFT' || project.status === 'PENDING') ? `/${lang}/user/projects/edit/${project.id}` : `/${lang}/projects/detail/${project.id}-${slugify(project.title)}${myProject ? `?owner=${myProject}` : ''}`;
  };

  const handleClickOpenTab = () => {
    const win = window.open(whitelabelUrl ? `https://${whitelabelUrl}${link}` : link, '_blank');
    win.focus();
  };

  const isSelected = filter(selectedIds, (o) => o === project.id).length;

  return (
    <Col xs={12} sm={6} md={6} lg={cols}>
      <div className="project-thumb">
        {showStatus && (
          <div className={`${project.status} status-bar`}>
            {['DRAFT', 'PENDING'].includes(project.status) && (
              <button type="button" className="edit-button hover" onClick={editThumb}>
                <FontAwesomeIcon icon={faPen} className="mr-1" title={intl.formatMessage({ id: 'project.edit.title', defaultMessage: 'Edit project' })} />
                <FormattedMessage
                  id="project.edit"
                  defaultMessage="Edit project"
                />
              </button>
            )}
            <div className="status">
              {status}
            </div>
            <OverlayTrigger
              placement="top"
              overlay={(
                <Tooltip id={0}>
                  <FormattedMessage
                    id="open.new.tab"
                    defaultMessage="Open in new tab"
                  />
                </Tooltip>
              )}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 hover" onClick={handleClickOpenTab} style={{ cursor: 'pointer' }} title={intl.formatMessage({ id: 'open.new.tab', defaultMessage: 'Open in new tab' })} />
            </OverlayTrigger>
          </div>
        )}
        <button type="button" className="project-button" onClick={clickThumb}>
          <div
            className="thumb"
            style={{
              backgroundImage: `url('${serverlessResizeImage}/${thumbImage}')`,
              height: project.ods.length > 4 ? '190px' : '155px',
            }}
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
                    <img src={`https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/ods/${lang}/ods-${item.id}.png`} key={item.id} className="ods" alt={`ods-${item.id}`} />
                  );
                }
                if (indx === 4) {
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
        </button>
        {select && (
          <div className="select-project">
            <Button extraClass={isSelected === 1 ? 'info-full' : 'dark'} onClick={() => selectProject(project.id)} type="submit" text={isSelected === 1 ? selectedText : selectText} />
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
  whitelabelUrl: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

ProjectThumb.defaultProps = {
  cols: 4,
};

export default injectIntl(ProjectThumb);
