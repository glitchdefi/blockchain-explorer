import { lazyLoad } from "src/utils/Loadable";
import { LoadingIndicator } from "src/app/components/LoadingIndicator";

export const UserDetailPage = lazyLoad(
  () => import("./index"),
  (module) => module.UserDetailPage,
  {
    fallback: <LoadingIndicator />,
  }
);
