import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";
import { toBN, toWei } from "web3-utils";

// Utils
import {
  formatAmount,
  formatNumber,
  formatWei,
  numberWithCommas,
} from "src/utils/numbers";

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
  const { evm_address, total_tx, type } = data || {};

  const { free, reserved, miscFrozen } = balance || {};

  const totalBalance = formatWei(
    toBN(toWei(formatWei(free, false))).add(
      toBN(toWei(formatWei(reserved, false)))
    ),
    false
  );
  const totalBalanceToUsd =
    totalBalance && currentPrice ? totalBalance * currentPrice : "0";

  const available = formatWei(
    toBN(toWei(formatWei(free, false))).sub(
      toBN(toWei(formatWei(miscFrozen, false)))
    ),
    false
  );
  const availableToUsd =
    available && currentPrice ? available * currentPrice : "0";

  const locked = formatWei(
    toBN(toWei(formatWei(reserved, false))).add(
      toBN(toWei(formatWei(miscFrozen, false)))
    ),
    false
  );
  const lockedToUsd = locked && currentPrice ? locked * currentPrice : "0";

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
            {evm_address && (
              <InfoRow
                isCopy={!!evm_address}
                label="EVM address"
                value={evm_address}
                dataTip="Linked account managed by EVM pallet."
              />
            )}

            <InfoRow
              label="Balance"
              customValueComp={
                <Value
                  value={numberWithCommas(totalBalance)}
                  usd={formatNumber(totalBalanceToUsd, 2)}
                  price={currentPrice}
                />
              }
              dataTip="Sum of the value of all tokens in the account."
            />
            <InfoRow
              label="Available"
              customValueComp={
                <Value
                  value={numberWithCommas(available)}
                  usd={formatNumber(availableToUsd, 2)}
                />
              }
            />
            <InfoRow
              label="Locked"
              customValueComp={
                <Value
                  value={numberWithCommas(locked)}
                  usd={formatNumber(lockedToUsd, 2)}
                />
              }
            />

            {type !== null && (
              <InfoRow
                label="Current role"
                value={type === 0 ? "Validator" : "Noninator"}
                dataTip="Validator or Nomidator of this address. (the person who successfully validates transactions and confirms this block in Glitch network)"
              />
            )}
            {/* <InfoRow label="Last seen" value={null} /> */}
            <InfoRow
              label="Transactions"
              value={`${formatAmount(total_tx)} Txns`}
              dataTip="The number of transactions related to this address."
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
        <ValueWithPrefix tw="ml-3" isCustomFormat value={value} usd={usd} />
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
