import React, { FC, useEffect, useCallback } from 'react';
import WizardHeader from './header';
import WizardPaginator from './paginator';
import WizardFooter from './footer';
import Props from './Wizard.types';
// import isDefined from '../../utils/isDefined';

let y = window.scrollY;

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
  handleChangeTab,
}: Props): JSX.Element => {
  const handleNavigation = useCallback(
    e => {
      const { scrollTop } = e.target;
      const paginatorDiv = document.getElementsByClassName('wizard__paginator')[0];
      const headerDiv = document.getElementsByClassName('wizard__header')[0];
      if (y > scrollTop) {
        paginatorDiv.classList.remove('fix-on-scrool-down');
        headerDiv.classList.remove('fix-on-scrool-down');
      } else if (y < scrollTop) {
        paginatorDiv.classList.add('fix-on-scrool-down');
        headerDiv.classList.add('fix-on-scrool-down');
      }
      y = scrollTop;
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation, true);
    return () => window.removeEventListener('scroll', handleNavigation);
  }, []);

  return (
    <div className={`wizard ${showWizard ? 'open' : 'closed'} `}>
      <div className="wizard-container">
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
        <WizardPaginator
          pages={pages}
          cdnStaticUrl={cdnStaticUrl}
          handleChangeTab={handleChangeTab}
        />
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
    </div>
  );
};

export default Wizard;
