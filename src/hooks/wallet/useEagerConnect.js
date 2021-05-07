import { useEffect } from "react";
import { connectorLocalStorageKey } from "src/constants/wallet";
import { useWalletAuth } from "./useWalletAuth";

export function useEagerConnect() {
  const { login } = useWalletAuth();

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey);

    if (connectorId) {
      login(connectorId);
    }
  }, [login]);
}
