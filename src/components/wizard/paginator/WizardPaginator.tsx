import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './WizardPaginator.types';

const WizardPaginator: FC<Props> = ({ pages, cdnStaticUrl }: Props): JSX.Element => {
  const intl = useIntl();
  const curretPageLabel = page => {
    let text = 'paginator.not-done-yet';
    if (page.active) text = 'paginator.current.step';
    else if (page.status === 'done') text = 'paginator.done';
    else text = 'paginator.not-done-yet';

    return text;
  };

  return (
    <div className="wizard__paginator">
      {pages.map(page => (
        <div
          className={
            page.active ? 'wizard__paginator__item active' : 'wizard__paginator__item inactive'
          }
          key={page.title}
          style={{ width: `${JSON.stringify(100 / pages.length)}%` }}
        >
          <div className="wizard__paginator__item__title">{page.title}</div>
          <div className="wizard__paginator__item__subtitle">
            {page.status === 'done' && (
              <img
                src={`${cdnStaticUrl}/frontend/icons/ic-page-done.svg`}
                alt={intl.formatMessage({ id: curretPageLabel(page) })}
              />
            )}
            <FormattedMessage id={curretPageLabel(page)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WizardPaginator;
