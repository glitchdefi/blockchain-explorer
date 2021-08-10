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
      <Text tw="text-sm text-color6">
        {t("footer.copyrite", { year, version })}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`text-center flex w-full py-4 justify-center lg:justify-end`,
]);

export default Copyrite;
