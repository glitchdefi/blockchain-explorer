import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

// Components
import { Input } from "src/app/components/Input";
import { StyledButton as Button } from "src/app/components/Button/StyledButton";
import { Image } from "src/app/components/Image";

// Icon
import searchIcon from "../../../assets/search_icon.png";

export function SearchInput() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          tw="rounded-r-none -mr-0.5 py-3"
          placeholder={`${t("common.search")} ...`}
        />
        <Button tw="p-0 relative bg-gradient-to-r from-primary to-info w-10">
          <Image alt="gl-search-icon" src={searchIcon} width={16} height={16} />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = tw.div`lg:flex items-center hidden`;
const InputWrapper = tw.div`flex`;
