/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { FormattedMessage, FormattedNumber, IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
import isDefined from '../../utils/isDefined/isDefined';
import Countdown from '../countdown';
import Props from './ProgressBar.types';

const ProgressBar: FC<Props> = ({
  contributesSum,
  goal,
  currency,
  showLabel,
  showRaisedOf,
  numberContributors,
  onClickContributors,
  hasStarted = false,
  countdown,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

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
          <div
            className="raised-bar client__primary--background-color"
            style={{ width: progressBarWidth }}
          />
        </div>
      </div>
      <div className="progress-bar-component__info">
        {isDefined(numberContributors) && (
          <div
            className={classnames('contributors', 'client__primary--color-hover', {
              click: numberContributors > 0,
            })}
            onClick={() => {
              if (numberContributors === 0) return;
              onClickContributors();
            }}
          >
            {intl.formatMessage({ id: 'toolkit.numberOfDonors' }, { value: numberContributors })}
          </div>
        )}
        {countdown && (
          <div className="time-left">
            <Countdown
              {...countdown}
              mode={hasStarted ? 'timer-left' : 'detail'}
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
