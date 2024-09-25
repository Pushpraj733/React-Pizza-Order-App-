import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuntity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (totalCartQuntity === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-0 flex w-full max-w-3xl grow  items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm  uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuntity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}
export default CartOverview;
