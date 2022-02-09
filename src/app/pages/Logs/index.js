import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

import { useLogList, useLogsSlice } from "src/state/logs/hooks";

// Components
import { Text } from "src/app/components/Text";
import { LogsTable } from "./components/LogsTable";

export function LogsPage() {
  useLogsSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();

  const { isFetchingLogs, data, total } = useLogList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          {t("common.logs")}
        </Text>
        <div tw="mt-4">
          <LogsTable
            loading={isFetchingLogs}
            total={total}
            data={data}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
