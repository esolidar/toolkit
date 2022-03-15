import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './Categories.types';
import Viewport from '../../../../components/viewport';
import EmptyState from '../../../../components/emptyState';
import Button from '../../../../elements/button';
import CheckboxCard from '../../../../elements/checkboxCard';
import SelectCategoriesModal from './SelectCategoriesModal';
import getEnvVar from '../../../../utils/getEnvVar';

const Categories = ({ categoriesList, selectedCategories, handleChangeCategories }: Props) => {
  const intl = useIntl();
  const [showCategoriesModal, setShowCategoriesModal] = useState<boolean>(false);

  return (
    <div className="page-content-categories">
      <Viewport size="lg" centred={false}>
        <div className="content-step-page">
          <h2>
            <FormattedMessage id="categories" />
          </h2>
          <p>
            <FormattedMessage id="toolkit.project.categories.description" />
          </p>
        </div>
      </Viewport>
      <Viewport size="xl" centred={false}>
        <>
          {selectedCategories.length === 0 ? (
            <EmptyState
              altImage="Image"
              body={intl.formatMessage({
                id: 'toolkit.empty-state.categories.description',
              })}
              buttons={
                <Button
                  extraClass="primary-full"
                  onClick={() => setShowCategoriesModal(true)}
                  dataTestId="select-categories"
                  text={intl.formatMessage({
                    id: 'toolkit.select-categories',
                  })}
                />
              }
              container={{
                rounded: true,
                shadow: true,
                borderSize: 1,
              }}
              title={intl.formatMessage({
                id: 'toolkit.empty-state.categories.heading',
              })}
            />
          ) : (
            <>
              <div className="page-content-categories__list-button">
                <Button
                  extraClass="primary-full"
                  onClick={() => setShowCategoriesModal(true)}
                  dataTestId="edit-categories"
                  text={intl.formatMessage({
                    id: 'toolkit.select-categories',
                  })}
                />
                <FormattedMessage
                  id="toolkit.x.categories.selected"
                  values={{ value: selectedCategories.length }}
                />
              </div>
              <div className="page-content-categories__list">
                {categoriesList
                  .filter(cat => selectedCategories.includes(cat.id))
                  .map(category => (
                    <CheckboxCard
                      name={`category-${category.id}`}
                      id={`selected-${category.id}`}
                      defaultImg={
                        category.image
                          ? `${getEnvVar('CDN_UPLOADS_URL')}/${category.image}`
                          : 'noImage'
                      }
                      key={category.id}
                      size="lg"
                      subtitle={category.summary}
                      title={category.name}
                      disabledHover={true}
                      style={{ maxWidth: '100%' }}
                    />
                  ))}
              </div>
            </>
          )}
        </>
      </Viewport>
      {showCategoriesModal && (
        <SelectCategoriesModal
          categoriesList={categoriesList}
          selectedCategories={selectedCategories}
          onClose={() => setShowCategoriesModal(false)}
          isOpen={showCategoriesModal}
          handleSelectCategories={handleChangeCategories}
        />
      )}
    </div>
  );
};

export default Categories;
