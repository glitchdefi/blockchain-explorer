import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Link } from "src/app/components/Link";
import { InfoRow } from "src/app/components/InfoRow";
import { Status } from "./Status";

export function InfoDetailCard() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InfoRow
        label={t("transactionDetails.transaction_hash")}
        value="0x8536eb2fd19553eba8ea82cd055a69d0ea94cfbe43a39cecea9f30cbc7ecf9eb"
      />

      <InfoRow
        label={t("common.status")}
        customValueComp={
          <Status status="Success" buttonLabel="100 Blocks Confirmations" />
        }
      />
      <InfoRow label={t("common.block")} value="111111" />

      <InfoRow
        label={t("common.timeStamp")}
        value=" 1 hr 14 mins ago (Jan-17-2021 03:30:52 PM +UTC) | Confirmed within 30
        secs"
      />

      <InfoRow
        label={t("common.from")}
        customValueComp={
          <Link tw="underline">5A0b54D5dc17e0AadC3832sdsads55858</Link>
        }
      />

      <InfoRow
        label={t("common.to")}
        customValueComp={
          <Link tw="underline">5A0b54D5dc17e0AadC3832dasdsdsa858</Link>
        }
      />

      <InfoRow label={t("common.txnFee")} value="0.0001 GLCH" />
    </Wrapper>
  );
}

export const Wrapper = tw.div`w-full px-1 lg:pl-3`;
