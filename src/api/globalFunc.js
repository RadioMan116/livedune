export const trimValue = val => {
  return !val ? val : val.trim();
};

export const writeDate = (fn, params, value) => {
  fn(prevState => {
    return { ...prevState, [params]: value };
  });
};
