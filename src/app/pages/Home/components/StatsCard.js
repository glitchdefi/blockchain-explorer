import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw, { theme, styled, css } from "twin.macro";

// Components
import { Card as CardBase } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";

export const StatsCard = ({ icon, title, value, separator, prefix }) => {
  return (
    <Card>
      <CardBody>
        {isValidElement(icon) && cloneElement(icon)}
        <div tw="ml-5 pt-1">
          <Text
            size={theme`fontSize.sm`}
            color={theme`colors.color6`}
            tw="mb-1"
          >
            {title}
          </Text>

          {typeof value === "string" ? (
            <Text color={theme`colors.color7`}>{value}</Text>
          ) : (
            <NumberChange value={value} prefix={prefix} separator={separator} />
          )}
        </div>
      </CardBody>
    </Card>
  );
};

StatsCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  prefix: PropTypes.string,
  separator: PropTypes.any,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
};

const Card = styled(CardBase)(() => [
  css`
    border: 1px solid ${theme`colors.color2`};
  `,
  tw`rounded-none`,
]);

const CardBody = tw.div`flex items-center py-3 lg:py-6`;
