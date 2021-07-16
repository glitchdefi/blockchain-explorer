import React from "react";
import "twin.macro";
import { Text } from "src/app/components/Text";

export function OverviewCard(props) {
  return (
    <div tw="flex mt-4 px-6 bg-color2 items-center" {...props}>
      <div tw="p-5 bg-color8">
        <Text tw="text-primary">Overview</Text>
      </div>
    </div>
  );
}
