import React, { useState } from 'react';

const Tabs = ({ activeTabClass }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabs__header">
        {[1, 2, 3, 4, 5].map((tab, index) => (
          <div
            key={index}
            className={`tabs__header-item ${activeTab === index ? activeTabClass : ''}`}
            onClick={() => handleTabClick(index)}
          >
            Вкладка {tab}
          </div>
        ))}
      </div>
      <div className="tabs__content">
        {[1, 2, 3, 4, 5].map((tab, index) => (
          <div key={index} className="tabs__content-item" style={{ display: activeTab === index ? 'flex' : 'none' }}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
