import React from "react";
import ReactTooltip from "react-tooltip";
import { theme } from "twin.macro";

export function Tooltip({ id, place, children, ...props }) {
  return (
    <ReactTooltip
      id={id}
      place={place}
      effect="solid"
      backgroundColor={theme`colors.color2`}
      tw="rounded-none!"
      {...props}
    >
      {children}
    </ReactTooltip>
  );
}
