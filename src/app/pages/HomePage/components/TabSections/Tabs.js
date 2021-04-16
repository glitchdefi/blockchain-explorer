import React from "react";
import tw from "twin.macro";
import { Tab } from "src/app/components/Tab";

export function Tabs() {
  return (
    <Wrapper>
      <Tab isActive>Producer</Tab>
      <Tab>Epoch</Tab>
      <Tab>Transactions</Tab>
      <Tab>Block</Tab>
    </Wrapper>
  );
}

const Wrapper = tw.div`grid grid-cols-4 gap-6`;
