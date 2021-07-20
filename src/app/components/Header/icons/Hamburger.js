import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { theme } from "twin.macro";
import { useTheme } from "src/hooks/useTheme";

const Hamburger = () => {
  const { isDark } = useTheme();
  return (
    <FontAwesomeIcon
      tw="h-6 w-6!"
      icon={faBars}
      color={isDark ? "white" : theme`colors.color7`}
    />
  );
};

export default Hamburger;
