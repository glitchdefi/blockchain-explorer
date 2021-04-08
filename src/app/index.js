/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Pages
import { HomePage } from "./pages/HomePage/Loadable";
import { NotFoundPage } from "./pages/NotFoundPage/Loadable";

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Glitch"
        defaultTitle="Glitch"
        htmlAttributes={{ lang: "en" }}
      >
        <meta name="description" content="Glitch" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
