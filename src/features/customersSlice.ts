import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  food: string[];
  name: string;
  id: string;
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

export interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      console.log(action.payload);
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customersSlice.actions;

export default customersSlice.reducer;
