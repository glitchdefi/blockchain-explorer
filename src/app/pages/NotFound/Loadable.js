import { lazyLoad } from "../../../utils/Loadable";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const NotFoundPage = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  {
    fallback: <LoadingIndicator />,
  }
);
