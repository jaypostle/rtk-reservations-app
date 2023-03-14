import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";

export const store = configureStore({
  reducer: {
    // all of the different slices go here
    reservations: reservationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
