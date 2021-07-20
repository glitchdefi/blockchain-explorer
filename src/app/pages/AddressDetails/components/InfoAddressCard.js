import React from "react";
import tw, { css, styled, theme } from "twin.macro";
import PropTypes from "prop-types";

import QrCodeImg from "src/assets/images/qr_code.png";

// Components
import { Text } from "src/app/components/Text";
import { CopyButton } from "src/app/components/CopyButton";
import { formatTimeAgo } from "src/utils/dates";
import { InfoRow } from "src/app/components/InfoRow";
import { LogoIcon, QRCode } from "src/app/components/Svg/Icons";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { formatDollarAmount, formatNumber, formatWei } from "src/utils/numbers";
import { SkeletonLoading } from "./SkeletonLoading";
import { Skeleton } from "src/app/components/Skeleton";
import { Image } from "src/app/components/Image";

export function InfoAddressCard({
  loading,
  address,
  data,
  currentPrice,
  total,
}) {
  const { balance } = data || {};
  const totalBalanceToUsd =
    balance && currentPrice
      ? formatDollarAmount(formatWei(balance, false) * currentPrice, 2, false)
      : "--";

  return (
    <Wrapper>
      <div tw="flex-1">
        <Flex tw="mb-4">
          <Address>{address}</Address>
          <CopyButton text={address} tw="ml-3" />
        </Flex>

        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            {/* <Text tw="text-sm text-color5 mt-2">Last transaction: --</Text> */}

            {/* <Text tw="text-sm text-color5 mt-2 mb-4">
              Transactions: {formatNumber(total)}
            </Text> */}

            <InfoRow
              label="Balance"
              css={[
                css`
                  border-top: 1px solid ${theme`colors.color2`};
                `,
              ]}
              customValueComp={
                <Value
                  value={formatWei(balance)}
                  usd={totalBalanceToUsd}
                  price={currentPrice}
                />
              }
            />
            {/* <InfoRow
              label="Total Received"
              customValueComp={<Value value="0" usd="$0" />}
            />
            <InfoRow
              label="Total Spend"
              customValueComp={<Value value="0" usd="$0" />}
            /> */}
          </>
        )}
      </div>
      {/* <div tw="lg:ml-6 p-8">
        {loading ? (
          <Skeleton tw="w-52 h-52" />
        ) : (
          <div tw="flex items-center justify-center relative">
            <div tw="absolute top-4 bottom-0">
              <Image src={QrCodeImg} tw="w-40 h-40" />
            </div>
            <QRCode />
          </div>
        )}
      </div> */}
    </Wrapper>
  );
}

const Value = ({ value, usd, price }) => {
  return (
    <Flex tw="block lg:flex">
      <Flex>
        <LogoIcon />
        <ValueWithPrefix tw="ml-3" value={value} usd={usd} />
      </Flex>

      {price && (
        <Text tw="ml-2 text-color6 dark:text-color5">{`• ($${price}/GLCH)`}</Text>
      )}
    </Flex>
  );
};

const Wrapper = tw.div`lg:flex items-center p-6 mt-4 bg-color1`;
const Flex = tw.div`flex items-center`;

const Address = styled(Text)(() => [
  tw`text-lg lg:text-xl`,
  css`
    word-break: break-word;
  `,
]);

InfoAddressCard.propTypes = {
  address: PropTypes.string,
};
