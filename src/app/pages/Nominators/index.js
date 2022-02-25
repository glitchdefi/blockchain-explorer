import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { NominatorsTable } from "./components/NominatorsTable";
import { useNominatorList, useNominatorSlice } from "src/state/nominator/hooks";

export function NominatorsPage() {
  useNominatorSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();

  const { isFetchingNominatorList, data, total } = useNominatorList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          Nominators
        </Text>
        <div tw="mt-4">
          <NominatorsTable
            loading={isFetchingNominatorList}
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
