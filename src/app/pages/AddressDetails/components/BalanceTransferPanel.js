import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { BalanceTransferTable } from "src/app/components/Shared/BalanceTransferTable";
import { useAddressBalanceTx } from "src/state/address/hooks";

export const BalanceTransferPanel = () => {
  const [params, setParams] = useState();

  const { address } = useParams();
  const { isFetchingAddressBalanceTx, data, total } = useAddressBalanceTx(
    address,
    params
  );

  return (
    <BalanceTransferTable
      loading={isFetchingAddressBalanceTx}
      total={total}
      data={data}
      onChange={(p) => setParams(p)}
    />
  );
};
