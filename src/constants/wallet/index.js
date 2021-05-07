import { Injected, WalletConnect, Fortmatic, Portis } from "src/connectors";

export const NetworkContextName = "NETWORK";
export const ConnectorNames = {
  Injected: "injected",
  WalletConnect: "walletconnect",
  Fortmatic: "fortmatic",
  Portis: "portis",
};
export const connectorLocalStorageKey = "connectorId";

export const SupportedWallets = [
  {
    connector: Injected,
    connectorId: ConnectorNames.Injected,
    name: "MetaMask",
    href: null,
  },
  {
    connector: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    name: "WalletConnect",
    href: null,
    mobile: true,
  },
  {
    connector: Fortmatic,
    connectorId: ConnectorNames.Fortmatic,
    name: "Fortmatic",
    href: null,
    mobile: true,
  },
  {
    connector: Portis,
    connectorId: ConnectorNames.Portis,
    name: "Portis",
    href: null,
    mobile: true,
  }
];
