import React, { FC } from 'react';
import WizardHeader from './header';
import WizardPaginator from './paginator';
import WizardFooter from './footer';
import Props from './Wizard.types';

const Wizard: FC<Props> = ({
  showWizard,
  closeWizard,
  title,
  subtitle,
  status,
  buttonDarkText,
  buttonPrimaryText,
  cdnStaticUrl,
  saved,
  pages,
  handleDarkButton,
  handlePrimaryButton,
  disabledDarkButton,
  disabledPrimaryButton,
  handleClickBack,
  handleClickNext,
  totalPages,
  currentPage,
  disableClickNext,
  children,
}: Props): JSX.Element => {
  return (
    <div className={`wizard ${showWizard ? 'open' : 'closed'} `}>
      <WizardHeader
        closeWizard={closeWizard}
        title={title}
        subtitle={subtitle}
        status={status}
        buttonDarkText={buttonDarkText}
        buttonPrimaryText={buttonPrimaryText}
        cdnStaticUrl={cdnStaticUrl}
        saved={saved}
        handleDarkButton={handleDarkButton}
        handlePrimaryButton={handlePrimaryButton}
        disabledDarkButton={disabledDarkButton}
        disabledPrimaryButton={disabledPrimaryButton}
      />
      <div>
        <WizardPaginator pages={pages} cdnStaticUrl={cdnStaticUrl} />
      </div>
      <div className="container wizard__body">{children}</div>
      <div className="container">
        <WizardFooter
          handleClickBack={handleClickBack}
          handleClickNext={handleClickNext}
          totalPages={totalPages}
          currentPage={currentPage}
          disableClickNext={disableClickNext}
        />
      </div>
    </div>
  );
};

export default Wizard;
