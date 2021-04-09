import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { format, addMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

const statusOptions = {
  SOON: 'soon',
  RUNNING: 'running',
  HEIGH_HOURS_LEFT: 'heightHoursLeft',
  ENDED: 'ended',
};

const statusMap = {
  [statusOptions.SOON]: {
    translation: 'countdown.startsin',
    defaultMessage: 'Starts in',
  },
  [statusOptions.RUNNING]: {
    translation: 'countdown.running',
    defaultMessage: 'Running',
  },
  [statusOptions.HEIGH_HOURS_LEFT]: {
    translation: 'thumb.countdown.eightHoursLeft',
    defaultMessage: 'Ending soon',
  },
  [statusOptions.ENDED]: {
    translation: 'countdown.ended',
    defaultMessage: 'Ended',
  },
};

const counterOptions = { DAYS: 'days', HOURS: 'hours', MIN: 'min', SEC: 'sec' };

const counterMap = {
  [counterOptions.DAYS]: {
    testid: counterOptions.DAYS,
    translation: 'countdown.day',
    defaultMessage: 'DAY',
  },
  [counterOptions.HOURS]: {
    testid: counterOptions.HOURS,
    translation: 'countdown.hours',
    defaultMessage: 'HOUR',
  },
  [counterOptions.MIN]: {
    testid: counterOptions.MIN,
    translation: 'countdown.min',
    defaultMessage: 'MIN',
  },
  [counterOptions.SEC]: {
    testid: counterOptions.SEC,
    translation: 'countdown.sec',
    defaultMessage: 'SEC',
  },
};

class Countdown extends Component {
  state = {
    status: '',
    days: '',
    hours: '',
    min: '',
    sec: '',
    isSoon: false,
    isRunning: false,
  };

  componentDidMount() {
    // update every second
    const date = this.calculateCountdown();
    if (date) this.setState(date);

    this.interval = setInterval(() => {
      const date = this.calculateCountdown();
      if (date) this.setState(date);
      else this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  formatDate = date => format(addMinutes(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');

  addLeadingZeros = value => {
    let newValue = String(value);
    while (newValue.length < 2) {
      newValue = `0${newValue}`;
    }
    return newValue;
  };

  calculateCountdown = () => {
    const { startDate, endDate, onStart, onExpiry } = this.props;
    const { isSoon, isRunning } = this.state;
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const todaysDate = new Date(this.formatDate(zonedTimeToUtc(new Date(), timeZone)));
    let countDate;

    // Create date from input value
    const inputStartDate = new Date(startDate.replace(/-/g, '/'));
    const inputEndDate = new Date(endDate.replace(/-/g, '/'));

    // call setHours to take the time out of the comparison
    if (inputStartDate > todaysDate) {
      this.setState({ status: statusOptions.SOON, isSoon: true });
      countDate = startDate;
    } else if (todaysDate <= inputEndDate) {
      if (isSoon) onStart();

      this.setState({
        status: statusOptions.RUNNING,
        isSoon: false,
        isRunning: true,
      });

      countDate = endDate;
    } else {
      if (isRunning) onExpiry();

      this.setState({
        status: statusOptions.ENDED,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        isRunning: false,
      });
      countDate = endDate;
    }

    const endDateTimeTimeStamp = Date.parse(countDate);
    const nowTimeStamp = Date.parse(this.formatDate(zonedTimeToUtc(new Date(), timeZone)));
    let diff = (endDateTimeTimeStamp - nowTimeStamp) / 1000;

    // clear countdown when date is reached
    if (diff < 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;
    return timeLeft;
  };

  stop() {
    clearInterval(this.interval);
  }

  renderCounter(option) {
    const dataTestId = `${this.props.dataTestId}-countdown-${option}`;
    const value = this.addLeadingZeros(this.state[option]);
    const { translation, defaultMessage } = counterMap[option];

    return (
      <span className="Countdown-col">
        <span className="Countdown-col-element" data-testid={dataTestId}>
          <strong>{value}</strong>
          <FormattedMessage id={translation} defaultMessage={defaultMessage} />
        </span>
      </span>
    );
  }

  render() {
    const { thumb } = this.props;
    const { days, hours } = this.state;
    let { status } = this.state;

    if (!status) return <div className="Countdown" />;

    const lessThan8HoursLeft = status === statusOptions.RUNNING && days === 0 && hours < 8;
    if (lessThan8HoursLeft) status = statusOptions.HEIGH_HOURS_LEFT;

    const showCounters = status !== statusOptions.ENDED;
    const showDays = !thumb || (thumb && days > 0);
    const showSecs = !thumb || (thumb && days === 0);

    return (
      <div className="CountdownBox">
        <div className={`Countdown-label ${status}`}>
          <FormattedMessage
            id={statusMap[status].translation}
            defaultMessage={statusMap[status].defaultMessage}
          />
        </div>

        {showCounters && (
          <div className={`Countdown-box ${status}`}>
            {showDays && this.renderCounter(counterOptions.DAYS)}
            {this.renderCounter(counterOptions.HOURS)}
            {this.renderCounter(counterOptions.MIN)}
            {showSecs && this.renderCounter(counterOptions.SEC)}
          </div>
        )}
      </div>
    );
  }
}

Countdown.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  thumb: PropTypes.bool,
  dataTestId: PropTypes.string,
  onExpiry: PropTypes.func,
  onStart: PropTypes.func,
};

Countdown.defaultProps = {
  thumb: false,
  dataTestId: 'count',
  onExpiry: () => {},
};

export default Countdown;
