import React from "react";

import { CountUp } from "./CountUp";
import { Text } from "./index";

export function NumberCount({ value, decimals, prefix, ...props }) {
  if (!value && value !== 0) return <Text>--</Text>;

  return (
    <CountUp value={value} decimals={decimals} prefix={prefix} {...props} />
  );
}
