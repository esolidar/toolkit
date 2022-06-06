import React, { FC } from 'react';
import Badge from '../../elements/badge';
import Dropdown from '../../elements/dropdown';
import isDefined from '../../utils/isDefined';
import getEnvVar from '../../utils/getEnvVar';
import Props from './Card.types';

const Card: FC<Props> = ({
  clickThumb,
  image,
  countdown,
  title,
  body,
  support,
  isPrivate = false,
  average,
  showCountdown = true,
  dropdownItems = [],
}: Props): JSX.Element => {
  const filteredItems = dropdownItems.filter(item => item.show !== false);
  const showDropdownMenu = !!filteredItems.length;

  const handleClickThumb = () => {
    if (isDefined(clickThumb)) clickThumb();
  };

  const urlNoImage: string = `${getEnvVar(
    'CDN_STATIC_URL'
  )}/frontend/assets/placeholders/image.svg`;

  return (
    <div className="card-component">
      {isPrivate && <Badge text="toolkit.private" className="card-component__badge" />}
      <div className="card-component__image">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url('${image || urlNoImage}`,
            backgroundSize: image ? 'cover' : 'auto',
          }}
        />
        {average && (
          <Badge
            className="card-component__average"
            icon="StarBold"
            plaintext={
              <>
                <span className="card-component__average-value">{average}</span>
                <span className="card-component__average-total">&nbsp;/ 5</span>
              </>
            }
          />
        )}
      </div>
      <div className="card-component__body">
        {showCountdown && (
          <div className="card-component__body--relative">
            <div className="card-component__countdown">{countdown}</div>
          </div>
        )}
        <div className="card-component__title" title={title}>
          {isDefined(clickThumb) ? (
            <a onClick={handleClickThumb} onKeyDown={handleClickThumb}>
              {title}
            </a>
          ) : (
            <>{title}</>
          )}
        </div>
        <div className="card-component__body-middle">{body}</div>
      </div>
      <div className="card-component__footer">
        <div className="card-component__support">
          {support.revert && (
            <div className="card-component__supporting-label" data-testid="supporting-label">
              {support.label}
            </div>
          )}
          {support.url && support.name && (
            <a
              className="card-component__actions"
              href={support.url}
              title={support.name}
              target={support.target}
              rel={support.target === '_blank' ? 'noopener noreferrer' : null}
              data-testid="supporting-url"
            >
              {support.name}
            </a>
          )}
          {!support.url && support.name && <div data-testid="supporting-name">{support.name}</div>}
          {!support.url && !support.name && <div>&nbsp;</div>}
          {!support.revert && (
            <div className="card-component__supporting-label" data-testid="supporting-label">
              {support.label}
            </div>
          )}
        </div>
        {showDropdownMenu && (
          <div className="card-component__actions">
            <Dropdown items={filteredItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
