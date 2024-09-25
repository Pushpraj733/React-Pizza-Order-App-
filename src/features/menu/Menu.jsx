import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <ul className="divider-stone-200 divide-y px-2 ">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}
// below will be the named export
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

// useLoaderData -
/*
      - This is a hook fetches a data.
      - It's made directly available within your    components no more prop drilling or complex state managment meeded.

FEATURES:
      - You can define loaders for individual routes.

*/
