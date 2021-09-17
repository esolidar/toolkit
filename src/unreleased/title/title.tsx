import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './title.types';
import Icon from '../../components/icon';

const Title: FC<Props> = ({
  title,
  subtitle,
  supportingName,
  supportingUrl,
  goBackUrl,
}: Props): JSX.Element => (
  <div className="component-title">
    {goBackUrl && (
      <a className="component-title-back" href={goBackUrl}>
        <Icon iconClass="icon-chevron-left" />
        <FormattedMessage id="go.back" />
      </a>
    )}
    <h1 className="component-title-h1">{title}</h1>
    <span className="component-title-subtitle">{subtitle}</span>
    {supportingName && (
      <div className="component-title-supporting">
        <FormattedMessage id="supporting" />
        {supportingUrl && supportingName && (
          <a
            href={supportingUrl}
            title={supportingName}
            target="_blank"
            className="component-title-supporting-href"
            rel="noreferrer"
          >
            {supportingName}
          </a>
        )}
        {!supportingUrl && supportingName && (
          <span className="component-title-supporting-name">{supportingName}</span>
        )}
      </div>
    )}
  </div>
);

export default Title;
