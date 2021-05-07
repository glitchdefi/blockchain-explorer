import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { SupportedWallets } from "src/constants/wallet";
import { useWalletAuth } from "src/hooks/wallet/useWalletAuth";

// Components
import { Text } from "src/app/components/Text";
import { WalletButton } from "./WalletButton";

export function Wallets() {
  const { t } = useTranslation();
  const { active, account, login, logout } = useWalletAuth();
  const [pendingConnectorId, setPendingConnectorId] = useState(null);

  const renderWallet = () => {
    return SupportedWallets.map((wallet, key) => {
      const { connectorId, href } = wallet;

      const onWalletClick = () => {
        if (!href) {
          setPendingConnectorId(connectorId);
          login(connectorId, () => {
            setPendingConnectorId(null);
          });
        }
      };

      return (
        <WalletButton
          pendingConnectorId={pendingConnectorId}
          key={key}
          wallet={wallet}
          onClick={onWalletClick}
        />
      );
    });
  };

  return (
    <Wrapper>
      <Text tw="text-lg font-bold">{t("walletPage.connect_to_wallet")}</Text>
      {/* For testing */}
      <Text tw="mt-3 text-base font-bold">Your Address: {account}</Text>
      <Text onClick={logout} tw="mt-3 text-base font-bold cursor-pointer">
        Logout
      </Text>

      {!active && <WalletWrapper>{renderWallet()}</WalletWrapper>}
    </Wrapper>
  );
}

const Wrapper = tw.div`w-full text-center`;
const WalletWrapper = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-3 lg:p-3`;
