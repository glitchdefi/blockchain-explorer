import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { ValidatorsTable } from "./components/ValidatorsTable";
import { useValidatorList, useValidatorSlice } from "src/state/validator/hooks";

export function ValidatorsPage() {
  useValidatorSlice();
  const { t } = useTranslation();

  const [params, setParams] = useState();
  const { isFetchingValidatorList, data, total } = useValidatorList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          Validators
        </Text>
        <div tw="mt-4">
          <ValidatorsTable
            loading={isFetchingValidatorList}
            total={total}
            data={data}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
