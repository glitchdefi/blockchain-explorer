import React from "react";
import { capitalizeFirstLetter } from "src/utils/strings";
import { css } from "twin.macro";

// Components
import { SuccessIcon, FailedIcon, PendingIcon } from "../Svg/Icons";
import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import { Types } from "./types";
import { getColor } from "./utils";

export function Status({ id, status }) {
  const getStatusIcon = () => {
    return status === Types.success ? (
      <SuccessIcon />
    ) : status === Types.fail ? (
      <FailedIcon />
    ) : (
      <PendingIcon />
    );
  };

  return (
    <>
      <div data-tip data-for={id}>
        {getStatusIcon()}
      </div>

      <Tooltip id={id} place="bottom">
        <div tw="flex items-center">
          <Text tw="text-sm">Status: </Text>
          <Text
            tw="text-sm ml-1"
            css={[
              css`
                color: ${getColor(status)};
              `,
            ]}
          >
            {capitalizeFirstLetter(status)}
          </Text>
        </div>
      </Tooltip>
    </>
  );
}
