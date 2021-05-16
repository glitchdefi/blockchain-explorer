import React from "react";
import tw, { styled, css, theme } from "twin.macro";

// Components
import { Avatar } from "src/app/components/Avatar";
import { Tag } from "src/app/components/Tag";
import { Text } from "../Text";

export const TransactionItem = ({ transaction }) => {
  return (
    <StyledTransaction>
      <div tw="lg:flex items-center justify-between">
        <Avatar
          tw="items-center justify-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx1itTXTXLB8p4ALTTL8mUPa9TFN_m9h5VQ&usqp=CAU"
          width={50}
        />

        <div tw="flex flex-col items-center mt-3 lg:mt-0 lg:items-start lg:ml-6">
          <Text tw="text-base text-white! font-bold">Sent Glitch</Text>
          <Text tw="mt-1">#1 - 01/01/2021</Text>
        </div>
      </div>

      <div tw="flex items-center justify-center">
        <Tag tw="my-2 lg:my-0" color="pending">
          Pending
        </Tag>
      </div>

      <Text tw="mt-1 text-center">Complete in ~ 10 mins</Text>

      <div tw="text-center mt-2 lg:text-right">
        <Text tw="text-base text-white! font-bold">- $2,100 USD</Text>
        <Text tw="mt-1">3 GLCH</Text>
      </div>
    </StyledTransaction>
  );
};

const StyledTransaction = styled.div(() => [
  tw`w-full lg:flex items-center justify-between py-6 last:border-none`,
  css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  `,
]);
