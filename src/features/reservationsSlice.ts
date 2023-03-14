import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    add: (state) => {
      //   state.value.push("hehlf");
    },
    remove: () => {},
  },
});

export default reservationsSlice.reducer;
