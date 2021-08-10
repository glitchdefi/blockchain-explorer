import React from "react";
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
        src={isDark ? "/images/gl_logo.png" : "/images/gl_logo_light.png"}
        width={125}
      />
      {/* <!-- Glitch LOGO --> */}
    </div>
  );
}
