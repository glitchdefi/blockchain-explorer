import React from "react";
import tw, { css, styled, theme } from "twin.macro";
import { Button } from "src/app/components/Button";
import { Text } from "src/app/components/Text";

const configs = [
  { label: "24 Hours", value: null },
  { label: "3 Days", value: null },
  { label: "7 Days", value: null },
];

export function Filters() {
  const renderButtonFilters = () => {
    return configs.map((o, i) => {
      return (
        <ButtonFilter isActive={i === 0}>
          <Text className="label" tw="font-bold text-white-60!">
            {o.label}
          </Text>
        </ButtonFilter>
      );
    });
  };

  return <Wrapper>{renderButtonFilters()}</Wrapper>;
}

const Wrapper = tw.div`grid grid-cols-3 gap-4 w-full md:w-2/4 lg:w-1/4`;
const ButtonFilter = styled(Button)(({ isActive }) => [
  tw`py-3`,
  css`
    background-color: rgba(36, 198, 201, 0.15);
  `,
  isActive &&
    css`
      background-color: ${theme`colors.primary`};

      .label {
        color: white !important;
        opacity: 100% !important;
      }
    `,
]);
