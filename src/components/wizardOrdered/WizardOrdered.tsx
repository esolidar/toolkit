import React, { useState, useEffect, useCallback, useRef } from 'react';
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

  const isWheelScrollDisabled = useRef(false);

  useEffect(() => {
    if (showWizard) {
      const body = document.getElementsByTagName('body')[0];
      if (body) body.classList.add('opened-wizard');
    }
  }, [showWizard]);

  useEffect(() => {
    if (isSuccess && activePage === pages.length - 1) goNext();
  }, [isSuccess]);

  const goNext = () => {
    if (activePage < pages.length && isPageValid) {
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

  const handleNavigation = useCallback(
    (e: React.WheelEvent) => {
      const { deltaY } = e;

      e.stopPropagation();

      const activePageDiv = document.getElementsByClassName('active-page')[0];

      const scrollDown = deltaY > 0;
      const scrollUp = deltaY < 0;
      const hasScrollOnPage = activePageDiv.clientHeight >= activePageDiv.scrollHeight;
      const isOnScrollBottomPage =
        activePageDiv.clientHeight + activePageDiv.scrollTop === activePageDiv.scrollHeight;
      const isOnScrollTopPage = activePageDiv.scrollTop === 0;
      const isLastPage = activePage <= pages.length - 1;

      if (
        scrollDown &&
        activePage < pages.length - 1 &&
        (hasScrollOnPage || isOnScrollBottomPage)
      ) {
        if (!isWheelScrollDisabled.current) {
          isWheelScrollDisabled.current = true;
          goNext();
          setTimeout(() => {
            isWheelScrollDisabled.current = false;
          }, 1300);
        }
      } else if (scrollUp && isOnScrollTopPage && isLastPage) {
        if (!isWheelScrollDisabled.current) {
          isWheelScrollDisabled.current = true;
          goPrev();
          setTimeout(() => {
            isWheelScrollDisabled.current = false;
          }, 1300);
        }
      }
    },
    [activePage, showWizard, isPageValid]
  );

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
          <div className="wizard-ordered" id="wizard-ordered" onWheel={handleNavigation}>
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
