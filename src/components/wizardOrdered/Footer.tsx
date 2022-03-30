import React from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Icon from '../../elements/icon';

interface Props {
  handleClickPrev(): void;
  disableClickPrev: boolean;
  handleClickNext(): void;
  disableClickNext: boolean;
  className: string;
  pages: any[];
}

const Footer = ({
  handleClickPrev,
  disableClickPrev,
  handleClickNext,
  disableClickNext,
  className,
  pages,
}: Props) => {
  const intl = useIntl();
  return (
    <div className={className}>
      <div data-tip={intl.formatMessage({ id: 'toolkit.prev' })}>
        <Button
          extraClass="primary-full"
          onClick={handleClickPrev}
          disabled={disableClickPrev}
          icon={<Icon name="ChevronUp" />}
          type="icon"
          dataTestId="click-prev"
        />
      </div>
      <div data-tip={intl.formatMessage({ id: 'toolkit.next' })}>
        <Button
          extraClass="primary-full"
          onClick={handleClickNext}
          disabled={disableClickNext || pages.length === 0}
          icon={<Icon name="ChevronDown" />}
          type="icon"
          dataTestId="click-next"
        />
      </div>
    </div>
  );
};

export default Footer;
