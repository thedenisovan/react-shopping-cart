import ProductCard from '../ProductCard';
import { useOutletContext } from 'react-router';
import type { ProductType } from '../ProductApi';

export default function Basket() {
  const { product } = useOutletContext<{
    product: ProductType[];
  }>();

  return (
    <div className='flex flex-col flex-1 text-center justify-center'>
      <h1>This is Basket</h1>
      <p>Welcome friend</p>
    </div>
  );
}
