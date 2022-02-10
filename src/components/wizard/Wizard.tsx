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
  isLoading,
  isDraft = false,
  isLive = false,
}: Props): JSX.Element => {
  const handleNavigation = useCallback(
    e => {
      const { scrollTop, id } = e.target;
      if (id === 'wizard') {
        const paginatorDiv = document.getElementsByClassName(
          'wizard__paginator'
        )[0] as HTMLBodyElement;
        const headerDiv = document.getElementsByClassName('wizard__header')[0] as HTMLBodyElement;

        if (y > scrollTop) {
          paginatorDiv.classList.remove('fix-on-scrool-down');
          headerDiv.classList.remove('fix-on-scrool-down');
          paginatorDiv.setAttribute('style', `top: ${headerDiv.offsetHeight}px`);
        } else if (y < scrollTop) {
          paginatorDiv.classList.add('fix-on-scrool-down');
          headerDiv.classList.add('fix-on-scrool-down');
          paginatorDiv.setAttribute(
            'style',
            `top: ${headerDiv.offsetHeight - paginatorDiv.offsetHeight + 4}px`
          );
        }
        y = scrollTop;
      }
    },
    [y]
  );

  useEffect(() => {
    const wizard = document.getElementsByClassName('wizard')[0];
    wizard.addEventListener('scroll', handleNavigation, true);
    return () => {
      if (wizard) return wizard.removeEventListener('scroll', handleNavigation);
    };
  }, []);

  return (
    <div className={`wizard ${showWizard ? 'open' : 'closed'} `} id="wizard">
      <div className="wizard-container">
        <WizardHeader
          closeWizard={closeWizard}
          title={title}
          subtitle={subtitle}
          isDraft={isDraft}
          isLive={isLive}
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
          isLoading={isLoading}
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
            isLoading={isLoading}
          />
        </Viewport>
      </div>
    </div>
  );
};

export default Wizard;
