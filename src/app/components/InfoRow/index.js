import React, { cloneElement, isValidElement } from "react";
import tw, { css, styled } from "twin.macro";

// Components
import { Text as TextBase } from "src/app/components/Text";
import { Label } from "./Label";

export function InfoRow({ label, value, customValueComp }) {
  return (
    <Wrapper>
      <Label>{label}:</Label>
      {isValidElement(customValueComp) && cloneElement(customValueComp)}
      {!customValueComp && <Text>{value}</Text>}
    </Wrapper>
  );
}

const Wrapper = tw.div`my-2 lg:flex flex-wrap items-center w-full`;

const Text = styled(TextBase)(() => [
  tw`text-14 text-white text-opacity-60!`,
  css`
    word-break: break-word;
  `,
]);
