import React from "react";
import { Button } from "src/app/components/Button";
import tw, { css, theme } from "twin.macro";

export const ViewAllButton = React.memo(
  ({ title, onClick }) => {
    return (
      <Wrapper>
        <Button onClick={onClick} css={[styles]}>
          {title}
        </Button>
      </Wrapper>
    );
  },
  () => true
);

const Wrapper = tw.div`w-full justify-center items-center flex bg-color2`;

const styles = css`
  display: inline-block;
  color: ${theme`colors.primary`};
  padding: 16px;
`;
