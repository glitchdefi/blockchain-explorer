import React from "react";
import tw, { theme } from "twin.macro";

import { Text as TextBase } from "src/app/components/Text";

export const TooltipTable = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.div`bg-color1 dark:bg-color2 py-3 px-5 shadow-xl`;

TooltipTable.Text = ({ value, ...props }) => (
  <TextBase
    size={theme`fontSize.sm`}
    color={theme`colors.color7`}
    {...props}
  >
    {value}
  </TextBase>
);
