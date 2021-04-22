import React from "react";
import tw from "twin.macro";

import { InfoIcon } from "src/app/components/Icons";
import { Text as TextBase } from "src/app/components/Text";

export function Label({ children }) {
  return (
    <Wrapper>
      <InfoIcon />
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-wrap items-center w-full lg:w-1/4`;
export const Text = tw(TextBase)`text-14 text-white text-opacity-60! ml-2 lg:ml-6 py-2`;
