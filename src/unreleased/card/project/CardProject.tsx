import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { cdnStaticUrl } from '../../../constants/env';
import Props from './CardProject.types';
import Card from '../Card';
import Ods from '../../../interfaces/ods.types';
import getStatus from '../../../utils/getStatus';
import { PROJECT } from '../../../constants/status';

const CardProject: FC<Props> = ({
  project,
  clickThumb,
  showStatus = true,
  cdnUploadsUrl = 'https://cdn.testesolidar.com',
  dropdownItems = [],
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const support = {
    name: project.as_company === 1 ? project.whitelabel_config.company.name : project.user?.name,
    label: intl.formatMessage({ id: 'toolkit.organizedBy' }),
    revert: true,
  };

  return (
    <Card
      clickThumb={clickThumb}
      image={
        project.images && project.images.length > 0
          ? `${cdnUploadsUrl}/${project.images[0].image}`
          : ''
      }
      countdown={<Status project={project} />}
      showCountdown={showStatus}
      title={project.title}
      body={<Body ods={project.ods} />}
      support={support}
      average={project.review_average}
      dropdownItems={dropdownItems}
    />
  );
};
export default CardProject;

interface Project {
  status: string;
  // eslint-disable-next-line camelcase
  review_average: number;
}
interface CountdownProps {
  project: Project;
}

const Status = ({ project }: CountdownProps) => {
  const intl: IntlShape = useIntl();
  let newStatus = project.status;
  if (newStatus === PROJECT.pending && project.review_average) {
    newStatus = PROJECT.reviewed;
  }

  return <div className="card-project-status">{getStatus(newStatus, intl.formatMessage)}</div>;
};

interface BodyProps {
  ods: Ods[];
}

const Body = ({ ods }: BodyProps) => {
  const lang = localStorage.getItem('lang') || 'en';
  return (
    <div className="project__ods">
      {ods.map((item, i) => {
        if (i < 3) {
          return (
            <img
              key={item.id}
              src={`${cdnStaticUrl}/frontend/assets/ods/${lang}/ods-${item.id}.png`}
              alt={`ods-${item.id}`}
            />
          );
        }
        if (i === 4)
          return (
            <div className="more">
              <span>{`+${JSON.stringify(ods.length - 3)}`}</span>
            </div>
          );
      })}
    </div>
  );
};
