import React, { FC, useEffect } from 'react';
import Props from './Card.types';

const Card: FC<Props> = ({
  clickThumb,
  image,
  countdown,
  title,
  body,
  support,
}: Props): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <div className="card-component" onClick={() => clickThumb()} tabIndex={1}>
      <div className="card-component-image">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url('${image}`,
          }}
        />
      </div>
      <div className="card-component-body">
        <div className="card-component-countdown">{countdown}</div>
        <div className="card-component-title" title={title}>
          {title}
        </div>
        <div className="card-component-body-middle">{body}</div>
        <div className="card-component-support">
          {support.url && support.name && (
            <a
              onClick={e => {
                e.stopPropagation();
              }}
              href={support.url}
              title={support.name}
              target={support.target}
            >
              {support.name}
            </a>
          )}
          {!support.url && support.name && <div data-testid="supporting-name">{support.name}</div>}
          {!support.url && !support.name && <div>&nbsp;</div>}
          <div className="card-supporting-label" data-testid="supporting-label">
            {support.label}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
