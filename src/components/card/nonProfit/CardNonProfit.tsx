import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Props, { CardBodyProps } from './CardNonProfit.types';
import Card from '../Card';
import getEnvVar from '../../../utils/getEnvVar';
import Button from '../../../elements/button';

const urlNoImage: string = `${getEnvVar('CDN_STATIC_URL')}/frontend/assets/placeholders/image.svg`;

const CardNonProfit: FC<Props> = ({
  npo,
  handleClickThumb,
  handleClickDonate,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const { s3_cover_key: image, s3_image_key: logo, name, summary, location } = npo;

  return (
    <Card
      extraClass="cardNonProfit"
      logo={logo}
      clickThumb={handleClickThumb}
      image={image ? `${getEnvVar('CDN_UPLOADS_URL')}/${image}` : urlNoImage}
      title={name}
      middleContent={
        <Button
          fullWidth={true}
          extraClass="primary-full card-component__cardNonProfit-donation-button"
          onClick={handleClickDonate}
          dataTestId="npo-donate"
          text={intl.formatMessage({
            id: 'toolkit.donate',
          })}
        />
      }
      body={<CardBody summary={summary} location={location} />}
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
