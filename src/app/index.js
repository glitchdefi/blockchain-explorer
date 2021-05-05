/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Main layout
import { Page } from "./layouts/Page";

// Pages
import { HomePage } from "./pages/HomePage/Loadable";
// import { WalletPage } from "./pages/WalletPage/Loadable";
// import { VotePage } from "./pages/VotePage/Loadable";
// import { TokenPage } from "./pages/TokenPage/Loadable";
// import { UserDetailPage } from "./pages/UserDetailPage/Loadable";
// import { TransactionDetailsPage } from "./pages/TransactionDetailsPage/Loadable";
// import { BlockDetailsPage } from "./pages/BlockDetailsPage/Loadable";
// import { EpodDetailsPage } from "./pages/EpodDetailsPage";
// import { TopStatisticsPage } from "./pages/TopStatisticsPage";
// import { ChartsStatsPage } from "./pages/ChartsStartsPage";
// import { NotFoundPage } from "./pages/NotFoundPage/Loadable";


export function App() {
  return (
    <BrowserRouter>
      <Page>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/wallet" component={WalletPage} />
          <Route path="/vote" component={VotePage} />
          <Route path="/token" component={TokenPage} />
          <Route path="/user-detail" component={UserDetailPage} />
          <Route
            path="/transaction-details"
            component={TransactionDetailsPage}
          />
          <Route path="/block-details" component={BlockDetailsPage} />
          <Route path="/epod-details" component={EpodDetailsPage} />
          <Route path="/topstat" component={TopStatisticsPage} />
          <Route path="/charts" component={ChartsStatsPage} />
          <Route component={NotFoundPage} /> */}
        </Switch>
      </Page>
    </BrowserRouter>
  );
}
