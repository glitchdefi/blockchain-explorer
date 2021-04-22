import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Avatar } from "src/app/components/Avatar";
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { CopyIcon } from "src/app/components/Icons";

export function InfoUser({ user }) {
  return (
    <Wrapper>
      <Avatar
        src="https://unchainedpodcast.com/wp-content/uploads/2018/09/CZ.jpg"
        width={50}
      />
      <div tw="ml-6">
        <FlexLayout>
          <UserAddress>5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c</UserAddress>
          <Button tw="p-0 ml-8">
            <CopyIcon />
          </Button>
        </FlexLayout>
        <Text tw="mt-1 lg:mt-0">created 3 years ago</Text>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex items-center`;

const FlexLayout = tw.div`flex items-center`;

const UserAddress = styled.div(() => [
  tw`text-16 lg:text-18 text-primary!`,
  css`
    word-break: break-word;
  `,
]);

InfoUser.propTypes = {
  user: PropTypes.object,
};
