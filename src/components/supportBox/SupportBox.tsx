import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './SupportBox.types';
import Button from '../../elements/button';
import slugify from '../../utils/slugify/slugify';

const SupportBox: FC<Props> = ({ campaign, communityUrl = '/' }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <section className="supportBox">
      <img src={campaign.institution.thumbs.thumb} alt={campaign.institution.name} />
      <div className="recipient-box">
        <div className="recipient-label" data-testid="recipient-label">
          <FormattedMessage id="crowdfunding.crowdfunding.helps" />
        </div>
        <div className="recipient-name">{campaign.institution.name}</div>
      </div>
      <div className="recipient-btn">
        <Button
          className="support-btn"
          href={`${communityUrl}npo/detail/${campaign.institution.id}-${slugify(
            campaign.institution.name
          )}`}
          text={intl.formatMessage({ id: 'crowdfunding.crowdfunding.institution.helps' })}
          target="_blank"
        />
      </div>
    </section>
  );
};

export default SupportBox;
