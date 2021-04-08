import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet
        titleTemplate="Not Found Page"
        defaultTitle="Not Found Page"
        htmlAttributes={{ lang: "en" }}
      >
        <meta name="description" content="Not Found Page" />
      </Helmet>
      <div>Not Found Page</div>
    </>
  );
}
