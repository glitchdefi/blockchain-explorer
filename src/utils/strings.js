export function sliceString(str) {
  return str && str?.length > 20 ? `${str.slice(0, 20)}...` : str;
}
