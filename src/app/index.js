/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Hooks
import { useEagerConnect } from "src/hooks/wallet";

// Components
import { ScrollToTop } from "./components/ScrollToTop";
import { ToastListener } from "src/app/components/Toast/ToastListener";
import { LocalLoader } from "src/app/components/LoadingIndicator/LocalLoader";

// Main layout
import { Page } from "./layouts/Page";

// Pages
import { HomePage } from "./pages/Home";
// import { WalletPage } from "./pages/Wallet";
// import { TokenPage } from "./pages/Token";
import { BlocksPage } from "./pages/Blocks";
import { TransactionsPage } from "./pages/Transactions";
import { VotePage } from "./pages/Vote";
import { ChartsStatsPage } from "./pages/ChartsStats";
import { TopStatisticsPage } from "./pages/TopStatistics";

import { UserDetailPage } from "./pages/UserDetail";
import { TransactionDetailsPage } from "./pages/TransactionDetails";
import { BlockDetailsPage } from "./pages/BlockDetails";
import { EpodDetailsPage } from "./pages/EpodDetails";
import { NotFoundPage } from "./pages/NotFound";
import { ContactPage } from "./pages/ContactUs";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null;
  }, []);

  useEagerConnect();

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        {loading ? (
          <LocalLoader fill={true} />
        ) : (
          <>
            <Page>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/blocks" component={BlocksPage} />
                <Route path="/txs" component={TransactionsPage} />
                {/* <Route path="/vote" component={VotePage} /> */}
                <Route path="/charts" component={ChartsStatsPage} />
                <Route path="/topstat" component={TopStatisticsPage} />
                <Route path="/address/:address" component={UserDetailPage} />
                <Route path="/tx/:hash" component={TransactionDetailsPage} />
                <Route path="/block/:height" component={BlockDetailsPage} />
                <Route path="/epod-details" component={EpodDetailsPage} />

                <Route path="/contactus" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Page>
            <ScrollToTop />
            <ToastListener />
          </>
        )}
      </Suspense>
    </BrowserRouter>
  );
}
