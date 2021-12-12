import { useCanvasContext } from "src/hooks/useCanvas";
import useResponsiveSize from "src/hooks/useResponsiveSize";
import { default as WaveObj } from "../lib/wave";

const Wave = ({ isDark }) => {
  const { context } = useCanvasContext();
  const { width, height } = useResponsiveSize();
  let frequency = 0.013;
  const waves = {
    frontWave: new WaveObj(
      [0.0211, 0.028, 0.015],
      isDark ? "rgba(35, 53, 59, 0.88)" : "rgba(217, 217, 217, 0.88)"
    ),
    backWave: new WaveObj(
      [0.0122, 0.018, 0.005],
      isDark ? "rgba(35, 53, 59, 0.48)" : "rgba(217, 217, 217, 0.48)"
    ),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Wave;
