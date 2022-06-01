import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: { id: null, email: null, estado: null, tipoRol: null, username: null, password: null, tokeDeAcceso: null },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.estado = action.payload.estado;
      state.tipoRol = action.payload.tipoRol;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.tokeDeAcceso = action.payload.tokeDeAcceso;
    },
    clearUser: (state) => {
      state.id = null;
      state.email = null;
      state.estado = null;
      state.tipoRol = null;
      state.username = null;
      state.password = null;
      state.tokeDeAcceso = null;
    }
  }
});

export const { setUser, clearUser } = slice.actions;
export default slice.reducer;
