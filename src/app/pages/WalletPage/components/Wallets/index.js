import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

import { useModal } from "src/app/components/Modal";

// Components
import { Text } from "src/app/components/Text";
import { WalletButton } from "./WalletButton";
import { LoginModal } from "./LoginModal";

export function Wallets() {
  const { t } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useModal();

  const renderWallet = () => {
    return [1, 2, 3, 4, 5, 6].map((wallet) => {
      const onWalletClick = () => {
        openModal();
      };
      return (
        <WalletButton key={wallet} wallet={wallet} onClick={onWalletClick} />
      );
    });
  };

  return (
    <Wrapper>
      <Text tw="text-lg font-bold">{t("walletPage.connect_to_wallet")}</Text>
      <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-3 lg:p-3">
        {renderWallet()}
      </div>

      {/* Modal */}
      <LoginModal isOpen={isModalOpen} onBackdropClick={closeModal} />
    </Wrapper>
  );
}

const Wrapper = tw.div`w-full text-center`;
