import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

export function Grid({ children, cols, ...props }) {
  return (
    <div css={styles.container({ cols })} {...props}>
      {children}
    </div>
  );
}

const styles = {
  container: ({ cols }) => [tw`grid gap-2 lg:gap-3`, colsVariants[cols]],
};

const colsVariants = {
  2: tw`grid-cols-1 lg:grid-cols-2`,
  3: tw`grid-cols-2 md:grid-cols-3`,
  4: tw`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`,
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
