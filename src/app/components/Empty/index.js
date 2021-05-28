import { React } from "react";
import tw, { theme } from "twin.macro";
import { Text } from "../Text";

export function Empty({ msg }) {
  return (
    <Wrapper>
      <Text size={theme`fontSize.base`} color={theme`colors.textSecondary`}>
        {msg}
      </Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex! w-full h-full p-10 items-center justify-center`;
