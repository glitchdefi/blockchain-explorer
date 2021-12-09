import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { ValidatorsTable } from "./components/ValidatorsTable";

export function ValidatorsPage() {
  const { t } = useTranslation();
  const [params, setParams] = useState();

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          Validators
        </Text>
        <div tw="mt-4">
          <ValidatorsTable
            loading={false}
            total={20}
            data={[1, 2, 3, 4, 5, 6]}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
