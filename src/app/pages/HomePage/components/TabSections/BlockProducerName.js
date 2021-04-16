import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import { Text } from "src/app/components/Text";
import { MoneyIcon } from "./icons";

export const BlockProducerName = ({ href, children }) => {
  if (!children) return <div />;
  return (
    <Wrapper>
      <MoneyIcon />
      <Text
        as="a"
        href={href}
        tw="text-13 ml-3 no-underline text-primary! hover:opacity-80"
      >
        {children}
      </Text>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex items-center justify-center`;

BlockProducerName.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};
