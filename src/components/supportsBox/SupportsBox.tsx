import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import Props from './interfaces';
import Button from '../../elements/button';
import slugify from '../../utils/slugify';

export const SupportsBox: FC<Props> = ({ campaign }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <Col md={12}>
      <Row className="supportsBox">
        <Col sm={1}>
          <img src={campaign.institution.thumbs.thumb} alt={campaign.institution.name} />
        </Col>
        <Col sm={7} className="recipient-box">
          <div className="recipient-label">
            <FormattedMessage id="crowdfunding.crowdfunding.helps" />
          </div>
          <div className="recipient-name">{campaign.institution.name}</div>
        </Col>
        <Col sm={4} className="text-center">
          <Button
            className="support-btn"
            extraClass="info"
            href={`/npo/detail/${campaign.institution.id}-${slugify(campaign.institution.name)}`}
            text={intl.formatMessage({
              id: 'crowdfunding.crowdfunding.institution.helps',
            })}
          />
        </Col>
      </Row>
    </Col>
  );
};

SupportsBox.defaultProps = {
  campaign: {
    institution: {
      thumbs: {
        thumb: '',
      },
      name: '',
      id: 0,
    },
  },
};

export default SupportsBox;
