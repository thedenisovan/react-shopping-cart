import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard';

// responsive breakpoint settings for react multi carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Offers() {
  return (
    <div className='bg-gray-100'>
      <h2 className='text-center mt-2'>SPECIAL OFFERS</h2>
      <Carousel responsive={responsive} infinite={true}>
        <ProductCard productId={5} />
        <ProductCard productId={18} />
        <ProductCard productId={2} />
        <ProductCard productId={7} />
        <ProductCard productId={6} />
      </Carousel>
    </div>
  );
}
