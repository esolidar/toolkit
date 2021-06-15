import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import Props from './SupportBox.types';
import Button from '../../elements/button';
import slugify from '../../utils/slugify';

export const SupportBox: FC<Props> = ({ campaign }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <section className="supportBox d-flex">
      <img src={campaign.institution.thumbs.thumb} alt={campaign.institution.name} />
      <div className="recipient-box">
        <div className="recipient-label" data-testid="recipient-label">
          <FormattedMessage id="crowdfunding.crowdfunding.helps" />
        </div>
        <div className="recipient-name">{campaign.institution.name}</div>
      </div>
      <div className="text-center recipient-btn">
        <Button
          className="support-btn"
          extraClass="info"
          href={`/npo/detail/${campaign.institution.id}-${slugify(campaign.institution.name)}`}
          text={intl.formatMessage({
            id: 'crowdfunding.crowdfunding.institution.helps',
          })}
        />
      </div>
    </section>
  );
};

export default SupportBox;
