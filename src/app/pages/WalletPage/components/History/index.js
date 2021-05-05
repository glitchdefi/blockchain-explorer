import React from "react";
import tw from "twin.macro";
import { TokenButton } from "./TokenButton";
import { AddTokenButton } from "./AddTokenButton";
import { PendingCard } from "./PendingCard";
import { HistoryCard } from "./HistoryCard";

export function History() {
  const renderToken = () => {
    return [1, 2, 3, 4].map((token) => {
      return <TokenButton isActive={token === 1} key={token}/>;
    });
  };

  const renderAddToken = () => {
    return <AddTokenButton />;
  };

  return (
    <Wrapper>
      <div tw="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {renderToken()}
        {renderAddToken()}
      </div>

      <PendingCard />
      <HistoryCard />
    </Wrapper>
  );
}

const Wrapper = tw.div`lg:p-6`;
