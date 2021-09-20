import React, { FC } from 'react';
import Badge from '../../elements/badge';
import Props from './Card.types';

const Card: FC<Props> = ({
  clickThumb,
  image,
  countdown,
  title,
  body,
  support,
  isPrivate = false,
}: Props): JSX.Element => (
  <div className="card-component" onClick={() => clickThumb()} onKeyDown={() => clickThumb()}>
    {isPrivate && <Badge text="toolkit.private" className="card-component__badge" />}
    <div className="card-component__image">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url('${image}`,
        }}
      />
    </div>
    <div className="card-component__body">
      <div className="card-component__countdown">{countdown}</div>
      <div className="card-component__title" title={title}>
        {title}
      </div>
      <div className="card-component__body-middle">{body}</div>
      <div className="card-component__support">
        {support.url && support.name && (
          <a
            onClick={e => {
              e.stopPropagation();
            }}
            href={support.url}
            title={support.name}
            target={support.target}
            data-testid="supporting-url"
          >
            {support.name}
          </a>
        )}
        {!support.url && support.name && <div data-testid="supporting-name">{support.name}</div>}
        {!support.url && !support.name && <div>&nbsp;</div>}
        <div className="card-component__supporting-label" data-testid="supporting-label">
          {support.label}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
