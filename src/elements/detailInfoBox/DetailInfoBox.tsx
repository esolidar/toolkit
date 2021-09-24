import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Props from './DetailInfoBox.types';
import ProfileAvatar from '../../components/profileAvatar';
import ShareNetwork from '../../unreleased/shareNetwork';

const DetailInfoBox: FC<Props> = ({
  headerChildren,
  bodyChildren,
  className = '',
  organizedBy,
  shareNetwork,
  dataTestId = 'detail-info-box',
  dataTestIdHeader = 'detail-info-box-header',
  dataTestIdBody = 'detail-info-box-body',
  dataTestIdOrganized = 'detail-info-box-organized',
  dataTestIdFooter = 'detail-info-box-footer',
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className={`detail-info-box ${className}`} data-testid={dataTestId}>
      {headerChildren && (
        <div className="detail-info-box__header " data-testid={dataTestIdHeader}>
          {headerChildren}
        </div>
      )}
      {bodyChildren && (
        <div className="detail-info-box__body" data-testid={dataTestIdBody}>
          {bodyChildren}
        </div>
      )}
      {organizedBy && (
        <div className="detail-info-box__organized" data-testid={dataTestIdOrganized}>
          <p>{intl.formatMessage({ id: 'toolkit.organizedBy' })}</p>
          <ProfileAvatar {...organizedBy} isNameBold />
        </div>
      )}
      <div className="detail-info-box__footer" data-testid={dataTestIdFooter}>
        <ShareNetwork {...shareNetwork} blackIcons />
      </div>
    </div>
  );
};

export default DetailInfoBox;
