import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

import { DEFAULT_META, customMeta } from "../../constants/meta";
import { useTheme } from "src/hooks/useTheme";

// Sub Components
import { Container } from "./Container";
import { PageElementWrap } from "./PageElementWrap";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NetworkBox } from "../components/NetworkBox";

const PageMeta = (meta = {}) => {
  const { pathname } = useLocation();
  const pageMeta = customMeta[pathname] || {};
  const { title, description, image } = {
    ...DEFAULT_META,
    ...pageMeta,
    ...meta,
  };

  return (
    <Helmet titleTemplate={title} defaultTitle={title}>
      <meta name="description" content={description} />
      <meta property="image" content={image} />
    </Helmet>
  );
};
export function Page({ children, meta, ...props }) {
  const { isDark } = useTheme();

  console.log(isDark)
  return (
    <>
      <PageMeta meta={meta} />
      <Container isDark={isDark}>
        <NetworkBox />
        <Header />
        <PageElementWrap tw="mt-4" {...props}>
          {children}
        </PageElementWrap>
        <Footer />
      </Container>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  meta: PropTypes.objectOf({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};
