import React, { FC } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Props from './WizardFooter.types';
import Button from '../../../elements/button';
import PAGES from '../../../constants/pages';

const WizardFooter: FC<Props> = ({
  buttonNextText,
  handleClickBack,
  handleClickNext,
  disableClickNext,
  currentPage,
  isLoading = false,
  handleDarkButton,
  buttonDarkText,
  disabledDarkButton,
}: Props): JSX.Element => {
  const intl = useIntl();
  const pages = Object.keys(PAGES);
  const current: number = pages.findIndex(i => i === currentPage) + 1;

  return (
    <div className="wizard__footer">
      {current !== 1 && (
        <Button
          extraClass="dark"
          onClick={handleClickBack}
          text={intl.formatMessage({ id: 'go.back' })}
        />
      )}
      <div className="wizard__footer__continue">
        <div className="label-paginator-steps">
          <FormattedMessage
            id="paginator.steps"
            values={{ totalPages: pages.length, currentPage: current }}
          />
        </div>
        <Button
          extraClass="dark"
          onClick={handleDarkButton}
          text={buttonDarkText}
          disabled={disabledDarkButton}
        />
        <Button
          withLoading={true}
          isLoading={isLoading}
          extraClass="primary-full"
          onClick={handleClickNext}
          text={buttonNextText}
          disabled={disableClickNext}
        />
      </div>
    </div>
  );
};

export default WizardFooter;
