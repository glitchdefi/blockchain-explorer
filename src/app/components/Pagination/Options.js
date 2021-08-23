import React from "react";
import tw, { css, theme, styled } from "twin.macro";

export function Options({ onChange }) {
  return (
    <Select onChange={(e) => onChange(e.target.value)}>
      <option value="25">25 / page</option>
      <option value="50">50 / page</option>
      <option value="75">75 / page</option>
      <option value="100">100 / page</option>
    </Select>
  );
}

const Select = styled.select(() => [
  tw`border-none ml-5 bg-transparent px-3 text-color7 outline-none font-mono`,
  css`
    border: 1px solid ${theme`colors.color3`};
    padding-top: 7px;
    padding-bottom: 7px;

    option[value="25"] {
      background-color: ${theme`colors.color1`} !important;
    }

    option[value="50"] {
      background-color: ${theme`colors.color1`} !important;
    }

    option[value="75"] {
      background-color: ${theme`colors.color1`} !important;
    }

    option[value="100"] {
      background-color: ${theme`colors.color1`} !important;
    }
  `,
]);
