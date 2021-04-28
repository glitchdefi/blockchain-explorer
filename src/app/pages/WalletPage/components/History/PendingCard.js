import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Heading } from "../Heading";
import { CardLayout } from "../CardLayout";
import { Transactions } from "./Transactions";

export const PendingCard = () => {
  const { t } = useTranslation();

  const renderTransactions = () => {
    return <Transactions />;
  };

  return (
    <Wrapper>
      <Heading>{t("common.pending")} (3)</Heading>
      <CardLayout tw="py-0">{renderTransactions()}</CardLayout>
    </Wrapper>
  );
};

const Wrapper = tw.div`mt-10`;
