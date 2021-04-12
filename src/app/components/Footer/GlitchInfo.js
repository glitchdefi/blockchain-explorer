import React from "react";
import { useTranslation } from "react-i18next";
import tw, { styled } from "twin.macro";

// Components
import { ImageLink } from "../Image";
import { Text } from "../Text";

// Icon
import glLogo from "./assets/logo.png";

const Wrapper = tw.div`
  text-center 
  lg:(text-left max-w-1/4) 
  xl:max-w-md
`;

function GlitchInfo() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ImageLink href="/" src={glLogo} alt="logo" width={60} height={60} />
      <Text tw="mt-3">{t("footer.powered_by_glitch")}</Text>
      <Text tw="mt-3 text-white opacity-60">{t("footer.glitch_info")}</Text>
    </Wrapper>
  );
}

export default GlitchInfo;
