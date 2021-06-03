import React from "react";
import PropTypes from "prop-types";
import tw, { css, styled } from "twin.macro";

import { getColor } from "src/app/components/Tag/utils";

// Components
import { Text as TextBase } from "src/app/components/Text";
import { Button as ButtonBase } from "src/app/components/Button";

export function Status({ status, buttonLabel }) {
  return (
    <Wrapper>
      <Text type={status?.toLowerCase()}>{status}</Text>
      <Button>{buttonLabel}</Button>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-wrap items-center`;

export const Text = styled(TextBase)((type) => [
  tw`text-base`,
  css`
    color: ${getColor(type)};
  `,
]);

const Button = styled(ButtonBase)(() => [
  tw`bg-transparent border border-primary border-solid ml-2 lg:ml-10`,
]);

Status.propTypes = {
  status: PropTypes.string,
  buttonLabel: PropTypes.string,
};
