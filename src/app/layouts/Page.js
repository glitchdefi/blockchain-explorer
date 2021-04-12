import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

import { DEFAULT_META, customMeta } from "../../constants/meta";

// Sub Components
import { Container } from "./Container";
import { PageElementWrap } from "./PageElementWrap";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
  return (
    <>
      <PageMeta meta={meta} />
      <Container>
        <Header />
        <PageElementWrap {...props}>{children}</PageElementWrap>
        <Footer />
      </Container>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
  meta: PropTypes.objectOf({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};
