import React from "react";
import tw from "twin.macro";

export function Card({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = tw.div`flex p-5 rounded items-center bg-color1`;
