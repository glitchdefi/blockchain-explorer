import { styled, css } from "twin.macro";

const Wrapper = styled.div(() => [
  css`
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${({ height, responsive }) => (responsive ? 0 : height)}px;
    max-width: ${({ width }) => width}px;
    max-height: ${({ height }) => height}px;
    width: 100%;
    padding-top: ${({ width, height, responsive }) =>
      responsive ? (height / width) * 100 : 0}%;
  `,
]);

export default Wrapper;
