import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import tw from "twin.macro";

// Hooks
import { useSearch } from "src/hooks/useSearch";
import { useSearchResult } from "src/state/global/hooks";

// Components
import { Input } from "src/app/components/Input";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
import { StyledButton as Button } from "src/app/components/Button/StyledButton";
import { Image } from "src/app/components/Image";

// Icon
import searchIcon from "../../../assets/search_icon.png";
import { Text } from "src/app/components/Text";
import { trim } from "lodash";

export function SearchInput() {
  const history = useHistory();
  const buttonRef = useRef();
  
  const { t } = useTranslation();
  const { text, onTextChange, onSearch, onClearText } = useSearch();
  const { isSearching, searchResult, searchError } = useSearchResult();

  useEffect(() => {
    if (!isSearching && searchResult && !searchError) {
      if (searchResult?.type === "tx") history.push(`/tx/${text.trim()}`);
      if (searchResult?.type === "block") history.push(`/block/${text.trim()}`);
      if (searchResult?.type === "wallet") history.push(`/address/${text.trim()}`);
      onClearText();
    }

    if (!isSearching && searchError) {
      onClearText();
      history.push("/searchNotFound");
    }
  }, [isSearching]);

  // Detect when user enter key
  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={text}
          tw="flex-1 rounded py-3 text-sm md:text-base bg-bg1"
          placeholder={`${t("common.search_placeholder")}`}
          onChange={onTextChange}
          onKeyPress={onEnterPress}
        />
        <Button
          ref={buttonRef}
          tw="relative bg-gradient-to-r from-primary to-info py-0 md:px-6 ml-5 md:ml-6"
          onClick={onSearch}
        >
          {isSearching ? (
            <Spinner stroke="white" />
          ) : (
            <>
              <Image
                alt="gl-search-icon"
                src={searchIcon}
                width={16}
                height={16}
              />
              <Text tw="ml-3 hidden md:block">{t("common.search")}</Text>
            </>
          )}
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex bg-bgPrimary items-center p-5 md:p-6 rounded mt-6`;
const InputWrapper = tw.div`flex w-full`;
