import { React } from "react";
import tw, { theme } from "twin.macro";
import { Text } from "../Text";

export function Empty() {
  return (
    <Wrapper>
      <Text size={theme`fontSize.lg`} color={theme`colors.textSecondary`}>
        Empty
      </Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex! w-full h-full p-10 items-center justify-center`;
