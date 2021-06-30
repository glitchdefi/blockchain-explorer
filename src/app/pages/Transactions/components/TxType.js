import React from "react";
import tw, { styled, theme, css } from "twin.macro";
import { Text } from "src/app/components/Text";

export function TxType({ type }) {
  return (
    <Wrapper type={type}>
      <Text
        bold
        size={theme`fontSize.sm`}
        tw="text-center"
        style={{ color: type === "in" ? theme`colors.in` : theme`colors.out` }}
      >
        {type === "in" ? "In" : "Out"}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ type }) => [
  tw`px-3 py-1 rounded items-center justify-center border border-solid`,
  type === "out" && tw`border-out`,
  type === "in" && tw`border border-in`,
]);
