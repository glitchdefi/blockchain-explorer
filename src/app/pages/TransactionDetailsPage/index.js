import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { Page } from "src/app/layouts/Page";

// Components
import { Text } from "src/app/components/Text";
import { TabSections } from "./components/TabSections";

export function TransactionDetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Page meta={{}}>
        <div tw="mb-4">
          <Text tw="text-16">{t("transactionDetails.title")}</Text>
          <TabSections />
        </div>
      </Page>
    </>
  );
}