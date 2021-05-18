import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { Text } from ".";

export function CountUp({ value, size, bold, color, ...props }) {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 1000,
    duration: 1,
    separator: ",",
    // decimals:
    //   // eslint-disable-next-line no-nested-ternary
    //   decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  });

  const updateValue = useRef(update);

  useEffect(() => {
    updateValue.current(value);
  }, [value, updateValue]);

  return (
    <Text size={size} bold={bold} color={color} {...props}>
      {countUp}
    </Text>
  );
}
