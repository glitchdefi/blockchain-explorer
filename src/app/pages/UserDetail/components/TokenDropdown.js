import React from "react";
import tw from "twin.macro";

// Components
import { Text as TextBase } from "src/app/components/Text";
import { Dropdown } from "src/app/components/Dropdown";
import { DropdownItem } from "src/app/components/Dropdown/DropdownItem";
import { useTranslation } from "react-i18next";
import { Empty } from "src/app/components/Empty";

export function TokenDropdown() {
  const { t } = useTranslation();

  const renderLabel = () => {
    return (
      <LabelWrapper>
        <Text tw="mr-5">--</Text>
        <NumberTokens>0</NumberTokens>
      </LabelWrapper>
    );
  };

  const renderDropdownItems = () => {
    return [1, 2, 3].map((_, i) => {
      return (
        <DropdownItem key={i}>
          <FlexLayout>
            <Text tw="font-bold">Glitch (GLCH)</Text>
            <Text tw="font-bold">$1,651.47</Text>
          </FlexLayout>

          <FlexLayout>
            <Text tw="text-textSecondary!">312.778 GLCH</Text>
            <Text tw="text-textSecondary!">@5.28</Text>
          </FlexLayout>
        </DropdownItem>
      );
    });
  };

  return (
    <>
      <Dropdown
        search
        searchPlaceholder={t("userDetails.search_for_token_name")}
        customLabel={renderLabel()}
      >
        <Empty title="Empty" tw="p-0"/>
        {/* {renderDropdownItems()} */}
      </Dropdown>
    </>
  );
}

const LabelWrapper = tw.div`flex flex-wrap items-center`;
const FlexLayout = tw.div`flex flex-wrap justify-between items-center`;
const NumberTokens = tw.div`rounded-sm text-tiny px-3 py-1 bg-gradient-to-r from-primary to-info`;
const Text = tw(TextBase)`text-tiny`;
