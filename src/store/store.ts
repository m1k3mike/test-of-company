import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "../features/companiesSlice";

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
