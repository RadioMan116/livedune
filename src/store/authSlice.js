import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_authenticated: false,
  name: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.is_authenticated = true;
      state.name = 'Игорь';
    },
    setLoggedOut: state => {
      return { ...state, is_authenticated: false, name: null };
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
