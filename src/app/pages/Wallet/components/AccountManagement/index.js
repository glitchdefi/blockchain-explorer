import React from "react";
import { useTranslation } from "react-i18next";
import { css, styled } from "twin.macro";

// Components
import { InfoRow } from "src/app/components/InfoRow";
import { PublicKey } from "./PublicKey";

export function AccountManagement() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InfoRow
        tw="items-start"
        label={t("walletPage.public_key")}
        customValueComp={
          <PublicKey>
            8854b325d7069805053399b6dba46612a54a98e872a2b45c6aaa3b3e2997d7c8
          </PublicKey>
        }
      />

      <InfoRow
        tw="items-start"
        label={t("walletPage.public_key")}
        customValueComp={
          <PublicKey>
            8854b325d7069805053399b6dba46612a54a98e872a2b45c6aaa3b3e2997d7c8
          </PublicKey>
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.div([
  css`
    @media (min-width: 1024px) {
      padding: 20px 20px 20px 30px;
    }

    .info-row-content {
      display: block;
    }
  `,
]);
