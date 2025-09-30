import ProductCard from '../ProductCard';
import { useOutletContext } from 'react-router';
import type { ProductType } from '../ProductApi';

export default function Basket() {
  const { products, updateQuantity, deleteFromBasket } = useOutletContext<{
    products: ProductType[];
    updateQuantity: (id: number, amount: number) => void;
    deleteFromBasket: (id: number) => void;
  }>();
  const addedProducts = products.filter((prod) => prod.quantity > 0);

  return (
    <div className='flex flex-col flex-1 text-center justify-center'>
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
  );
}
