import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import {
  addReservation,
  removeReservation,
} from "./features/reservationsSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput)); // just wrap your addReservation action + value in dispatch
    // then clear state
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations &&
                reservations.map((name, index) => {
                  return (
                    <ReservationCard name={name} index={index} key={index} />
                  );
                })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers &&
            customers.map((customer) => {
              return (
                <CustomerCard
                  id={customer.id}
                  name={customer.name}
                  food={customer.food}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
