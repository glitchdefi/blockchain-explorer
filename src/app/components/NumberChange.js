import React from "react";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { UpDownIcon } from "src/app/components/Svg/Icons";
import { NumberCount } from "./Text/NumberCount";
export function NumberChange({
  value,
  values,
  prefix,
  diff,
  decimals,
  ...props
}) {
  return (
    <Flex {...props}>
      <NumberCount
        value={value}
        values={values}
        prefix={prefix}
        decimals={decimals}
      />
      {diff && <UpDownIcon isUp />} {/* Up or down */}
      {diff && (
        <Text
          size={theme`fontSize.sm`}
          color={theme`colors.primary`}
          className="number-change-diff"
        >
          {diff}
        </Text>
      )}
    </Flex>
  );
}

NumberChange.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  values: PropTypes.array,
  prefix: PropTypes.string,
  decimals: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  diff: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const Flex = tw.div`flex items-center`;
