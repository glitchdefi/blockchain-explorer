import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";
import moment from "moment";
// Components
import { Avatar } from "src/app/components/Avatar";
import { Text } from "src/app/components/Text";
import { CopyButton } from "src/app/components/CopyButton";

export function InfoUser({ address, data }) {
  const { create_at } = data || {};

  return (
    <Wrapper>
      <Avatar
        src="https://image.flaticon.com/icons/png/512/168/168723.png"
        width={60}
        height={60}
      />

      <div tw="ml-6">
        <FlexLayout>
          <UserAddress>{address}</UserAddress>
          <CopyButton text={address} />
        </FlexLayout>
        <Text tw="mt-1">
          {create_at ? `${moment(create_at).fromNow()}` : "--"}
        </Text>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex items-center`;

const FlexLayout = tw.div`flex items-center`;

const UserAddress = styled.div(() => [
  tw`text-lg lg:text-xl text-primary!`,
  css`
    word-break: break-word;
  `,
]);

InfoUser.propTypes = {
  address: PropTypes.string,
};
