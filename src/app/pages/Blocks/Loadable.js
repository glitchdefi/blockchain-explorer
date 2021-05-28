import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const BlocksPage = lazyLoad(
  () => import("./index"),
  (module) => module.BlocksPage,
  {
    fallback: <LoadingIndicator />,
  }
);
