export const convertToUa = (from, to) => {
  const result = from * to;

  return result;
};

export const convertFromUa = (from, to) => {
  const res = from / to;

  return res;
};

export const countTax = (sum, pr) => {
  const res = (sum * pr) / 100;

  return res;
};
