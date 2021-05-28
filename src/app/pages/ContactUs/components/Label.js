import React from "react";
import "twin.macro";

export function Label({ children, isRequired }) {
  return (
    <label htmlFor="postal_code" tw="block text-base font-medium text-white">
      {children}
      {isRequired && <span tw="text-secondary ml-1">*</span>}
    </label>
  );
}
