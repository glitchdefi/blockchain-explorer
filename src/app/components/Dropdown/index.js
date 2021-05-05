import React, { cloneElement, isValidElement, useState } from "react";
import tw, { theme } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import { Text } from "../Text";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownLabel } from "./DropdownLabel";
import { useClickOutside } from "./hooks/useClickOutside";
import { DropdownItem } from "./DropdownItem";
import { DropdownSearchInput } from "./DropdownSearchInput";

export function Dropdown(props) {
  const [isShow, setIsShow] = useState();
  let dropdownMenuRef = useClickOutside(() => setIsShow(false));

  const {
    label,
    search,
    searchPlaceholder,
    customLabel,
    options,
    children,
  } = props;

  const onToggle = () => {
    setIsShow(!isShow);
  };

  const renderLabel = () => {
    if (isValidElement(customLabel)) {
      return cloneElement(customLabel);
    }

    return label;
  };

  const renderSearchInput = () => {
    if (!search) return null;
    return <DropdownSearchInput placeholder={searchPlaceholder} />;
  };

  const renderItems = () => {
    if (options?.length) {
      return options.map((o, i) => {
        return (
          <DropdownItem key={i}>
            <Text tw="text-tiny">{o?.label}</Text>
          </DropdownItem>
        );
      });
    }
    return children;
  };

  return (
    <>
      <Wrapper ref={dropdownMenuRef}>
        <DropdownLabel onClick={onToggle}>
          {renderLabel()}
          <FontAwesomeIcon
            css={[tw`h-3 w-3!`, { color: theme`colors.primary` }]}
            icon={isShow ? faSortUp : faCaretDown}
          />
        </DropdownLabel>

        <DropdownMenu isVisible={isShow}>
          {renderSearchInput()}
          {renderItems()}
        </DropdownMenu>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`relative inline-block z-20`;
