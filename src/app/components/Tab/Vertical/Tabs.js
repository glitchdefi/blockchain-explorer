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

const Container = tw.div`relative lg:(w-1/4 min-w-1/4 pr-9)`;
const Wrapper = tw.div`
 flex 
 overflow-auto 
 lg:overflow-hidden 
 whitespace-nowrap 
 rounded-t 
 lg:(block rounded-b bg-color1 whitespace-normal)
`;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
