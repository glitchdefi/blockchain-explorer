import React from "react";
import PropTypes from "prop-types";
import tw, { css, theme } from "twin.macro";
import ReactTooltip from "react-tooltip";

import { Link } from "../Link";
export default function TableCell({
  children,
  isLink,
  href,
  dataTip,
  ...props
}) {
  const getChildren = () => {
    if (isLink) {
      return (
        <CustomLink data-tip={dataTip} data-for={dataTip} href={href}>
          {children}
        </CustomLink>
      );
    }
    return (
      <span data-tip={dataTip} data-for={dataTip}>
        {children}
      </span>
    );
  };

  return (
    <td
      css={[tw`p-4 text-tiny text-center whitespace-nowrap`, styles]}
      {...props}
    >
      {getChildren()}
      {dataTip && (
        <ReactTooltip
          id={dataTip}
          place="top"
          effect="solid"
          backgroundColor={theme`colors.bg2`}
        />
      )}
    </td>
  );
}

const styles = css`
  color: ${theme`colors.textSecondary`};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.11);
  padding-left: 0;
`;

const CustomLink = tw(Link)`text-textSecondary! whitespace-nowrap underline`;
TableCell.propTypes = {
  children: PropTypes.any,
  isLink: PropTypes.bool,
  href: PropTypes.string,
};
