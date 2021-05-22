import React from "react";
import { css } from "twin.macro";

// Hooks
import { usePriceHistory } from "src/state/price/hooks";

// Components
import { Card } from "src/app/components/Card";
import { LineChart } from "src/app/components/Charts";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";

export const PriceChart = React.memo(() => {
  const { isFetchingPriceHistory, priceHistory } = usePriceHistory();

  return (
    <Card css={[cardStyles]}>
      {isFetchingPriceHistory ? (
        <Spinner size="30px" />
      ) : (
        <LineChart data={priceHistory} />
      )}
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
