import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Button } from "src/app/components/Button";
import { Text } from "src/app/components/Text";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";

export function WalletButton({ pendingConnectorId, wallet, onClick }) {
  const { name, connectorId } = wallet || {};
  const isPending = pendingConnectorId === connectorId;

  return (
    <StyledWalletButton onClick={onClick}>
      {isPending ? (
        <>
          <Spinner tw="mr-3" />
          <Text tw="text-primary!">Initializing...</Text>
        </>
      ) : (
        <Text tw="text-primary!">{name}</Text>
      )}
    </StyledWalletButton>
  );
}

const StyledWalletButton = styled(Button)(() => [
  tw`p-6`,
  css`
    background-color: ${theme`colors.bg1`};
  `,
]);

WalletButton.propTypes = {
  wallet: PropTypes.object,
  onClick: PropTypes.func,
};
