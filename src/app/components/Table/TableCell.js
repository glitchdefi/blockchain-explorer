import React from "react";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

import { Link } from "../Link";
export default function TableCell({ children, isLink, href, ...props }) {
  const getChildren = () => {
    if (isLink) {
      return <CustomLink>{children}</CustomLink>;
    }
    return children;
  };

  return (
    <td
      css={[tw`px-6 py-4 text-13 text-center whitespace-nowrap`, styles]}
      {...props}
    >
      {getChildren()}
    </td>
  );
}

const styles = css`
  color: rgba(255, 255, 255, 0.7);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.11);
`;

const CustomLink = tw(Link)`text-white text-opacity-70! underline`;
TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLink: PropTypes.bool,
  href: PropTypes.string,
};
