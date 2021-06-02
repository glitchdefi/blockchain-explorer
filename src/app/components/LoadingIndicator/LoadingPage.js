import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";
import { Text } from "../Text";
import { Spinner } from "./Spinner";

export function LoadingPage({ title }) {
  const { t } = useTranslation();

  return (
    <div tw="flex flex-col justify-center items-center h-60">
      <Spinner size="30px" />
      <Text tw="mt-3 text-primary">{title || t("common.loading")}</Text>
    </div>
  );
}
