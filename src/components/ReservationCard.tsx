import { removeReservation } from "../features/reservationsSlice";
import { useDispatch } from "react-redux";

interface ReservationCardTypes {
  name: string;
  index: number;
}
function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const handleRemoveReservation = () => {
    dispatch(removeReservation(index));
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
