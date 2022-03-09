import React, { useState, useEffect } from 'react';
import FullScreenModal from '../../elements/fullScreenModal/FullScreenModal';
import Footer from './Footer';
import Page from './Page';
import Props from './WizardOrdered.types';

const WizardOrdered = ({
  showWizard,
  handleCloseWizard,
  pages,
  header,
  validForm,
  handlePublish,
  success = false,
  companyName,
}: Props) => {
  const [activePage, setActivePage] = useState(1);
  const [blurPage, setBlurPage] = useState(false);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (success && activePage === pages.length - 1) goNext();
  }, [success]);

  const goNext = () => {
    if (activePage < pages.length) {
      setActivePage(activePage + 1);
      setBlurPage(true);
      setDirection('up');
      setTimeout(() => {
        setBlurPage(false);
        setDirection(null);
      }, 300);
    }
  };

  const goPrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      setBlurPage(true);
      setDirection('down');
      setTimeout(() => {
        setBlurPage(false);
        setDirection(null);
      }, 300);
    }
  };

  return (
    <FullScreenModal
      showModal={showWizard}
      header={header}
      footer={
        <Footer
          className="wizard-ordered__footer"
          handleClickPrev={goPrev}
          disableClickPrev={activePage === 1 || activePage === pages.length}
          handleClickNext={goNext}
          disableClickNext={
            activePage === pages.length || activePage === pages.length - 1 || !validForm
          }
        />
      }
    >
      <>
        <div className="wizard-ordered-progress">
          <div
            className="wizard-ordered-progress-active"
            style={{
              width: `${(100 / pages.length) * activePage}%`,
            }}
          />
        </div>
        <div className="wizard-ordered">
          {pages.map((page, i) => {
            const previousStep = i + 1 === activePage - 1;
            const actualStep = i + 1 === activePage;
            const nextStep = i + 1 === activePage + 1;

            if (previousStep || actualStep || nextStep) {
              return (
                <Page
                  key={i}
                  activePage={activePage}
                  lastPage={activePage === pages.length}
                  lastQuestion={i === pages.length - 2}
                  page={i + 1}
                  blurPage={blurPage}
                  direction={direction}
                  handleGoNext={goNext}
                  handlePublish={handlePublish}
                  disabledButton={!validForm}
                  handleCloseWizard={handleCloseWizard}
                  companyName={companyName}
                >
                  {page.page}
                </Page>
              );
            }
          })}
        </div>
      </>
    </FullScreenModal>
  );
};

export default WizardOrdered;
