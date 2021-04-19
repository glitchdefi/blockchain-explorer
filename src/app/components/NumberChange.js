import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { UpDownIcon } from "src/app/components/Icons";

export function NumberChange({ value, diff, ...props }) {
  return (
    <Wrapper {...props}>
      <Text className="number-change-value">{value}</Text>
      {diff && <UpDownIcon isUp={true} />} {/* Up or down */}
      {diff && (
        <Text tw="text-12 text-primary!" className="number-change-diff">
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
