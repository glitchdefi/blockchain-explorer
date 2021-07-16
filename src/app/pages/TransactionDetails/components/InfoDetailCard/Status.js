import React from "react";
import PropTypes from "prop-types";
import tw, { css, styled } from "twin.macro";

import { getColor } from "src/app/components/Status/utils";
import { Types } from "src/app/components/Status/types";

// Components
import { Text as TextBase } from "src/app/components/Text";
import {
  Failed16Icon,
  Pending16Icon,
  Success16Icon,
} from "src/app/components/Svg/Icons";

export function Status({ status }) {
  
  const getIcons = () => {
    const statusLowerCase = status.toLowerCase();
    return statusLowerCase === Types.success ? (
      <Success16Icon />
    ) : statusLowerCase === Types.fail ? (
      <Failed16Icon />
    ) : (
      <Pending16Icon />
    );
  };

  return (
    <Wrapper>
      {getIcons()}
      <Text type={status.toLowerCase()}>{status}</Text>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-wrap items-center`;

export const Text = styled(TextBase)(({ type }) => [
  tw`text-base ml-3`,
  css`
    color: ${getColor(type)};
    margin-top: 2.3px;
  `,
]);
Status.propTypes = {
  status: PropTypes.string,
};
