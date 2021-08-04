import React, { FC, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { format, addMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import Props from './Countdown.types';
import useInterval from '../../hooks/useInterval';

const Countdown: FC<Props> = ({
  startDate,
  endDate,
  onStart,
  onExpiry,
  mode,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [countDowndate, setCountDownDate] = React.useState<any>({
    days: null,
    hours: null,
    min: null,
    sec: null,
  });
  const [isPlaying, setPlaying] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [statusText, setStatusText] = React.useState<string>('');
  const [isSoon, setIsSoon] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useInterval(
    () => {
      const date = calculateCountdown();
      setCountDownDate(date);
    },
    isPlaying ? 1000 : null
  );

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const formatDate = date =>
    format(addMinutes(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');
  const today: any = new Date(formatDate(zonedTimeToUtc(new Date(), timeZone)));
  const start: any = new Date(startDate.replace(/-/g, '/'));
  const end: any = new Date(endDate.replace(/-/g, '/'));

  const daysLeft = () => {
    if (countDowndate.days > 0) {
      if (countDowndate.days === 1) {
        return (
          <FormattedMessage
            id="day.left"
            values={{ value: countDowndate.days }}
            defaultMessage="{value} day left"
          />
        );
      }
      return (
        <FormattedMessage
          id="days.left"
          values={{ value: countDowndate.days }}
          defaultMessage="{value} days left"
        />
      );
    }
    if (countDowndate.hours > 0) {
      return (
        <FormattedMessage
          id="hours.left"
          values={{ value: countDowndate.hours }}
          defaultMessage="{value} hour left"
        />
      );
    }

    if (countDowndate.min > 0) {
      return (
        <FormattedMessage
          id="min.left"
          values={{ value: countDowndate.min }}
          defaultMessage="{value} min left"
        />
      );
    }
    if (countDowndate.sec > 0) {
      return (
        <FormattedMessage
          id="sec.left"
          values={{ value: countDowndate.sec }}
          defaultMessage="{value} sec left"
        />
      );
    }

    return intl.formatMessage({ id: 'ended' });
  };

  const calculateCountdown = () => {
    const nowTimeStamp = Date.parse(today);
    let countDate;
    let status;

    if (start > today) {
      status = intl.formatMessage({ id: 'countdown.startsin' });
      countDate = start;
      setIsSoon(true);
    } else if (today <= end) {
      if (isSoon) onStart();
      status = intl.formatMessage({ id: 'countdown.endsin' });
      setIsRunning(true);
      setIsSoon(false);
      countDate = end;
    } else {
      setPlaying(null);
      if (isLoading) setIsLoading(false);
      if (isRunning) onExpiry();
      return false;
    }
    setStatusText(status);

    let diff = (Date.parse(countDate) - nowTimeStamp) / 1000;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if (diff < 0) {
      setPlaying(null);
      if (isLoading) setIsLoading(false);
      return false;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;

    if (isLoading) setIsLoading(false);
    return timeLeft;
  };

  const addLeadingZeros = value => {
    let newValue = String(value);

    while (newValue.length < 2) {
      newValue = `0${newValue}`;
    }
    return newValue;
  };

  return (
    <div className="countdown-component" data-testid="countdown-component">
      {mode === 'crowdfunding' && (
        <div className="countdown-days-left">
          {!isLoading && <div className="countdown-days-left-values">{daysLeft()}</div>}
        </div>
      )}
      {mode === 'auction' && isPlaying && (
        <div className="countdown-days-left">
          {!isLoading && (
            <>
              <div className="countdown-days-left-label-status">{statusText}</div>
              <div className="countdown-days-left-label-status">
                {countDowndate.days > 0 && (
                  <div
                    className="countdown-days-left-label countdown-days-left-label-separator"
                    data-testid="days"
                  >
                    {addLeadingZeros(countDowndate.days)}
                    <span>
                      {countDowndate.days === 1 ? (
                        <FormattedMessage id="countdown.day" />
                      ) : (
                        <FormattedMessage id="countdown.days" />
                      )}
                    </span>
                  </div>
                )}
                <div
                  className="countdown-days-left-label countdown-days-left-label-separator"
                  data-testid="hours"
                >
                  {addLeadingZeros(countDowndate.hours)}
                  <span>
                    {countDowndate.hours === 1 ? (
                      <FormattedMessage id="countdown.hour" />
                    ) : (
                      <FormattedMessage id="countdown.hours" />
                    )}
                  </span>
                </div>
                <div
                  data-testid="min"
                  className={`countdown-days-left-label ${
                    countDowndate.days === 0 ? 'countdown-days-left-label-separator' : ''
                  }`}
                >
                  {addLeadingZeros(countDowndate.min)}
                  <span>
                    <FormattedMessage id="countdown.min" />
                  </span>
                </div>
                {countDowndate.days === 0 && (
                  <div className="countdown-days-left-label" data-testid="sec">
                    {addLeadingZeros(countDowndate.sec)}
                    <span>
                      <FormattedMessage id="countdown.sec" />
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
      {mode === 'auction' && !isPlaying && (
        <div className="countdown-days-left">
          <div className="countdown-days-left-values">
            <FormattedMessage id="ended" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Countdown;
