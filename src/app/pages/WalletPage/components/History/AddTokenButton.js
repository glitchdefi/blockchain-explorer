import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { AddCircleIcon } from "src/app/components/Svg/Icons";
import { Wrapper as TokenButtonWrapper } from "./TokenButton";
import { Text } from "../Text";

export function AddTokenButton(props) {
  const { t } = useTranslation();
  const { ...rest } = props;

  return (
    <TokenButtonWrapper tw="py-3.5" {...rest}>
      <div tw="flex items-center">
        <AddCircleIcon />
        <Text tw="ml-3">{t("walletPage.add_token")}</Text>
      </div>
    </TokenButtonWrapper>
  );
}
