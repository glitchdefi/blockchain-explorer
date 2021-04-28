import React from "react";
import tw, { styled, css, theme } from "twin.macro";

// Components
import { Avatar } from "src/app/components/Avatar";
import { Tag } from "src/app/components/Tag";
import { Text } from "../Text";


export const TransactionItem = ({ transaction }) => {
  return (
    <StyledTransaction>
      <div tw="flex items-center">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx1itTXTXLB8p4ALTTL8mUPa9TFN_m9h5VQ&usqp=CAU"
          width={50}
        />

        <div tw="ml-6">
          <Text tw="text-14 text-opacity-100! font-bold">Sent Glitch</Text>
          <Text tw="mt-1">#1 - 01/01/2021</Text>
        </div>
      </div>

      <Tag color="pending">Pending</Tag>

      <Text tw="mt-1">Complete in ~ 10 mins</Text>

      <div tw="text-right">
        <Text tw="text-14 text-opacity-100! font-bold">- $2,100 USD</Text>
        <Text tw="mt-1">3 GLCH</Text>
      </div>
    </StyledTransaction>
  );
};

const StyledTransaction = styled.div(() => [
  tw`w-full flex items-center justify-between py-6 last:border-none`,
  css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  `,
]);
