import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { Text } from ".";

export const CountUp = React.memo(
  ({ value, size, bold, color, decimals, prefix, ...props }) => {
    const { countUp, update } = useCountUp({
      start: 0,
      end: value,
      duration: 1,
      separator: ",",
      decimals:
        // eslint-disable-next-line no-nested-ternary
        decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
    });

    useEffect(() => {
      update(value);
    }, [value]);

    return (
      <Text size={size} bold={bold} color={color} {...props}>
        {prefix}
        {countUp}
      </Text>
    );
  },
  (prev, next) => prev.value === next.value
);
