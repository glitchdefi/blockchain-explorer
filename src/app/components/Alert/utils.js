import { theme } from "twin.macro";
import { SuccessIcon, InfoIcon, ErrorIcon, DangerIcon } from "./icons";
import { variants } from "./types";

export const getThemeColor = ({ variant = variants.INFO }) => {
  switch (variant) {
    case variants.DANGER:
      return theme`colors.fail`;
    case variants.WARNING:
      return theme`colors.fail`;
    case variants.SUCCESS:
      return theme`colors.success`;
    case variants.INFO:
    default:
      return theme`colors.pending`;
  }
};

export const getIcon = (variant = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return DangerIcon;
    case variants.WARNING:
      return ErrorIcon;
    case variants.SUCCESS:
      return SuccessIcon;
    case variants.INFO:
    default:
      return InfoIcon;
  }
};
