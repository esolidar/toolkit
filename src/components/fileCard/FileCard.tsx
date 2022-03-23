import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import Props from './FileCard.types';
import Preview from '../preview';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import Dropdown from '../../elements/dropdown';
import Badge from '../../elements/badge';

const FileCard = ({
  title,
  subtitle,
  helper,
  image,
  badge,
  showDownloadButton,
  dropdownItems,
  disabled = false,
  className,
}: Props) => {
  const classes = classnames('file-card', { disabled }, className);
  const intl = useIntl();

  return (
    <div className={classes}>
      <Preview
        img={{
          src: image || null,
          alt: title,
          width: '56px',
          height: '56px',
        }}
        hover={false}
      />
      <div className="file-card__body">
        <div className="file-card__body-title">
          {title}
          {badge && (
            <Badge
              plaintext={badge === 'error' ? intl.formatMessage({ id: 'toolkit.failed' }) : badge}
              icon={badge === 'error' ? 'Info' : null}
              extraClass={badge === 'error' ? 'red' : 'white'}
            />
          )}
        </div>
        {subtitle && <div className="file-card__body-subtitle">{subtitle}</div>}
        {helper && (
          <div className={classnames('file-card__body-helper', { 'no-margin': !subtitle })}>
            {helper}
          </div>
        )}
      </div>
      <div className="file-card__buttons">
        {showDownloadButton && (
          <Button
            extraClass="primary-full"
            theme="light"
            type="icon"
            ghost
            icon={<Icon name="Download" />}
          />
        )}
        {dropdownItems && <Dropdown items={dropdownItems} toggleIcon="MoreVertical" />}
      </div>
    </div>
  );
};

export default FileCard;
