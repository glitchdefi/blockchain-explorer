import React from "react";
import tw from "twin.macro";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

// Hooks
import { useTxByHash } from "src/state/transaction/hooks";

// Components
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import { Link } from "src/app/components/Link";
import { InfoRow } from "src/app/components/InfoRow";
import { Empty } from "src/app/components/Empty";
import { Status } from "./Status";

export function InfoDetailCard() {
  const params = useParams();
  const { t } = useTranslation();
  const { isFetchingTxDetails, txDetails } = useTxByHash(params?.hash);
  const { hash, time, height, from, to, status } = txDetails || {};

  const renderInfoRow = ({ label, value, customValueComp }) => {
    return (
      <InfoRow label={label} value={value} customValueComp={customValueComp} />
    );
  };

  if (isFetchingTxDetails)
    return <LoadingPage title={t("transactionDetails.loading")} />;

  if (!isFetchingTxDetails && !txDetails)
    return <Empty title={t("transactionDetails.not_found")} />;

  return (
    <Wrapper>
      {renderInfoRow({
        label: t("transactionDetails.transaction_hash"),
        value: hash,
      })}

      {renderInfoRow({
        label: t("common.status"),
        customValueComp: (
          <Status status={status} buttonLabel="100 Blocks Confirmations" />
        ),
      })}

      {renderInfoRow({
        label: t("common.block"),
        value: (
          <Link href={`/block/${height}`} tw="underline">
            {height}
          </Link>
        ),
      })}

      {renderInfoRow({
        label: t("common.timeStamp"),
        value: `${moment(time).fromNow()} (${moment
          .utc(time)
          .format("MMM-DD-YYYY HH:mm:ss A")} +UTC) | Confirmed within 30 secs`,
      })}

      {renderInfoRow({
        label: t("common.from"),
        customValueComp: (
          <Link href={`/address/${from}`} tw="underline">
            {from}
          </Link>
        ),
      })}

      {renderInfoRow({
        label: t("common.to"),
        customValueComp: (
          <Link href={`/address/${from}`} tw="underline">
            {to}
          </Link>
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
