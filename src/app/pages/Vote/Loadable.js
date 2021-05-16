import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const VotePage = lazyLoad(
  () => import("./index"),
  (module) => module.VotePage,
  {
    fallback: <LoadingIndicator />,
  }
);
