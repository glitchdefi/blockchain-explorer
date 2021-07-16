import React from "react";
import tw, { theme } from "twin.macro";

import { Text as TextBase } from "src/app/components/Text";

export const TooltipTable = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.div`bg-color2 py-3 px-5`;

TooltipTable.Text = ({ value, ...props }) => (
  <TextBase
    bold
    size={theme`fontSize.base`}
    color={theme`colors.color7`}
    {...props}
  >
    {value}
  </TextBase>
);
