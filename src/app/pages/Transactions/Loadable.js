import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const TransactionsPage = lazyLoad(
  () => import("./index"),
  (module) => module.TransactionsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
