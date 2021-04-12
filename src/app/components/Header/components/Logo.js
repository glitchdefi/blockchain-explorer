import React from "react";
import glLogo from "../assets/gl_logo.png";
import { ImageLink } from "../../Image";

export function Logo() {
  return (
    <ImageLink href="/" alt="gl-logo" src={glLogo} width={60} height={60} />
  );
}
