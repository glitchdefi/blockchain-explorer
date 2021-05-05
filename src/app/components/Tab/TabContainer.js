import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const TabsContext = createContext();
export function TabContainer({ children, orientation }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabsContext.Provider
      value={{ tabIndex: 0, panelIndex: 0, activeTab, setActiveTab }}
    >
      <Wrapper orientation={orientation}>{children}</Wrapper>
    </TabsContext.Provider>
  );
}

const Wrapper = styled.div(({ orientation }) => [
  tw`block max-w-full`,
  orientation === "vertical" && tw`lg:flex`,
]);

TabContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  orientation: PropTypes.string,
};

TabContainer.defaultProps = {
  orientation: "horizontal",
};
