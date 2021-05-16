import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { TabSections } from "./components/TabSections";

export function TransactionDetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div tw="mb-4">
        <Text tw="text-base lg:text-lg">{t("transactionDetails.title")}</Text>
        <TabSections />
      </div>
    </>
  );
}
