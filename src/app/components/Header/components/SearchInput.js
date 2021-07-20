import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import tw, { styled, css, theme } from "twin.macro";

// Hooks
import { useSearch } from "src/hooks/useSearch";
import { useSearchResult } from "src/state/global/hooks";
import { getSearchQueryIds } from "src/constants/refIds";
import { useTheme } from "src/hooks/useTheme";

// Components
import { Input as InputBase } from "src/app/components/Input";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
import { StyledButton as Button } from "src/app/components/Button/StyledButton";
import { Text } from "src/app/components/Text";

// Icon
import { SearchIcon } from "src/app/components/Svg/Icons";

export function SearchInput() {
  const history = useHistory();
  const buttonRef = useRef();

  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { text, onTextChange, onSearch, onClearText } = useSearch();
  const { isSearching, searchResult, searchError } = useSearchResult();

  useEffect(() => {
    if (!isSearching && searchResult && !searchError) {
      if (searchResult?.type === "tx") history.push(`/tx/${text.trim()}`);
      if (searchResult?.type === "block") history.push(`/block/${text.trim()}`);
      if (searchResult?.type === "wallet")
        history.push(`/address/${text.trim()}`);
      onClearText();
    }

    if (!isSearching && searchError) {
      const route = text?.trim() ? `/searchNotFound` : "/txs";
      history.push(route, { keyword: text });
      onClearText();
    }
  }, [isSearching]);

  // Detect when user enter key
  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Wrapper isDark={isDark}>
      <div>
        <div tw="p-8 bg-color1">
          <Title isDark={isDark}>The Glitch Explorer</Title>
          <InputWrapper>
            <Input
              value={text}
              placeholder={`${t("common.search_placeholder")}`}
              onChange={onTextChange}
              onKeyPress={onEnterPress}
            />
            <Button
              shadow
              id={getSearchQueryIds(history.location.pathname)}
              refs={buttonRef}
              tw="p-0"
              onClick={onSearch}
            >
              <div tw="flex bg-color1 dark:bg-color7 items-center py-3 px-5">
                {isSearching ? (
                  <Spinner
                    stroke={
                      isDark ? theme`colors.color1` : theme`colors.color7`
                    }
                  />
                ) : (
                  <>
                    <SearchIcon />
                    <Text tw="ml-3 hidden md:block text-color7 dark:text-color1 font-bold">
                      {t("common.search")}
                    </Text>
                  </>
                )}
              </div>
            </Button>
          </InputWrapper>
        </div>
      </div>
    </Wrapper>
  );
}
const Title = styled(Text)(({ isDark }) => [
  css`
    font-size: 36px;
    background-image: linear-gradient(
      45deg,
      ${isDark ? theme`colors.primary` : theme`colors.primary`} 0%,
      ${isDark ? theme`colors.secondary` : theme`colors.primary`} 40%
    );
    -webkit-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 32px;
  `,
]);

const Input = styled(InputBase)(() => [
  tw`flex-1 py-3 text-sm md:text-base bg-transparent`,
  css`
    border: 1px solid ${theme`colors.color3`};
  `,
]);

const Wrapper = styled.div(({ isDark }) => [
  tw`relative bg-color1 items-center mt-6 p-0`,
  css`
    div {
      position: relative;
      z-index: 2;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      z-index: 0;
      transition: all ease-in-out 0.2s;
    }

    &:before {
      background-color: ${isDark
        ? theme`colors.secondary`
        : theme`colors.primary`};
      top: -8px;
      left: 8px;
      opacity: 12%;
    }

    &:after {
      background-color: ${isDark
        ? theme`colors.primary`
        : theme`colors.secondary`};
      left: -8px;
      top: 8px;
      opacity: 12%;
    }
  `,
]);
const InputWrapper = tw.div`flex w-full items-center`;