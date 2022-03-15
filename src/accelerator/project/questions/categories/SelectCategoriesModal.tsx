import React, { useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../../../elements/button';
import CustomModal from '../../../../elements/customModal';
import CheckboxCard from '../../../../elements/checkboxCard';
import ProjectCategory from '../../../../interfaces/project/projectCategory';
import getEnvVar from '../../../../utils/getEnvVar';

interface Props {
  categoriesList: ProjectCategory[];
  selectedCategories: number[];
  isOpen: boolean;
  onClose(): void;
  handleSelectCategories(ids: number[]): void;
}

const SelectCategoriesModal = ({
  categoriesList,
  selectedCategories,
  isOpen,
  onClose,
  handleSelectCategories,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [selectedCategoriesList, setSelectedCategoriesList] =
    useState<number[]>(selectedCategories);
  const noImage = `${getEnvVar('CDN_UPLOADS_URL')}/frontend/assets/no-image.png`;

  const handleSelectCategory = (checked, id) => {
    const categories = [...selectedCategoriesList];
    const indx = categories.findIndex(cat => cat === id);

    if (checked) categories.push(id);
    else categories.splice(indx, 1);

    setSelectedCategoriesList(categories);
  };

  const handleAddCategories = useCallback(() => {
    handleSelectCategories(selectedCategoriesList);
    onClose();
  }, [selectedCategoriesList]);

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
            text={intl.formatMessage({ id: 'toolkit.categories.add' })}
            onClick={handleAddCategories}
            disabled={selectedCategoriesList.length === 0}
          />
        </>
      }
      bodyChildren={
        <div className="categories-modal-body">
          {categoriesList.map(category => (
            <CheckboxCard
              isChecked={!!selectedCategoriesList.find(c => c === category.id)}
              name={`category-${category.id}`}
              id={`category-${category.id}`}
              defaultImg={
                category.image ? `${getEnvVar('CDN_UPLOADS_URL')}/${category.image}` : noImage
              }
              onChange={e => handleSelectCategory(e, category.id)}
              key={category.id}
              size="lg"
              subtitle={category.summary}
              title={category.name}
            />
          ))}
        </div>
      }
      dialogClassName="application-form-modal__categories"
      onHide={onClose}
      show={isOpen}
      title={intl.formatMessage({ id: 'categories' })}
    />
  );
};

export default SelectCategoriesModal;
