import React from "react";
import { Button } from "src/app/components/Button";
import tw, { css, theme } from "twin.macro";

export function ViewAllButton({ title, onClick }) {
  return (
    <Wrapper>
      <Button onClick={onClick} css={[styles]}>
        {title}
      </Button>
    </Wrapper>
  );
}

const Wrapper = tw.div`w-full justify-end items-end flex mt-7 mb-2`;

const styles = css`
  display: inline-block;
  background-color: transparent;
  border: 1px solid ${theme`colors.primary`};
  color: ${theme`colors.primary`};
  padding: 4px 10px;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  user-select: none;
  align-self: end;
`;
