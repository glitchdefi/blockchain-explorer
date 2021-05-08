import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

const UpDown = ({ isUp }) => (
  <FontAwesomeIcon
    css={[
      tw`h-2 w-2! ml-2 mr-1`,
      { color: isUp ? theme`colors.primary` : theme`colors.secondary` },
    ]}
    icon={isUp ? faSortUp : faCaretDown}
  />
);

UpDown.propTypes = {
  isUp: PropTypes.bool,
};

UpDown.defaultValue = {
  isUp: true,
};

export default UpDown;
