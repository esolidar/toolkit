import React, { useState } from 'react';
import FullScreenModal from '../../elements/fullScreenModal/FullScreenModal';
import Footer from './Footer';
import Page from './Page';
import Props from './WizardOrdered.types';

const WizardOrdered = ({ showWizard, pages, header, validForm, handlePublish }: Props) => {
  const [activePage, setActivePage] = useState(1);
  const [blurPage, setBlurPage] = useState(false);
  const [direction, setDirection] = useState(null);

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
          disableClickPrev={activePage === 1}
          handleClickNext={goNext}
          disableClickNext={activePage === pages.length || !validForm}
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
            if (i + 1 === activePage || i + 1 === activePage + 1 || i + 1 === activePage - 1)
              return (
                <Page
                  key={i}
                  activePage={activePage}
                  lastPage={i + 1 === pages.length}
                  page={i + 1}
                  blurPage={blurPage}
                  direction={direction}
                  handleGoNext={goNext}
                  handlePublish={handlePublish}
                  disabledButton={!validForm}
                >
                  {page.page}
                </Page>
              );
          })}
        </div>
      </>
    </FullScreenModal>
  );
};

export default WizardOrdered;
