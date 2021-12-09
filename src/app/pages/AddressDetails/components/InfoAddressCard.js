import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";

import QrCodeImg from "src/assets/images/qr_code.png";

// Utils
import { formatWei } from "src/utils/numbers";

// Hooks
import { useTheme } from "src/hooks/useTheme";

// Components
import { Text } from "src/app/components/Text";
import { CopyButton } from "src/app/components/CopyButton";
import { InfoRow } from "src/app/components/InfoRow";
import { QRCode } from "src/app/components/Svg/Icons";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Skeleton } from "src/app/components/Skeleton";
import { Image } from "src/app/components/Image";
import { SkeletonLoading } from "./SkeletonLoading";

export function InfoAddressCard({
  loading,
  address,
  data,
  currentPrice,
  total,
}) {
  const { balance } = data || {};
  const totalBalanceToUsd =
    balance && currentPrice ? formatWei(balance, false) * currentPrice : "0";

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
            <InfoRow
              isCopy
              label="EVM address"
              value="0x8c6f4De63ec0E55f180E33D29E113826A189AbcD"
              dataTip="0x8c6f4De63ec0E55f180E33D29E113826A189AbcD"
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
              customValueComp={<Value value="0" usd="$0" />}
            />
            <InfoRow
              label="Total Spent"
              customValueComp={<Value value="0" usd="$0" />}
            />

            <InfoRow label="Current role" value="Nominator" />
            <InfoRow label="Transactions" value="1 Txn" />
            <InfoRow
              label="Last transaction"
              value="12 days ago (Jul 11, 2021 - 09:51:54 AM +UTC)"
            />
          </>
        )}
      </div>
      <div tw="lg:ml-6">
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

const Wrapper = tw.div`lg:flex p-6 mt-4 bg-color1`;
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
