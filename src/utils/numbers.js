import numbro from "numbro";

// using a currency library here in case we want to add more in future
export const formatCurrencyAmount = (num, digits = 2, round = true) => {
  if (num === 0) return "0.00";
  if (!num) return "-";
  if (num < 0.001) {
    return "<0.001";
  }
  return numbro(num).format({ average: round, mantissa: digits });
};

// using a currency library here in case we want to add more in future
export const formatDollarAmount = (num, digits = 2, round = true) => {
  if (num === 0) return "$0.00";
  if (!num) return "-";
  if (num < 0.001) {
    return "<$0.001";
  }
  return numbro(num).formatCurrency({ average: round, mantissa: digits });
};


// using a currency library here in case we want to add more in future
export const formatAmount = (num, digits = 2) => {
  if (num === 0) return "0";
  if (!num) return "-";
  if (num < 0.001) {
    return "<0.001";
  }
  const nf = new Intl.NumberFormat();
  return nf.format(parseFloat(num.toFixed(num > 1000 ? 0 : digits)));
};
