import React from "react";
import { useTranslation } from "react-i18next";
import tw, { styled, css } from "twin.macro";
import moment from "moment";
import { Text } from "../Text";

const Wrapper = styled.div(() => [
  tw`flex w-full py-4 justify-end`,
  css`
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.11);
    border-top-style: solid;
  `,
]);

const year = moment().year();
const version = "22.0.9";

function Copyrite() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Text tw="text-xs">{t("footer.copyrite", { year, version })}</Text>
    </Wrapper>
  );
}

export default Copyrite;
