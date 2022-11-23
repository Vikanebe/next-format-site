import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppSliceState = {
  app: {
    isMobile: boolean
  }
}

const initialState: AppSliceState = {
  app: {
    isMobile: false,
  }
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resize(state, action: PayloadAction<boolean>) {
      state.app.isMobile = action.payload
    },
  }
});

export const { resize } = appSlice.actions;
