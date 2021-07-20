import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { theme } from "twin.macro";

import { useTheme } from "src/hooks/useTheme";

const Close = () => {
  const { isDark } = useTheme();

  return (
    <FontAwesomeIcon
      tw="h-6 w-6!"
      icon={faTimes}
      color={isDark ? "white" : theme`colors.color7`}
    />
  );
};

export default Close;
