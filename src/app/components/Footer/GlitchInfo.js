import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

// Components
import { Text } from "../Text";
import { Logo } from "src/app/components/Logo";
import ThemeToggle from "./ThemeToggle";

function GlitchInfo() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo />
      <Text tw="mt-3">{t("footer.powered_by_glitch")}</Text>
      <Text tw="mt-3 text-white opacity-60">{t("footer.glitch_info")}</Text>
      {/* <ThemeToggle /> */}
    </Wrapper>
  );
}

const Wrapper = tw.div`
  text-center 
  lg:(text-left max-w-1/4) 
  xl:max-w-md
`;

export default GlitchInfo;
