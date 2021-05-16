import React from "react";
import tw from "twin.macro";

// Components
import { Header } from "./components/Header";
import { ProducerTable } from "./components/ProducerTable";

export function VotePage() {
  return (
    <>
      <Wrapper>
        <Header />
        <ProducerTable data={[1, 2, 3]} />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
