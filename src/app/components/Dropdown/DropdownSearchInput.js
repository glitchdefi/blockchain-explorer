import React from "react";
import tw from "twin.macro";
import { Input } from "../Input";

export function DropdownSearchInput({ placeholder, ...props }) {
  return (
    <Wrapper>
      <Input
        tw="bg-transparent border border-primary border-solid m-0"
        placeholder={placeholder}
        {...props}
      />
    </Wrapper>
  );
}

const Wrapper = tw.div`p-3 flex flex-col`;
