import { theme } from "twin.macro";
import { Types } from "./types";

export const getColor = (type) => {
  if (type === Types.success) {
    return theme`colors.success`;
  }

  if (type === Types.pending) {
    return theme`colors.pending`;
  }

  if (type === Types.processing) {
    return theme`colors.info`;
  }

  return theme`colors.success`;
};
