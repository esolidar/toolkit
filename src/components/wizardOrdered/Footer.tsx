import React from 'react';

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
}: Props) => (
  <div className={className}>
    <Button
      extraClass="primary-full"
      onClick={handleClickPrev}
      disabled={disableClickPrev}
      icon={<Icon name="ChevronUp" />}
      type="icon"
      dataTestId="click-prev"
    />

    <Button
      extraClass="primary-full"
      onClick={handleClickNext}
      disabled={disableClickNext || pages.length === 0}
      icon={<Icon name="ChevronDown" />}
      type="icon"
      dataTestId="click-next"
    />
  </div>
);

export default Footer;
