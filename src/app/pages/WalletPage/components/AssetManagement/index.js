import React from "react";
import tw from "twin.macro";

// Components
import { InfoGlitchTokenCard } from "./InfoGlitchTokenCard";
import { ValueTokenCard } from "./ValueTokenCard";
import { TokenTransactionTable } from "./TokenTransactionTable";

export function AssetManagement() {
  return (
    <Wrapper>
      <InfoGlitchTokenCard />
      <ValueTokenCard />
      <TokenTransactionTable data={[1, 2, 3]} />
    </Wrapper>
  );
}

const Wrapper = tw.div`lg:(pt-1 px-3 pb-3)`;
