/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import classnames from 'classnames';
import Icon from '../icon';
import AcceleratorSubmitProjectBox from '../acceleratorSubmitProjectBox';
import ConvertToMyTimezone from '../convertToMyTimezone';
import Button from '../../elements/button';
import InputLabel from '../../elements/inputLabel';
import Container from '../../elements/container';
import Badge from '../../elements/badge';
import CheckboxCard from '../../elements/checkboxCard';
import rawDraftToHtml from '../../utils/rawDraftToHtml';
import Viewport from '../viewport';
import Preview from '../preview';
import Props from './ProgramDetail.types';
import Skill from '../../interfaces/skill.types';
import getProgramStatus from '../../utils/getProgramStatus';
import getEnvVar from '../../utils/getEnvVar';

const ProgramDetail = ({
  programConfig,
  onSubmitProjectButton,
  previewMode = false,
  breadcrumb,
  viewportSize = 'xl',
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const { locale } = intl;

  const dates = {
    timezone: programConfig?.timezone,
    startAt: programConfig?.start_at,
    closedAt: programConfig?.closed_at,
    endedAt: programConfig?.ended_at,
    archivedAt: programConfig?.archived_at,
  };

  const programStatus = getProgramStatus(dates);

  const hardSkills = programConfig?.skills.filter(item => item.type === 'hard');
  const softSkills = programConfig?.skills.filter(item => item.type === 'soft');

  const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');
  const cdnUploadsUrl = getEnvVar('CDN_UPLOADS_URL');
  const cdnStaticUrl = getEnvVar('CDN_STATIC_URL');

  const programImg = {
    src:
      programConfig?.images.length > 0
        ? `${serverlessResizeImage}/${programConfig.images[0].image}?width=600px&height=340px`
        : null,
    alt: programConfig.title,
    width: '600px',
    height: '340px',
    borderRadius: '0px',
  };

  return (
    <Viewport size={viewportSize} className="accelerator-view">
      <>
        {breadcrumb}
        {(programConfig?.images.length > 0 || previewMode) && (
          <div className="accelerator-view__image">
            <Preview img={programImg} hover={false} />
          </div>
        )}
        <div>
          <h1
            className={classnames('accelerator-view__title', {
              'preview-color': previewMode && !programConfig.title,
            })}
          >
            {previewMode
              ? programConfig.title ||
                intl.formatMessage({ id: 'toolkit.acceleration.preview.title' })
              : programConfig.title}
          </h1>
          <div
            className={classnames('accelerator-view__intro', {
              'preview-color': previewMode && !programConfig.intro,
            })}
          >
            {previewMode
              ? programConfig.intro ||
                intl.formatMessage({ id: 'toolkit.acceleration.preview.intro' })
              : programConfig.intro}
          </div>
          {!previewMode && (
            <div className="accelerator-view__submit">
              <AcceleratorSubmitProjectBox
                projectConfig={programConfig}
                locale={locale}
                submitProjectButton={onSubmitProjectButton}
              />
            </div>
          )}
          <div className="accelerator-view__format">
            <h2 className="accelerator-view__h2">
              <FormattedMessage id="toolkit.accelerator.program" />
            </h2>
            <InnerHTML
              htmlText={programConfig.program_format}
              previewMode={previewMode}
              previewModeCopy="toolkit.acceleration.preview.format"
            />
          </div>
          <div className="accelerator-view__when">
            <h2 className="accelerator-view__h2">
              <FormattedMessage id="toolkit.accelerator.where" />
            </h2>
            <div
              className={classnames('accelerator-view__description', {
                'preview-color': previewMode && !programConfig.location && !programConfig.remote,
              })}
            >
              <p>
                <Icon iconClass="icon-ic-location" />
                {!programConfig.remote && programConfig.location
                  ? programConfig.location
                  : !previewMode
                  ? intl.formatMessage({ id: 'remote' })
                  : intl.formatMessage({ id: 'toolkit.acceleration.preview.location' })}
              </p>
            </div>
          </div>
          <div className="accelerator-view__apply">
            <h2 className="accelerator-view__h2">
              <FormattedMessage id="toolkit.accelerator.apply" />
            </h2>
            <InnerHTML
              htmlText={programConfig.who_should_apply}
              previewMode={previewMode}
              previewModeCopy="toolkit.acceleration.preview.applicants"
            />
          </div>
          {(programConfig.skills.length > 0 || previewMode) && (
            <div className="accelerator-view__skills">
              <h2 className="accelerator-view__h2">
                <FormattedMessage id="toolkit.accelerator.what.looking.for" />
              </h2>
              <Skills skills={hardSkills} previewMode={previewMode} type="hard" />
              <Skills skills={softSkills} previewMode={previewMode} type="soft" />
            </div>
          )}
          {(programConfig.interests.length > 0 || previewMode) && (
            <>
              <div className="accelerator-view__sub-title">
                <InputLabel
                  label={intl.formatMessage({ id: 'impact.area' })}
                  field="Textarea_name"
                  fontWeight={600}
                />
              </div>
              <div className="accelerator-view__interests-list">
                {programConfig.interests.map(interest => (
                  <div key={interest.id}>
                    <CheckboxCard
                      id={`checkboxCard-${interest.id}`}
                      defaultImg={
                        interest.image
                          ? `${cdnUploadsUrl}/${interest.image?.image}`
                          : `${cdnStaticUrl}/frontend/icons/ic-interest.svg`
                      }
                      size="sm"
                      title={interest[`name_${locale}`]}
                      disabledHover={true}
                      name={interest[`name_${locale}`]}
                    />
                  </div>
                ))}
                {previewMode && !programConfig.interests.length && (
                  <Badge
                    size="md"
                    extraClass="white"
                    style={{ width: '153px', height: '152px' }}
                    rounded={false}
                  />
                )}
              </div>
            </>
          )}
          {programStatus === 'running' && !previewMode && (
            <div className="accelerator-view__bottom-submit">
              <Container borderSize={1} rounded>
                <div className="accelerator-view__bottom-submit-container">
                  <div className="mr-auto">
                    <h3>
                      <FormattedMessage id="toolkit.accelerator.up.for.challenge" />
                    </h3>
                    <p className="accelerator-view__bottom-submit-container-p">
                      <FormattedMessage id="toolkit.accelerator.up.for.challenge.helper" />
                    </p>
                    <p className="accelerator-view__bottom-submit-container-footer">
                      <FormattedMessage
                        id="toolkit.accelerator.open.until"
                        values={{
                          value: (
                            <ConvertToMyTimezone
                              date={programConfig.closed_at}
                              locale={locale}
                              format="LL"
                            />
                          ),
                        }}
                      />
                    </p>
                  </div>
                  <Button
                    text={intl.formatMessage({ id: 'toolkit.projects.submit' })}
                    onClick={onSubmitProjectButton}
                    extraClass="primary-full"
                  />
                </div>
              </Container>
            </div>
          )}
        </div>
      </>
    </Viewport>
  );
};

export default ProgramDetail;

interface SkillsProps {
  skills: Skill[];
  type: 'hard' | 'soft';
  previewMode: boolean;
}

const Skills = ({ skills, type, previewMode }: SkillsProps): JSX.Element => {
  const intl: IntlShape = useIntl();
  const { locale } = intl;

  if (skills.length > 0 || previewMode)
    return (
      <>
        <div className="accelerator-view__sub-title">
          <InputLabel
            label={intl.formatMessage({ id: `toolkit.${type}.skills` })}
            field="Textarea_name"
            fontWeight={600}
          />
        </div>
        {previewMode && !skills.length ? (
          <div className="accelerator-view__skills-tags">
            {[...Array(4)].map((_e, i) => (
              <Badge
                size="md"
                extraClass="white"
                key={i}
                style={{ width: '49px', height: '32px' }}
                rounded={false}
              />
            ))}
          </div>
        ) : (
          <div className="accelerator-view__skills-tags">
            {skills.map(skill => (
              <Badge
                extraClass="dark"
                size="md"
                plaintext={skill[`name_${locale}`]}
                key={skill.id}
              />
            ))}
          </div>
        )}
      </>
    );
  return <></>;
};

interface InnerHTMLProps {
  htmlText: string;
  previewMode: boolean;
  previewModeCopy: string;
}

const InnerHTML = ({ htmlText, previewMode, previewModeCopy }: InnerHTMLProps): JSX.Element => {
  const intl: IntlShape = useIntl();

  const returnHtml = field => {
    let isEmpty = false;

    if (field === null) isEmpty = true;
    else if (field[0] === '{') isEmpty = JSON.parse(field).blocks.every(item => item.text === '');

    if (isEmpty) return '';

    if (field[0] === '{') return rawDraftToHtml(JSON.parse(field), 1);

    return field;
  };

  if (previewMode && !htmlText)
    return (
      <div
        className={classnames('accelerator-view__description', {
          'preview-color': previewMode,
        })}
      >
        {intl.formatMessage({ id: previewModeCopy })}
      </div>
    );

  return (
    <div
      className="accelerator-view__description"
      dangerouslySetInnerHTML={{
        __html: returnHtml(htmlText),
      }}
    />
  );
};
