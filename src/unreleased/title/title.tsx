import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './title.types';
import Icon from '../../components/icon';
import IconElements from '../../elements/icon';
import isDefined from '../../utils/isDefined';

const Title: FC<Props> = ({
  title,
  subtitle,
  supportingName,
  supportingUrl,
  goBackUrl,
  onClickGoBack,
  icon,
  rating,
  showRating = false,
}: Props): JSX.Element => {
  const intl = useIntl();

  const hasRating = isDefined(rating) && rating > 0;
  const formattedRating = hasRating
    ? `${rating} / 5`
    : intl.formatMessage({ id: 'toolkit.card-project-detail.review.placeholder' });

  return (
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
      <div className="component-title__main">
        <h1 className="component-title__main--h1">{title}</h1>
        {showRating && (
          <div className="component-title__main--rating">
            {hasRating && <IconElements name="StarBold" />}
            <p className={`${hasRating && 'has-rating'}`}>{formattedRating}</p>
          </div>
        )}
        {icon && (
          <>
            {icon.disabled ? (
              <span
                data-tip={icon.disabledText}
                className="component-title__main--icon--disabled"
                data-place={icon.tooltipPlacement || 'top'}
              >
                <Icon iconClass={icon.class} />
              </span>
            ) : (
              <a
                className="component-title__main--icon"
                href={icon.href}
                target={icon.target || '_self'}
                rel="noopener"
              >
                <Icon iconClass={icon.class} />
              </a>
            )}
          </>
        )}
      </div>
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
};

export default Title;
