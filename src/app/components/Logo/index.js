import React from "react";
import glLogo from "src/assets/images/gl_logo.png";
import { ImageLink } from "src/app/components/Image";

export function Logo(props) {
  return (
    <div className="gl-logo-blk" {...props}>
      <ImageLink href="/" alt="gl-logo" src={glLogo} width={60} />
      {/* <!-- Glitch LOGO --> */}
    </div>
  );
}
