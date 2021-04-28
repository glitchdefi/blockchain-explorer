import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { InfoGlitchTokenCard } from "./InfoGlitchTokenCard";
import { ValueTokenCard } from "./ValueTokenCard";
import { TokenTransactionTable } from "./TokenTransactionTable";

export function AssetManagement() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InfoGlitchTokenCard />
      <ValueTokenCard />
      <TokenTransactionTable data={[1, 2, 3]} />
    </Wrapper>
  );
}

const Wrapper = tw.div`p-6`;
