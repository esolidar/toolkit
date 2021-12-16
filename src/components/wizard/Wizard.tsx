import React, { FC, useEffect, useCallback } from 'react';
import WizardHeader from './header';
import WizardPaginator from './paginator';
import WizardFooter from './footer';
import Props from './Wizard.types';
import Viewport from '../viewport';

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
  editMode,
  handleChangeTitle,
  handleBlurTitle,
  buttonNextText,
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
    document.getElementsByClassName('wizard')[0].addEventListener('scroll', handleNavigation, true);
    return () =>
      document.getElementsByClassName('wizard')[0].removeEventListener('scroll', handleNavigation);
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
          editMode={editMode}
          handleChangeTitle={handleChangeTitle}
          handleBlurTitle={handleBlurTitle}
        />
        <WizardPaginator
          pages={pages}
          cdnStaticUrl={cdnStaticUrl}
          handleChangeTab={handleChangeTab}
        />
        <Viewport className="wizard__body">{children}</Viewport>
        <Viewport>
          <WizardFooter
            buttonNextText={buttonNextText}
            handleClickBack={handleClickBack}
            handleClickNext={handleClickNext}
            totalPages={totalPages}
            currentPage={currentPage}
            disableClickNext={disableClickNext}
          />
        </Viewport>
      </div>
    </div>
  );
};

export default Wizard;
