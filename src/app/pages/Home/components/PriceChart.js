import React from "react";
import { css, styled, theme } from "twin.macro";
import { useTranslation } from "react-i18next";

import glLogoNoText from "src/assets/images/gl_logo_no_text.png";

// Utils
import { formatDollarAmount } from "src/utils/numbers";

// Hooks
import { usePriceHistory } from "src/state/price/hooks";

// Components
import { Card } from "src/app/components/Card";
import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";
import { Text } from "src/app/components/Text";
import { Image } from "src/app/components/Image";

export const PriceChart = () => {
  const { t } = useTranslation();
  const { isFetchingPriceHistory, priceHistory } = usePriceHistory();

  return (
    <Wrapper>
      <div tw="flex items-center bg-color2 py-3 px-6">
        <Image src={glLogoNoText} width={48} />
        <div tw="ml-4 pb-1">
          <Text size={theme`fontSize.sm`} color={theme`colors.color6`}>
            {t("homePage.GLCH_price")}
          </Text>
          <Text bold tw="mt-1">
            $0.42 USD
          </Text>
        </div>
      </div>

      <Text
        size={theme`fontSize.sm`}
        color={theme`colors.color7`}
        tw="w-full text-right pt-3 pr-6"
      >
        {t("homePage.GLCH_price_history_7_days")}
      </Text>

      <Card css={[cardStyles]}>
        <LineChart
          loading={isFetchingPriceHistory}
          data={priceHistory}
          xAxis={{ dataKey: "date" }}
          line={{ dataKey: "price" }}
          tooltipContent={({ payload, active }) => {
            if (active) {
              const data = payload?.length ? payload[0].payload : {};
              return (
                <TooltipTable>
                  <TooltipTable.Text value={data.fullStringDate} />
                  <div tw="flex items-center">
                    <TooltipTable.Text
                      value={`${t("common.glitch_price")}:`}
                      tw="text-color6 mr-2"
                    />
                    <TooltipTable.Text
                      value={`${formatDollarAmount(data.price, 2, true)} USD`}
                    />
                  </div>
                </TooltipTable>
              );
            }
            return null;
          }}
        />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  css`
    border-bottom: 1px solid ${theme`colors.color2`};

    @media (min-width: 1024px) {
      border-right: 1px solid ${theme`colors.color2`};
      border-bottom: 0px;
    }
  `,
]);

const cardStyles = css`
  height: 300px;
  align-items: center;
  justify-content: center;
  padding: 0px 16px 20px 0px;

  @media (min-width: 1024px) {
    height: 220px;
  }
`;
