import React from "react";
import { Svg } from "src/app/components/Svg";

const QRCode = (props) => {
  return (
    <Svg width={198} height={196} {...props}>
      <g filter="url(#filter0_dd)">
        <rect
          width="192"
          height="192"
          transform="translate(3 1)"
          fill="var(--color-1)"
        />
        <rect x="19" y="17" width="160" height="160" fill="var(--color-1)" />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="198"
          height="196"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="3" dy="-1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.945098 0 0 0 0 0 0 0 0 0 0.960784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-3" dy="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default QRCode;
