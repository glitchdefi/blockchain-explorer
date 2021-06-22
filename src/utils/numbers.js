import numbro from "numbro";
import Web3Utils from "web3-utils";

// using a currency library here in case we want to add more in future
export const formatCurrencyAmount = (num, digits = 2, round = true) => {
  if (num === 0) return "0.00";
  if (!num) return "-";
  if (num < 0.001) {
    return "<0.001";
  }
  return numbro(num).format({ average: round, mantissa: digits });
};

export const formatDollarAmount = (num, digits = 2, round = true) => {
  if (num === 0) return "$0.00";
  if (!num) return "-";
  if (num < 0.001) {
    return "<$0.001";
  }
  return numbro(num).formatCurrency({ average: round, mantissa: digits });
};

export const formatAmount = (num, digits = 2) => {
  const cvNum = Number(num);
  if (cvNum === 0) return "0";
  if (!cvNum) return "-";
  if (cvNum < 0.001) {
    return "<0.001";
  }
  const nf = new Intl.NumberFormat();
  return nf.format(parseFloat(cvNum?.toFixed(cvNum > 1000 ? 0 : digits)));
};

export const formatNumber = (num) => {
  if (num === 0) return "0";
  return numbro(num).format({thousandSeparated: true})
}

export const formatWei = (num, isFormatAmount) => {
  if (num == 0) return "0";
  if (!num) return "--";
  const numToStr = num?.toString();
  const numFromWei = Web3Utils.fromWei(Web3Utils.hexToNumberString(parseFloat(numToStr)));
  // Web3Utils.fromWei(
  return isFormatAmount ? formatAmount(Number(numFromWei)) : formatNumber(numFromWei);
};
