import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";

// Components
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { NotFoundIcon } from "src/app/components/Svg/Icons";

export function SearchNotFoundPage() {
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const { keyword } = location.state || {};

  return (
    <Wrapper
      style={{
        minHeight: "25rem",
      }}
    >
      <div tw="w-3/4">
        <NotFoundIcon />

        <div>
          <Text tw="text-lg lg:text-xl mt-8 text-color6">
            {`${t("searchNotFoundPage.oops")} "`}
            <span tw="text-lg lg:text-xl text-primary">{keyword}</span>
            <span tw="text-lg lg:text-xl mt-8 ml-2 text-color6">{`"${t(
              "searchNotFoundPage.oops2"
            )}`}</span>
          </Text>
        </div>

        <Button shadow tw="p-0 mt-6" onClick={() => history.push("/")}>
          <div tw="flex bg-color7 py-3 px-6">
            <Text tw="text-color1 text-lg">Back Home</Text>
          </div>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex w-full h-full items-center justify-center text-center bg-color1`;
