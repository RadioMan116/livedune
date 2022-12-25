import validator from 'validator';

export const trimValue = val => {
  return !val ? val : val.trim();
};
export const isEmpty = obj => {
  for (let x in obj) {
    if (obj[x].length === 0) return true;
  }
  return false;
};

export const writeData = (fn, value) => {
  fn(prevState => {
    return { ...prevState, ...value };
  });
};

export const isValidEmail = email => {
  return (
    validator.isEmail(email) &&
    /^[a-zA-Z_+\.0-9-]+@[a-zA-Z_+\.0-9-]+\.[a-zA-Z]+$/g.test(email)
  );
};
