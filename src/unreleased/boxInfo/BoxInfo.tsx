import React, { FC } from 'react';
import Props from './BoxInfo.types';
import Button from '../../elements/button';

const Breadcrumbs: FC<Props> = ({
  text,
  buttonText,
  buttonClass,
  handleClickButton,
}: Props): JSX.Element => {
  return (
    <div className="esolidar-box-info">
      <div>
        <p>{text}</p>
      </div>
      {buttonText && (
        <div className="esolidar-box-info__button">
          <Button text={buttonText} extraClass={buttonClass} onClick={handleClickButton} />
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
