import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './title.types';
import Icon from '../../components/icon';

const Title: FC<Props> = ({
  title,
  supportingName,
  supportingUrl,
  goBackUrl,
}: Props): JSX.Element => (
  <div className="component-detail-title">
    {goBackUrl && (
      <a className="detail-title-back" href={goBackUrl}>
        <Icon iconClass="icon-cheveron-left" />
        <FormattedMessage id="go.back" />
      </a>
    )}
    <h1 className="detail-title-h1">{title}</h1>
    {supportingName && (
      <div className="detail-title-supporting">
        <FormattedMessage id="supporting" />
        {supportingUrl && supportingName && (
          <a
            href={supportingUrl}
            title={supportingName}
            target="_blank"
            className="detail-title-supporting-href"
            rel="noreferrer"
          >
            {supportingName}
          </a>
        )}
        {!supportingUrl && supportingName && (
          <span className="detail-title-supporting-name">{supportingName}</span>
        )}
      </div>
    )}
  </div>
);

export default Title;