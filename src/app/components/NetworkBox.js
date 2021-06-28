import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useHandleNetworkBox } from "src/hooks/useHandleNetworkBox";

// Constants
import { SHOW_NETWORK_BOX } from "src/constants";

// Icons
import CloseIcon from "../../assets/images/close_ic.png";

// Components
import { Button } from "./Button";
import { Image } from "./Image";
import { Text } from "./Text";

export function NetworkBox() {
  const { t } = useTranslation();
  const { isUserClosed, onClose } = useHandleNetworkBox();

  if (!SHOW_NETWORK_BOX || isUserClosed) return null;

  return (
    <Wrapper>
      <Text bold tw="text-text3">
        {t("common.network_box", { network: "Testnet" })}
      </Text>
      <Button tw="p-2 absolute right-3" onClick={onClose}>
        <Image src={CloseIcon} tw="w-3 h-3" />
      </Button>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex relative w-full p-5 bg-bg9 items-center justify-center`;
