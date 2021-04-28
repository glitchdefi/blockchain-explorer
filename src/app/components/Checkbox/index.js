import React from "react";
import "twin.macro";

export function Checkbox() {
  return (
    <label tw="inline-flex items-center mt-3">
      <input
        type="checkbox"
        tw="h-5 w-5 text-red-600 bg-gray-500"
        className="form-checkbox rounded text-pink-500"
        // checked
      />
    </label>
  );
}
