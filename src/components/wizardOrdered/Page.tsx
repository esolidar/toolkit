import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Viewport from '../viewport';

interface Props {
  children: JSX.Element;
  activePage: number;
  page: number;
  lastPage: boolean;
  blurPage: boolean;
  direction: string;
  handleGoNext(): void;
  handlePublish(): void;
  disabledButton: boolean;
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
  disabledButton,
}: Props): JSX.Element => {
  const intl = useIntl();

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
            <div className="page-content__page-number">{`${page}.`}</div>
            <div className="content">{children}</div>
            <div className="buttons">
              {!lastPage && (
                <Button
                  extraClass="primary-full"
                  ghost={false}
                  isLoading={false}
                  onClick={handleGoNext}
                  text={intl.formatMessage({ id: 'continue' })}
                  type="button"
                  disabled={disabledButton}
                  dataTestId="click-continue"
                />
              )}
              {lastPage && (
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
            </div>
          </>
        </Viewport>
      </div>
    </div>
  );
};

export default Page;
