import { useDispatch, useSelector } from 'react-redux';
import Button from '../../utils/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getIndividualItemQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateitemQuantity from '../cart/UpdateitemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getIndividualItemQuantity(id));

  const isInCart = currentQuantity ? true : false;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice * 10,
      totalPrice: unitPrice * 10,
    };

    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`w-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice * 10)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateitemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          ) : (
            ''
          )}

          {!isInCart && !soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
export default MenuItem;
