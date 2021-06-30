import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Container as ContainerBase } from "src/app/layouts/Container";
import { Text } from "src/app/components/Text";

export function SearchNotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Container
        style={{
          minHeight: "15rem",
        }}
      >
        <Wrapper>
          <Text tw="text-xl lg:text-2xl font-bold">
            {t("searchNotFoundPage.oops")}
          </Text>
          <Text tw="mt-2">{t("searchNotFoundPage.please_enter")}</Text>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = tw(ContainerBase)`flex  items-center justify-center`;
const Wrapper = tw.div`w-full h-full items-center justify-center text-center`;
