import React from "react";
import PropTypes from "prop-types";
import tw, { css, styled, theme } from "twin.macro";
import { Text } from "../Text";
import { getColor } from "./utils";
import { Types } from "./types";

export function Tag(props) {
  const { children, color, ...rest } = props;
  return (
    <Wrapper color={color} {...rest}>
      <Text bold size={theme`fontSize.sm`} tw="text-center">
        {children}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ color }) => [
  tw`px-3 py-1 rounded items-center justify-center`,
  css`
    background-color: ${getColor(color)};
  `,
]);

Tag.propTypes = {
  color: PropTypes.string,
};

Tag.defaultProps = {
  color: Types.default,
};
