import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { TokenTable } from "./components/TokenTable";

export function TokenPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <Text tw="text-lg">{t("common.token")}</Text>
        <TokenTable data={[1, 2, 3]} />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
