import CarouselComp from './CarouselComp';
import Offers from './Offers';

export default function Home() {
  return (
    <main className='bg-gray-100! md:flex md:flex-col flex-1'>
      <CarouselComp></CarouselComp>
      <h2 className='text-center p-2 mb-0 bg-gray-100 md:text-4xl! md:pt-[1rem]!'>
        NEW PRODUCTS
      </h2>
      <Offers type='' />
    </main>
  );
}
