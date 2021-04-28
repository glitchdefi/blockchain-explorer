import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const TokenPage = lazyLoad(
  () => import("./index"),
  (module) => module.TokenPage,
  {
    fallback: <LoadingIndicator />,
  }
);
