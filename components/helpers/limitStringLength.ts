export const limitStringLength = (str: any) => {
  try {
    if (str.length > 60) {
      return `${(str = str.substring(0, 60))}...`;
    } else {
      return str;
    }
  } catch (error) {
    return error;
  }
};
