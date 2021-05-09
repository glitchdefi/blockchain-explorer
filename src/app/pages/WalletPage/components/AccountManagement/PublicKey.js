import React from "react";
import "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { Copy24Icon } from "src/app/components/Svg/Icons";

export const PublicKey = ({ children }) => {
  return (
    <div tw="flex items-center">
      <Text tw="lg:break-normal">{children}</Text>
      <Button tw="p-0 ml-6 lg:ml-8">
        <Copy24Icon />
      </Button>
    </div>
  );
};
