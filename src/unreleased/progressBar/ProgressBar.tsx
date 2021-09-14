import React, { FC, useState } from 'react';
import { FormattedMessage, FormattedNumber, IntlShape, useIntl } from 'react-intl';
import Button from '../../elements/button';
import useInterval from '../../hooks/useInterval';
import Countdown from '../countdown';
import Props from './ProgressBar.types';
import { today } from '../../constants/date';

// TODO: colocar hasStarted e checkHasStarted na view detail do crowdfunding

const interval: number = 60000;

const checkHasStarted = (startDate: string): boolean => {
  const start: Date | null = startDate ? new Date(startDate.replace(/-/g, '/')) : null;

  if (start > today) return true;
  return false;
};

const ProgressBar: FC<Props> = ({
  contributesSum,
  goal,
  currency,
  showLabel,
  showRaisedOf,
  numberContributors,
  onClickContributors,
  startDate,
  endDate,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const [hasStarted, setHasStarted] = useState<boolean>(checkHasStarted(startDate));

  useInterval(() => setHasStarted(checkHasStarted(startDate)), hasStarted ? interval : null);

  const progressBarWidth: string = `${String((contributesSum / goal) * 100)}%`;

  return (
    <div className="progress-bar-component" data-testid="progress-bar">
      {showLabel && (
        <div className="progress-bar-component__labels" data-testid="progress-bar-labels">
          <div className="raised-value">
            <FormattedNumber
              value={contributesSum}
              style="currency"
              currency={currency}
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </div>
          {showRaisedOf && (
            <div className="goal-label" data-testid="goal-label">
              <FormattedMessage
                id="progressBar.raised.goal"
                values={{
                  value: `${Intl.NumberFormat(intl.locale, {
                    style: 'currency',
                    currency,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(goal)}`,
                }}
              />
            </div>
          )}
        </div>
      )}
      <div className="progress-bar-component__bars">
        <div className="full-bar" data-testid="bar">
          <div className="raised-bar" style={{ width: progressBarWidth }} />
        </div>
      </div>
      <div className="progress-bar-component__info">
        {numberContributors && (
          <Button
            className="contributors"
            extraClass="link"
            text={`${numberContributors} ${intl.formatMessage({ id: 'toolkit.donors' })}`}
            onClick={onClickContributors}
          />
        )}
        {endDate && (
          <div className="time-left">
            <Countdown
              startDate={startDate}
              endDate={endDate}
              mode={hasStarted ? 'date' : 'timer-left'}
              minimal
              showBorder={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
