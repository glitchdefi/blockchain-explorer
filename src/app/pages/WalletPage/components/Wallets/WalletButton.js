import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// Components
import { Button } from "src/app/components/Button";
import { Text } from "src/app/components/Text";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";

export function WalletButton({ pendingConnectorId, wallet, onClick }) {
  const { t } = useTranslation();
  const { name, connectorId } = wallet || {};
  const isPending = pendingConnectorId === connectorId;

  const PendingView = () => (
    <>
      <Spinner tw="mr-3" />
      <Text tw="text-primary! text-sm">{t("walletPage.initializing")}</Text>
    </>
  );

  return (
    <StyledWalletButton onClick={onClick} disabled={isPending}>
      {isPending ? PendingView() : <Text tw="text-primary!">{name}</Text>}
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
