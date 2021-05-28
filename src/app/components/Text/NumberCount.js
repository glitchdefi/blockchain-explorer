import React from "react";
import tw from "twin.macro";
import { isArray } from "lodash";

import { CountUp } from "./CountUp";
import { Text } from "./index";

export function NumberCount({ value, values, decimals, prefix, ...props }) {
  if (isArray(values)) {
    return !values[0] && !values[1] ? (
      <Flex>
        <Text>--</Text>
        <Text tw="mx-2">-</Text>
        <Text>--</Text>
      </Flex>
    ) : (
      <Flex>
        <CountUp
          value={values[0]}
          decimals={decimals[0]}
          prefix={prefix}
          {...props}
        />
        <Text tw="mx-2">-</Text>
        <CountUp
          value={values[1]}
          decimals={decimals[1]}
          prefix={prefix}
          {...props}
        />
      </Flex>
    );
  }

  if (!value) return <Text>--</Text>;

  return (
    <CountUp value={value} decimals={decimals} prefix={prefix} {...props} />
  );
}

const Flex = tw.div`flex items-center`;
