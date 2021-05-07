import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { NetworkContextName } from "src/constants/wallet";

export function useActiveWeb3React() {
  const context = useWeb3ReactCore();
  const contextNetwork = useWeb3ReactCore(NetworkContextName);
  return context.active ? context : contextNetwork;
}
