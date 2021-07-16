import React from "react";
import PropTypes from "prop-types";
import tw, { css, theme } from "twin.macro";

import { Link } from "../Link";
import { Tooltip } from "../Tooltip";
export default function TableCell(props) {
  const { id, children, isLink, href, tip, ...rest } = props;
  const dataFor = `${tip} row-${id}`;

  const getChildren = () => {
    if (isLink) {
      return (
        <Link primary data-tip={tip} data-for={dataFor} href={href}>
          {children}
        </Link>
      );
    }
    return (
      <span data-tip={tip} data-for={dataFor}>
        {children}
      </span>
    );
  };

  return (
    <td
      css={[tw`px-4 py-6 text-tiny text-left whitespace-nowrap`, styles]}
      {...rest}
    >
      {getChildren()}
      {tip && <Tooltip id={dataFor} />}
    </td>
  );
}

const styles = css`
  color: ${theme`colors.color7`};
  border-bottom: 1px solid ${theme`colors.color2`};
`;
TableCell.propTypes = {
  children: PropTypes.any,
  isLink: PropTypes.bool,
  href: PropTypes.string,
};
