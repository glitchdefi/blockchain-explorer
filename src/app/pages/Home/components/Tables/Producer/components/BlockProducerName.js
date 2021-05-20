import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import { Link } from "src/app/components/Link";
import { MoneyIcon } from "src/app/components/Svg/Icons";

export const BlockProducerName = ({ href, children }) => {
  if (!children) return <div />;
  return (
    <Wrapper>
      <MoneyIcon />
      <Link
        href={href}
        tw="text-tiny ml-3 text-primary! hover:opacity-80"
      >
        {children}
      </Link>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex items-center justify-center`;

BlockProducerName.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};
