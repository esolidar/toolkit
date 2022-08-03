import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabsBts from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import isDefined from '../../utils/isDefined';
import Icon from '../icon';
import Badge from '../badge';

const Tabs = ({ activeKey, className, defaultActiveKey, id, onChange, tabsList, size = 'md' }) => {
  const onSelect = key => {
    if (isDefined(onChange)) onChange(key);
  };

  const filteredTabs = tabsList.filter(item => item.show !== false);

  return (
    <div className="esolidar-tabs">
      <TabsBts
        activeKey={activeKey}
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
