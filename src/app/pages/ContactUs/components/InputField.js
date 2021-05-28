import React from "react";
import tw from "twin.macro";
import { Input as InputBase } from "src/app/components/Input";
import { FormError } from "./FormError";

export function InputField({ placeholder, required, hasError, ...props }) {
  return (
    <>
      <Input placeholder={placeholder} {...props} />
      {required && hasError && <FormError />}
    </>
  );
}

const Input = tw(InputBase)`mt-2 w-full h-12`;
