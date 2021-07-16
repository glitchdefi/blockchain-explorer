import React from "react";
import tw from "twin.macro";

export function DropdownMenu({ children, isVisible, ...props }) {
  if (!isVisible) return null;

  return (
    <Container
      role="dropdown-menu"
      aria-orientation="vertical"
      aria-labelledby="dropdown-menu-button"
      {...props}
    >
      <Wrapper role="none">{children}</Wrapper>
    </Container>
  );
}

const Container = tw.div`
    absolute 
    left-0 
    right-0 
    mt-2
    shadow-lg
    bg-bg2
    border 
    border-primary 
    border-solid
`;

const Wrapper = tw.div`
    flex
    flex-col
`;
