// Import
import { ApiPromise, WsProvider } from "@polkadot/api";

class GlitchWeb3 {
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  constructor() {
    const wsProvider = new WsProvider(process.env.REACT_APP_WS_PROVIDER);
    ApiPromise.create({ provider: wsProvider }).isReady.then(
      (api) => (this.api = api)
    );
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance() {
    if (!GlitchWeb3.instance) {
      GlitchWeb3.instance = new GlitchWeb3();
    }

    return GlitchWeb3.instance;
  }

  async getBalance(address) {
    try {
      const { data: balance } = await this.api.query.system.account(address);
      return `${balance.free}` ? `${balance.free}` : "0";
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export const glitchWeb3 = GlitchWeb3.getInstance();
