import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
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

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];

    if (element) element.scrollTop = element.scrollHeight;
  }, [reply]);

  const formattedSdgs = getOdsList(sdgList, intl.locale, intl.formatMessage);

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
                {formattedSdgs
                  .filter(cat => reply.includes(cat.id))
                  .map(sdg => (
                    <CheckboxCard
                      id={`selected-${sdg.id}`}
                      key={sdg.id}
                      disabledHover={true}
                      style={{ maxWidth: '100%' }}
                      name={`sdg-${sdg.id}`}
                      defaultImg={sdg.image}
                      size="lg"
                      subtitle={sdg.description}
                      title={sdg.name}
                    />
                  ))}
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
