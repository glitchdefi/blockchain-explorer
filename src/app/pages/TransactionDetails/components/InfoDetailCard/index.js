import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { isEmpty } from "lodash";

// Hooks
import { useTxByHash } from "src/state/transaction/hooks";
import { useAllGlitchInfo } from "src/state/price/hooks";
import { formatAmount, formatWei } from "src/utils/numbers";
import { formatDateTimeUTC, formatTimeAgo, FORMAT_2 } from "src/utils/dates";

// Components
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Link } from "src/app/components/Link";
import { InfoRow } from "src/app/components/InfoRow";
import { Empty } from "src/app/components/Empty";
import { useTheme } from "src/hooks/useTheme";
import { Status } from "./Status";

export function InfoDetailCard() {
  const params = useParams();
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { isFetchingTxDetails, txDetails } = useTxByHash(params?.hash);
  const { allGlitchInfo } = useAllGlitchInfo();
  const { current_price } = allGlitchInfo || {};
  const { hash, create_at, height, from, to, result_log, gasused, value } =
    txDetails || {};
  const status = result_log === 1 ? "Success" : "Fail";
  const valueToUsd = formatWei(value) * current_price;
  const feeToUsd = formatWei(gasused) * current_price;

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

  const getContent = () => {
    if (isFetchingTxDetails)
      return <LoadingPage title={t("transactionDetails.loading")} />;

    if (!isFetchingTxDetails && isEmpty(txDetails))
      return <Empty title={t("transactionDetails.not_found")} />;

    return (
      <>
        {renderInfoRow({
          isCopy: true,
          label: t("common.hash"),
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
            <Link primary href={`/block/${height}`}>
              {height}
            </Link>
          ),
          dataTip: t("transactionDetails.block_tip"),
        })}

        {renderInfoRow({
          label: t("common.timeStamp"),
          value: `${formatTimeAgo(create_at)} • (${formatDateTimeUTC(
            create_at,
            FORMAT_2
          )} +UTC)`,
          dataTip: t("transactionDetails.time_tip"),
        })}

        {renderInfoRow({
          label: t("common.from"),
          customValueComp: (
            <Link primary href={`/account/${from}`}>
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
            <Link primary href={`/account/${to}`}>
              {to}
            </Link>
          ),
          isCopy: true,
          value: to,
          dataTip: t("transactionDetails.to_tip"),
        })}

        {renderInfoRow({
          label: t("common.amount"),
          customValueComp: (
            <ValueWithPrefix value={formatWei(value)} usd={valueToUsd} />
          ),
          dataTip: t("transactionDetails.amount_tip"),
        })}

        {renderInfoRow({
          label: t("common.txnFee"),
          customValueComp: (
            <ValueWithPrefix value={formatWei(gasused)} usd={feeToUsd} />
          ),
          dataTip: t("transactionDetails.fee_tip"),
        })}
      </>
    );
  };
  return <Wrapper>{getContent()}</Wrapper>;
}

export const Wrapper = tw.div`w-full p-6 bg-color1`;
