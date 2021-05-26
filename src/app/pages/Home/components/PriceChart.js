import React from "react";
import { css } from "twin.macro";
import { useTranslation } from "react-i18next";

import { formatDollarAmount } from "src/utils/numbers";

// Hooks
import { usePriceHistory } from "src/state/price/hooks";

// Components
import { Card } from "src/app/components/Card";
import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";

export const PriceChart = React.memo(() => {
  const { t } = useTranslation();
  const { isFetchingPriceHistory, priceHistory } = usePriceHistory();

  return (
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
                <TooltipTable.Text
                  value={`${t("common.glitch_price")}: ${formatDollarAmount(
                    data.price,
                    2,
                    true
                  )}`}
                />
              </TooltipTable>
            );
          }
          return null;
        }}
      />
    </Card>
  );
});

const cardStyles = css`
  height: 200px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: auto;
  }
`;
