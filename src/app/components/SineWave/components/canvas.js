import React from "react";
import { useRef, useEffect, useState } from "react";

import { CanvasContext } from "src/hooks/useCanvas";
import useResponsiveSize from "src/hooks/useResponsiveSize";
import { useTheme } from "src/hooks/useTheme";
import Wave from "./wave";

const Canvas = React.memo(() => {
  const canvasRef = useRef();
  const { width, height } = useResponsiveSize();
  const { isDark } = useTheme();

  const [context, setContext] = useState();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context: context }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={height}
          style={{ width: "100%", height: "120px" }}
        ></canvas>
        <Wave isDark={isDark} />
      </CanvasContext.Provider>
    </>
  );
});

export default Canvas;
