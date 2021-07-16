import React from "react";
import { Svg } from "src/app/components/Svg";

const Info = () => {
  return (
    <Svg width={20} height={20}>
      <path
        d="M8.25 6.75H9.75V5.25H8.25V6.75ZM8.25 12.75H9.75V8.25H8.25V12.75ZM8.9925 16.5C4.8525 16.5 1.5 13.14 1.5 9C1.5 4.86 4.8525 1.5 8.9925 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 8.9925 16.5ZM9 3C5.685 3 3 5.685 3 9C3 12.315 5.685 15 9 15C12.315 15 15 12.315 15 9C15 5.685 12.315 3 9 3Z"
        fill="var(--color-5)"
      />
    </Svg>
  );
};

export default Info;
