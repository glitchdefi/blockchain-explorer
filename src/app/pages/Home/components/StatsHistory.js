import React from "react";
import { useTranslation } from "react-i18next";

// Hooks
import { useWalletCount } from "src/state/wallet/hooks";

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

export const StatsHistory = React.memo(() => {
  const { t } = useTranslation();
  const { walletCount } = useWalletCount();

  return (
    <Grid cols={2}>
      <StatsCard
        icon={<ProducerIcon />}
        title={t("homePage.producer")}
        value="--"
      />
      <StatsCard
        icon={<CurrencyIcon />}
        title={t("homePage.current_max")}
        value="--"
      />
      <StatsCard
        icon={<HeadBlockIcon />}
        title={t("homePage.head_block")}
        value="--"
      />
      <StatsCard
        icon={<PriceIcon />}
        title={t("homePage.price_market_cap")}
        value="--"
      />
      <StatsCard icon={<LibIcon />} title={t("homePage.lib")} value="--" />
      <StatsCard
        icon={<TotalAccountIcon />}
        title={t("homePage.total_account")}
        value={walletCount >= 0 ? walletCount : "--"}
      />
    </Grid>
  );
});
