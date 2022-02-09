import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";

import QRCode from "qrcode.react";

// Utils
import { formatWei } from "src/utils/numbers";
import { formatDateTimeUTC, formatTimeAgo, FORMAT_2 } from "src/utils/dates";

// Hooks
import { useTheme } from "src/hooks/useTheme";

// Components
import { Text } from "src/app/components/Text";
import { CopyButton } from "src/app/components/CopyButton";
import { InfoRow } from "src/app/components/InfoRow";
import { QRCode as QRCodeBorder } from "src/app/components/Svg/Icons";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Skeleton } from "src/app/components/Skeleton";
import { Image } from "src/app/components/Image";
import { SkeletonLoading } from "./SkeletonLoading";

export function InfoAddressCard({ loading, address, data, currentPrice }) {
  const {
    evmAddress,
    balance,
    totalReceived,
    totalSpend,
    totalTx,
    lastTxDate,
  } = data || {};
  const totalBalanceToUsd =
    balance && currentPrice ? formatWei(balance, false) * currentPrice : "0";
  const totalReceivedToUsd =
    totalReceived && currentPrice
      ? formatWei(totalReceived, false) * currentPrice
      : "0";
  const totalSpentToUsd =
    totalSpend && currentPrice
      ? formatWei(totalSpend, false) * currentPrice
      : "0";

  return (
    <Wrapper>
      <div tw="flex-1 order-2 lg:order-1">
        <Flex tw="mb-4">
          <Address>{address}</Address>
          <CopyButton text={address} tw="ml-3" />
        </Flex>

        {loading ? (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        ) : (
          <>
            <InfoRow
              isCopy={!!evmAddress}
              label="EVM address"
              value={evmAddress}
              dataTip={evmAddress}
            />

            <InfoRow
              label="Balance"
              customValueComp={
                <Value
                  value={formatWei(balance)}
                  usd={totalBalanceToUsd}
                  price={currentPrice}
                />
              }
            />
            <InfoRow
              label="Total Received"
              customValueComp={
                <Value
                  value={formatWei(totalReceived)}
                  usd={totalReceivedToUsd}
                />
              }
            />
            <InfoRow
              label="Total Spent"
              customValueComp={
                <Value value={formatWei(totalSpend)} usd={totalSpentToUsd} />
              }
            />

            <InfoRow label="Current role" value="Nominator" />
            <InfoRow label="Transactions" value={`${totalTx} Txn`} />
            <InfoRow
              label="Last transaction"
              value={`${formatTimeAgo(lastTxDate)} • (${formatDateTimeUTC(
                lastTxDate,
                FORMAT_2
              )} +UTC)`}
            />
          </>
        )}
      </div>
      <div tw="mb-6 order-1 lg:ml-6 lg:mb-0 lg:order-2">
        {loading ? (
          <div tw="flex items-center justify-center">
            <Skeleton tw="w-52 h-52" />
          </div>
        ) : (
          <div tw="flex items-center justify-center relative">
            <div tw="absolute top-4 bottom-0">
              <QRCode value={address} tw="w-40! h-40!" />
            </div>
            <QRCodeBorder />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Value = ({ value, usd, price }) => {
  const { isDark } = useTheme();
  return (
    <Flex tw="block lg:flex">
      <Flex>
        <Image
          tw="mt-1"
          src={
            isDark
              ? "/images/gl_logo_no_text.png"
              : "/images/gl_logo_no_text_light.png"
          }
          resizeMode
          width={24}
        />
        <ValueWithPrefix tw="ml-3" value={value} usd={usd} />
      </Flex>

      {price && (
        <Text tw="ml-2 text-color6 dark:text-color5">{`• ($${price}/GLCH)`}</Text>
      )}
    </Flex>
  );
};

const Wrapper = tw.div`flex flex-col lg:flex-row p-6 mt-4 bg-color1`;
const Flex = tw.div`flex items-center`;

const Address = styled(Text)(() => [
  tw`text-lg text-primary lg:text-xl xl:text-3xl`,
  css`
    word-break: break-word;
  `,
]);

InfoAddressCard.propTypes = {
  address: PropTypes.string,
};
