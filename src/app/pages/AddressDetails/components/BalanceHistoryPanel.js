import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAddressBalanceHistory } from "src/state/address/hooks";

import { BalanceHistoryChart } from "src/app/components/Shared/BalanceHistoryChart";
import { formatWei } from "src/utils/numbers";

export const BalanceHistoryPanel = React.memo(() => {
  const { address } = useParams();
  const { isFetchingAddressBalanceHistory, addressBalanceHistory } =
    useAddressBalanceHistory(address);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (addressBalanceHistory?.length) {
      const data = addressBalanceHistory.map((o) => {
        return {
          balance: Number(formatWei(o?.balance)),
          block: o?.blockIndex,
        };
      });

      setChartData(data);
    }
  }, [addressBalanceHistory]);

  return (
    <BalanceHistoryChart
      loading={isFetchingAddressBalanceHistory}
      data={chartData}
    />
  );
});
