import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './WizardPaginator.types';
import Icon from '../../../elements/icon';

const WizardPaginator: FC<Props> = ({ pages, handleChangeTab }: Props): JSX.Element => {
  const currentPageLabel = (page): string => {
    let text: string = 'paginator.not-done-yet';

    if (page.active) text = 'paginator.current.step';
    else if (page.status === 'done') text = 'paginator.done';

    return text;
  };

  return (
    <div className="wizard__paginator">
      {pages.map((page, i) => (
        <button
          type="button"
          key={page.title}
          onClick={() => handleChangeTab(i)}
          className={
            page.active ? 'wizard__paginator__item active' : 'wizard__paginator__item inactive'
          }
          style={{ width: `${JSON.stringify(100 / pages.length)}%` }}
        >
          <div>
            <div className="wizard__paginator__item__title">
              <span className="page-title">{page.title}</span>
            </div>
            <div className="wizard__paginator__item__subtitle">
              {page.status === 'done' && !page.active && <Icon name="Check" size="sm" />}
              <FormattedMessage id={currentPageLabel(page)} />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default WizardPaginator;
