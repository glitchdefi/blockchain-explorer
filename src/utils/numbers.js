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
  if (num == 0) return "$0.00";
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

export const formatNumber = (num, digits = 0, round = false) => {
  if (num == 0) return "0";
  if (!num) return "--";

  return numbro(num).format({
    average: round,
    mantissa: digits,
    thousandSeparated: true,
  });
};

const toNumber = (num) => {
  if (num == 0) return "0";
  if (!num) return null;

  const numToStr = num?.toString();

  if (numToStr?.includes("e")) {
    return Number(numToStr).toLocaleString().replaceAll(",", "");
  }

  return numToStr;
};

function numberWithCommas(n) {
  var parts = n?.toString()?.split(".");
  return (
    parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (parts[1] ? "." + parts[1] : "")
  );
}

export const formatWei = (number, isFormatNumber = true) => {
  if (Web3Utils.isHexStrict(number)) {
    number = Web3Utils.hexToNumberString(number);
  }
  const num = toNumber(number);
  if (num == 0) return "0";
  if (!num) return "0";

  const numWei = Web3Utils.fromWei(num, "ether");

  return isFormatNumber ? numberWithCommas(numWei) : numWei;
};

export const calculateFee = (fee, tip) => {
  return formatWei(parseFloat(fee) + parseFloat(tip));
};
