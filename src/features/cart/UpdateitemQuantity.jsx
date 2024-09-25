import { useDispatch } from 'react-redux';
import Button from '../../utils/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateitemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch(pizzaId);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateitemQuantity;
