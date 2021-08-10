import React from "react";
import ReactTooltip from "react-tooltip";
import { useTheme } from "src/hooks/useTheme";
import { theme } from "twin.macro";

export function Tooltip({ id, place, children, ...props }) {
  const { isDark } = useTheme();
  return (
    <ReactTooltip
      id={id}
      place={place}
      effect="solid"
      backgroundColor={isDark ? theme`colors.color2` : theme`colors.color1`}
      textColor={theme`colors.color7`}
      tw="rounded-none! shadow-xl opacity-100!"
      {...props}
    >
      {children}
    </ReactTooltip>
  );
}
