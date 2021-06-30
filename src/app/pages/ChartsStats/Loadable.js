import { lazyLoad } from "../../../utils/Loadable";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const ChartsStatsPage = lazyLoad(
  () => import("./index"),
  (module) => module.ChartsStatsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
