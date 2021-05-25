export const tabsConfig = [
  {
    label: "Market Data",
    items: [
      {
        label: "GLCH Daily Price (USD) Chart",
        evtKey: "GLCHDailyPriceChart",
      },
      {
        label: "Total Supply & Market Cap Chart",
        evtKey: "totalSupplyChart",
      },
      {
        label: "GLCH Market Capitalization Chart",
        evtKey: "GLCHMarketChart",
      },
    ],
  },
  {
    label: "Blockchain Data",
    items: [
      {
        label: "Daily Transactions Chart",
        evtKey: "dailyTransactionsChart",
      },
      {
        label: "ERC20 Daily Token Transfer Chart",
        evtKey: "ERC20DailyTokenTransferChart",
      },
      {
        label: "Average Block Size Chart",
        evtKey: "averageBlockSizeChart",
      },
      {
        label: "Average Block Time Chart",
        evtKey: "averageBlockTimeChart",
      },
      {
        label: "Block Count and Rewards Chart",
        evtKey: "blockCountRewardsChart",
      },
    ],
  },
  {
    label: "Network Data",
    items: [
      {
        label: "Network Hash Rate Chart",
        evtKey: "networkHashRateChart",
      },
      {
        label: "Network Difficulty Chart",
        evtKey: "networkDifficultyChart",
      },
      {
        label: "Network Transaction Fee Chart",
        evtKey: "networkTransactionFeeChart",
      },
    ],
  },
];
