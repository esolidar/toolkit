import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import Props from './FileCard.types';
import Preview from '../preview';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import Dropdown from '../../elements/dropdown';
import Badge from '../../elements/badge';
import convertFileSize from '../../utils/convertFileSize';
import isDefined from '../../utils/isDefined';

const FileCard = ({
  title,
  subtitle,
  image,
  showDownloadButton = false,
  dropdownItems = [],
  disabled = false,
  className,
  file,
  size,
  dateUploaded,
  showBadgePrivate = false,
  showBadgeFailed = false,
}: Props) => {
  const intl = useIntl();
  const classes = classnames('file-card', { disabled }, className);

  const handleDownloadFile = () => {
    window.open(file, title);
  };

  const filteredItems = dropdownItems.filter(item => item.show !== false);
  const showDropdownMenu = !!filteredItems.length;

  const helper = [convertFileSize(Number(size))];

  if (isDefined(dateUploaded))
    helper.unshift(
      `${intl.formatMessage({
        id: 'toolkit.uploaded-on',
      })} ${dateUploaded}`
    );

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
          {showBadgePrivate && (
            <Badge
              plaintext={intl.formatMessage({ id: 'toolkit.private' })}
              extraClass="dark-gray"
              type="text"
            />
          )}
          {showBadgeFailed && (
            <Badge
              plaintext={intl.formatMessage({ id: 'toolkit.failed' })}
              icon="Info"
              extraClass="red"
            />
          )}
        </div>
        {subtitle && <div className="file-card__body-subtitle">{subtitle}</div>}
        {helper && <div className="file-card__body-helper">{helper.join(' - ')}</div>}
      </div>
      <div className="file-card__buttons">
        {showDownloadButton && !disabled && (
          <Button
            extraClass="primary-full"
            theme="light"
            type="icon"
            ghost
            onCLicke={handleDownloadFile}
            icon={<Icon name="Download" />}
          />
        )}
        {showDropdownMenu && !disabled && (
          <Dropdown items={filteredItems} toggleIcon="MoreVertical" />
        )}
      </div>
    </div>
  );
};

export default FileCard;
