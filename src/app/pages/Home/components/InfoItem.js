import React, { isValidElement, cloneElement } from "react";
import tw, { styled, css, theme } from "twin.macro";

import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";
import { Difference } from "src/app/components/Difference";
import { Tooltip } from "src/app/components/Tooltip";

export const InfoItem = React.memo(
  ({
    icon,
    title,
    value,
    separator,
    prefix,
    diff,
    tooltipLabel,
    onValueClick,
  }) => {
    return (
      <Wrapper hasHoverStyle={tooltipLabel}>
        {isValidElement(icon) && cloneElement(icon)}

        <div tw="flex-1 ml-5">
          <Text
            size={theme`fontSize.sm`}
            color={theme`colors.color6`}
            tw="mb-1"
          >
            {title}
          </Text>

          <div tw="flex items-center justify-between" onClick={onValueClick}>
            <div
              className="info-value"
              data-tip={tooltipLabel}
              data-for={tooltipLabel}
            >
              {typeof value === "string" ? (
                <Text bold color={theme`colors.textColor1`}>
                  {value}
                </Text>
              ) : (
                <NumberChange
                  value={value}
                  prefix={prefix}
                  separator={separator}
                />
              )}
            </div>
            {diff && <Difference tw="ml-2" value={diff} />}
          </div>

          <Tooltip id={tooltipLabel} place="bottom" />
        </div>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div(({ hasHoverStyle }) => [
  css`
    .info-value {
      transition: all 0.3s ease;

      ${hasHoverStyle &&
      `
      cursor: pointer;
      &:hover {
          div {
            color: ${theme`colors.primary`};
          }
        }`}
    }
  `,
  tw`flex items-center`,
]);
