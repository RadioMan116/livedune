const serverData = {
  email: 'example@example.com',
  password: 'password2021',
};
export const logIn = data => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        data.email === serverData.email && data.password === serverData.password
          ? resolve({ status: 200 })
          : reject({ message: 'User not found', error: 'USER_NOT_FOUND' }),
      800,
    ),
  );
};

export const restorePass = data => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        data.email === serverData.email
          ? resolve({ status: 200 })
          : reject({ message: 'User not found', error: 'USER_NOT_FOUND' }),
      800,
    ),
  );
};
