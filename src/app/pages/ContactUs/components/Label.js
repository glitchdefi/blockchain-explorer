import React from "react";
import "twin.macro";

export function Label({ children, isRequired }) {
  return (
    <label htmlFor="postal_code" tw="block text-base font-medium text-color6">
      {children}
      {isRequired && <span tw="text-secondary ml-1">*</span>}
    </label>
  );
}
