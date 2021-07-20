import React from "react";
import { useTranslation } from "react-i18next";
import tw, { css, theme } from "twin.macro";

// Components
import { Text } from "../Text";
import { Logo } from "src/app/components/Logo";
import NavBar from "./NavBar";
import Copyrite from "./Copyright";

function GlitchInfo() {
  const { t } = useTranslation();

  return (
    <Wrapper
      css={css`
        border-top: 1px solid ${theme`colors.color15`};
      `}
    >
      <Logo />
      <Flex tw="mt-4">
        <Text tw="text-color7">{t("footer.powered_by_glitch")}</Text>
        <NavBar />
      </Flex>

      <Flex>
        <Text tw="text-sm text-color6">{t("footer.glitch_info")}</Text>
        <Copyrite />
      </Flex>
    </Wrapper>
  );
}

const Wrapper = tw.div`text-center lg:text-left pt-6`;

const Flex = tw.div`
   mt-1 text-center items-center lg:(flex justify-between text-left)
`;

export default GlitchInfo;
