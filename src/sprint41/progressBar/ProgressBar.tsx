import React, { FC } from 'react';
import Props from './ProgressBar.types';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';

const ProgressBar: FC<Props> = ({
  contributesSum,
  goal,
  currency,
  showLabel,
  showRaisedOf,
}: Props): JSX.Element => {
  const progressBarWidth = `${String((contributesSum / goal) * 100)}%`;

  return (
    <div className="progress-bar-component" data-testid="progress-bar">
      {showLabel && (
        <div className="progress-bar-labels" data-testid="progress-bar-labels">
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
            <div className="goal-label ml-2" data-testid="goal-label">
              <span>
                <FormattedMessage
                  id="progressBar.raised.goal"
                  defaultMessage="raised of {value} goal"
                  values={{
                    value: `${Intl.NumberFormat('en-EN', {
                      style: 'currency',
                      currency: currency,
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(goal)}`,
                  }}
                />
              </span>
            </div>
          )}
        </div>
      )}
      <div className="d-flex flex-start">
        <div className="goal w-100" data-testid="bar">
          <div className="progress-goal-bar" style={{ width: progressBarWidth }} />
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
