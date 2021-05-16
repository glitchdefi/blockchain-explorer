/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Hooks
import { useEagerConnect } from "src/hooks/wallet";

// Components
import { ToastListener } from "src/app/components/Toast/ToastListener";

// Main layout
import { Page } from "./layouts/Page";

// Pages
import { HomePage } from "./pages/Home/Loadable";
import { WalletPage } from "./pages/Wallet/Loadable";
import { VotePage } from "./pages/Vote/Loadable";
import { TokenPage } from "./pages/Token/Loadable";
import { ChartsStatsPage } from "./pages/ChartsStarts/Loadable";
import { TopStatisticsPage } from "./pages/TopStatistics/Loadable";

import { UserDetailPage } from "./pages/UserDetail/Loadable";
import { TransactionDetailsPage } from "./pages/TransactionDetails/Loadable";
import { BlockDetailsPage } from "./pages/BlockDetails/Loadable";
import { EpodDetailsPage } from "./pages/EpodDetails/Loadable";
import { NotFoundPage } from "./pages/NotFound/Loadable";

export function App() {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null;
  }, []);

  useEagerConnect();

  return (
    <BrowserRouter>
      <Page>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/wallet" component={WalletPage} />
          <Route path="/vote" component={VotePage} />
          <Route path="/token" component={TokenPage} />
          <Route path="/charts" component={ChartsStatsPage} />
          <Route path="/topstat" component={TopStatisticsPage} />
          <Route path="/user-detail" component={UserDetailPage} />
          <Route
            path="/transaction-details"
            component={TransactionDetailsPage}
          />
          <Route path="/block-details" component={BlockDetailsPage} />
          <Route path="/epod-details" component={EpodDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Page>
      <ToastListener />
    </BrowserRouter>
  );
}
