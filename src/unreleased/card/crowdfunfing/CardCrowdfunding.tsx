import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import ProgressBar from '../../progressBar/ProgressBar';
import Props from './CardCrowdfunding.types';
import Card from '../Card';
import Countdown from '../../countdown/Countdown';
import slugify from '../../../utils/slugify';
import { cdnUploadsUrl, cdnStaticUrl } from '../../../constants/env';

const CardCrowdfunding: FC<Props> = ({
  crowdfunding = null,
  campaign = null,
  clickThumb,
  communityUrl,
  lang = 'en',
}: Props): JSX.Element => {
  const getImage = () => {
    const item = crowdfunding || campaign;
    if (item.images.length > 0) {
      if (crowdfunding) return `${cdnUploadsUrl}/${item.images[0].image}`;
      if (campaign) return item.images[0].image;
    }
    return `${cdnStaticUrl}/frontend/assets/no-image.jpg`;
  };

  const campaignTitle = () => {
    let title;
    if (crowdfunding) {
      if (lang === 'pt' || lang === 'br') {
        title = crowdfunding.title;
      } else if (!crowdfunding.title_en) {
        title = crowdfunding.title;
      } else {
        title = crowdfunding.title_en;
      }
      return title;
    }

    return campaign.title;
  };

  const renderSupporting = () => {
    let supportUrl = null;
    let supportTarget = '_self';
    let supportRecipient;
    if (campaign)
      supportRecipient =
        campaign?.recipient_visible === 1 ? campaign.employee_recipient.name : null;

    if (crowdfunding) {
      if (crowdfunding.institution) {
        supportRecipient = crowdfunding?.institution.name;
        supportUrl = `${communityUrl}npo/detail/${crowdfunding.institution.id}-${slugify(
          crowdfunding.institution.name
        )}`;
        supportTarget = '_blanc';
      }

      if (crowdfunding.projects.length > 0) {
        supportRecipient = crowdfunding?.projects[0].title;
        supportUrl = `${communityUrl}npo/detail/${crowdfunding?.projects[0].id}-${slugify(
          crowdfunding?.projects[0].title
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
      clickThumb={clickThumb}
      image={getImage()}
      title={campaignTitle()}
      countdown={
        <Countdown
          startDate={crowdfunding?.start_date || campaign?.start_date}
          endDate={crowdfunding?.end_date || campaign?.end_date}
          mode="timer-left"
        />
      }
      body={
        <ProgressBar
          contributesSum={
            crowdfunding?.contributes_sum === 0 || crowdfunding?.contributes_sum
              ? crowdfunding?.contributes_sum
              : campaign?.contribution_raised
          }
          currency={crowdfunding?.currency?.small || campaign?.currency?.small}
          goal={crowdfunding?.goal || campaign?.goal}
          showLabel
          showRaisedOf
        />
      }
      support={renderSupporting()}
    />
  );
};
export default CardCrowdfunding;
