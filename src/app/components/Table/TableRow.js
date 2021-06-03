import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSpring, animated, config } from "react-spring";

export default function TableRow({ children, count, animation, ...props }) {
  const [styles, api] = useSpring(() => {});

  useEffect(() => {
    if (count && count > 0 && animation) {
      api.start({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: config.molasses,
      });
    }
  }, [count]);

  return (
    <animated.tr style={styles} {...props}>
      {children}
    </animated.tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
