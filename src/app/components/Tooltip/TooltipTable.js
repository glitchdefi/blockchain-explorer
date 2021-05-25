import React from "react";
import tw, { theme } from "twin.macro";

import { Text as TextBase } from "src/app/components/Text";

export const TooltipTable = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.div`bg-white rounded py-3 px-5`;

TooltipTable.Text = ({ value }) => (
  <TextBase bold size={theme`fontSize.sm`} color={theme`colors.text2`}>
    {value}
  </TextBase>
);
