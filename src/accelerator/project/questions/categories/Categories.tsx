import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import Props from './Categories.types';
import Viewport from '../../../../components/viewport';
import EmptyState from '../../../../components/emptyState';
import Button from '../../../../elements/button';
import CheckboxCard from '../../../../elements/checkboxCard';
import SelectCategoriesModal from './SelectCategoriesModal';
import getEnvVar from '../../../../utils/getEnvVar';

const Categories = ({
  categoriesList,
  reply,
  handleChangeCategories,
  required,
  onClickDelete,
}: Props) => {
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

  const handleReveal = inView => {
    if (inView) {
      const element = document.getElementsByClassName('active-page')[0];
      const card = document.getElementsByClassName('checkbox-card');

      if (card.length < reply.length && element) element.scrollTop = element.scrollHeight;
    }
  };

  return (
    <div className="page-content-categories">
      <Viewport size="lg" centred={false}>
        <div className="content-step-page">
          <h2>
            <FormattedMessage id="categories" />
            {!required && (
              <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
            )}
          </h2>
          <p>
            <FormattedMessage id="toolkit.project.categories.description" />
          </p>
        </div>
      </Viewport>
      <Viewport size="xl" centred={false}>
        <>
          {reply.length === 0 ? (
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
                  extraClass="secondary"
                  onClick={() => setShowCategoriesModal(true)}
                  dataTestId="edit-categories"
                  text={intl.formatMessage({
                    id: 'toolkit.select-categories',
                  })}
                />
                <FormattedMessage
                  id="toolkit.x.categories.selected"
                  values={{ value: reply.length }}
                />
              </div>

              <div className="page-content-categories__list">
                <Fade
                  onVisibilityChange={handleReveal}
                  cascade
                  triggerOnce={true}
                  duration={700}
                  damping={0.1}
                  className="project-fade-item"
                >
                  {categoriesList
                    .filter(cat => reply.includes(cat.id))
                    .map(category => (
                      <CheckboxCard
                        key={category.id}
                        name={`category-${category.id}`}
                        id={`selected-${category.id}`}
                        defaultImg={
                          category.image
                            ? `${getEnvVar('CDN_UPLOADS_URL')}/${category.image}`
                            : 'noImage'
                        }
                        size="lg"
                        subtitle={category.summary}
                        title={category.name}
                        disabledHover={true}
                        style={{ maxWidth: '100%' }}
                        dropdownItems={[
                          {
                            id: 0,
                            text: intl.formatMessage({ id: 'delete' }),
                            leftIcon: 'Trash',
                            onClick: () => onClickDelete(category.id),
                          },
                        ]}
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
          categoriesList={categoriesList}
          selectedCategories={reply}
          onClose={() => setShowCategoriesModal(false)}
          isOpen={showCategoriesModal}
          handleSelectCategories={handleChangeCategories}
        />
      )}
    </div>
  );
};

export default Categories;
