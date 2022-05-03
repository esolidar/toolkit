import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabsBts from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import isDefined from '../../utils/isDefined';
import Icon from '../icon';
import Badge from '../badge';

const Tabs = ({
  activeKey,
  className,
  defaultActiveKey,
  id,
  onChange,
  tabsList,
  size = 'md',
  auth,
  fixtures,
  token,
  user,
  collection,
  isLoggedIn,
}) => {
  const userData = useGetUser({ enabled: isLoggedIn });

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(activeKey);
  }, [activeKey]);

  const onSelect = key => {
    setActiveTab(key);
    if (isDefined(onChange)) onChange(key);
  };

  const filteredTabs = tabsList.filter(item => item.show !== false);

  console.log('fixtures', fixtures);
  console.log('auth', auth);
  console.log('token', token);
  console.log('user', user);
  console.log('collection', collection);

  return (
    <div className="esolidar-tabs">
      <TabsBts
        activeKey={activeTab}
        defaultActiveKey={defaultActiveKey}
        id={id}
        onSelect={onSelect}
        className={`esolidar-tabs__header ${className}`}
      >
        {filteredTabs.map(tab => (
          <Tab
            key={tab.key}
            eventKey={tab.key}
            title={
              <>
                {tab.icon && <Icon name={tab.icon} />}
                <span> {tab.title}</span>
                {tab.counter && <Badge size="xs" plaintext={tab.counter} />}
              </>
            }
            disabled={tab.disabled}
            tabClassName={classnames(
              'client__primary--color-hover',
              'client__primary--color-active',
              'client__primary--border-bottom-color-active',
              tab.className,
              `esolidar-tabs__${size}`
            )}
          >
            {tab.content}
          </Tab>
        ))}
      </TabsBts>
    </div>
  );
};

Tabs.propTypes = {
  activeKey: PropTypes.string,
  className: PropTypes.string,
  defaultActiveKey: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.boolean,
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      counter: PropTypes.number,
      show: PropTypes.boolean,
    })
  ).isRequired,
  size: PropTypes.string,
};

export default Tabs;
