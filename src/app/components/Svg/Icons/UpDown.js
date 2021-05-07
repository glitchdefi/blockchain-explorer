import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

const UpDown = ({ isup }) => (
  <FontAwesomeIcon
    isup
    css={[
      tw`h-2 w-2! ml-2 mr-1`,
      { color: isup ? theme`colors.primary` : theme`colors.secondary` },
    ]}
    icon={isup ? faSortUp : faCaretDown}
  />
);

UpDown.propTypes = {
  isup: PropTypes.bool,
};

UpDown.defaultValue = {
  isup: true,
};

export default UpDown;
