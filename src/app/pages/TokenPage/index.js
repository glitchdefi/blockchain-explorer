import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

import { Page } from "src/app/layouts/Page";

// Components
import { Text } from "src/app/components/Text";
import { TokenTable } from "./components/TokenTable";


export function TokenPage() {
  const { t } = useTranslation();

  return (
    <>
      <Page meta={{}}>
        <Wrapper>
          <Text tw="text-16">{t("common.token")}</Text>
          <TokenTable data={[1, 2, 3]} />
        </Wrapper>
      </Page>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
