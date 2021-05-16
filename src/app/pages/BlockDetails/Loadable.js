import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const BlockDetailsPage = lazyLoad(
  () => import("./index"),
  (module) => module.BlockDetailsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
