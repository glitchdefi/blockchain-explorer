import React from "react";
import "twin.macro";

export function FormError({ msg }) {
  return <p tw="block mt-2 text-sm font-medium text-secondary">{msg}</p>;
}
