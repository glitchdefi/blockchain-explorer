import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { isEmpty } from "lodash";

// Utils
import { formatWei } from "src/utils/numbers";

// Hooks
import { useTxByHash } from "src/state/transaction/hooks";

// Components
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import { Link } from "src/app/components/Link";
import { InfoRow } from "src/app/components/InfoRow";
import { Empty } from "src/app/components/Empty";
import { Status } from "./Status";
import {
  D_FOR_DETAIL,
  formatDateTimeUTC,
  formatTimeAgo,
} from "src/utils/dates";

export function InfoDetailCard() {
  const params = useParams();
  const { t } = useTranslation();
  const { isFetchingTxDetails, txDetails } = useTxByHash(params?.hash);
  const { hash, create_at, height, from, to, result_log, gasused, value } =
    txDetails || {};
  const status = result_log === 1 ? "Success" : "Fail";

  const renderInfoRow = ({
    label,
    value,
    customValueComp,
    isCopy,
    dataTip,
  }) => {
    return (
      <InfoRow
        label={label}
        value={value}
        customValueComp={customValueComp}
        isCopy={isCopy}
        dataTip={dataTip}
      />
    );
  };

  if (isFetchingTxDetails)
    return <LoadingPage title={t("transactionDetails.loading")} />;

  if (!isFetchingTxDetails && isEmpty(txDetails))
    return <Empty title={t("transactionDetails.not_found")} />;

  return (
    <Wrapper>
      {renderInfoRow({
        isCopy: true,
        label: t("transactionDetails.transaction_hash"),
        value: hash,
        dataTip: t("transactionDetails.hash_tip"),
      })}

      {renderInfoRow({
        label: t("common.status"),
        customValueComp: (
          <Status status={status} buttonLabel="100 Blocks Confirmations" />
        ),
        dataTip: t("transactionDetails.status_tip"),
      })}

      {renderInfoRow({
        label: t("common.block"),
        value: (
          <Link href={`/block/${height}`} tw="underline">
            {height}
          </Link>
        ),
        dataTip: t("transactionDetails.block_tip"),
      })}

      {renderInfoRow({
        label: t("common.timeStamp"),
        value: `${formatTimeAgo(create_at)} (${formatDateTimeUTC(
          create_at,
          D_FOR_DETAIL
        )} +UTC)`,
        dataTip: t("transactionDetails.time_tip"),
      })}

      {renderInfoRow({
        label: t("common.from"),
        customValueComp: (
          <Link href={`/address/${from}`} tw="underline">
            {from}
          </Link>
        ),
        isCopy: true,
        value: from,
        dataTip: t("transactionDetails.from_tip"),
      })}

      {renderInfoRow({
        label: t("common.to"),
        customValueComp: (
          <Link href={`/address/${to}`} tw="underline">
            {to}
          </Link>
        ),
        isCopy: true,
        value: to,
        dataTip: t("transactionDetails.to_tip"),
      })}

      {renderInfoRow({
        label: t("common.value"),
        value: `${formatWei(value)} GLCH`,
        dataTip: t("transactionDetails.value_tip"),
      })}

      {renderInfoRow({
        label: t("common.txnFee"),
        value: `${formatWei(gasused)} GLCH`,
        dataTip: t("transactionDetails.fee_tip"),
      })}
    </Wrapper>
  );
}

export const Wrapper = tw.div`w-full px-1 py-3 lg:pl-6`;
