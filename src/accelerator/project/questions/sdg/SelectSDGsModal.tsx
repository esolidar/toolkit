import React, { useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import CheckboxCard from '../../../../elements/checkboxCard';
import Button from '../../../../elements/button';
import CustomModal from '../../../../elements/customModal';
import InputLabel from '../../../../elements/inputLabel';

interface Props {
  sdgList: any;
  selectedSdgs: any;
  preferredList: any;
  isOpen: boolean;
  onClose(): void;
  handleSelectSdgs(ids: number[]): void;
}

const SelectSDGsModal = ({
  sdgList,
  preferredList,
  isOpen,
  onClose,
  selectedSdgs,
  handleSelectSdgs,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [selectedSDGsList, setSelectedSDGsList] = useState<number[]>(selectedSdgs);

  const isOdsSelected = id => preferredList.includes(id);

  const preferredGoalsArr = sdgList.filter(item => isOdsSelected(item.id));
  const allOtherGoalsArr = sdgList.filter(item => !isOdsSelected(item.id));

  const handleSelectSdg = (checked, id) => {
    const sdgs = [...selectedSDGsList];
    const indx = sdgs.findIndex(cat => cat === id);

    if (checked) sdgs.push(id);
    else sdgs.splice(indx, 1);

    setSelectedSDGsList(sdgs);
  };

  const handleAddSdg = useCallback(() => {
    handleSelectSdgs(selectedSDGsList);
    onClose();
  }, [selectedSDGsList]);

  return (
    <CustomModal
      actionsChildren={
        <>
          <Button
            className="mr-2"
            extraClass="dark"
            text={intl.formatMessage({ id: 'cancel' })}
            onClick={onClose}
          />
          <Button
            extraClass="primary-full"
            text={intl.formatMessage({
              id: 'toolkit.add.goals',
            })}
            onClick={handleAddSdg}
            disabled={selectedSDGsList.length === 0}
          />
        </>
      }
      bodyChildren={
        <div className="sdg-modal-body">
          {preferredGoalsArr.length > 0 && (
            <InputLabel
              label={intl.formatMessage({
                id: 'toolkit.preferred.goals',
              })}
            />
          )}
          {preferredGoalsArr.map(ods => (
            <CheckboxCard
              isChecked={!!selectedSDGsList.find(c => c === ods.id)}
              key={ods.id}
              id={`sdg-${ods.id}`}
              name={`sdg-${ods.id}`}
              defaultImg={ods.image}
              size="lg"
              subtitle={ods.description}
              title={ods.name}
              onChange={e => handleSelectSdg(e, ods.id)}
            />
          ))}
          {preferredGoalsArr.length > 0 && (
            <InputLabel
              label={intl.formatMessage({
                id: 'toolkit.all.other.goals',
              })}
            />
          )}
          {allOtherGoalsArr.map(ods => (
            <CheckboxCard
              isChecked={!!selectedSDGsList.find(c => c === ods.id)}
              key={ods.id}
              id={`sdg-${ods.id}`}
              name={`sdg-${ods.id}`}
              defaultImg={ods.image}
              size="lg"
              subtitle={ods.description}
              title={ods.name}
              onChange={e => handleSelectSdg(e, ods.id)}
            />
          ))}
        </div>
      }
      dialogClassName="application-form-modal__ods"
      onHide={onClose}
      show={isOpen}
      title={intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.sdgs' })}
    />
  );
};

export default SelectSDGsModal;
