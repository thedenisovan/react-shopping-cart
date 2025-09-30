import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard';
import useProductData from '../ProductApi';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';

// Interface to store fake shop call data
interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

// responsive breakpoint settings for react multi carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 4,
  },
  veryLargeDesktop: {
    breakpoint: { max: 2200, min: 1700 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1077 },
    items: 2,
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

export default function Offers({ type }: { type: string }) {
  const { loading, error } = useProductData();
  const [currProduct, setCurrProduct] = useState<ProductType[]>([]);
  const {
    manProducts,
    womanProducts,
    electronicProducts,
    jewelry,
    specOffers,
  } = useProductCategory();

  if (error) throw new Error('Error durning fetch api');

  // sets current product state conditionally based on component prop value
  useEffect(() => {
    switch (type) {
      case 'man':
        setCurrProduct(manProducts);
        break;
      case 'woman':
        setCurrProduct(womanProducts);
        break;
      case 'jewelry':
        setCurrProduct(jewelry);
        break;
      case 'electronic':
        setCurrProduct(electronicProducts);
        break;
      default:
        setCurrProduct(specOffers);
        break;
    }
  }, [
    manProducts,
    womanProducts,
    electronicProducts,
    jewelry,
    specOffers,
    type,
  ]);

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
          {currProduct.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </Carousel>
      )}
    </div>
  );
}

// Hook to return products based on their category
const useProductCategory = () => {
  const { product } = useProductData();
  const [manProducts, setManProducts] = useState<ProductType[]>([]);
  const [womanProducts, setWomanProducts] = useState<ProductType[]>([]);
  const [jewelry, setJewelry] = useState<ProductType[]>([]);
  const [electronicProducts, setElectronic] = useState<ProductType[]>([]);
  const [specOffers, setSpecOffers] = useState<ProductType[]>([]);

  // sets different product based on category
  // when products gets fetched from api
  useEffect(() => {
    const getManClothing = () => {
      const manClothing = product.filter(
        (prod) => prod.category === "men's clothing"
      );
      setManProducts(manClothing);
    };

    const getWomansClothing = () => {
      const womansClothing = product.filter(
        (prod) => prod.category === "women's clothing"
      );
      setWomanProducts(womansClothing);
    };

    const getJewelry = () => {
      const jewelry = product.filter((prod) => prod.category === 'jewelery');
      setJewelry(jewelry);
    };

    const getElectronics = () => {
      const electronics = product.filter(
        (prod) => prod.category === 'electronics'
      );
      setElectronic(electronics);
    };

    const getSpecOffer = () => {
      const offers = product.filter(
        (prod) =>
          prod.id === 1 ||
          prod.id === 2 ||
          prod.id === 3 ||
          prod.id === 6 ||
          prod.id === 8
      );
      setSpecOffers(offers);
    };

    getManClothing();
    getJewelry();
    getElectronics();
    getWomansClothing();
    getSpecOffer();
  }, [product]);

  return {
    manProducts,
    womanProducts,
    electronicProducts,
    jewelry,
    specOffers,
  };
};
