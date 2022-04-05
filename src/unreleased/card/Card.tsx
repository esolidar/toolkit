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
    <div
      className="card-component"
      onClick={handleClickThumb}
      onKeyDown={handleClickThumb}
      style={{
        cursor: isDefined(clickThumb) ? 'pointer' : 'default',
      }}
    >
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
        {showCountdown && <div className="card-component__countdown">{countdown}</div>}
        <div className="card-component__title" title={title}>
          {title}
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
          {!support.revert && (
            <div className="card-component__supporting-label" data-testid="supporting-label">
              {support.label}
            </div>
          )}
        </div>
        {showDropdownMenu && <Dropdown items={filteredItems} />}
      </div>
    </div>
  );
};

export default Card;
