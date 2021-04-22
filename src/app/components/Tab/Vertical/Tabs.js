import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

export function Tabs({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = tw.div`relative pr-9 w-64`;
const Wrapper = tw.div`w-full bg-black-pearl rounded-t rounded-b`;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
