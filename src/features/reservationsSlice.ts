import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}
const initialState: ReservationState = {
  value: ["Selena"],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      // do this to set the proper type
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
