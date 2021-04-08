/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import FontFaceObserver from "fontfaceobserver";
import reportWebVitals from "./reportWebVitals";

import { HelmetProvider } from "react-helmet-async";

// Redux
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configureStore";

// Theme
import { ThemeProvider } from "./styles/theme/themeContext";
import "./styles/global-styles.css";

// Initialize languages
import "./locales/i18n";

import { App } from "./app";

// Observe loading of PT Mono (to remove 'PT Mono', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver("PT Mono", {});

// When PT Mono is loaded, add a font-family using PT Mono to the body
openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded");
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(["./locales/i18n"], () => {
    // No need to render the App again because i18next works with the hooks
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
