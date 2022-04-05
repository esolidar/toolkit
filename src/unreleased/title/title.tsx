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
  onClickGoBack,
  icon,
}: Props): JSX.Element => (
  <div className="component-title">
    {goBackUrl && (
      <a
        className="component-title__back client__primary--color client__primary--color-hover"
        href={goBackUrl}
      >
        <Icon iconClass="icon-chevron-left" />
        <FormattedMessage id="go.back" />
      </a>
    )}
    {onClickGoBack && (
      <button
        className="component-title__back client__primary--color client__primary--color-hover"
        onClick={() => onClickGoBack()}
        data-testid="component-title-button"
      >
        <Icon iconClass="icon-chevron-left" />
        <FormattedMessage id="go.back" />
      </button>
    )}
    <h1 className="component-title__h1">
      {title}
      {icon && (
        <>
          {icon.disabled ? (
            <span
              data-tip={icon.disabledText}
              className="component-title__icon--disabled"
              data-place={icon.tooltipPlacement || 'top'}
            >
              <Icon iconClass={icon.class} />
            </span>
          ) : (
            <a
              className="component-title__icon"
              href={icon.href}
              target={icon.target || '_self'}
              rel="noopener"
            >
              <Icon iconClass={icon.class} />
            </a>
          )}
        </>
      )}
    </h1>
    <span className="component-title__subtitle">{subtitle}</span>
    {supportingName && (
      <div className="component-title__supporting">
        <FormattedMessage id="supporting" />
        {supportingUrl && supportingName && (
          <a
            href={supportingUrl}
            title={supportingName}
            target="_blank"
            className="component-title__supporting-href client__primary--color-hover"
            rel="noreferrer"
          >
            {supportingName}
          </a>
        )}
        {!supportingUrl && supportingName && (
          <span className="component-title__supporting-name">{supportingName}</span>
        )}
      </div>
    )}
  </div>
);

export default Title;
