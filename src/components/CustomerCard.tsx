import { addFoodToCustomer } from "../features/customersSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food &&
            food.map((item) => {
              return <p> {item}</p>;
            })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => {
              setCustomerFoodInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;

              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
