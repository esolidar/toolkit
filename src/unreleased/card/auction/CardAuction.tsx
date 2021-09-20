import React, { FC } from 'react';
import { FormattedMessage, FormattedNumber, IntlShape, useIntl } from 'react-intl';
import isEmpty from '../../../utils/isEmpty';
import Props from './CardAuction.types';
import Card from '../Card';
import Countdown from '../../countdown/Countdown';
import slugify from '../../../utils/slugify';

const CardAuction: FC<Props> = ({
  auction = null,
  clickThumb,
  communityUrl,
  currency,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const auctionTitle = () => {
    let title = '';
    if (auction) {
      if (intl.locale === 'pt' || intl.locale === 'br') {
        title = auction.title;
      } else if (!auction.title_en) {
        title = auction.title;
      } else {
        title = auction.title_en;
      }
      return title;
    }
    return '';
  };

  const renderSupporting = () => {
    let supportUrl = null;
    let supportTarget = '_self';
    let supportRecipient;

    if (auction) {
      if (auction.recipient?.institution) {
        supportRecipient = auction.recipient.institution.name;
        supportUrl = `${communityUrl}npo/detail/${auction.recipient.institution_id}-${slugify(
          auction.recipient.institution.name
        )}`;
        supportTarget = '_blanc';
      }

      if (auction.project && !isEmpty(auction.project)) {
        supportRecipient = auction.project.title;
        supportUrl = `${intl.locale}/projects/detail/${auction.project.id}-${slugify(
          auction.project.title
        )}`;
      }
    }

    return {
      url: supportUrl,
      name: supportRecipient,
      label: <FormattedMessage id="needs.funds" />,
      target: supportTarget,
    };
  };

  return (
    <Card
      isPrivate={auction.private === 1}
      clickThumb={clickThumb}
      image={auction.images && auction.images.length > 0 ? auction.images[0].thumbs.detail : ''}
      title={auctionTitle()}
      countdown={
        <Countdown startDate={auction.dateStart} endDate={auction.dateLimit} mode="timer-count" />
      }
      body={
        <div>
          <div className="card-auction-subtitle">
            {!auction.last_bid && (
              <FormattedMessage id="homepage.toolsbox.charityAuctions.startBid" />
            )}
            {!!auction.last_bid && auction.bids_count > 0 && (
              <FormattedMessage
                id="toolkit.auction.last.bid"
                values={{ value: auction.bids_count }}
              />
            )}
          </div>
          <div className="card-auction-bid">
            <FormattedNumber
              value={auction.last_bid ? auction.last_bid.value : auction.bid_start}
              style="currency"
              currency={currency}
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </div>
        </div>
      }
      support={renderSupporting()}
    />
  );
};
export default CardAuction;
