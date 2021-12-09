import React from "react";
import { Button } from "src/app/components/Button";
import tw, {styled, css, theme } from "twin.macro";

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

const Wrapper = styled.div(() => [
  tw`w-full justify-center items-center flex bg-color11 dark:bg-color2`,
  css`
    border-right: 1px solid ${theme`colors.color2`};
    border-bottom: 1px solid ${theme`colors.color2`};
    border-left: 1px solid ${theme`colors.color2`};
  `
]);

const styles = css`
  display: inline-block;
  color: ${theme`colors.primary`};
  padding: 16px;
  font-weight: 600;
`;
