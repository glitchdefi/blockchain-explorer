import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";

// Utils
import { formatAmount, formatWei } from "src/utils/numbers";

// Hooks
import { useTheme } from "src/hooks/useTheme";

// Components
import { Text } from "src/app/components/Text";
import { CopyButton } from "src/app/components/CopyButton";
import { InfoRow } from "src/app/components/InfoRow";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Image } from "src/app/components/Image";
import { CloseCircleIcon } from "src/app/components/Svg/Icons";
import { SkeletonLoading } from "./SkeletonLoading";

export function InfoNominatorCard({
  loading,
  address,
  balance,
  data,
  currentPrice,
}) {
  const { evmAddress, total_tx } = data || {};

  const { free, reserved } = balance || {};

  const totalBalance =
    parseFloat(formatWei(free, false)) + parseFloat(formatWei(reserved, false));

  const totalBalanceToUsd =
    totalBalance && currentPrice ? totalBalance * currentPrice : "0";

  return (
    <Wrapper>
      <div tw="flex-1">
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
                  value={totalBalance}
                  usd={totalBalanceToUsd}
                  price={currentPrice}
                />
              }
            />
            <InfoRow
              label="Available"
              customValueComp={<Value value="0" usd="$0" />}
            />
            <InfoRow
              label="Locked"
              customValueComp={<Value value="0" usd="$0" />}
            />

            <InfoRow label="Current role" value={null} />
            {/* <InfoRow label="Last seen" value={null} /> */}
            <InfoRow
              label="Transactions"
              value={`${formatAmount(total_tx)} Txns`}
            />
            {/* <InfoRow
              label="Status"
              customValueComp={
                <div tw="flex items-center">
                  <CloseCircleIcon />
                  <Text tw="ml-2">Inactive</Text>
                </div>
              }
            /> */}
          </>
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

InfoNominatorCard.propTypes = {
  address: PropTypes.string,
};
