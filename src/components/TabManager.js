import React from "react";
// import styled from "styled-components";

import TabContainer from "./components/TabContainer";
import Tab from "./components/Tab";

const TabManager = (props) => {
  const {
    tabs,
    activeTab,
    handleTabChange,
    handleTabClose,
    handleCloseAllTab,
  } = props;

  return (
    <TabContainer
      tabsSize={tabs.length}
      {...props}
    >
      {tabs.map((tab) => (
        <Tab key={tab.id} tabData={tab} mainProp={props} />
      ))}
    </TabContainer>
  );
};

export default TabManager;
