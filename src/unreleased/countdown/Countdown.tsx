import React, { FC, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { format, addMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import Props from './Countdown.types';
import useInterval from '../../hooks/useInterval';
import MONTHS from '../../constants/months';

const Countdown: FC<Props> = ({
  startDate,
  endDate,
  onStart,
  onExpiry,
  mode = 'timer-count',
  showBorder = true,
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
  const [interval, setInterval] = useState<number>(60000);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const formatDate = date =>
    format(addMinutes(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');
  const start: any = startDate ? new Date(startDate.replace(/-/g, '/')) : null;
  const end: any = new Date(endDate.replace(/-/g, '/'));

  const calculateCountdown = () => {
    const today: any = new Date(formatDate(zonedTimeToUtc(new Date(), timeZone)));
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

    if (timeLeft.hours === 0 && timeLeft.min === 0) setInterval(1000);
    return timeLeft;
  };

  useEffect(() => {
    const date = calculateCountdown();
    setCountDownDate(date);
  }, []);

  useInterval(
    () => {
      const date = calculateCountdown();
      setCountDownDate(date);
    },
    isPlaying ? interval : null
  );

  const daysLeft = () => {
    if (countDowndate.days > 0) {
      if (countDowndate.days === 1) {
        return <FormattedMessage id="last.day" />;
      }
      return <FormattedMessage id="days.left" values={{ value: countDowndate.days }} />;
    }
    if (countDowndate.hours > 1) {
      return <FormattedMessage id="hours.left" values={{ value: countDowndate.hours }} />;
    }
    if (countDowndate.hours === 1) {
      return <FormattedMessage id="hour.left" values={{ value: countDowndate.hours }} />;
    }

    if (countDowndate.hours === 0 && countDowndate.min > 1) {
      return <FormattedMessage id="mins.left" values={{ value: countDowndate.min }} />;
    }
    if (countDowndate.hours === 0 && countDowndate.min <= 1) {
      return <FormattedMessage id="min.left" values={{ value: countDowndate.min + 1 }} />;
    }
  };

  const addLeadingZeros = value => {
    let newValue = String(value);

    while (newValue.length < 2) {
      newValue = `0${newValue}`;
    }
    return newValue;
  };

  const renderTimerCountdown = () => {
    if (
      (countDowndate.days > 0 && mode === 'timer-count') ||
      (countDowndate.days === 0 &&
        countDowndate.hours >= 9 &&
        isRunning &&
        mode === 'timer-count') ||
      isSoon
    )
      return (
        <>
          <div className="countdown-days-left-label-status">{statusText}</div>
          <div
            className={`countdown-days-left-label-status ${
              isSoon ? 'countdown-soon' : 'countdown-running'
            }`}
          >
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
            <div
              className="countdown-days-left-label countdown-days-left-label-separator"
              data-testid="hours"
            >
              {addLeadingZeros(countDowndate.hours)}
              <span>
                {countDowndate.hours === 1 ? (
                  <FormattedMessage id="hour" />
                ) : (
                  <FormattedMessage id="countdown.hours" />
                )}
              </span>
            </div>
            <div data-testid="min" className="countdown-days-left-label">
              {addLeadingZeros(countDowndate.min)}
              <span>
                <FormattedMessage id="countdown.min" />
              </span>
            </div>
          </div>
        </>
      );

    return <div className="countdown-days-left-values">{daysLeft()}</div>;
  };

  const renderDates = () => {
    const startShortMonth = intl.formatMessage({ id: MONTHS[new Date(start).getMonth()].short });
    const endShortMonth = intl.formatMessage({ id: MONTHS[new Date(end).getMonth()].short });

    return (
      <div>
        {start && (
          <>
            <FormattedMessage
              id="month.day"
              defaultMessage="{month} {day}"
              values={{ month: startShortMonth, day: new Date(start).getDate() }}
            />
            &nbsp;-&nbsp;
          </>
        )}
        <FormattedMessage
          id="month.day"
          defaultMessage="{month} {day}"
          values={{ month: endShortMonth, day: new Date(end).getDate() }}
        />
      </div>
    );
  };

  return (
    <div
      className={`countdown-component ${showBorder ? 'border' : ''}`}
      data-testid="countdown-component"
    >
      {mode === 'date' && (
        <div className="countdown-days-left">
          {!isLoading && <div className="countdown-days-left-values">{renderDates()}</div>}
        </div>
      )}
      {mode !== 'date' && isPlaying && (
        <div className="countdown-days-left">{!isLoading && <>{renderTimerCountdown()}</>}</div>
      )}
      {!isPlaying && (
        <div className="countdown-days-left">
          <div className="countdown-days-left-values countdown-ended" data-testid="ended">
            <FormattedMessage id="ended" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Countdown;
