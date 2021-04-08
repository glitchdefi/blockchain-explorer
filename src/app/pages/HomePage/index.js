import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../../styles/theme/themeContext";

// Sub Components
import { Footer } from "../../components/Footer";

export function HomePage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Helmet
        titleTemplate="Home Page"
        defaultTitle="Home Page"
        htmlAttributes={{ lang: "en" }}
      >
        <meta name="description" content="Home Page" />
      </Helmet>
    </>
  );
}
