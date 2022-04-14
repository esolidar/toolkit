import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import WizardHeader from '../../elements/fullScreenModal/headers/wizard/Header';
import WizardPaginator from './paginator';
import WizardFooter from './footer';
import Props from './Wizard.types';
import Viewport from '../viewport';
import FullScreenModal from '../../elements/fullScreenModal/FullScreenModal';

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
  pageStatus,
  showPaginator = true,
  showFooter = true,
}: Props): JSX.Element => {
  const handleNavigation = useCallback(
    e => {
      const { scrollTop, id } = e.target;
      if (id === 'wizard') {
        const paginatorDiv = document.getElementsByClassName(
          'wizard__paginator'
        )[0] as HTMLBodyElement;
        const headerDiv = document.getElementsByClassName('wizard__header')[0] as HTMLBodyElement;
        if (paginatorDiv) {
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
        }
        y = scrollTop;
      }
    },
    [y]
  );

  return (
    <FullScreenModal showModal={showWizard}>
      <div className="wizard" id="wizard" onScroll={handleNavigation}>
        <div
          className={classNames(
            { 'wizard-container-simple': !showPaginator },
            { 'wizard-container': showPaginator }
          )}
        >
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
          {showPaginator && (
            <WizardPaginator
              pages={pages}
              pageStatus={pageStatus}
              handleChangeTab={handleChangeTab}
            />
          )}
          <Viewport
            className={classNames(
              { 'wizard__body-with-paginator': showPaginator },
              { wizard__body: !showPaginator }
            )}
          >
            {children}
          </Viewport>
          {showFooter && (
            <Viewport>
              <WizardFooter
                disabledDarkButton={disabledDarkButton}
                buttonDarkText={buttonDarkText}
                handleDarkButton={handleDarkButton}
                buttonNextText={buttonNextText}
                handleClickBack={handleClickBack}
                handleClickNext={handleClickNext}
                totalPages={totalPages}
                currentPage={currentPage}
                disableClickNext={disableClickNext}
                isLoading={isLoading}
              />
            </Viewport>
          )}
        </div>
      </div>
    </FullScreenModal>
  );
};

export default Wizard;
