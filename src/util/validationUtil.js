export const validAttribute = (attributeName) => {
  if (!(attributeName === undefined || attributeName === null || attributeName.length == 0)) {
    return true;
  } else {
    return false;
  }
};
