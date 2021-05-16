import { lazyLoad } from "../../../utils/Loadable";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const WalletPage = lazyLoad(
  () => import("./index"),
  (module) => module.WalletPage,
  {
    fallback: <LoadingIndicator />,
  }
);
