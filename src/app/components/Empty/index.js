import { React } from "react";
import tw from "twin.macro";

export function Empty() {
  return <Wrapper></Wrapper>;
}

const Wrapper = tw.div`p-10 items-center justify-center`;
