import React from "react";
import styled from "styled-components";

import HomeIcon from "../components/images/home_button.svg";

const StyledTab = styled.div`
  width: 100%;
  flex: 0 1 288px;
  overflow: hidden;
  align-items: center;
  background-color: #232323;
  margin: 0.3rem 0.1rem;
  margin-right: -0.3rem;
  height: 1.6rem;
  display: flex;
  color: #dadada;
  font-size: 14px;
  padding: 0rem 0.9rem;
  justify-content: space-between;
  cursor: pointer;

  &[data-activetab="true"] {
    color: #1bb953;

    .CloseButtonContainer .CloseButton {
      background-color: #1bb953;
    }
  }

  .TabName {
    flex-shrink: 1;
    margin-bottom: 1px;
    margin-left: 1px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .CloseButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dadada;
    font-weight: 450;
    overflow: hidden;

    .CloseButton {
      width: 0.85rem;
      height: 0.85rem;
      border-radius: 100%;
      background-color: #525252;
      color: #232323;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      font-family: "Times New Roman", Times, serif;
      span {
        align-self: center;
        padding-right: 0.05rem;
      }
      &:hover {
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        cursor: pointer;
        color: #dadada;
        background-color: #525252;
        transform: scale(1.01);
      }
    }
  }
`;

const StyledHome = styled.div`
  width: 3rem;
  margin: 0.3rem -0.3rem 0.3rem 0.1rem;
  height: 1.6rem;
  color: #dadada;
  font-size: 14px;
  padding: 0rem;
  background-color: #232323;
  color: #dadada;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
  img {
    margin: auto auto;
    text-align: center;
    height: 0.8rem;
    width: 0.8rem;
  }
  &[data-activeTab="false"] {
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const Tab = (props) => {
  const { text, id, isClosable } = props.tabData;
  const { activeTab, handleTabChange, handleTabClose } = props.mainProp;

  const handleTabClick = (e) => {
    e.stopPropagation();
    handleTabChange(id);
  };

  const onTabClose = (e) => {
    e.stopPropagation();
    handleTabClose(id);
  };

  if (id === "home") {
    return (
      <StyledHome
        key="home"
        id="home"
        data-activetab={activeTab.id === "home"}
        onClick={handleTabClick}
      >
        <img src={HomeIcon} alt="Home" />
      </StyledHome>
    );
  }
  return (
    <StyledTab onClick={handleTabClick} data-activetab={activeTab.id === id}>
      {text && <span className="TabName">{text}</span>}

      {isClosable && (
        <div onClick={onTabClose} className="CloseButtonContainer">
          <i className="CloseButton">
            <span>&times;</span>
          </i>
        </div>
      )}
    </StyledTab>
  );
};

export default Tab;
