import React, { FC } from 'react';
import Props from './ListElement.types';

const ListElement: FC<Props> = ({ onClick, name, email, imageSrc }: Props): JSX.Element => (
  <div className="list-element" onClick={onClick} data-testid="list-element" onKeyUp={onClick}>
    <img className="list-element__img" src={imageSrc} alt="img-thumb" />
    <div className="list-element__text">
      <div className="list-element__name">{name}</div>
      <div className="list-element__email">{email}</div>
    </div>
  </div>
);

export default ListElement;
