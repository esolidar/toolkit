import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { cdnStaticUrl } from '../../../constants/env';

const RequestDetailInfo = ({ request, volunteeringType }) => (
  <div className="request-detail">
    <div className="box col-sm-12">
      <h3>
        <FormattedMessage id="request.detail.project.about" defaultMessage="About the request" />
      </h3>
      <h4>
        <FormattedMessage
          id="request.detail.project.description"
          defaultMessage="Overall description"
        />
      </h4>
      {request.about && (
        <p>
          {request.about.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </p>
      )}
      <h4>
        <FormattedMessage
          id="request.detail.project.detailed.description"
          defaultMessage="Detailed description"
        />
      </h4>
      {request.detail && (
        <p>
          {request.detail.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </p>
      )}
      {request.goals && (
        <h4>
          <FormattedMessage id="request.detail.project.goals" defaultMessage="Goals" />
        </h4>
      )}
      {request.goals && (
        <p>
          {request.goals.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </p>
      )}
      <h4>
        <FormattedMessage id="request.detail.project.requirements" defaultMessage="Requirements" />
      </h4>
      <p>{request.requirements}</p>
      <hr className="separator-blue" />
      <h3>
        <FormattedMessage id="request.detail.project.needs" defaultMessage="This request needs" />
      </h3>
      {request.volunteering === 1 && (
        <div>
          <h4>
            <img
              alt="Volunteering"
              src={`${cdnStaticUrl}/frontend/icons/ic-request-volunteering-blue.svg`}
            />
            <FormattedMessage
              id="request.detail.project.volunteering"
              defaultMessage="Volunteering"
            />
          </h4>
          <ul className="arrow-list">
            <li>
              <FormattedMessage
                id="request.detail.project.volunteering.duration"
                defaultMessage="{value, number} {value, plural, one {hour} other {hours}}"
                values={{ value: request.volunteering_duration }}
              />
              &nbsp;
              {volunteeringType !== null && volunteeringType}
            </li>
            <li>
              <FormattedMessage
                id="request.detail.project.volunteering.volunteers"
                defaultMessage="{value_min}-{value_max} volunteers"
                values={{
                  value_min: request.volunteering_min_volunteers,
                  value_max: request.volunteering_max_volunteers,
                }}
              />
            </li>
            {request.volunteering_detail && (
              <li>
                {request.volunteering_detail.split('\n').map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))}
              </li>
            )}
          </ul>
        </div>
      )}
      {request.donation === 1 && (
        <div>
          <h4>
            <img
              alt="Donation"
              src={`${cdnStaticUrl}/frontend/icons/ic-request-donation-blue.png`}
            />
            <FormattedMessage id="request.detail.project.donations" defaultMessage="Donations" />
          </h4>
          <ul className="arrow-list">
            <li>
              <FormattedNumber
                value={request.donation_value}
                style="currency"
                currency={request.institution.currency.small}
              />
            </li>
            <li>
              {request.donation_about && (
                <p>
                  {request.donation_about.split('\n').map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </li>
          </ul>
        </div>
      )}
      {request.goods === 1 && (
        <div>
          <h4>
            <img alt="Goods" src={`${cdnStaticUrl}/frontend/icons/ic-request-goods-blue.png`} />
            <FormattedMessage id="request.detail.project.goods" defaultMessage="Goods" />
          </h4>
          <ul className="arrow-list">
            <li>
              {request.goods_charity_needs && (
                <p>
                  {request.goods_charity_needs.split('\n').map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </li>
          </ul>
        </div>
      )}
      {request.partners && <hr className="separator-blue" />}
      {request.partners && (
        <h3>
          <FormattedMessage
            id="request.detail.project.partners"
            defaultMessage="Partners and sponsors"
          />
        </h3>
      )}
      <p>{request.partners}</p>
      {request.other_platforms && <hr className="separator-blue" />}
      {request.other_platforms && (
        <h3>
          <FormattedMessage
            id="request.detail.project.media.promotion"
            defaultMessage="Media and promotion"
          />
        </h3>
      )}
      {request.other_platforms && (
        <h4>
          <FormattedMessage
            id="request.detail.project.other.promotion"
            defaultMessage="Other means of promotion"
          />
        </h4>
      )}
      <p>{request.other_platforms}</p>
    </div>
  </div>
);

RequestDetailInfo.propTypes = {
  request: PropTypes.shape({
    about: PropTypes.string,
    detail: PropTypes.string,
    donation: PropTypes.number,
    donation_about: PropTypes.string,
    donation_value: PropTypes.number,
    goals: PropTypes.string,
    goods: PropTypes.number,
    goods_charity_needs: PropTypes.string,
    institution: PropTypes.shape({
      currency: PropTypes.shape({
        small: PropTypes.string,
      }),
    }),
    other_platforms: PropTypes.string,
    partners: PropTypes.string,
    requirements: PropTypes.string,
    volunteering: PropTypes.number,
    volunteering_detail: PropTypes.string,
    volunteering_duration: PropTypes.number,
    volunteering_max_volunteers: PropTypes.number,
    volunteering_min_volunteers: PropTypes.number,
  }),
  volunteeringType: PropTypes.string,
};

export default RequestDetailInfo;
