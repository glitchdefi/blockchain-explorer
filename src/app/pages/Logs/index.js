import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { LogsTable } from "./components/LogsTable";

export function LogsPage() {
  const { t } = useTranslation();
  const [params, setParams] = useState();

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          {t("common.logs")}
        </Text>
        <div tw="mt-4">
          <LogsTable loading={false} total={20} data={[1, 2, 3, 4, 5, 6]} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
