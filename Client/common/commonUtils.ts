export const convertJSONToArrays = (jsonObject: Object) =>
  Object.values(jsonObject);

export const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};