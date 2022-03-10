import React from "react";
import tw from "twin.macro";
import { formatDollarAmount } from "src/utils/numbers";
import { Text } from "./Text";

export function ValueWithPrefix({
  value,
  usd,
  prefix,
  valueStyles,
  prefixStyles,
  isCustomFormat,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <Text css={[valueStyles]}>{`${value} GLCH`}</Text>
      {/* <Text tw="ml-2 text-color6" css={[prefixStyles]}>
        {prefix || "GLCH"}
      </Text> */}
      {usd ? (
        <Text tw="ml-2 text-color6 dark:text-color5">
          ~ {isCustomFormat ? usd : formatDollarAmount(usd, 2, false)} USD
        </Text>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = tw.div`flex items-center`;
