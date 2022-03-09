import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";
import { toBN, toWei } from "web3-utils";

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

export function InfoAddressCard({
  loading,
  address,
  balance,
  data,
  currentPrice,
}) {
  const {
    evm_address,
    // total_received,
    // total_spend,
    glitch_address,
    total_tx,
    last_tx_date,
    type,
  } = data || {};

  const { free, reserved } = balance || {};

  const totalBalance = formatWei(
    toBN(toWei(formatWei(free, false))).add(
      toBN(toWei(formatWei(reserved, false)))
    )
  );

  const totalBalanceToUsd =
    totalBalance && currentPrice ? totalBalance * currentPrice : "0";

  // const totalReceivedToUsd =
  //   total_received && currentPrice
  //     ? formatWei(total_received, false) * currentPrice
  //     : "0";

  // const totalSpentToUsd =
  //   total_spend && currentPrice
  //     ? formatWei(total_spend, false) * currentPrice
  //     : "0";

  return (
    <Wrapper>
      <div tw="flex-1 order-2 lg:order-1">
        {glitch_address && (
          <Flex tw="mb-4">
            <Address>{address}</Address>
            <CopyButton text={address} tw="ml-3" />
          </Flex>
        )}

        {loading ? (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        ) : (
          <>
            {evm_address && (
              <InfoRow
                isCopy={!!evm_address}
                label="EVM address"
                value={evm_address}
                dataTip={evm_address}
              />
            )}
            <InfoRow
              label="Balance"
              customValueComp={
                <Value
                  value={totalBalance}
                  usd={totalBalanceToUsd}
                  price={currentPrice}
                />
              }
              dataTip="Sum of the value of all tokens in the account."
            />
            {/* <InfoRow
              label="Total Received"
              customValueComp={
                <Value
                  value={formatWei(total_received)}
                  usd={totalReceivedToUsd}
                />
              }
              dataTip="The amount received on this address."
            />
            <InfoRow
              label="Total Spent"
              customValueComp={
                <Value value={formatWei(total_spend)} usd={totalSpentToUsd} />
              }
              dataTip="The amount spent on this address."
            /> */}
            {type !== null && (
              <InfoRow
                label="Current role"
                value={type === 0 ? "Validator" : "Noninator"}
                dataTip="Validator or Nomidator of this address. (the person who successfully validates transactions and confirms this block in Glitch network)"
              />
            )}
            <InfoRow
              label="Transactions"
              value={`${total_tx} Txn`}
              dataTip="The number of transactions related to this address."
            />
            <InfoRow
              label="Last transaction"
              value={`${formatTimeAgo(last_tx_date)} • (${formatDateTimeUTC(
                last_tx_date,
                FORMAT_2
              )} +UTC)`}
              dataTip="The last time in which the address did transaction."
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
