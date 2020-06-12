import React from "react";
import styled from "styled-components";

const StyledTabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row;
  background-color: #2e2e2e;
  height: 2.2rem;
  width: 100%;
  padding: auto 0.2rem;
  margin: 0;

  .TabsContainer {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    width: 75rem;
    padding-right: 5px;
    margin-right: auto;
    margin-left: -5px;
    &:first-child {
      margin-left: 0.2rem;
      > div {
        -webkit-clip-path: polygon(
          9px 0,
          100% 0%,
          calc(100% - 9px) 100%,
          0% 100%
        );
        clip-path: polygon(9px 0, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
        &:first-child {
          -webkit-clip-path: polygon(
            0 0,
            100% 0%,
            calc(100% - 9px) 100%,
            0% 100%
          );
          clip-path: polygon(0 0, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
        }
      }
    }
  }

  .CloseAllContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #1bb953;
    text-decoration: none;
    flex: 0 0 96px;
    right: 0;
    margin: 0;
    padding: 0;

    span {
      text-decoration: underline;
      font-weight: 100;
      font-size: 14px;
      padding-right: 2.5px;
    }
  }
`;

const TabContainer = ({ children, tabsSize, ...props }) => {
  return (
    <StyledTabContainer>
      <div className="TabsContainer">{children}</div>
      {tabsSize != 0 && (
        <div className="CloseAllContainer" onClick={props.handleCloseAllTab}>
          <span>Close All Tabs</span>
        </div>
      )}
    </StyledTabContainer>
  );
};

export default TabContainer;
