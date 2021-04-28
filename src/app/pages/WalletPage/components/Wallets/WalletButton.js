import React from "react";
import tw, { styled, css } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Button } from "src/app/components/Button";
import { Text } from "src/app/components/Text";

export function WalletButton({ wallet, onClick }) {
  const { name } = wallet || {};

  return (
    <StyledWalletButton onClick={onClick}>
      <Text tw="text-primary!">Wallet {name}</Text>
    </StyledWalletButton>
  );
}

const StyledWalletButton = styled(Button)(() => [
  tw`p-6`,
  css`
    background-color: rgba(36, 198, 201, 0.15);
  `,
]);

WalletButton.propTypes = {
  wallet: PropTypes.object,
  onClick: PropTypes.func,
};
