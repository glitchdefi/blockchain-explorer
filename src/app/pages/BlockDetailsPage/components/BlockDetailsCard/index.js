import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { TableContainer as Container } from "src/app/components/Table";
import { TabPanel as Card } from "src/app/components/Tab";
import { InfoRow } from "src/app/components/InfoRow";
import { Link } from "src/app/components/Link";

export function BlockDetailsCard() {
  const { t } = useTranslation();

  return (
    <Container tw="mb-8">
      <Card>
        <Wrapper>
          <InfoRow label={t("blockDetails.block_height")} value="11676248" />

          <InfoRow
            label={t("common.timeStamp")}
            value="1 hr 14 mins ago (Jan-17-2021 03:30:52 PM +UTC) | Confirmed within
          30 secs"
          />

          <InfoRow label={t("common.transactions")} value="200" />

          <InfoRow
            label={t("blockDetails.mined_by")}
            customValueComp={
              <Link tw="underline">5A0b54D5dc17e0AadC3832sdsads55858</Link>
            }
          />

          <InfoRow
            label={t("blockDetails.block_reward")}
            value="3.105465374371711284 Ether (2 + 1.105465374371711284)"
          />

          <InfoRow
            label={t("common.difficulty")}
            value="4,153,661,732,410,000"
          />

          <InfoRow
            label={t("blockDetails.total_difficulty")}
            value="20,255,456,233,619,604,483,769"
          />

          <InfoRow label={t("common.size")} value="52,768 bytes" />

          <InfoRow
            label={t("blockDetails.hash")}
            value="8854b325d7069805053399b6dba46612a54a98e872a2b45c6aaa3b3e2997d7c8"
          />
        </Wrapper>
      </Card>
    </Container>
  );
}

export const Wrapper = tw.div`w-full pl-3`;
