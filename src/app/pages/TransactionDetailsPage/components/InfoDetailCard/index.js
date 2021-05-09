import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { LinkExternal } from "src/app/components/Link/LinkExternal";
import { InfoRow } from "src/app/components/InfoRow";
import { Status } from "./Status";

export function InfoDetailCard() {
  const { t } = useTranslation();

  const renderInfoRow = ({ label, value, customValueComp }) => {
    return (
      <InfoRow label={label} value={value} customValueComp={customValueComp} />
    );
  };

  return (
    <Wrapper>
      {renderInfoRow({
        label: t("transactionDetails.transaction_hash"),
        value:
          "0x8536eb2fd19553eba8ea82cd055a69d0ea94cfbe43a39cecea9f30cbc7ecf9eb",
      })}

      {renderInfoRow({
        label: t("common.status"),
        customValueComp: (
          <Status status="Success" buttonLabel="100 Blocks Confirmations" />
        ),
      })}

      {renderInfoRow({
        label: t("common.block"),
        value: "111111",
      })}

      {renderInfoRow({
        label: t("common.timeStamp"),
        value:
          "1 hr 14 mins ago (Jan-17-2021 03:30:52 PM +UTC) | Confirmed within 30 secs",
      })}

      {renderInfoRow({
        label: t("common.from"),
        customValueComp: (
          <LinkExternal tw="underline">
            5A0b54D5dc17e0AadC3832sdsads55858
          </LinkExternal>
        ),
      })}

      {renderInfoRow({
        label: t("common.to"),
        customValueComp: (
          <LinkExternal tw="underline">
            5A0b54D5dc17e0AadC3832sdsads55858
          </LinkExternal>
        ),
      })}

      {renderInfoRow({
        label: t("common.txnFee"),
        value: "0.0001 GLCH",
      })}
    </Wrapper>
  );
}

export const Wrapper = tw.div`w-full px-1 py-3 lg:pl-6`;
