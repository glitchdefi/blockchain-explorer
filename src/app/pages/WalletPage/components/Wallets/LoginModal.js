import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

import qrCodeImg from "./assets/qr_code.png";

import { Modal } from "src/app/components/Modal";
import { UserIcon } from "src/app/components/Svg/Icons";
import { Text } from "src/app/components/Text";
import { Image } from "src/app/components/Image";
import { Button } from "src/app/components/Button";

export function LoginModal({ isOpen, onBackdropClick }) {
  const { t } = useTranslation();

  const renderOpenAppButton = () => {
    return (
      <OpenAppButton>
        <Text tw="font-bold uppercase">{t("walletPage.open_your_app")}</Text>
      </OpenAppButton>
    );
  };

  return (
    <>
      <Modal isOpen={isOpen} onBackdropClick={onBackdropClick}>
        <div>
          <div tw="flex w-full items-center">
            <UserIcon />
            <div tw="ml-8">
              <Text tw="font-bold text-xl">{t("walletPage.login")}</Text>
              <Text tw="text-textSecondary! mt-2">
                {t("walletPage.scan_qr_code")}
              </Text>
            </div>
          </div>

          <QRCodeWrapper>
            <Image src={qrCodeImg} width={120} height={120} />
          </QRCodeWrapper>

          <div tw="flex justify-center items-center">
            {renderOpenAppButton()}
          </div>
        </div>
      </Modal>
    </>
  );
}

const QRCodeWrapper = tw.div`flex my-8 justify-center items-center`;

const OpenAppButton = tw(
  Button
)`bg-gradient-to-r from-primary to-secondary px-8 py-3`;
