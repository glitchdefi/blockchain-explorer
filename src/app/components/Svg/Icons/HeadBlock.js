import React from "react";
import { Svg } from "src/app/components/Svg";

const HeadBlock = () => {
  return (
    <Svg width={36} height={42}>
      <path
        d="M18.3707 0.913154L18.3207 0.884286L18.2707 0.913153L0.95 10.9132L0.9 10.942V10.9998V30.9997V31.0574L0.95 31.0863L18.2707 41.0864L18.3207 41.1152L18.3707 41.0864L35.691 31.0863L35.741 31.0574V30.9997V10.9998V10.942L35.691 10.9132L18.3707 0.913154ZM18.3207 3.8217L31.9248 11.6762L18.3207 19.5272L4.71624 11.6762L18.3207 3.8217ZM3.44388 29.5887V13.8789L17.0488 21.7303V37.4435L3.44388 29.5887ZM33.1972 29.5888L19.5927 37.4435V21.7303L33.1972 13.879V29.5888Z"
        fill="var(--color-primary)"
        stroke="var(--color-primary)"
        strokeWidth="0.2"
      />
    </Svg>
  );
};

export default HeadBlock;
