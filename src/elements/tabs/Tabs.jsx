import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabsBts from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import isDefined from '../../utils/isDefined';

const Tabs = ({ activeKey, defaultActiveKey, id, onChange, tabsList }) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(activeKey);
  }, [activeKey]);

  const onSelect = key => {
    setActiveTab(key);
    if (isDefined(onChange)) onChange();
  };

  return (
    <div className="esolidar-tabs">
      <TabsBts
        activeKey={activeTab}
        defaultActiveKey={defaultActiveKey}
        id={id}
        onSelect={onSelect}
        className="esolidar-tabs__header"
      >
        {tabsList.map(tab => (
          <Tab
            key={tab.key}
            eventKey={tab.key}
            title={tab.title}
            disabled={tab.disabled}
            tabClassName={classnames(
              'client__primary--color-hover',
              'client__primary--color-active',
              'client__primary--border-bottom-color-active',
              tab.className
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
    })
  ).isRequired,
};

export default Tabs;
