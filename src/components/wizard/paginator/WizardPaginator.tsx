import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './WizardPaginator.types';
import Icon from '../../../elements/icon';
import isArray from '../../../utils/isArray';
import PAGES from '../../../constants/pages';

interface CurrentPageLabel {
  text: string;
  showIcon: boolean;
}

const convertPaginator = paginator => {
  const titles = [
    PAGES.generalDetails,
    PAGES.locationTime,
    PAGES.categories,
    PAGES.skillsAndInterests,
    PAGES.applicationForm,
  ];

  const activeIndex = paginator.findIndex(item => item.active);
  const newPaginator = { active: '', edited: [], done: [], published: false };
  newPaginator.active = titles[activeIndex];
  paginator.forEach((element, indx) => {
    if (element.status === 'done') newPaginator.done.push(titles[indx]);
  });

  return newPaginator;
};

const WizardPaginator: FC<Props> = ({ pages, handleChangeTab }: Props): JSX.Element => {
  const intl = useIntl();
  let newPageStatus = { ...pages };

  const currentPageLabel = (page): CurrentPageLabel => {
    let text: string = '';
    let showIcon: boolean = false;

    if (newPageStatus.published) {
      if (newPageStatus.edited.find(done => page === done) === page) {
        text = 'paginator.edited';
        showIcon = true;
      } else text = 'paginator.published';
    } else {
      text = 'paginator.not-done-yet';
      if (newPageStatus.active === page) text = 'paginator.current.step';
      else if (newPageStatus.done.find(done => page === done) === page) {
        text = 'paginator.done';
        showIcon = true;
      }
    }
    return { text, showIcon };
  };

  const pagesToArray: any = Object.keys(PAGES);
  const isOldPAginator = isArray(pages);

  if (isOldPAginator) {
    newPageStatus = convertPaginator(pages);
  }

  return (
    <div className="wizard__paginator">
      {pagesToArray.map(page => (
        <button
          type="button"
          key={page}
          onClick={() => handleChangeTab(page)}
          className={
            newPageStatus.active === page
              ? 'wizard__paginator__item active'
              : 'wizard__paginator__item inactive'
          }
          style={{ width: `${JSON.stringify(100 / pagesToArray.length)}%` }}
        >
          <div>
            <div className="wizard__paginator__item__title">
              <span className="page-title">{intl.formatMessage({ id: page })}</span>
            </div>
            <div className="wizard__paginator__item__subtitle">
              {currentPageLabel(page).showIcon && <Icon name="Check" size="sm" />}
              <FormattedMessage id={currentPageLabel(page).text} />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default WizardPaginator;
