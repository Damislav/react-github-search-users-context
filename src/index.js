import React from "react";
import ReactDOM from "react-dom";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      redirectUri={window.location.origin}
      clientId="5o6rEqkZylrphEiOfwnUBGkmMpvSsdWQ"
      domain="dev-u7x5uqt0s.eu.auth0.com"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
