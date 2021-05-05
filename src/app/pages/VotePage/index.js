import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

import { Page } from "src/app/layouts/Page";

// Components
import { Header } from "./components/Header";
import { ProducerTable } from "./components/ProducerTable";

export function VotePage() {
  const { t } = useTranslation();

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
