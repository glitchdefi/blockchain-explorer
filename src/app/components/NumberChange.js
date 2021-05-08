import React from "react";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { UpDownIcon } from "src/app/components/Svg/Icons";

export function NumberChange({ value, diff, ...props }) {
  return (
    <Wrapper {...props}>
      <Text className="number-change-value">{value}</Text>
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
    </Wrapper>
  );
}

NumberChange.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  diff: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const Wrapper = tw.div`flex items-center`;
