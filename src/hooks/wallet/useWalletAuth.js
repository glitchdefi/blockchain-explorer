import { useCallback, useEffect, useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  connectorLocalStorageKey,
  SupportedWallets,
} from "src/constants/wallet";
// import useToast from "hooks/useToast";

export const useWalletAuth = () => {
  const { active, account, activate, deactivate } = useWeb3React();
  //   const { toastError } = useToast();

  const login = useCallback((connectorId, callback) => {
    const connector = getConnectorById({ connectorId });
    if (connector) {
      // Cached ConnecterId to localstorage
      window.localStorage.setItem(connectorLocalStorageKey, connectorId);

      activate(connector, async (error) => {
        if (error instanceof UnsupportedChainIdError) {
          console.error("Wrong Network");
          activate(connector);
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (error instanceof NoEthereumProviderError) {
            console.error("Provider Error", "No provider was found");
            // toastError("Provider Error", "No provider was found");
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (
              connector instanceof WalletConnectConnector &&
              connector.walletConnectProvider?.wc?.uri
            ) {
              connector.walletConnectProvider = undefined;
            }
            console.error(
              "Authorization Error",
              "Please authorize to access your account"
            );
            // toastError(
            //   "Authorization Error",
            //   "Please authorize to access your account"
            // );
          } else {
            console.error(error.name, error.message);
            // toastError(error.name, error.message);
          }
        }

        callback && callback();
      });
    } else {
      console.error("Can't find connector", "The connector config is wrong");
      //   toastError("Can't find connector", "The connector config is wrong");
    }
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(connectorLocalStorageKey);
    deactivate();
  }, [deactivate]);

  return { active, account, login, logout };
};

const getConnectorById = ({ connectorId }) => {
  const wallet = SupportedWallets.find(
    (wallet) => wallet.connectorId === connectorId
  );

  return wallet.connector;
};
