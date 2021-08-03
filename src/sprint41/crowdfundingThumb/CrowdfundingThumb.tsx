import React, { FC, useEffect } from 'react';
import Props from './CrowdfundingThumb.types';
import { cdnUploadsUrl, cdnStaticUrl } from '../../constants/env';
import ProgressBar from '../progressBar/ProgressBar';
import Countdown from '../../components/countdown/Countdown';
import { FormattedMessage } from 'react-intl';

const CrowdfundingThumb: FC<Props> = ({ crowdfunding }: Props): JSX.Element => {
  useEffect(() => {}, []);

  const campaignTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = crowdfunding.title;
    } else if (!crowdfunding.title_en) {
      title = crowdfunding.title;
    } else {
      title = crowdfunding.title_en;
    }
    return title;
  };

  const supporting = () => {
    let support = '';

    if (crowdfunding.projects) support = crowdfunding.projects[0].title;
    if (crowdfunding.institution) support = crowdfunding.institution.name;

    return <a href="#">{support}</a>;
  };

  return (
    <div className="crowdfunding-thumb-component">
      <div className="crowdfunding-thumb-component-image">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              crowdfunding.images.length > 0
                ? `url('${cdnUploadsUrl}/${crowdfunding.images[0].image}')`
                : `url({'${cdnStaticUrl}/frontend/assets/no-image.jpg')`,
          }}
        />
      </div>
      <div className="crowdfunding-thumb-component-body">
        <div className="crowdfunding-thumb-component-countdown">
          <Countdown
            dataTestId="count"
            endDate="2021/08/05 14:45:46"
            onExpiry={() => {}}
            onStart={() => {}}
            startDate="2021/08/04 14:45:46"
            thumb={false}
          />
        </div>
        <div className="crowdfunding-thumb-component-title" title={campaignTitle()}>
          {campaignTitle()}
        </div>
        <div className="crowdfunding-thumb-component-progressbar">
          <ProgressBar
            contributesSum={crowdfunding.contributes_sum}
            currency={crowdfunding.currency.small}
            goal={crowdfunding.goal}
            showLabel
            showRaisedOf
          />
        </div>
        <div className="crowdfunding-thumb-component-support">
          <div>
            <FormattedMessage id="supporting" />
          </div>
          {supporting()}
        </div>
      </div>
    </div>
  );
};
export default CrowdfundingThumb;
