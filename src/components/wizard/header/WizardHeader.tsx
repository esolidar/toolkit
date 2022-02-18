import React, { FC, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './WizardHeader.types';
import Badge from '../../../elements/badge';
import Button from '../../../elements/button';
import Icon from '../../../elements/icon';
import isDefined from '../../../utils/isDefined';
import cursorFocus from '../../../utils/cursorFocus';
import Tooltip from '../../../elements/tooltip';

const WizardHeader: FC<Props> = ({
  closeWizard,
  title,
  subtitle,
  buttonDarkText,
  buttonPrimaryText,
  cdnStaticUrl,
  saved,
  handleDarkButton,
  handlePrimaryButton,
  disabledDarkButton,
  disabledPrimaryButton,
  editMode = false,
  handleChangeTitle,
  handleBlurTitle,
  isLoading = false,
  isDraft = false,
  isLive = false,
}: Props): JSX.Element => {
  const intl = useIntl();

  useEffect(() => {
    if (editMode && title === '') {
      const element = document.getElementById('wizard-header-title-input');
      if (isDefined(element)) cursorFocus(element, 0);
    }
  }, []);

  return (
    <div className="wizard__header">
      {closeWizard && (
        <Tooltip
          overlay={
            <span>
              <FormattedMessage id="toolkit.cancel.program.changes" />
            </span>
          }
          placement="right"
          trigger="hover"
          className="esolidar-tooltip"
          tooltipBodyChild={
            <Button
              extraClass="primary-full"
              ghost
              theme="light"
              size="md"
              type="icon"
              onClick={closeWizard}
              icon={<Icon name="X" size="sm" />}
            />
          }
        />
      )}
      <div className="wizard__header__title">
        <div>
          {subtitle && !editMode && (
            <span className="wizard__header__title__subtitle">{subtitle}</span>
          )}

          <h1>
            {editMode && (
              <input
                id="wizard-header-title-input"
                type="text"
                onChange={handleChangeTitle}
                value={title}
                onBlur={handleBlurTitle}
                placeholder={intl.formatMessage({ id: 'business.accelerator.entre.title' })}
                maxLength={32}
                style={{ width: '100%', maxWidth: '502px' }}
              />
            )}
            {!editMode && <>{title}</>}
            <div className="status-badge">
              {isLive && <Badge text="live" className="btn-badge" extraClass="green" size="sm" />}
              {isDraft && <Badge text="draft" className="btn-badge" extraClass="white" size="sm" />}
            </div>
          </h1>
        </div>
      </div>
      <div className="wizard__header__buttons">
        {saved && (
          <span className="saved-status">
            <FormattedMessage id="business.changes.saved" />
            <img src={`${cdnStaticUrl}/frontend/icons/ic-save-status.svg`} alt="" />
          </span>
        )}
        <Button
          extraClass="dark"
          onClick={handleDarkButton}
          text={buttonDarkText}
          disabled={disabledDarkButton}
        />
        {buttonPrimaryText && (
          <Button
            withLoading={true}
            isLoading={isLoading}
            extraClass="primary-full"
            onClick={handlePrimaryButton}
            text={buttonPrimaryText}
            disabled={disabledPrimaryButton}
          />
        )}
      </div>
    </div>
  );
};

export default WizardHeader;
