import React from "react";
import { useTranslation } from "react-i18next";

// Hooks
import { useWalletCount } from "src/state/wallet/hooks";
import { useAllGlitchInfo } from "src/state/price/hooks";
import { useHeadBlockNumber } from "src/state/block/hooks";
import { useProducerName } from "src/state/producer/hooks";

// Components
import {
  ProducerIcon,
  CurrencyIcon,
  HeadBlockIcon,
  PriceIcon,
  LibIcon,
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
  const { current_price, market_cap } = allGlitchInfo || {};

  return (
    <Grid cols={2}>
      <StatsCard
        icon={<ProducerIcon />}
        title={t("homePage.producer")}
        value={producerName || "--"}
      />
      {/* <StatsCard
        icon={<CurrencyIcon />}
        title={t("homePage.current_max")}
        value="--"
      /> */}
      <StatsCard
        icon={<HeadBlockIcon />}
        title={t("homePage.head_block")}
        value={headBlock}
        separator={null}
      />
      <StatsCard
        icon={<PriceIcon />}
        title={t("homePage.price_market_cap")}
        values={[current_price, market_cap]}
        decimals={[2, 0]}
        prefix="$"
      />
      {/* <StatsCard icon={<LibIcon />} title={t("homePage.lib")} value="--" /> */}
      <StatsCard
        icon={<TotalAccountIcon />}
        title={t("homePage.total_account")}
        value={walletCount === 0 ? "0" : walletCount}
      />
    </Grid>
  );
};
