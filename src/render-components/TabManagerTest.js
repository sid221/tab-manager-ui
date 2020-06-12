import React, { useState } from "react";
import styled from "styled-components";

import TabManager from "../components/TabManager";

const StyledTabs = styled.div`
  max-height: 50px;
`;

// Default Tabs
const defaultTabs = [
  { text: "home", id: "home", isClosable: false },
  { text: "Tab 1", id: "1", isClosable: true },
  { text: "Tab 2", id: "2", isClosable: true },
  { text: "Tab 3", id: "3", isClosable: true },
];

// Add New Tab Data Form
const AddTabs = ({ addTabs }) => {
  const [text, setText] = useState();
  const [id, setId] = useState();
  const [isClosable, setIsClosable] = useState(true);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "text") {
      setText(value);
    }
    if (name === "id") {
      setId(value);
    }
    if (name === "isClosable") {
      setIsClosable(e.target.checked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tab = { text, id, isClosable };
    addTabs(tab);
  };

  return (
    <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="text" onChange={handleInputChange} />
      <br />
      <br />
      <label>id:</label>
      <input type="text" name="id" onChange={handleInputChange} />
      <br />
      <br />
      <label>isClosable:</label>
      <input
        type="checkbox"
        name="isClosable"
        defaultChecked
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button type="submit">Add Tab</button>
    </form>
  );
};

const TabManagerTest = () => {
  //Tab Manager Props Defenition
  const [tabs, setTabs] = useState(defaultTabs);
  const [activeTab, setActiveTab] = useState(defaultTabs[0]);

  // Handle single Tab close
  const handleTabClose = (id) => {
    let updatedTabList = tabs.filter((t) => t.id !== id);
    setTabs(updatedTabList);
  };

  // To Change the Tab and based on which you can chnage view
  const handleTabChange = (id) => {
    let getActiveTab = tabs.findIndex((t) => t.id === id);
    setActiveTab(tabs[getActiveTab]);
  };

  // Close All Tabs except for isClosable false
  const handleCloseAllTab = () => {
    let getUnclosableTab = tabs.filter((t) => t.isClosable === false);
    setTabs(getUnclosableTab);
  };

  // TabManager Required props
  const tabManagerProps = {
    tabs,
    activeTab,
    handleTabChange,
    handleTabClose,
    handleCloseAllTab,
  };

  // Add Tabs props
  const addTabs = (tab) => {
    setTabs([...tabs, tab]);
    setActiveTab(tab);
  };

  return (
    <StyledTabs>
      <TabManager {...tabManagerProps} />
      <AddTabs addTabs={addTabs} />
    </StyledTabs>
  );
};

export default TabManagerTest;
