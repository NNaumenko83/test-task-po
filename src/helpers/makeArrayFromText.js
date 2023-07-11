export const makeArrayFromText = (text = "") => {
  return text.split(" ").filter((item) => !!item);
};
