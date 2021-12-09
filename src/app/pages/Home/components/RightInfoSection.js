import React from "react";
import { styled, css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";

import { useTheme } from "src/hooks/useTheme";

import { MarketIcon, VolumnIcon } from "src/app/components/Svg/Icons";
import { Image } from "src/app/components/Image";
import { Text } from "src/app/components/Text";
import { Difference } from "src/app/components/Difference";
import { InfoItem } from "./InfoItem";

export const RightInfoSection = React.memo(() => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <Wrapper>
      <GlitchPriceInfo tw="flex items-center justify-between py-10 px-6">
        <Image
          className="wave-bg"
          src="/images/wave.png"
          resizeMode
          width="100%"
          height={88}
        />

        <div tw="flex items-center absolute left-6">
          <Image
            src={
              isDark
                ? "/images/gl_logo_no_text.png"
                : "/images/gl_logo_no_text_light.png"
            }
            resizeMode
            width={48}
          />

          <Text tw="ml-4" size="20px">
            GLCH
          </Text>
        </div>

        <div tw="flex items-center z-10">
          <Text tw="ml-4 font-semibold" size="20px">
            $1.68
          </Text>
          <Difference tw="ml-2" value={10} />
        </div>
      </GlitchPriceInfo>

      <div tw="flex flex-col justify-center flex-1 py-9 px-6">
        <InfoItem
          icon={<MarketIcon />}
          title={t("homePage.market_cap")}
          value={132618285}
          prefix="$"
          diff={45}
        />

        <div tw="mt-9">
          <InfoItem
            icon={<VolumnIcon />}
            title={t("homePage.market_cap")}
            value={4000000}
            prefix="$"
            diff={117}
          />
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div(() => [
  css`
    display: flex;
    flex-direction: column;
    background-color: ${theme`colors.color1`};
    height: 100%;
  `,
]);

const GlitchPriceInfo = styled.div(() => [
  css`
    position: relative;

    .wave-bg {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
    }
  `,
]);
