import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Heading } from "../Heading";
import { CardLayout } from "../CardLayout";
import { Text } from "../Text";
import { NumberChange } from "src/app/components/NumberChange";

export function ValueTokenCard() {
  const { t } = useTranslation();

  return (
    <div tw="mt-10">
      <Heading>Token</Heading>
      <CardLayout>
        <GridWrap>
          <FlexLayout>
            <Title>{t("walletPage.value_in_glitch")}</Title>
            <Value>100,000</Value>
          </FlexLayout>
          <FlexLayout>
            <Title>{t("walletPage.value_in_usd")}</Title>
            <NumberChange value="100,000" diff={"15%"} />
          </FlexLayout>
        </GridWrap>
      </CardLayout>
    </div>
  );
}

const GridWrap = styled.div(() => [
  tw`grid grid-cols-2 gap-4 w-full`,
  css`
    .number-change-value {
      font-size: 18px;
      font-weight: bold;
      color: ${theme`colors.primary`};
      ${tw`mt-2`}
    }

    @media (min-width: 1024px) {
      .number-change-value {
        font-size: 20px;
      }
    }
  `,
]);
const FlexLayout = tw.div`flex flex-col items-center justify-center w-full`;
const Title = tw(Text)`text-base uppercase`;
const Value = tw(Text)`text-xl text-primary! font-bold mt-2`;
