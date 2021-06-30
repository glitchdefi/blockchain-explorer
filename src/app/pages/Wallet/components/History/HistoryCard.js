import React from "react";
import tw from "twin.macro";

// Components
import { Heading } from "../Heading";
import { CardLayout } from "../CardLayout";
import { Transactions } from "./Transactions";
import { useTranslation } from "react-i18next";

export const HistoryCard = () => {
  const { t } = useTranslation();

  const renderTransactions = () => {
    return <Transactions />;
  };

  return (
    <Wrapper>
      <Heading>{t("common.history")}</Heading>
      <CardLayout tw="py-0">{renderTransactions()}</CardLayout>
    </Wrapper>
  );
};

const Wrapper = tw.div`mt-10`;
