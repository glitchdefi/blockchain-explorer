import React from "react";
import tw, { theme, css } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Text } from "src/app/components/Text";
import { formatAmount } from "src/utils/numbers";

export const Difference = React.memo(({ value, ...props }) => {
  if (!value) return null;

  return (
    <div tw="flex items-end justify-end" {...props}>
      {value > 0 && <FontAwesomeIcon css={[upIconStyles]} icon={faSortUp} />}
      {value < 0 && (
        <FontAwesomeIcon css={[downIconStyles]} icon={faCaretDown} />
      )}

      <Text
        size={theme`fontSize.sm`}
        color={value > 0 ? theme`colors.success` : theme`colors.fail`}
      >
        {`${formatAmount(value)}%`}
      </Text>
    </div>
  );
});

const upIconStyles = css`
  color: ${theme`colors.success`};
  ${tw`h-3 w-3! mr-1`};
`;
const downIconStyles = css`
  color: ${theme`colors.fail`};
  ${tw`h-3 w-3! mr-1`};
`;
