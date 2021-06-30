import { NETWORK } from "./index";

export const HOME_IDS = {
  toHomePage: `${NETWORK}_navigation_tohomepage_1`,
  toBlockPage: `${NETWORK}_navigation_toblockpage_2`,
  toTxsPage: `${NETWORK}_navigation_totransactions_3`,
  searchQuery: `${NETWORK}_home_searchquery_1`,
  blocksTab: `${NETWORK}_home_blocks_2`,
  txsTab: `${NETWORK}_home_transactions_3`,
};

const BLOCK_IDS = {
  searchQuery: `${NETWORK}_blocks_searchquery_1`,
};

const TXS_IDS = {
  searchQuery: `${NETWORK}_transactions_searchquery_1`,
};

const FOOTER = {
  toContactUs: `${NETWORK}_footer_tocontactus_1`,
};

export const CONTACT_US_IDS = {
  submit: `${NETWORK}_contactus_submitcontatcus_1`,
};

export const getHomeNavIds = (name) => {
  switch (name) {
    case "home":
      return HOME_IDS.toHomePage;

    case "blocks":
      return HOME_IDS.toBlockPage;

    case "transactions":
      return HOME_IDS.toTxsPage;

    default:
      return HOME_IDS.toHomePage;
  }
};

export const getFooterNavIds = (pathname) => {
  switch (pathname) {
    case "/contactus":
      return FOOTER.toContactUs;

    default:
      return FOOTER.toContactUs;
  }
};

export const getSearchQueryIds = (pathname) => {
  switch (pathname) {
    case "/":
      return HOME_IDS.searchQuery;

    case "/blocks":
      return BLOCK_IDS.searchQuery;

    case "/txs":
      return TXS_IDS.searchQuery;

    default:
      return HOME_IDS.searchQuery;
  }
};
