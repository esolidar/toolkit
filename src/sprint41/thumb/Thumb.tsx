import React, { FC, useEffect } from 'react';
import Props from './Thumb.types';
import { cdnUploadsUrl, cdnStaticUrl } from '../../constants/env';
import ProgressBar from '../progressBar/ProgressBar';
import Countdown from '../countdown/Countdown';
import { FormattedMessage } from 'react-intl';
import slugify from '../../utils/slugify';

const Thumb: FC<Props> = ({
  crowdfunding,
  campaign,
  auction,
  clickThumb,
  communityUrl,
  type,
}: Props): JSX.Element => {
  useEffect(() => {}, []);

  let item;
  if (type === 'crowdfunding') {
    item = crowdfunding;
  } else if (type === 'campaign') {
    item = campaign;
  } else {
    item = auction;
  }

  const campaignTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = item.title;
    } else if (!item.title_en) {
      title = item.title;
    } else {
      title = item.title_en;
    }
    return title;
  };

  const supporting = () => {
    if (type === 'campaign' || type === 'crowdfunding') {
      if (item.projects) {
        return (
          <a
            onClick={e => {
              e.stopPropagation();
            }}
            href={`/projects/detail/${item.projects[0].id}-${item.projects[0].title}`}
            title={item.projects[0].title}
          >
            {item.projects[0].title}
          </a>
        );
      }
      if (item.institution) {
        return (
          <a
            onClick={e => {
              e.stopPropagation();
            }}
            href={`${communityUrl}npo/detail/${item.institution.id}-${slugify(
              item.institution.name
            )}`}
            target="_blanc"
            title={item.institution.name}
          >
            {item.institution.name}
          </a>
        );
      }
      if (item.employee_recipient) {
        return (
          <div className="receipient-name" title={item.employee_recipient.name}>
            {item.employee_recipient.name}
          </div>
        );
      }
    } else {
      debugger;
      // if (item.project) {
      //   return (
      //     <a
      //       onClick={e => {
      //         e.stopPropagation();
      //       }}
      //       href={`/projects/detail/${item.projects.id}-${item.projects.title}`}
      //       title={item.projects.title}
      //     >
      //       {item.projects.title}
      //     </a>
      //   );
      // }
      if (item.user.institution) {
        return (
          <a
            onClick={e => {
              e.stopPropagation();
            }}
            href={`${communityUrl}npo/detail/${item.user.institution.id}-${slugify(
              item.user.institution.name
            )}`}
            target="_blanc"
            title={item.user.institution.name}
          >
            {item.user.institution.name}
          </a>
        );
      }
    }
  };

  const getImage = () => {
    if (item.images.length > 0) {
      if (type === 'auction') return item.images[0].image_name;
      if (type === 'crowdfunding' || type === 'campaign')
        return `${cdnUploadsUrl}/${item.images[0].image}`;
    }
    return `${cdnStaticUrl}/frontend/assets/no-image.jpg`;
  };

  return (
    <div className="thumb-component" onClick={() => clickThumb()} tabIndex={1}>
      <div className="thumb-component-image">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url('${getImage()}`,
          }}
        />
      </div>
      <div className="thumb-component-body">
        <div className="thumb-component-countdown">
          {(type === 'campaign' || type === 'crowdfunding') && (
            <Countdown endDate={item.start_date} startDate={item.end_date} mode="crowdfunding" />
          )}
          {type === 'auction' && (
            <Countdown endDate={item.dateLimit} startDate={item.dateStart} mode="auction" />
          )}
        </div>
        <div className="thumb-component-title" title={campaignTitle()}>
          {campaignTitle()}
        </div>
        <div className="thumb-component-body-middle">
          {(type === 'campaign' || type === 'crowdfunding') && (
            <div className="thumb-component-progressbar">
              <ProgressBar
                contributesSum={item.contributes_sum || item.contribution_raised}
                currency={item.currency.small}
                goal={item.goal}
                showLabel
                showRaisedOf
              />
            </div>
          )}
        </div>
        <div className="thumb-component-support">
          <div>
            <FormattedMessage id="supporting" />
          </div>
          {supporting()}
        </div>
      </div>
    </div>
  );
};
export default Thumb;
