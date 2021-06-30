import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import { Text } from "../../Text";
import { StyledTab } from "./StyledTab";
import { useTabState } from "../hooks/useTabState";

export function Tab(props) {
  const { children, evtKey, tabStyles, leftIcon, onClick, ...rest } = props;
  const { isActive, onChangeTab } = useTabState(evtKey);

  return (
    <StyledTab
      isActive={isActive}
      tabStyles={tabStyles}
      onClick={() => {
        onChangeTab();
        onClick && onClick();
      }}
      {...rest}
    >
      <LabelWrapper>
        {isValidElement(leftIcon) && (
          <LeftIconWrapper>{cloneElement(leftIcon)}</LeftIconWrapper>
        )}
        <Text className="tab-label" tw="flex-grow w-full text-left">
          {children}
        </Text>
      </LabelWrapper>
    </StyledTab>
  );
}

const LabelWrapper = tw.div`flex items-center w-full`;
const LeftIconWrapper = tw.div`w-1/4 mr-3`;
Tab.propTypes = {
  children: PropTypes.any,
  leftIcon: PropTypes.element,
  tabStyles: PropTypes.shape({
    label: PropTypes.shape({
      color: PropTypes.string,
      activeColor: PropTypes.string,
      size: PropTypes.string,
    }),
  }),
  onClick: PropTypes.func,
  evtKey: PropTypes.string,
};

Tab.defaultProps = {
  tabStyles: {
    label: {},
  },
};
