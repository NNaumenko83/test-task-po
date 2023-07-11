// remove all not alphabet symbols
export const removeSymbols = (text = "") => {
  return text.replace(/\W/g, " ");
};
