import React, { FC } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Props from './WizardFooter.types';
import Button from '../../../elements/button';

const WizardFooter: FC<Props> = ({
  handleClickBack,
  handleClickNext,
  disableClickNext,
  totalPages,
  currentPage,
}: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <div className="wizard__footer">
      {currentPage !== 1 && (
        <Button
          extraClass="dark"
          onClick={handleClickBack}
          text={intl.formatMessage({ id: 'go.back' })}
        />
      )}
      <div className="wizard__footer__continue">
        <FormattedMessage id="paginator.steps" values={{ totalPages, currentPage }} />
        <Button
          extraClass="primary-full"
          onClick={handleClickNext}
          text={intl.formatMessage({ id: 'crowdfunding.donation.checkout.next' })}
          disabled={disableClickNext}
        />
      </div>
    </div>
  );
};

export default WizardFooter;
