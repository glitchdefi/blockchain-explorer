import React from "react";
import tw, { styled, css } from "twin.macro";

export function TabContentWrapper({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <div className="tab-content">
        <div className="inner">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  css`
    border-radius: 0 0px 5px 5px;
    position: relative;
    padding-left: 12px;
    padding-right: 12px;
    &:before {
      content: '';
      display: block;
      width: 30px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: rgba(191, 40, 228, 0.16);
    }
    &:after {
      content: '';
      display: block;
      width: 30px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(36, 198, 201, 0.3);
    }
    .inner {
      position: relative;
      z-index: 2;
      background-color: #1C2A2F;
      padding: 30px;
      border-radius: 0 0px 5px 5px;
    }
  `,
]);
