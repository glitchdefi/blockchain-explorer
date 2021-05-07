import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { NetworkConnector } from "./NetworkConnector";

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL;
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID;
const FORTMATIC_KEY = process.env.REACT_APP_FORTMATIC_API_KEY;

const POLLING_INTERVAL = 15000;

export const NETWORK_CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID ?? "1");

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
});

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

// Mainnet only
export const WalletConnect = new WalletConnectConnector({
  rpc: { 1: NETWORK_URL },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

// Mainnet only
export const Fortmatic = new FortmaticConnector({
  apiKey: FORTMATIC_KEY ?? "",
  chainId: 1,
});

// Mainnet only
export const Portis = new PortisConnector({
  dAppId: PORTIS_ID ?? "",
  networks: [1],
});
