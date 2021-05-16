import { lazyLoad } from "../../../utils/Loadable";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const HomePage = lazyLoad(
  () => import("./index"),
  (module) => module.HomePage,
  {
    fallback: <LoadingIndicator />,
  }
);
