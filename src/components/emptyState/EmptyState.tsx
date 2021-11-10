/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import Container from '../../elements/container';
import Icon from '../icon';
import Props from './EmptyState.types';

const EmptyState: FC<Props> = ({
  container,
  title,
  body,
  icon,
  image,
  altImage,
  buttons,
}: Props): JSX.Element => (
  <Container
    rounded={container?.rounded}
    borderSize={container?.borderSize}
    shadow={container?.shadow}
    background={container?.background}
  >
    <div className="empty-state">
      {icon && (
        <div className="empty-state__icon">
          <Icon iconClass={icon} />
        </div>
      )}
      {image && (
        <div className="empty-state__image">
          <img src={image} alt={altImage} />
        </div>
      )}
      <div className="empty-state__title">
        <h4>{title}</h4>
      </div>
      <div className="empty-state__body">
        <p>{body}</p>
      </div>
      {buttons && <div className="empty-state__buttons">{buttons}</div>}
    </div>
  </Container>
);

export default EmptyState;
