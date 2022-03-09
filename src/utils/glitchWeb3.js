import { GlitchWeb3 } from "@glitchdefi/web3";

class We3GlitchHelper {
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  constructor() {
    const web3Account = new GlitchWeb3(process.env.REACT_APP_WS_PROVIDER);
    this.web3Glitch = web3Account;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance() {
    if (!We3GlitchHelper.instance) {
      We3GlitchHelper.instance = new We3GlitchHelper();
    }

    return We3GlitchHelper.instance;
  }

  getWeb3Glitch() {
    if (this.web3Glitch) {
      We3GlitchHelper.getInstance();
    }
    return this.web3Glitch;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  async getBalance(address) {
    try {
      const result = await this.web3Glitch.getBalance(address);
      return result;
    } catch (error) {
      return "0";
    }
  }
}

export const web3Glitch = We3GlitchHelper.getInstance();
