import React, { FC, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import ReactTooltip from 'react-tooltip';
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
  closeWizardText = 'toolkit.cancel.program.changes',
  showStartHereTooltip = false,
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
          placement="right"
          trigger="hover"
          className="esolidar-tooltip"
          overlay={
            <span>
              <FormattedMessage id={closeWizardText} />
            </span>
          }
          tooltipBodyChild={
            <Button
              extraClass="primary-full"
              dataTestId="btnCloseWizard"
              ghost
              theme="light"
              type="icon"
              onClick={() => closeWizard(false)}
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
              <Tooltip
                type="onboarding"
                placement="bottomLeft"
                trigger="focus"
                className="esolidar-tooltip"
                displayNone={!showStartHereTooltip}
                styleOverlay={{ maxWidth: '768px' }}
                overlay={
                  <span>
                    <FormattedMessage id="toolkit.start.here" />
                  </span>
                }
                tooltipBodyChild={
                  <input
                    id="wizard-header-title-input"
                    type="text"
                    onChange={handleChangeTitle}
                    value={title}
                    onBlur={handleBlurTitle}
                    placeholder={intl.formatMessage({
                      id: 'toolkit.wizard-header.title.placeholder',
                    })}
                    maxLength={32}
                    size={
                      title.length ||
                      intl.formatMessage({ id: 'toolkit.wizard-header.title.placeholder' }).length
                    }
                    autoComplete="off"
                  />
                }
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
          <div
            data-tip={
              disabledPrimaryButton
                ? intl.formatMessage({ id: 'toolkit.please.complete.steps' })
                : ''
            }
            data-place="bottom"
          >
            <Button
              withLoading={true}
              isLoading={isLoading}
              extraClass="primary-full"
              onClick={handlePrimaryButton}
              text={buttonPrimaryText}
              disabled={disabledPrimaryButton}
            />
          </div>
        )}
      </div>
      <ReactTooltip className="tooltip-component" />
    </div>
  );
};

export default WizardHeader;
