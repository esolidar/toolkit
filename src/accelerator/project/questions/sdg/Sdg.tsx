import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import Props from './Sdg.types';
import Viewport from '../../../../components/viewport';
import EmptyState from '../../../../components/emptyState';
import Button from '../../../../elements/button';
import CheckboxCard from '../../../../elements/checkboxCard';
import SelectCategoriesModal from './SelectSDGsModal';
import getOdsList from '../../../../utils/getOdsList';

const Sdg = ({ sdgList, reply, handleSelectSdgs, preferredList }: Props) => {
  const intl = useIntl();
  const [showCategoriesModal, setShowCategoriesModal] = useState<boolean>(false);
  const repliesCount = useRef<number>(0);

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    const oldRepliesCount: number = repliesCount.current;
    repliesCount.current = reply.length;

    if (oldRepliesCount <= repliesCount.current && element)
      element.scrollTop = element.scrollHeight;
  }, [reply]);

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];

    if (element) element.scrollTop = element.scrollHeight;
  }, [reply]);

  const formattedSdgs = getOdsList(sdgList, intl.locale, intl.formatMessage);

  const handleReveal = inView => {
    if (inView) {
      const element = document.getElementsByClassName('active-page')[0];
      const card = document.getElementsByClassName('checkbox-card');
      if (card.length <= reply.length && element) element.scrollTop = element.scrollHeight;
    }
  };

  return (
    <div className="page-content-categories">
      <Viewport size="lg" centred={false}>
        <div className="content-step-page">
          <h2>
            <FormattedMessage id="toolkit.accelerator.appForm.form.sdgs" />
          </h2>
          <p>
            <FormattedMessage id="toolkit.project.sdgs.description" />
            <br />
            <FormattedMessage id="toolkit.project.sdgs.description.bottom" />
          </p>
        </div>
      </Viewport>
      <Viewport size="xl" centred={false}>
        <>
          {reply.length === 0 ? (
            <EmptyState
              altImage="Image"
              body={intl.formatMessage({
                id: 'tooliit.empty-state.sdgs.description',
              })}
              buttons={
                <Button
                  extraClass="primary-full"
                  onClick={() => setShowCategoriesModal(true)}
                  dataTestId="select-goals"
                  text={intl.formatMessage({
                    id: 'toolkit.select.goals',
                  })}
                />
              }
              container={{
                rounded: true,
                shadow: true,
                borderSize: 1,
              }}
              title={intl.formatMessage({
                id: 'toolkit.empty-state.sdgs.heading',
              })}
            />
          ) : (
            <>
              <div className="page-content-categories__list-button">
                <Button
                  extraClass="primary-full"
                  onClick={() => setShowCategoriesModal(true)}
                  dataTestId="edit-goals"
                  text={intl.formatMessage({
                    id: 'toolkit.select.goals',
                  })}
                />
                <FormattedMessage id="toolkit.x.sdg.selected" values={{ value: reply.length }} />
              </div>

              <div className="page-content-categories__list">
                <Fade
                  onVisibilityChange={handleReveal}
                  cascade
                  triggerOnce={true}
                  duration={700}
                  damping={0.1}
                >
                  {formattedSdgs
                    .filter(cat => reply.includes(cat.id))
                    .map(sdg => (
                      <CheckboxCard
                        key={sdg.id}
                        id={`selected-${sdg.id}`}
                        disabledHover={true}
                        style={{ maxWidth: '100%' }}
                        name={`sdg-${sdg.id}`}
                        defaultImg={sdg.image}
                        size="lg"
                        subtitle={sdg.description}
                        title={sdg.name}
                      />
                    ))}
                </Fade>
              </div>
            </>
          )}
        </>
      </Viewport>
      {showCategoriesModal && (
        <SelectCategoriesModal
          sdgList={getOdsList(sdgList, intl.locale, intl.formatMessage)}
          preferredList={preferredList}
          selectedSdgs={reply}
          onClose={() => setShowCategoriesModal(false)}
          isOpen={showCategoriesModal}
          handleSelectSdgs={handleSelectSdgs}
        />
      )}
    </div>
  );
};

export default Sdg;
