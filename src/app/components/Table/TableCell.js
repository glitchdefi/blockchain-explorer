import React from "react";
import PropTypes from "prop-types";
import tw, { css, theme } from "twin.macro";

import { LinkExternal } from "../Link/LinkExternal";
export default function TableCell({ children, isLink, href, ...props }) {
  const getChildren = () => {
    if (isLink) {
      return <CustomLink href={href}>{children}</CustomLink>;
    }
    return children;
  };

  return (
    <td
      css={[tw`p-4 text-tiny text-center whitespace-nowrap`, styles]}
      {...props}
    >
      {getChildren()}
    </td>
  );
}

const styles = css`
  color: ${theme`colors.textSecondary`};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.11);
`;

const CustomLink = tw(LinkExternal)`text-textSecondary! whitespace-nowrap underline`;
TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLink: PropTypes.bool,
  href: PropTypes.string,
};
