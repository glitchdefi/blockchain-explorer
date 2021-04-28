import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { RankTable } from "./RankTable";

export function TransactionsPanel() {
  const { t } = useTranslation();

  return (
    <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
      <RankTable
        tableName={t("topStatsPage.top_glitch_senders")}
        data={[1, 2, 3]}
      />
      <RankTable
        tableName={t("topStatsPage.top_glitch_receivers")}
        data={[1, 2, 3]}
      />
      <RankTable
        tableName={t("topStatsPage.top_glitch_senders")}
        data={[1, 2, 3]}
      />
      <RankTable
        tableName={t("topStatsPage.top_txn_count_received")}
        data={[1, 2, 3]}
      />
    </div>
  );
}
