import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import { theme } from "twin.macro";

// Components
import { Button } from "./Button";
import { CopyIcon } from "./Svg/Icons";

export function CopyButton({ text, ...props }) {
  const [copied, setCopied] = useState(false);
  const tooltipRef = useRef();

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <>
      <Button
        ref={tooltipRef}
        tw="p-0 ml-5 md:ml-10"
        onClick={() => {
          ReactTooltip.show(tooltipRef.current);
          navigator.clipboard.writeText(text);
          setCopied(true);
        }}
        data-tip=""
        data-for={text}
        {...props}
      >
        <CopyIcon />
      </Button>

      <ReactTooltip
        id={text}
        effect="solid"
        backgroundColor={theme`colors.bg2`}
        getContent={() => (copied ? "Copied" : "Copy")}
        tw="w-24 text-center"
      />
    </>
  );
}
