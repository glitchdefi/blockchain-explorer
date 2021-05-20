import { React } from "react";
import tw from "twin.macro";
import { Text } from "../Text";

export function Empty() {
  return (
    <Wrapper>
      <Text>Empty</Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex! w-full h-full p-10`;
