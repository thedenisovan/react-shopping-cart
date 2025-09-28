import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useProductData from '../../ProductApi';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    <Carousel responsive={responsive}>
      <SlideContainer />
    </Carousel>
  );
}

const SlideContainer = () => {
  const { product, error, loading } = useProductData();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>{product[5].title}</h3>
    </div>
  );
};
