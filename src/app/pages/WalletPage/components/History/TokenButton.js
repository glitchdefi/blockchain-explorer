import React from "react";
import tw, { styled, css, theme } from "twin.macro";

// Components
import { Button } from "src/app/components/Button";
import { Text } from "../Text";

export function TokenButton(props) {
  const { isActive, ...rest } = props;
  return (
    <Wrapper isActive={isActive} {...rest}>
      <div>
        <Text className="token-name" tw="text-14 font-bold">
          100,000 Token 1
        </Text>
        <Text className="number-tokens" tw="mt-1">
          $3,000,000
        </Text>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled(Button)(({ isActive }) => [
  tw`py-3 px-0`,

  css`
    background-color: rgba(36, 198, 201, 0.15);
  `,

  isActive &&
    css`
      background-color: ${theme`colors.primary`};

      .token-name,
      .number-tokens {
        color: white !important;
      }
    `,
]);
