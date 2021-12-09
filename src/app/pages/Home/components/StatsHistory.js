import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

// Utils
import { formatNumber } from "src/utils/numbers";

// Hooks
import { useWalletCount } from "src/state/wallet/hooks";
import { useAllGlitchInfo } from "src/state/price/hooks";
import { useHeadBlockNumber } from "src/state/block/hooks";
import { useProducerName } from "src/state/producer/hooks";

// Components
import {
  ValidatorIcon,
  HeadBlockIcon,
  MarketIcon,
  TotalAccountIcon,
} from "src/app/components/Svg/Icons";
import { Grid } from "src/app/components/Grid";
import { StatsCard } from "./StatsCard";

export const StatsHistory = () => {
  const { t } = useTranslation();
  const { walletCount } = useWalletCount();
  const { allGlitchInfo } = useAllGlitchInfo();
  const { headBlock } = useHeadBlockNumber();
  const { producerName } = useProducerName();
  const { market_cap } = allGlitchInfo || {};

  return (
    <Wrapper>
      <Grid cols={2}>
        <StatsCard
          icon={<MarketIcon />}
          title={t("homePage.market_cap")}
          value={market_cap}
          prefix="$"
        />

        <StatsCard
          icon={<TotalAccountIcon />}
          title={t("homePage.total_accounts")}
          value={walletCount === 0 || !walletCount ? "0" : walletCount}
          separator=","
          decimals={0}
        />

        <StatsCard
          icon={<ValidatorIcon />}
          title={t("homePage.validator")}
          value={producerName || "--"}
        />
        <StatsCard
          icon={<HeadBlockIcon />}
          title={t("homePage.head_block")}
          value={Number(headBlock)}
          separator={null}
        />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = tw.div`lg:(pl-0)`;
