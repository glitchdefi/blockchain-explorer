import { React } from "react";
import tw, { theme } from "twin.macro";
import { Text } from "../Text";

export function Empty({ title }) {
  return (
    <Wrapper>
      <Text size={theme`fontSize.base`} color={theme`colors.textSecondary`}>
        {title}
      </Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex! w-full h-60 p-10 items-center justify-center`;
