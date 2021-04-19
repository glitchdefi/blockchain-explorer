import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

// Components
import { Input } from "../../../../Input";
import { StyledButton as Button } from "../../../../Button/StyledButton";
import { Image } from "../../../../Image";

// Icon
import searchIcon from "../../../assets/search_icon.png";

export function SearchInput() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          tw="rounded-r-none -mr-0.5 w-full"
          placeholder={`${t("search")} ...`}
        />
        <Button tw="pt-1 pl-0 pr-0 pb-0 relative bg-gradient-to-r from-primary to-cobalt w-12">
          <Image alt="gl-search-icon" src={searchIcon} width={16} height={16} />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = tw.div`lg:flex w-full items-center`;
const InputWrapper = tw.div`flex mx-6 my-3`;
