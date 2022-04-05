/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import Rating from 'react-rating';
import SelectField from '../../elements/selectField';
import LightboxGallery from '../lightboxGallery';
import Button from '../../elements/button';
import { cdnStaticUrl } from '../../constants/env';
import Icon from '../../elements/icon';

const ProjectDetailThumb = ({
  project,
  status,
  lang,
  serverlessResizeImage,
  color,
  admin,
  showRequestInfoView,
  showReview,
}) => {
  const intl = useIntl();

  const projectStatesMap = ['PENDING', 'IN_REVIEW', 'APPROVED', 'COMPLETED', 'REJECTED'];
  const projectState = projectStatesMap.indexOf(project.status);

  const handleChangeState = e => {
    const { value } = e.target;
    admin.changeStatus(projectStatesMap[+value]);
  };

  return (
    <div className="project-detail">
      <div className="project-thumb">
        <div className={`${project.status} status-bar`}>
          <div className="status">{status}</div>
        </div>
        <div className="image">
          <LightboxGallery images={project.images} serverlessResizeImage={serverlessResizeImage} />
        </div>
        {showReview && (
          <div className="ods-thumb">
            <h4 style={{ color }}>
              <FormattedMessage id="project.review.average.rate" />
            </h4>
            {project.review_average ? (
              <Rating
                className="rating ml-1"
                emptySymbol={<Icon className="empty" name="Star" />}
                fullSymbol={<Icon className="full" name="StarBold" />}
                readonly={true}
                initialRating={project.review_average}
              />
            ) : (
              <p className="category-name">N/A</p>
            )}
          </div>
        )}
        {project?.categories?.length > 0 && (
          <div className="ods-thumb">
            <h4 style={{ color }}>
              <FormattedMessage id="category" />
            </h4>
            {project.categories.map(category => {
              return <p className="category-name">{category.name}</p>;
            })}
          </div>
        )}
        {project.category_id && (
          <div className="ods-thumb">
            <h4 style={{ color }}>
              <FormattedMessage id="category" />
            </h4>
            <p className="category-name">{project.project_category?.name}</p>
          </div>
        )}
        <div className="ods-thumb">
          <h4 style={{ color }}>
            <FormattedMessage id="ods" />
          </h4>
          {project.ods.map(item => (
            <img
              key={item.id}
              className="ods"
              src={`${cdnStaticUrl}/frontend/assets/ods/${lang}/${item.tag_name}.png`}
              alt={item.tag_name}
            />
          ))}
        </div>
        {!project.cover && (
          <div className="owner">
            <img
              src={
                project.as_company === 1
                  ? project.whitelabel_config
                    ? project.whitelabel_config.company?.thumbs.thumb
                    : project.company?.thumbs.thumb
                  : project.user?.thumbs.thumb
              }
              alt={
                project.as_company === 1
                  ? project.whitelabel_config
                    ? project.whitelabel_config.company.name
                    : project.company.name
                  : project.user.name
              }
            />
            {project.as_company === 1
              ? project.whitelabel_config
                ? project.whitelabel_config.company.name
                : project.company.name
              : project.user.name}
          </div>
        )}
      </div>
      {admin && (
        <div>
          <SelectField
            className="mb-4"
            options={[
              { id: 0, name: admin.pendingText, disabled: project.status === projectStatesMap[0] },
              { id: 1, name: admin.inReviewText, disabled: project.status === projectStatesMap[1] },
              { id: 2, name: admin.aproveText, disabled: project.status === projectStatesMap[2] },
              { id: 3, name: admin.completeText, disabled: project.status === projectStatesMap[3] },
              { id: 4, name: admin.rejectText, disabled: project.status === projectStatesMap[4] },
            ]}
            value={projectState}
            label={intl.formatMessage({ id: 'project.change.status.title' })}
            field="changeState"
            onChange={handleChangeState}
            hiddenSelectText={true}
            disabled={showRequestInfoView}
          />
          {project.status === projectStatesMap[1] && (
            <Button
              id="request-info-btn"
              extraClass="info-full w-100"
              onClick={() => admin.changeStatus('REQUEST_INFO')}
              text={admin.requestInfoText}
              icon={<Icon name="InfoBold" className="mr-2" />}
              disabled={showRequestInfoView}
            />
          )}
        </div>
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
    requestInfoText: PropTypes.string,
    pendingText: PropTypes.string,
    inReviewText: PropTypes.string,
    aproveText: PropTypes.string,
    completeText: PropTypes.string,
    rejectText: PropTypes.string,
  }),
  showRequestInfoView: PropTypes.bool,
  showReview: PropTypes.bool,
};

ProjectDetailThumb.defaultProps = {
  showReview: false,
};

export default ProjectDetailThumb;
