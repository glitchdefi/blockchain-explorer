import React from "react";
import { useTranslation } from "react-i18next";
import tw, { styled, css } from "twin.macro";
import moment from "moment";
import { Text } from "../Text";

const year = moment().year();
const version = "0.0.1";

function Copyrite() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Text tw="text-sm lg:text-base">
        {t("footer.copyrite", { year, version })}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`text-center flex w-full py-4 justify-center lg:justify-end`,
  css`
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.11);
    border-top-style: solid;
  `,
]);

export default Copyrite;
