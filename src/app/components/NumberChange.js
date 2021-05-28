import React from "react";
import PropTypes from "prop-types";
import tw, { theme, css } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Components
import { Text } from "src/app/components/Text";
import { NumberCount } from "./Text/NumberCount";
export function NumberChange({
  value,
  values,
  prefix,
  truncated,
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
      {truncated > 0 && (
        <FontAwesomeIcon css={[upIconStyles]} icon={faSortUp} />
      )}
      {truncated < 0 && (
        <FontAwesomeIcon css={[downIconStyles]} icon={faCaretDown} />
      )}
      {truncated && (
        <Text size={theme`fontSize.sm`} color={theme`colors.primary`}>
          {truncated}
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
const upIconStyles = css`
  color: ${theme`colors.primary`} ${tw`h-2 w-2! ml-2 mr-1`};
`;
const downIconStyles = css`
  color: ${theme`colors.secondary`} ${tw`h-2 w-2! ml-2 mr-1`};
`;
