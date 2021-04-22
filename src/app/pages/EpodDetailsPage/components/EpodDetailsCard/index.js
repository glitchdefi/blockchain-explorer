import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { TableContainer as Container } from "src/app/components/Table";
import { TabPanel as Card } from "src/app/components/Tab";
import { InfoRow } from "src/app/components/InfoRow";
import { Link } from "src/app/components/Link";

export function EpodDetailsCard() {
  const { t } = useTranslation();

  return (
    <Container tw="mb-8">
      <Card>
        <Wrapper>
          <InfoRow
            label={t("epodDetails.number_of_blocks")}
            value="9254/432000"
          />

          <InfoRow label={t("common.started_at")} value="01/01/2021 00:00:00" />

          <InfoRow
            label={t("epodDetails.last_block_at")}
            value="01/01/2021 00:00:00"
          />

          <InfoRow
            label={t("common.transactions")}
            customValueComp={<Link tw="underline">37058</Link>}
          />

          <InfoRow
            label={t("epodDetails.total_output")}
            value="29031503622.13989 GLCH"
          />
        </Wrapper>
      </Card>
    </Container>
  );
}

export const Wrapper = tw.div`w-full py-1 lg:pl-3`;
