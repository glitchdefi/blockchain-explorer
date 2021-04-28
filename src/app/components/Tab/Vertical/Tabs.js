import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

export function Tabs({ children, ...props }) {
  return (
    <Container {...props}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = tw.div`relative pr-9 w-1/4 min-w-1/4`;
const Wrapper = tw.div`w-full bg-black-pearl rounded-t rounded-b`;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
