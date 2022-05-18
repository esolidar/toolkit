import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Props, { CardBodyProps } from './CardNonProfit.types';
import Card from '../Card';
import getEnvVar from '../../../utils/getEnvVar';
import Button from '../../../elements/button';

const CardNonProfit: FC<Props> = ({ npo, onClickThumb, onClickDonate }: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const { s3_cover_key: image, s3_image_key: logo, name, location, short_bio: shortBio } = npo;

  let summaryText = '';

  switch (intl.locale) {
    case 'pt':
      summaryText = shortBio?.pt || '';
      break;

    case 'br':
      summaryText = shortBio?.br || '';
      break;

    default:
      summaryText = shortBio?.en || '';
      break;
  }

  return (
    <Card
      className="cardNonProfit"
      logo={logo}
      clickThumb={onClickThumb}
      image={image ? `${getEnvVar('CDN_UPLOADS_URL')}/${image}` : null}
      title={name}
      middleContent={
        <Button
          fullWidth={true}
          extraClass="primary-full card-component__cardNonProfit-donation-button"
          onClick={e => {
            e.stopPropagation();
            onClickDonate();
          }}
          dataTestId="npo-donate"
          text={intl.formatMessage({
            id: 'toolkit.donate',
          })}
        />
      }
      body={<CardBody summary={summaryText} location={location} />}
    />
  );
};
export default CardNonProfit;

const CardBody: FC<CardBodyProps> = ({ summary, location }: CardBodyProps): JSX.Element => {
  const intl: IntlShape = useIntl();

  return (
    <div className="card-component__cardNonProfit-body">
      <div className="card-component__cardNonProfit-body-location-label">
        {location && (
          <>
            {intl.formatMessage({
              id: 'toolkit.location',
            })}
          </>
        )}
      </div>
      <div className="card-component__cardNonProfit-body-location">{location}</div>
      <div className="card-component__cardNonProfit-body-summary">{summary}</div>
    </div>
  );
};
