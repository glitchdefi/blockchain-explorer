import React from "react";
import tw, { css, styled } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Avatar } from "src/app/components/Avatar";
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { CopyIcon } from "src/app/components/Svg/Icons";

export function InfoUser({ user }) {
  return (
    <Wrapper>
      <Avatar
        src="https://image.flaticon.com/icons/png/512/168/168723.png"
        width={60}
        height={60}
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
  tw`text-lg lg:text-xl text-primary!`,
  css`
    word-break: break-word;
  `,
]);

InfoUser.propTypes = {
  user: PropTypes.object,
};
