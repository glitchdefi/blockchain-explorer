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
import { BlocksPage } from "./pages/Blocks";
import { TransactionsPage } from "./pages/Transactions";

import { AddressDetailsPage } from "./pages/AddressDetails";
import { TransactionDetailsPage } from "./pages/TransactionDetails";
import { BlockDetailsPage } from "./pages/BlockDetails";
import { NotFoundPage } from "./pages/NotFound";
import { SearchNotFoundPage } from "./pages/SearchNotFound";
import { ContactPage } from "./pages/ContactUs";
import { LogsPage } from "./pages/Logs";
import { AllAccountsPage } from "./pages/AllAcounts";
import { NominatorsPage } from "./pages/Nominators";
import { NominatorDetailsPage } from "./pages/NominatorDetails";
import { ValidatorsPage } from "./pages/Validators";
import { ValidatorDetailsPage } from "./pages/ValidatorDetails";

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
                <Route
                  path="/account/:address"
                  component={AddressDetailsPage}
                />
                <Route path="/tx/:hash" component={TransactionDetailsPage} />
                <Route path="/block/:height" component={BlockDetailsPage} />

                <Route path="/contact-us" component={ContactPage} />
                <Route path="/searchNotFound" component={SearchNotFoundPage} />
                <Route path="/logs" component={LogsPage} />
                <Route path="/accounts" component={AllAccountsPage} />
                <Route path="/nominators" component={NominatorsPage} />
                <Route
                  path="/nominator/:address"
                  component={NominatorDetailsPage}
                />
                <Route path="/validators" component={ValidatorsPage} />
                <Route
                  path="/validator/:address"
                  component={ValidatorDetailsPage}
                />
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
