import React, { FC, useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './WizardHeader.types';
import Badge from '../../../elements/badge';
import Button from '../../../elements/button';

const WizardHeader: FC<Props> = ({
  closeWizard,
  title,
  subtitle,
  status,
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
}: Props): JSX.Element => {
  const [showSaved, setShowSaved] = useState<boolean>(false);
  const intl = useIntl();

  useEffect(() => {
    if (saved) {
      setShowSaved(true);
      setTimeout(() => {
        setShowSaved(false);
      }, 3000);
    }
  }, [saved]);

  return (
    <div className="wizard__header">
      <div className="wizard__header__image">
        <Button
          extraClass="link"
          onClick={closeWizard}
          text={<img src={`${cdnStaticUrl}/frontend/icons/icon-prev-page.svg`} alt="" />}
        />
      </div>
      <div className="wizard__header__title">
        <div>
          {subtitle && !editMode && (
            <span className="wizard__header__title__subtitle">{subtitle}</span>
          )}

          <h1>
            {editMode && (
              <input
                type="text"
                onChange={handleChangeTitle}
                value={title}
                onBlur={handleBlurTitle}
                placeholder={intl.formatMessage({ id: 'business.accelerator.entre.title' })}
                maxLength={32}
              />
            )}
            {!editMode && <>{title}</>}
            <Badge text={status} className="btn-badge" size="md" />
          </h1>
        </div>
      </div>
      <div className="wizard__header__buttons">
        {showSaved && (
          <span className="saved-status">
            <FormattedMessage id="business.changes.saved" />
            <img src={`${cdnStaticUrl}/frontend/icons/ic-save-status.svg`} alt="" />
          </span>
        )}
        <Button
          extraClass="dark"
          className="btn-save-close"
          onClick={handleDarkButton}
          text={buttonDarkText}
          disabled={disabledDarkButton}
        />
        <Button
          extraClass="primary-full"
          onClick={handlePrimaryButton}
          text={buttonPrimaryText}
          disabled={disabledPrimaryButton}
        />
      </div>
    </div>
  );
};

export default WizardHeader;