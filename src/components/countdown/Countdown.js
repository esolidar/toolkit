/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { FormattedMessage } from 'react-intl';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      days: '',
      hours: '',
      min: '',
      sec: '',
      loading: false,
    };

    this.calculateCountdown = this.calculateCountdown.bind(this);
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown();
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  addLeadingZeros = (value) => {
    let newValue = String(value);
    while (newValue.length < 2) {
      newValue = `0${newValue}`;
    }
    return newValue;
  }

  stop() {
    clearInterval(this.interval);
  }

  calculateCountdown() {
    const { startDate, endDate } = this.props;
    const todaysDate = new Date(moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));
    let countDate;
    // Create date from input value
    const inputStartDate = new Date(startDate.replace(/-/g, '/'));
    const inputEndDate = new Date(endDate.replace(/-/g, '/'));

    // call setHours to take the time out of the comparison
    if (inputStartDate > todaysDate) {
      this.setState({
        status: 'soon',
      });
      countDate = startDate;
    } else if (todaysDate <= inputEndDate) {
      this.setState({
        status: 'running',
      });
      countDate = endDate;
    } else {
      this.setState({
        status: 'ended',
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
      });
      countDate = endDate;
    }

    const nowTimeStamp = Date.parse(moment.tz(new Date(), moment.tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));

    // const endDateTimeTimeStamp = Date.parse(new Date(countDate.replace(/-/g, "/")));
    const endDateTimeTimeStamp = Date.parse(moment(countDate));
    let diff = (endDateTimeTimeStamp - nowTimeStamp) / 1000;

    // clear countdown when date is reached
    if (diff < 0) { return false; }

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;
    return timeLeft;
  }

  render() {
    const countDown = this.state;
    const { loading } = this.state;
    const { thumb, dataTestId } = this.props;
    let { status } = this.state;

    if (loading) {
      return <div className="Countdown" />;
    }

    if (status === 'running' && (countDown.days === 0 && countDown.hours < 8)) {
      status = 'heightHoursLeft';
    }

    return (
      <div className="CountdownBox">
        {status === 'heightHoursLeft'
          && (
            <div className={`Countdown-label ${status}`}>
              <FormattedMessage
                id="thumb.countdown.eightHoursLeft"
                defaultMessage="Ending soon"
              />
            </div>
          )}
        {status === 'running'
          && (
            <div className={`Countdown-label ${status}`}>
              <FormattedMessage
                id="countdown.running"
                defaultMessage="Running"
              />
            </div>
          )}
        {status === 'soon'
          && (
            <div className={`Countdown-label ${status}`}>
              <FormattedMessage
                id="countdown.startsin"
                defaultMessage="Starts in"
              />
            </div>
          )}
        {status === 'ended'
          && (
            <div className={`Countdown-label ${status}`}>
              <FormattedMessage
                id="countdown.ended"
                defaultMessage="Ended"
              />
            </div>
          )}
        <div className={`Countdown-box ${status}`}>
          {((countDown.days > 0 && thumb) || !thumb) && (
          <span className="Countdown-col">
            <span className="Countdown-col-element" datat-testid={`${dataTestId}-countdown-days`}>
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <FormattedMessage
                id="countdown.day"
                defaultMessage="Day"
              />
            </span>
          </span>
          )}

          <span className="Countdown-col">
            <span className="Countdown-col-element" data-testid={`${dataTestId}-countdown-hour`}>
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>
              <FormattedMessage
                id="countdown.hours"
                defaultMessage="HOUR"
              />
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element" data-testid={`${dataTestId}-countdown-min`}>
              <strong>{this.addLeadingZeros(countDown.min)}</strong>
              <FormattedMessage
                id="countdown.min"
                defaultMessage="MIN"
              />
            </span>
          </span>

          {((countDown.days === 0 && thumb) || !thumb) && (
          <span className="Countdown-col">
            <span className="Countdown-col-element" data-testid={`${dataTestId}-countdown-seconds`}>
              <strong>{this.addLeadingZeros(countDown.sec)}</strong>
              <FormattedMessage
                id="countdown.sec"
                defaultMessage="SEC"
              />
            </span>
          </span>
          )}
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  thumb: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Countdown.defaultProps = {
  thumb: false,
  dataTestId: 'count',
};

export default Countdown;
