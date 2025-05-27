import { createSlice } from '@reduxjs/toolkit'
import Password from 'antd/es/input/Password'

const initialState = {
  token: null,
  userData: {},

  isAuthenticated: false
}

export const setAuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      state.isAuthenticated = true;
    }
   
  },
})


export const {loginSuccess} = setAuthSlice.actions

export default setAuthSlice.reducer