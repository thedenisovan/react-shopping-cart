import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard';

// responsive breakpoint settings for react multi carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 5,
  },
  veryLargeDesktop: {
    breakpoint: { max: 2200, min: 1700 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1077 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1077, min: 613 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 613, min: 0 },
    items: 1,
  },
};

export default function Offers() {
  return (
    <div className='bg-gray-100 flex-1'>
      <Carousel responsive={responsive} infinite={true}>
        <ProductCard productId={5} />
        <ProductCard productId={18} />
        <ProductCard productId={2} />
        <ProductCard productId={1} />
        <ProductCard productId={6} />
      </Carousel>
    </div>
  );
}
