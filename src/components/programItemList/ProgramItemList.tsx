/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useIntl } from 'react-intl';
import Preview from '../preview';
import Dropdown from '../../elements/dropdown';
import Badge from '../../elements/badge';
import getEnvVar from '../../utils/getEnvVar';
import Props from './ProgramItemList.types';

const ProgramItemList = ({
  id,
  image,
  title,
  summary,
  dropdownItems,
  isLive,
  isDraft,
  handleClickItem,
}: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <div className="programItemList">
      <div
        data-testid="btnOpenWizard"
        className="programItemList__left-column"
        onClick={() => handleClickItem(id)}
      >
        <Preview
          img={{
            src: image
              ? `${getEnvVar('SERVER_LESS_RESIZE_IMAGE')}/${image}?width=56&height=56`
              : null,
            alt: title,
            width: '56px',
            height: '56px',
          }}
          hover={false}
        />
        <div className="programItemList__title">
          <div className="programItemList__title-header">
            {title || intl.formatMessage({ id: 'toolkit.untitled' })}
            {isLive && <Badge text="live" className="btn-badge" extraClass="green" size="sm" />}
            {isDraft && <Badge text="draft" className="btn-badge" extraClass="white" size="sm" />}
          </div>
          <p>{summary}</p>
        </div>
      </div>
      {dropdownItems && <Dropdown items={dropdownItems} toggleIcon="MoreVertical" />}
    </div>
  );
};

export default ProgramItemList;
