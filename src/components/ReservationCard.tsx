import { removeReservation } from "../features/reservationsSlice";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customersSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}
function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const handleRemoveReservation = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name: name,
        food: [],
      })
    );
    // console.log(event.currentTarget.textContent);
    // dispatch(removeReservation(event.currentTarget.textContent));
  };

  return (
    <div
      key={index}
      className="reservation-card-container"
      onClick={handleRemoveReservation}
    >
      {name}
    </div>
  );
}

export default ReservationCard;
