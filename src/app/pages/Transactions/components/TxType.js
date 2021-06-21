import React from "react";
import tw, { styled, theme } from "twin.macro";
import { Text } from "src/app/components/Text";

export function TxType({ type }) {
  return (
    <Wrapper type={type}>
      <Text bold size={theme`fontSize.sm`} tw="text-center">
        {type?.toUpperCase()}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ type }) => [
  tw`px-3 py-1 rounded items-center justify-center`,
  type === "out" && tw`bg-secondary`,
  type === "in" && tw`bg-primary`,
]);
