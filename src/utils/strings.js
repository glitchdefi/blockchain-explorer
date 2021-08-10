export const truncateAddress = (address, startLength = 6, endLength = 6) => {
  return `${address.substring(0, startLength)}...${address.substring(
    address.length - endLength
  )}`;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
