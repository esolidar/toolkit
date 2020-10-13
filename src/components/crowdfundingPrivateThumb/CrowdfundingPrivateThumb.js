import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Row, Col } from 'react-bootstrap';
import Loading from '../loading/Loading';

class CrowdfundingPrivateThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      labelStatus: '',
      date: '',
      thumb: {},
      isLoading: true,
      boxSize: {},
    };
    this.thumbBox = React.createRef();
  }

  componentDidMount() {
    this.setState({
      boxSize: {
        width: this.thumbBox.current ? this.thumbBox.current.offsetWidth : 300,
        height: this.thumbBox.current ? this.thumbBox.current.offsetWidth : 300,
      },
    });

    const { thumb } = this.props;
    if (thumb) {
      this.setState({
        thumb,
        isLoading: false,
      });

      // Check if campaign is soon, running, ended
      const inputStartDate = new Date(moment.utc(thumb.start_date).tz(moment.tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
      const inputEndDate = new Date(moment.utc(thumb.end_date).tz(moment.tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
      const { translations } = this.props;

      // call setHours to take the time out of the comparison
      if (thumb.status === 'pending') {
        this.setState({
          status: 'pending-campaign',
          date: '',
          labelStatus: translations.pending,
        });
      } else if (Date.parse(inputStartDate) >= Math.floor(Date.now())) {
        this.setState({
          status: 'soon',
          date: `${inputStartDate.getDate()}-${Number(inputStartDate.getMonth() + 1)}-${inputStartDate.getFullYear()}`,
          labelStatus: translations.startsIn,
        });
      } else if (Math.floor(Date.now()) < Date.parse(inputEndDate)) {
        this.setState({
          status: 'running',
          date: `${inputEndDate.getDate()}-${Number(inputEndDate.getMonth() + 1)}-${inputEndDate.getFullYear()}`,
          labelStatus: translations.endsIn,
        });
      } else {
        this.setState({
          status: 'ended',
          date: `${inputEndDate.getDate()}-${Number(inputEndDate.getMonth() + 1)}-${inputEndDate.getFullYear()}`,
          labelStatus: translations.endedIn,
        });
      }
    }
  }

  render() {
    const { translations, convertedValue } = this.props;
    const {
      isLoading, thumb, status, date, labelStatus, boxSize,
    } = this.state;

    if (isLoading) {
      return (
        <Loading />
      );
    }

    const campaignTitle = () => {
      let title;
      if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
        title = thumb.title;
      } else if (!thumb.title_en) {
        title = thumb.title;
      } else {
        title = thumb.title_en;
      }
      return title;
    };

    return (
      <div className="crowdfunding-thumb">
        <div
          className="bg-image"
          style={{
            // eslint-disable-next-line max-len
            backgroundImage: thumb.images.length > 0 ? `url('${thumb.images[0].image}?width=${boxSize.width}&height=${boxSize.height}')` : 'url("https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.jpg")',
          }}
          ref={this.thumbBox}
        >
          <div className="date">
            <div className={`_date ${status}`}>
              <div className="label-text">{labelStatus}</div>
              <div className="date-text">
                {date}
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <div className="col-sm-12">
            {thumb.institution && (
              <img
                src={thumb.institution.thumbs.thumb}
                alt={campaignTitle()}
              />
            )}
            {campaignTitle()}
          </div>
        </div>
        <div className="raised-percent">
          <Row>
            <Col xs={10}>
              <div className="raised-goal">
                <div
                  className="percent"
                  style={{ width: `${(thumb.contribution_raised / thumb.goal) * 100}%` }}
                />
              </div>
            </Col>
            <Col xs={2} className="percent-text">
              {`${Math.ceil((thumb.contribution_raised / thumb.goal) * 100)}%`}
            </Col>
          </Row>
        </div>
        <div className="raised">
          <Row>
            <Col xs={6} className="raised-label">
              {translations.raised}
            </Col>
            <Col xs={6} className="raised-value text-right">
              {convertedValue}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CrowdfundingPrivateThumb;

CrowdfundingPrivateThumb.propTypes = {
  thumb: PropTypes.object,
  translations: PropTypes.object,
  convertedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
