import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useIntl, FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Button from '../../elements/button';
import Viewport from '../viewport';
import useInterval from '../../hooks/useInterval';

interface Props {
  children: JSX.Element;
  activePage: number;
  page: number;
  lastPage: boolean;
  lastQuestion: boolean;
  blurPage: boolean;
  direction: string;
  handleGoNext(): void;
  handlePublish(): void;
  handleCloseWizard(): void;
  disabledButton: boolean;
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
  lastPage,
  lastQuestion,
  disabledButton,
  handleCloseWizard,
  companyName,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [time, setTime] = useState<number>(5);

  useInterval(
    () => {
      setTime(time - 1);
    },
    lastPage && time > 0 ? 1000 : null
  );

  useEffect(() => {
    if (time === 0) {
      handleCloseWizard();
    }
  }, [time]);

  return (
    <div
      className={classnames(
        'page',
        { 'page-before': activePage > page },
        { 'page-after': activePage < page },
        { blur: blurPage && page !== activePage - 1 && direction === 'up' },
        { blur: blurPage && page !== activePage + 1 && direction === 'down' }
      )}
      style={{ zIndex: 100 - page }}
    >
      <div className="page-content">
        <Viewport size="xl">
          <>
            <div>
              {!lastPage && <span className="page-content__page-number">{`${page}.`}</span>}
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
              <ReactTooltip className="application-form-read-only-card__tooltip" />
            </div>
            <div className="content">{children}</div>
            <div className="buttons">
              {!lastQuestion && !lastPage && (
                <Button
                  extraClass="primary-full"
                  ghost={false}
                  isLoading={false}
                  onClick={handleGoNext}
                  text={intl.formatMessage({ id: 'continue' })}
                  type="button"
                  disabled={disabledButton || children.props.required}
                  dataTestId="click-continue"
                />
              )}
              {lastQuestion && (
                <Button
                  extraClass="primary-full"
                  ghost={false}
                  isLoading={false}
                  onClick={handlePublish}
                  text={intl.formatMessage({ id: 'publish' })}
                  type="button"
                  disabled={disabledButton}
                  dataTestId="click-publish"
                />
              )}
              {lastPage && (
                <div className="wizard-success__buttons">
                  <Button
                    extraClass="secondary"
                    ghost={false}
                    isLoading={false}
                    onClick={handleCloseWizard}
                    text={intl.formatMessage({ id: 'close' })}
                    type="button"
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
    </div>
  );
};

export default Page;
