export const limitStringLength = (str: any) => {
  try {
    if (str.length > 35) {
      return `${(str = str.substring(0, 35))}...`;
    } else {
      return str;
    }
  } catch (error) {
    return error;
  }
};
