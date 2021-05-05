import React from "react";
import { css } from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { LineChart } from "src/app/components/Charts";

export function PriceChart() {
  return (
    <Card css={[cardStyles]}>
      <LineChart />
    </Card>
  );
}

const cardStyles = css`
  height: 200px;

  @media (min-width: 1024px) {
    height: auto;
  }
`;
