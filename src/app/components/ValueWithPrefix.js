import React from "react";
import tw from "twin.macro";
import { Text } from "./Text";

export function ValueWithPrefix({
  value,
  usd,
  prefix,
  valueStyles,
  prefixStyles,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <Text css={[valueStyles]}>{value}</Text>
      <Text tw="ml-2 text-color6" css={[prefixStyles]}>
        {prefix || "GLCH"}
      </Text>
      {usd && <Text tw="ml-2 text-color6 dark:text-color5">~ {usd || 0} USD</Text>}
    </Wrapper>
  );
}

const Wrapper = tw.div`flex items-center`;
