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

      {addedProducts.length !== 0 && (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-2'>
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
        <div>
          <hr className='!border-t-black border-2'></hr>
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
            className='mb-3'
            color='success'
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
