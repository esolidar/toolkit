import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import isEmpty from '../../utils/isEmpty';
import Button from '../../elements/button';
import CheckboxField from '../../elements/checkboxField';
import TextareaField from '../../elements/textareaField';

const ProjectDetailInfo = ({
  project,
  color,
  showRequestInfoView,
  handleToggleFieldSelected,
  handleChangeFieldObs,
  handleCancelRequestInfo,
  handleSubmitRequestInfo,
  lang,
  staticUrl,
}) => {
  const intl = useIntl();

  if (isEmpty(project) || !project) return <div />;

  const { form, requestInfoErrors = [] } = project;

  const totalQuestions = form.length;
  const selectedQuestions = form.filter(item => item.selected === true).length;

  return (
    <div className="project-detail-info">
      {showRequestInfoView && (
        <div className="in-review-info top">
          <FormattedMessage id="project.requestInfo.title" />
        </div>
      )}
      <div className="box">
        <Row>
          {form && (
            <Col sm={12}>
              {form.map((question, index) => (
                <Question
                  key={question.position}
                  question={question}
                  index={index}
                  color={color}
                  showRequestInfoView={showRequestInfoView}
                  handleToggleFieldSelected={handleToggleFieldSelected}
                  handleChangeFieldObs={handleChangeFieldObs}
                  ods={question.type === 'ods' ? { images: project.ods, lang } : null}
                  staticUrl={staticUrl}
                  error={requestInfoErrors.includes(index)}
                />
              ))}
            </Col>
          )}
        </Row>
      </div>
      {showRequestInfoView && (
        <div className="in-review-info bottom">
          <div className="mr-auto">
            <FormattedMessage
              id="project.requestInfo.count"
              values={{ selectedQuestions, totalQuestions }}
            />
          </div>
          <Button
            type="button"
            extraClass="dark mr-2"
            onClick={handleCancelRequestInfo}
            text={intl.formatMessage({ id: 'cancel' })}
          />
          <Button
            type="button"
            extraClass="primary-full"
            onClick={handleSubmitRequestInfo}
            text={intl.formatMessage({ id: 'submit' })}
            disabled={selectedQuestions === 0 || requestInfoErrors.length > 0}
          />
        </div>
      )}
    </div>
  );
};

ProjectDetailInfo.propTypes = {
  project: PropTypes.object.isRequired,
  color: PropTypes.string,
  showRequestInfoView: PropTypes.bool,
  handleToggleFieldSelected: PropTypes.func,
  handleChangeFieldObs: PropTypes.func,
  handleCancelRequestInfo: PropTypes.func,
  handleSubmitRequestInfo: PropTypes.func,
  lang: PropTypes.string.isRequired,
  staticUrl: PropTypes.string,
};

const Question = ({
  question,
  index,
  color,
  showRequestInfoView,
  handleToggleFieldSelected,
  handleChangeFieldObs,
  ods,
  staticUrl,
  error,
}) => {
  const intl = useIntl();
  const { type, name, selected, isPrivate, checked, obs, reply } = question;

  if (type === 'dropdown' || type === 'upload-images') return null;

  const PrivateIcon = () => (
    <FontAwesomeIcon icon={faLock} className="ml-2 text-secondary" style={{ width: '12px' }} />
  );

  const questionGroupClassName = ['question-group'];
  if (showRequestInfoView && !['title', 'paragraph'].includes(type))
    questionGroupClassName.push('in-review');
  if (selected) questionGroupClassName.push('selected');
  if (selected && error) questionGroupClassName.push('error');

  return (
    <div className={questionGroupClassName.join(' ')} key={name}>
      <div className="answer">
        {type === 'title' && (
          <h4 style={{ color }}>
            {name}
            {isPrivate && <PrivateIcon />}
          </h4>
        )}
        {type === 'paragraph' && (
          <p>
            {name}
            {isPrivate && <PrivateIcon />}
          </p>
        )}
        {type === 'checkbox' && (
          <div>
            <h4 style={{ color }}>
              {name}
              {isPrivate && <PrivateIcon />}
            </h4>
            <ul>
              {checked.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {type === 'ods' && showRequestInfoView && (
          <div>
            <h4 style={{ color }}>{name}</h4>
            <div>
              {ods.images.map(o => (
                <img
                  key={o.id}
                  src={`${staticUrl}/frontend/assets/ods/${ods.lang}/${o.tag_name}.png`}
                  alt={o.tag_name}
                  style={{ width: '80px' }}
                />
              ))}
            </div>
          </div>
        )}
        {type !== 'title' &&
          type !== 'paragraph' &&
          type !== 'ods' &&
          type !== 'dropdown' &&
          type !== 'upload-images' &&
          reply && (
            <div>
              <h4 style={{ color }}>
                {name}
                {isPrivate && <PrivateIcon />}
              </h4>
              {reply.split('\n').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        {showRequestInfoView && !['title', 'paragraph'].includes(type) && (
          <CheckboxField
            onChange={e => handleToggleFieldSelected(e, index)}
            name={`${name}-selected`}
            checked={selected}
          />
        )}
      </div>
      {selected && (
        <TextareaField
          label={intl.formatMessage({ id: 'project.comments' })}
          className="description"
          placeholder={intl.formatMessage({ id: 'project.tickets.requestInfo.comments' })}
          onChange={e => handleChangeFieldObs(e, index)}
          field={`${name}-description`}
          resize={true}
          value={obs}
        />
      )}
      {selected && error && (
        <p className="mt-1 text-danger">
          <FormattedMessage id="form.required" />
        </p>
      )}
    </div>
  );
};

Question.propTypes = {
  color: PropTypes.string,
  index: PropTypes.number,
  handleToggleFieldSelected: PropTypes.func,
  handleChangeFieldObs: PropTypes.func,
  question: PropTypes.shape({
    obs: PropTypes.string,
    checked: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    isPrivate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    name: PropTypes.string,
    reply: PropTypes.string,
    selected: PropTypes.bool,
    type: PropTypes.string,
  }),
  showRequestInfoView: PropTypes.bool,
  ods: PropTypes.shape({
    images: PropTypes.array,
    lang: PropTypes.string,
  }),
  staticUrl: PropTypes.string,
  error: PropTypes.bool,
};

export default ProjectDetailInfo;
