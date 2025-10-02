import ProductCard from '../ProductCard';
import { useOutletContext } from 'react-router';
import type { ProductType } from '../ProductApi';
import { Link } from 'react-router';
import Button from '@mui/material/Button';

export default function Basket() {
  const { products, updateQuantity, deleteFromBasket } = useOutletContext<{
    products: ProductType[];
    updateQuantity: (id: number, amount: number) => void;
    deleteFromBasket: (id: number) => void;
  }>();
  const addedProducts = products.filter((prod) => prod.quantity > 0);

  const totalPrice = addedProducts.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const totalItems = addedProducts.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div
      className={`flex-1 text-center flex lg:justify-center flex-col lg:flex-row ${
        totalItems > 0 ? '' : 'items-center'
      }`}
    >
      {!addedProducts.length && (
        <div>
          <h3>Your Basket is empty</h3>
          <Link to='/shop'>Go to shop</Link>
        </div>
      )}

      {addedProducts.length !== 0 && (
        <div>
          {addedProducts.map((prod) => (
            <ProductCard
              updateQuantity={updateQuantity}
              deleteFromBasket={deleteFromBasket}
              product={prod}
              key={prod.id}
              isBasket={true}
            />
          ))}
        </div>
      )}
      {addedProducts.length !== 0 && (
        <div className='shadow-xl bg-white rounded-[2%] lg:w-[250px] lg:h-[400px] lg:ml-10 mt-3 lg:flex flex-col justify-end'>
          <div>Total Items: {totalItems}</div>
          <div>Item Price: ${totalPrice.toFixed(2)}</div>
          <div className='flex justify-center'>
            Shipping:
            {totalPrice < 400 ? ` $25` : ' Free shipping'}
          </div>
          <h3>
            Total: $
            {totalPrice > 399
              ? totalPrice.toFixed(2)
              : (totalPrice + 25).toFixed(2)}
          </h3>
          <Button
            size='medium'
            variant='contained'
            className='mb-3 w-30 m-auto mt-0'
            color='success'
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
