import React from "react";
import tw from "twin.macro";

import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";

export function Header() {
  return (
    <Wrapper>
      <div tw="flex items-center">
        <Text tw="text-lg">Selected Producers</Text>
        <Text tw="text-lg text-textSecondary! ml-3">0/30</Text>
      </div>

      <VoteButton>
        <Text tw="font-bold uppercase">VOTE</Text>
      </VoteButton>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-wrap justify-between items-center`;
const VoteButton = tw(
  Button
)`bg-gradient-to-r from-primary to-secondary px-8 py-2`;
