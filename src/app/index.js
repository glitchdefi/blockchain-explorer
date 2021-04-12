/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage/Loadable";
import { NotFoundPage } from "./pages/NotFoundPage/Loadable";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
