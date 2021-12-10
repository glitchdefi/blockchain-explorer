import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "twin.macro";

const Dropdown = (props) => (
  <FontAwesomeIcon
    tw="h-3 w-3! ml-2"
    icon={faCaretDown}
    color="var(--text-color1)"
    {...props}
  />
);

export default Dropdown;
