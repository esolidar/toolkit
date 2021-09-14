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
  dataTestId,
  dataTestIdHeader,
  dataTestIdBody,
  dataTestIdOrganized,
  dataTestIdFooter,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className={`detail-info-box ${className}`} data-testid={dataTestId || 'detail-info-box'}>
      {headerChildren && (
        <div
          className="detail-info-box__header "
          data-testid={dataTestIdHeader || 'detail-info-box-header'}
        >
          {headerChildren}
        </div>
      )}
      {bodyChildren && (
        <div
          className="detail-info-box__body"
          data-testid={dataTestIdBody || 'detail-info-box-body'}
        >
          {bodyChildren}
        </div>
      )}
      {organizedBy && (
        <div
          className="detail-info-box__organized"
          data-testid={dataTestIdOrganized || 'detail-info-box-organized'}
        >
          <p>{intl.formatMessage({ id: 'toolkit.organizedBy' })}</p>
          <ProfileAvatar {...organizedBy} />
        </div>
      )}
      <div
        className="detail-info-box__footer"
        data-testid={dataTestIdFooter || 'detail-info-box-footer'}
      >
        <ShareNetwork {...shareNetwork} />
      </div>
    </div>
  );
};

export default DetailInfoBox;
