import React from "react";
import tw, { theme, css } from "twin.macro";
import { useHistory } from "react-router-dom";
import { formatAmount } from "src/utils/numbers";

import { Text } from "src/app/components/Text";
import { BlockIcon } from "src/app/components/Svg/Icons";

export function BlockNavigation({ currentBlock, nextBlock }) {

  console.log(nextBlock)
  return (
    <div tw="lg:(flex w-2/5 justify-between) mb-6">
      {currentBlock > 0 && (
        <NavigationItem label="Previous" height={currentBlock - 1} />
      )}
      <NavigationItem label="Current" height={currentBlock} />
      {nextBlock > currentBlock && (
        <NavigationItem label="Next" height={currentBlock + 1} />
      )}
    </div>
  );
}

const NavigationItem = ({ label, height }) => {
  const history = useHistory();

  return (
    <button
      css={styles.container({ label })}
      onClick={() => history.push(`/block/${height}`)}
    >
      <div tw="w-12 h-12 bg-color12 dark:bg-color2 flex justify-center items-center rounded-full">
        <BlockIcon />
      </div>
      <div tw="ml-3 text-left">
        <Text css={styles.label({ label })}>{label}</Text>
        <Text css={styles.height({ label })}>{formatAmount(height)}</Text>
      </div>
    </button>
  );
};

const styles = {
  container: ({ label }) => [
    tw`flex bg-transparent border-none items-center cursor-pointer py-2 px-3 hover:border-primary w-full mb-3 lg:(w-auto mb-0)`,
    label !== "Current" &&
      css`
        border: 1px solid ${theme`colors.color3`};
      `,
  ],
  label: ({ label }) => [
    tw`text-color5 text-sm`,
    label === "Current" && tw`text-color6`,
  ],
  height: ({ label }) => [
    tw`text-color6 mt-1`,
    label === "Current" && tw`text-color7`,
  ],
};
