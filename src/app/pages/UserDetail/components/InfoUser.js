import React, { useState, useEffect } from "react";
import tw, { css, styled, theme } from "twin.macro";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

// Components
import { Avatar } from "src/app/components/Avatar";
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { CopyIcon } from "src/app/components/Svg/Icons";

export function InfoUser({ address }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

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
          <CopyToClipboard
            text={address}
            onCopy={() => setCopied(true)}
            data-tip
            data-for="copy"
          >
            <Button tw="p-0 ml-5 md:ml-10">
              <CopyIcon />
            </Button>
          </CopyToClipboard>

          <ReactTooltip
            id="copy"
            effect="solid"
            backgroundColor={theme`colors.bg2`}
            getContent={() => "Copy address to clipboard"}
          />
        </FlexLayout>
        <Text tw="mt-1">created 3 years ago</Text>
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
