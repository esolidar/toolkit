/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classnames from 'classnames';
import { useIntl, FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Button from '../../elements/button';
import Viewport from '../viewport';
import useInterval from '../../hooks/useInterval';

interface ChildrenProps {
  type: 'checkboxes' | 'multiChoice' | 'fileUploader' | 'shortAnswer' | 'longAnswer';
  exact?: number;
  rangeMin?: number;
  rangeMax?: number;
  answersAllowed?: 'unlimited' | 'exact' | 'range';
  privacy: 'public' | 'private';
}

interface Children extends JSX.Element {
  props: ChildrenProps;
}

interface Props {
  children: Children;
  activePage: number;
  page: number;
  isLastPage: boolean;
  isLastQuestions: boolean;
  blurPage: boolean;
  direction: string;
  handleGoNext(): void;
  handlePublish(): void;
  handleCloseWizard(isSuccess: boolean): void;
  isButtonDisabled: boolean;
  isPublishDisabled: boolean;
  companyName: string;
}

const Page = ({
  children,
  activePage,
  page,
  blurPage,
  direction,
  handleGoNext,
  handlePublish,
  isLastPage,
  isLastQuestions,
  isButtonDisabled,
  isPublishDisabled,
  handleCloseWizard,
  companyName,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [time, setTime] = useState<number>(5);

  useInterval(
    () => {
      setTime(time - 1);
      if (time - 1 === 0) handleCloseWizard(true);
    },
    isLastPage && time > 0 ? 1000 : null
  );

  const disabledMessageTooltip = () => {
    const { props } = children;
    const { type, answersAllowed, exact, rangeMin, rangeMax } = props;

    switch (type) {
      case 'checkboxes':
        if (answersAllowed === 'exact')
          return `${intl.formatMessage({ id: 'toolkit.please' })} ${intl
            .formatMessage({ id: 'toolkit.checkbox.range.exact' }, { value: exact })
            .toLowerCase()}`;
        if (answersAllowed === 'range')
          return `${intl.formatMessage({ id: 'toolkit.please' })} ${intl
            .formatMessage(
              {
                id: 'toolkit.checkbox.range.range',
              },
              { rangeMin, rangeMax }
            )
            .toLowerCase()}`;
        return intl.formatMessage({ id: 'toolkit.please.select.option' });

      case 'multiChoice':
        return intl.formatMessage({ id: 'toolkit.please.select.option' });

      case 'fileUploader':
        return intl.formatMessage({ id: 'toolkit.please.select.files' });

      case 'shortAnswer':
        return intl.formatMessage({ id: 'toolkit.please.fill.form' });

      case 'longAnswer':
        return intl.formatMessage({ id: 'toolkit.please.fill.form' });

      default:
        break;
    }
  };

  return (
    <div
      className={classnames(
        'page',
        { 'page-before': activePage > page },
        { 'page-after': activePage < page },
        {
          blur:
            (blurPage && page !== activePage - 1 && direction === 'up') ||
            (blurPage && page !== activePage + 1 && direction === 'down'),
        }
      )}
      style={{ zIndex: 100 - page }}
    >
      <div className={classnames('page-content', { 'active-page': page === activePage })}>
        <Viewport size="xl">
          <>
            <div>
              {!isLastPage && <span className="page-content__page-number">{`${page}.`}</span>}
              {children.props.privacy === 'private' && (
                <span
                  className="page-content__private"
                  data-tip={intl.formatMessage(
                    {
                      id: 'toolkit.visible.only.admins',
                    },
                    { companyName }
                  )}
                >
                  <FormattedMessage id="toolkit.private" />
                </span>
              )}
            </div>
            <div className="content-step-page">{children}</div>
            <div className="buttons">
              {!isLastQuestions && !isLastPage && (
                <div
                  data-tip={isButtonDisabled ? disabledMessageTooltip() : ''}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    extraClass="primary-full"
                    onClick={handleGoNext}
                    text={intl.formatMessage({ id: 'continue' })}
                    disabled={isButtonDisabled}
                    dataTestId="click-continue"
                  />
                </div>
              )}
              {isLastQuestions && (
                <div
                  data-tip={isButtonDisabled ? disabledMessageTooltip() : ''}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    extraClass="primary-full"
                    onClick={handlePublish}
                    text={intl.formatMessage({ id: 'publish' })}
                    disabled={isPublishDisabled}
                    dataTestId="click-publish"
                  />
                </div>
              )}
              {isLastPage && (
                <div className="wizard-success__buttons">
                  <Button
                    extraClass="secondary"
                    onClick={() => handleCloseWizard(true)}
                    text={intl.formatMessage({ id: 'close' })}
                    dataTestId="click-close"
                  />
                  <span className="wizard-success__buttons-auto-close-message">
                    <FormattedMessage id="toolkit.success.automatically.close" values={{ time }} />
                  </span>
                </div>
              )}
            </div>
          </>
        </Viewport>
      </div>
      <ReactTooltip className="tooltip-component" />
    </div>
  );
};

export default Page;
