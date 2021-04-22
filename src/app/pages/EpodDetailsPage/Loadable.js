import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const EpodDetailsPage = lazyLoad(
  () => import("./index"),
  (module) => module.EpodDetailsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
