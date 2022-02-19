import React from "react";
import { styled, css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";

import { useTheme } from "src/hooks/useTheme";

import { MarketIcon, VolumnIcon } from "src/app/components/Svg/Icons";
import { Image } from "src/app/components/Image";
import { Text } from "src/app/components/Text";
import { Difference } from "src/app/components/Difference";
import { InfoItem } from "./InfoItem";
import { SineWave } from "src/app/components/SineWave";
import { useAllGlitchInfo } from "src/state/price/hooks";

export const RightInfoSection = React.memo(() => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { allGlitchInfo } = useAllGlitchInfo();
  const {
    market_cap,
    current_price,
    price_change_percentage_24h,
    market_cap_change_percentage_24h,
  } = allGlitchInfo || {};

  return (
    <Wrapper>
      <GlitchPriceInfo tw="flex items-center justify-between py-10 px-6">
        <div tw="overflow-hidden absolute left-0 right-0 bottom-0">
          <SineWave />
        </div>

        <div tw="flex items-center z-10 left-6">
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
            {`$${current_price || "--"}`}
          </Text>
          <Difference tw="ml-2" value={price_change_percentage_24h} />
        </div>
      </GlitchPriceInfo>

      <div tw="flex flex-col justify-center flex-1 py-9 px-6">
        <InfoItem
          icon={<MarketIcon />}
          title={t("homePage.market_cap")}
          value={market_cap}
          prefix="$"
          diff={market_cap_change_percentage_24h}
        />

        <div tw="mt-9">
          <InfoItem
            icon={<VolumnIcon />}
            title={t("homePage.volumn_24h")}
            value={0}
            prefix="$"
            diff={null}
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
  `,
]);
