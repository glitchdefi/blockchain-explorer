import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const TransactionDetailsPage = lazyLoad(
  () => import("./index"),
  (module) => module.TransactionDetailsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
