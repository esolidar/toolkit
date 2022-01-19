import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon from '../../elements/icon';
import Button from '../../elements/button';
import ConvertToMyTimezone from '../convertToMyTimezone';
import Props from './AcceleratorSubmitProjectBox.types';
import { getProgramStatus } from '../../utils/getProgramStatus';

const AcceleratorSubmitProjectBox: FC<Props> = ({
  projectConfig,
  locale,
  submitProjectButton,
  showRunningState = true,
}: Props): JSX.Element => {
  const intl = useIntl();

  const dates = {
    timezone: projectConfig.timezone,
    startAt: projectConfig.start_at,
    closedAt: projectConfig.closed_at,
    endedAt: projectConfig.ended_at,
    archivedAt: projectConfig.archived_at,
  };

  return (
    <div className="acceleratorSubmitProjectBox__submit">
      {getProgramStatus(dates) === 'soon' && (
        <div className="acceleratorSubmitProjectBox__submit-soon">
          <div>
            <Icon name="Info" />
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
      {getProgramStatus(dates) === 'running' && (
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
      {(getProgramStatus(dates) === 'ended' || getProgramStatus(dates) === 'closed') && (
        <div className="acceleratorSubmitProjectBox__submit-soon">
          <div>
            <Icon name="Info" />
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
