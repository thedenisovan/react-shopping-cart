import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard';
import useProductData from '../ProductApi';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

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
  const { product, error, loading } = useProductData();
  const offerProducts = [
    product[6],
    product[7],
    product[2],
    product[3],
    product[18],
  ];

  if (error) return <p>A network error was encountered</p>;

  return (
    <div className='bg-gray-100 flex-1'>
      {loading ? (
        <div className='h-100 flex justify-center items-center'>
          <Stack spacing={2} direction='row' alignItems='center'>
            <CircularProgress size='10rem' color='inherit' />
          </Stack>
        </div>
      ) : (
        <Carousel responsive={responsive} infinite={true}>
          {offerProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
