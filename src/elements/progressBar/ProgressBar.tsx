import React, { FC } from 'react';
import Props from './ProgressBar.types';
import { FormattedMessage, FormattedNumber } from 'react-intl';

const ProgressBar: FC<Props> = ({
  text,
  contributesSum,
  goal,
  currency,
  showBottomLabels,
  showPercentage,
}: Props): JSX.Element => {
  const percent = (contributesSum * 100) / goal / 100;
  const progressBarWidth = `${String((contributesSum / goal) * 100)}%`;

  return (
    <div data-testid="progress-bar">
      <div className="d-flex flex-start">
        <div className="goal w-100" data-testid="bar">
          <div className="progress-goal-bar" style={{ width: progressBarWidth }} />
        </div>
        {showPercentage && (
          <span className="progress-percent-label ml-3" data-testid="progress-bar-percent">
            <FormattedNumber value={percent} style="percent" />
          </span>
        )}
      </div>
      {showBottomLabels && (
        <div className="d-flex justify-content-between" data-testid="progress-bar-labels">
          <div className="raised-text">
            <FormattedNumber value={contributesSum} style="currency" currency={currency} />
          </div>
          <div className="goal-text">
            <span className="goal-span mr-1">
              <FormattedMessage id={text} />
            </span>
            <span className="goal-span">
              <FormattedNumber value={goal} style="currency" currency={currency} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProgressBar;
