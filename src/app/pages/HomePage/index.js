import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../styles/theme/themeContext";

// Main layout
import { Page } from "../../layouts/Page";

export function HomePage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Page meta={{}}>
        {/* Content here */}
        <div style={{ height: "75vh" }}></div>
      </Page>
    </>
  );
}
