import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

export default function TableHeader({ children, ...props }) {
  return (
    <thead {...props}>
      {children}
    </thead>
  );
}

TableHeader.propTypes = {
  children: PropTypes.element,
};
