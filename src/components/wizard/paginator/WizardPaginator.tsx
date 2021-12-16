import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './WizardPaginator.types';

const WizardPaginator: FC<Props> = ({
  pages,
  cdnStaticUrl,
  handleChangeTab,
}: Props): JSX.Element => {
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
              <span className="page-number">{i + 1}.&nbsp;</span>
              <span className="page-title">{page.title}</span>
            </div>
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
        </button>
      ))}
    </div>
  );
};

export default WizardPaginator;
