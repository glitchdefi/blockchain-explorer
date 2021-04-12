import React from "react";
import { useTranslation } from "react-i18next";
import tw, { styled } from "twin.macro";

// Components
import { Input } from "../../Input";
import { StyledButton as Button } from "../../Button/StyledButton";
import { Image } from "../../Image";

// Icon
import searchIcon from "../assets/search_icon.png";

const Wrapper = styled.div(() => [
  tw`flex flex-wrap col-span-3 items-center justify-end`,
]);

const InputWrapper = styled.div(() => [tw`flex`]);

export function SearchInput() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InputWrapper>
        <Input tw="rounded-r-none -mr-0.5" placeholder={`${t("search")} ...`} />
        <Button tw="p-0 relative bg-gradient-to-r from-primary to-cobalt w-10">
          <Image alt="gl-search-icon" src={searchIcon} width={16} height={16} />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}
