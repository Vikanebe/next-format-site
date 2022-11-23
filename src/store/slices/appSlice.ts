import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppSliceState = {
  isMobile: boolean
}

const initialState: AppSliceState = {
  isMobile: false,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resize(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
  }
});

export const { resize } = appSlice.actions;
