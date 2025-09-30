import ProductCard from '../ProductCard';
import { useOutletContext } from 'react-router';
import type { ProductType } from '../ProductApi';
import { Link } from 'react-router';

export default function Basket() {
  const { products, updateQuantity, deleteFromBasket } = useOutletContext<{
    products: ProductType[];
    updateQuantity: (id: number, amount: number) => void;
    deleteFromBasket: (id: number) => void;
  }>();
  const addedProducts = products.filter((prod) => prod.quantity > 0);

  const getTotal = (type: string) =>
    addedProducts.reduce((acc, cur) => acc + cur[type], 0);

  const totalPrice = getTotal('price');
  const totalItems = getTotal('quantity');

  return (
    <div
      className={`flex-1 text-center flex flex-col ${
        addedProducts.length ? 'justify-between' : 'justify-center'
      }`}
    >
      {!addedProducts.length && (
        <div>
          <h3>Your Basket is empty</h3>
          <Link to='/shop'>Go to shop</Link>
        </div>
      )}

      {addedProducts.length !== 0 &&
        addedProducts.map((prod) => (
          <ProductCard
            updateQuantity={updateQuantity}
            deleteFromBasket={deleteFromBasket}
            product={prod}
            key={prod.id}
            isBasket={true}
          />
        ))}
      {addedProducts.length !== 0 && (
        <div>
          <hr className='!border-t-black border-2'></hr>
          <div>Total Items: {totalItems}</div>
          <div>Item Price: ${totalPrice}</div>
          <div className='flex justify-center'>
            Shipping:
            {totalPrice < 400 ? ` $25` : ' Free shipping'}
          </div>
          <h3>Total: {totalPrice > 399 ? totalPrice : totalPrice + 25}</h3>
        </div>
      )}
    </div>
  );
}
