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
      css={[tw`p-4 text-13 text-center whitespace-nowrap`, styles]}
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

const CustomLink = tw(Link)`text-white-70! whitespace-nowrap underline`;
TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLink: PropTypes.bool,
  href: PropTypes.string,
};
