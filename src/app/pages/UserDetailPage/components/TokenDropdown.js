import React from "react";
import tw from "twin.macro";

// Components
import { Text as TextBase } from "src/app/components/Text";
import { Dropdown } from "src/app/components/Dropdown";
import { DropdownItem } from "src/app/components/Dropdown/DropdownItem";
import { useTranslation } from "react-i18next";

export function TokenDropdown() {
  const { t } = useTranslation();

  const renderLabel = () => {
    return (
      <LabelWrapper>
        <Text>$888,8888</Text>
        <NumberTokens>102</NumberTokens>
      </LabelWrapper>
    );
  };

  const renderDropdownItems = () => {
    return (
      <DropdownItem>
        <FlexLayout>
          <Text>Glitch (GLCH)</Text>
          <Text>$1,651.47</Text>
        </FlexLayout>

        <FlexLayout>
          <Text>312.778 GLCH</Text>
          <Text>@5.28</Text>
        </FlexLayout>
      </DropdownItem>
    );
  };

  return (
    <>
      <Dropdown
        search
        searchPlaceholder={t('userDetails.search_for_token_name')}
        customLabel={renderLabel()}
      >
        {renderDropdownItems()}
      </Dropdown>
    </>
  );
}

const LabelWrapper = tw.div`flex flex-wrap items-center`;
const FlexLayout = tw.div`flex flex-wrap justify-between items-center`;
const NumberTokens = tw.div`rounded-sm ml-5 text-13 px-3 py-1 bg-gradient-to-r from-primary to-cobalt`;
const Text = tw(TextBase)`text-13`;
