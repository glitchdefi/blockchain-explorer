import React from "react";
import glLogo from "src/assets/images/gl_logo.png";
import glLogoLight from "src/assets/images/gl_logo_light.png";
import { ImageLink } from "src/app/components/Image";

// Hooks
import { useTheme } from "src/hooks/useTheme";

export function Logo({ id, ...props }) {
  const { isDark } = useTheme();
  return (
    <div className="gl-logo-blk" {...props}>
      <ImageLink
        id={id}
        href="/"
        alt="gl-logo"
        src={isDark ? glLogo : glLogoLight}
        width={125}
      />
      {/* <!-- Glitch LOGO --> */}
    </div>
  );
}
