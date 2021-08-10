import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Link } from "./Link";
import { Text } from "./Text";

export function Breadcrumb({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Breadcrumb.Text = ({ children }) => (
  <Text color={theme`colors.primary`}>{children}</Text>
);

Breadcrumb.Link = ({ children, to }) => (
  <div tw="flex items-center">
    <Link href={to} tw="text-color6 dark:text-color5 hover:text-primary">
      {children}
    </Link>
    <Text tw="mx-3 text-color6 dark:text-color5">
      /
    </Text>
  </div>
);

const Wrapper = styled.div(() => [
  tw`flex flex-wrap items-center`,
  css`
    padding: 16px 0px;
    border-bottom: 1px solid ${theme`colors.color3`};
  `,
]);
