import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Container } from "../../layouts/Container";
import { Text } from "../../components/Text";

const Wrapper = tw.div`w-full h-full flex items-center justify-center text-center`;

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Text tw="text-9xl">404</Text>
            <Text tw="text-4xl">{t("not_found_page")}</Text>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
