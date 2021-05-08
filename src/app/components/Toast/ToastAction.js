import React from "react";
import { LinkExternal } from "../Link/LinkExternal";
import { Link } from "../Link";

export const ToastAction = ({ action }) => {
  if (action.url.startsWith("http")) {
    return <LinkExternal href={action.url}>{action.text}</LinkExternal>;
  }

  return <Link href={action.url}>{action.text}</Link>;
};
