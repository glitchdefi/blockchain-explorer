import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Container } from "src/app/layouts/Container";
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { Link } from "src/app/components/Link";

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Text tw="text-8xl lg:text-9xl">404</Text>
            <Text tw="text-2xl lg:text-4xl">{t("common.not_found_page")}</Text>
            <Button tw="mt-5 lg:mt-10 bg-gradient-to-r from-primary to-info">
              <Link tw="hover:text-white" href="/">
                {t("notFoundPage.go_back_home_page")}
              </Link>
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = tw.div`w-full h-screen flex items-center justify-center text-center`;
