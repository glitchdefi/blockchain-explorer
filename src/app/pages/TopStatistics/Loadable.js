import { lazyLoad } from "../../../utils/Loadable";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const TopStatisticsPage = lazyLoad(
  () => import("./index"),
  (module) => module.TopStatisticsPage,
  {
    fallback: <LoadingIndicator />,
  }
);
