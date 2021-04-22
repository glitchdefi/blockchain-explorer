import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

export default function TableContainer({ children }) {
  return (
    <div tw="flex flex-col">
      <div tw="mb-4 overflow-x-auto">
        <div tw="align-middle inline-block min-w-full">
          <div tw="overflow-hidden rounded-b">{children}</div>
        </div>
      </div>
    </div>
  );
}

TableContainer.propTypes = {
  children: PropTypes.element,
};
