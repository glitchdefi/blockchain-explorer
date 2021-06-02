export function sliceString(str) {
  return str && str?.length > 16 ? `${str.slice(0, 16)}...` : str;
}
