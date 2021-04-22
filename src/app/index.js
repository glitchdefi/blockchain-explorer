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
import { WalletPage } from "./pages/WalletPage/Loadable";
import { UserDetailPage } from "./pages/UserDetailPage/Loadable";
import { TransactionDetailsPage } from "./pages/TransactionDetailsPage/Loadable";
import { BlockDetailsPage } from "./pages/BlockDetailsPage/Loadable";
import { EpodDetailsPage } from "./pages/EpodDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage/Loadable";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wallet" component={WalletPage} />
        <Route path="/user-detail" component={UserDetailPage} />
        <Route path="/transaction-details" component={TransactionDetailsPage} />
        <Route path="/block-details" component={BlockDetailsPage} />
        <Route path="/epod-details" component={EpodDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
