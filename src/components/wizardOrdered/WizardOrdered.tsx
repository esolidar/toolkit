import React, { useState, useEffect } from 'react';
import FullScreenModal from '../../elements/fullScreenModal/FullScreenModal';
import Footer from './Footer';
import Page from './Page';
import Loading from '../loading';
import Props from './WizardOrdered.types';

const WizardOrdered = ({
  activePage,
  onChangePage,
  showWizard,
  handleCloseWizard,
  pages,
  header,
  isPageValid,
  handlePublish,
  isSuccess = false,
  companyName,
  isPublishDisabled,
  isLoading,
}: Props) => {
  const [blurPage, setBlurPage] = useState<boolean>(false);
  const [direction, setDirection] = useState<'up' | 'down'>(null);

  useEffect(() => {
    if (isSuccess && activePage === pages.length - 1) goNext();
  }, [isSuccess]);

  const goNext = () => {
    if (activePage < pages.length) {
      onChangePage(activePage + 1);
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
      onChangePage(activePage - 1);
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
          pages={pages}
          disableClickNext={
            activePage === pages.length || activePage === pages.length - 1 || !isPageValid
          }
        />
      }
    >
      {isLoading ? (
        <Loading />
      ) : (
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
              return (
                <Page
                  key={i}
                  activePage={activePage}
                  isLastPage={i + 1 === pages.length && activePage === pages.length}
                  isLastQuestions={i === pages.length - 2}
                  page={i + 1}
                  blurPage={blurPage}
                  direction={direction}
                  handleGoNext={goNext}
                  handlePublish={handlePublish}
                  isButtonDisabled={!isPageValid}
                  handleCloseWizard={handleCloseWizard}
                  companyName={companyName}
                  isPublishDisabled={isPublishDisabled}
                >
                  {page}
                </Page>
              );
            })}
          </div>
        </>
      )}
    </FullScreenModal>
  );
};

export default WizardOrdered;