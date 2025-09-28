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
    <div>
      <h3 className='text-center'>Special offers</h3>
      <Carousel responsive={responsive} infinite={true}>
        <ProductCard productId={1} />
        <ProductCard productId={2} />
        <ProductCard productId={3} />
        <ProductCard productId={4} />
        <ProductCard productId={15} />
      </Carousel>
    </div>
  );
}
