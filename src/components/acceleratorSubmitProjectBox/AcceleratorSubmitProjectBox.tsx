import React, { FC } from 'react';
import moment from 'moment-timezone';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon from '../icon';
import Button from '../../elements/button';
import ConvertToMyTimezone from '../convertToMyTimezone';
import Props from './AcceleratorSubmitProjectBox.types';

const AcceleratorSubmitProjectBox: FC<Props> = ({
  projectConfig,
  locale,
  submitProjectButton,
  showRunningState = true,
}: Props): JSX.Element => {
  const intl = useIntl();

  const today = new Date();
  const startProgram = new Date(
    new Date(
      moment.tz(projectConfig.start_at, projectConfig.timezone).utc().format('YYYY-MM-DD HH:mm:ss')
    )
  );
  const closeProgram = new Date(
    new Date(
      moment.tz(projectConfig.closed_at, projectConfig.timezone).utc().format('YYYY-MM-DD HH:mm:ss')
    )
  );

  const getProgramStatus = () => {
    if (startProgram > today && !projectConfig.archived_at) return 'soon';
    if (startProgram < today && closeProgram > today && !projectConfig.archived_at)
      return 'running';
    if (closeProgram < today || projectConfig.archived_at) return 'ended';
  };

  return (
    <div className="acceleratorSubmitProjectBox__submit">
      {getProgramStatus() === 'soon' && (
        <div className="acceleratorSubmitProjectBox__submit-soon">
          <div>
            <Icon iconClass="icon-ic-box-calendar-white" />
          </div>
          <div>
            <h4>
              <FormattedMessage id="toolkit.accelerator.application.not.started" />
            </h4>
            <p>
              <FormattedMessage
                id="toolkit.accelerator.application.not.started.help"
                values={{
                  value: (
                    <ConvertToMyTimezone
                      date={projectConfig.start_at}
                      locale={locale}
                      format="LL"
                    />
                  ),
                }}
              />
            </p>
          </div>
        </div>
      )}
      {getProgramStatus() === 'running' && (
        <>
          {showRunningState && (
            <>
              <Button
                text={intl.formatMessage({ id: 'toolkit.projects.submit' })}
                onClick={submitProjectButton}
                extraClass="primary-full"
              />
              <p>
                <FormattedMessage
                  id="toolkit.accelerator.open.until"
                  values={{
                    value: (
                      <ConvertToMyTimezone
                        date={projectConfig.closed_at}
                        locale={locale}
                        format="LL"
                      />
                    ),
                  }}
                />
              </p>
            </>
          )}
        </>
      )}
      {getProgramStatus() === 'ended' && (
        <div className="acceleratorSubmitProjectBox__submit-soon">
          <div>
            <Icon iconClass="icon-ic-box-calendar-white" />
          </div>
          <div>
            <h4>
              <FormattedMessage id="toolkit.accelerator.closed" />
            </h4>
            <p>
              <FormattedMessage id="toolkit.accelerator.closed.helper" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceleratorSubmitProjectBox;
