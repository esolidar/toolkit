import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import TabsBts from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Tabs = ({ activeKey, defaultActiveKey, id, onChange, tabsList }) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(activeKey);
  }, [activeKey]);

  const onSelect = key => {
    setActiveTab(key);
    onChange();
  };

  return (
    <TabsBts
      activeKey={activeTab}
      defaultActiveKey={defaultActiveKey}
      id={id}
      onSelect={onSelect}
      className="esolidar-tabs"
    >
      {tabsList.map(tab => (
        <Tab
          key={tab.key}
          eventKey={tab.key}
          title={tab.title}
          disabled={tab.disabled}
          tabClassName={tab.className}
        >
          {tab.content}
        </Tab>
      ))}
    </TabsBts>
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
