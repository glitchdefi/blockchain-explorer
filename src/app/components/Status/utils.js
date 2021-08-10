import { theme } from "twin.macro";
import { Types } from "./types";

export const getColor = (type) => {
  if (type === Types.success) {
    return theme`colors.success`;
  }

  if (type === Types.fail) {
    return theme`colors.fail`;
  }

  return theme`colors.pending`;
};
