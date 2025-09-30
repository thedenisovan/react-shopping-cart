import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard';
import { useState, useEffect } from 'react';
import type { ProductType } from '../ProductApi';
import { useOutletContext } from 'react-router';

// responsive breakpoint settings for react multi carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2200, min: 1077 },
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

export default function Offers({ type }: { type: string }) {
  const [currProduct, setCurrProduct] = useState<ProductType[]>([]);
  const { updateQuantity } = useOutletContext<{
    updateQuantity: (id: number, amount: number) => void;
  }>();
  const {
    manProducts,
    womanProducts,
    electronicProducts,
    jewelry,
    specOffers,
  } = useProductCategory();

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
      <Carousel responsive={responsive} infinite={true}>
        {currProduct.map((prod) => (
          <ProductCard
            updateQuantity={updateQuantity}
            key={prod.id}
            product={prod}
          />
        ))}
      </Carousel>
    </div>
  );
}

// Hook to return products based on their category
const useProductCategory = () => {
  const [manProducts, setManProducts] = useState<ProductType[]>([]);
  const [womanProducts, setWomanProducts] = useState<ProductType[]>([]);
  const [jewelry, setJewelry] = useState<ProductType[]>([]);
  const [electronicProducts, setElectronic] = useState<ProductType[]>([]);
  const [specOffers, setSpecOffers] = useState<ProductType[]>([]);
  const { products } = useOutletContext<{
    products: ProductType[];
  }>();

  // sets different product based on category
  // when products gets fetched from api
  useEffect(() => {
    const getManClothing = () => {
      const manClothing = products.filter(
        (prod) => prod.category === "men's clothing"
      );
      setManProducts(manClothing);
    };

    const getWomansClothing = () => {
      const womansClothing = products.filter(
        (prod) => prod.category === "women's clothing"
      );
      setWomanProducts(womansClothing);
    };

    const getJewelry = () => {
      const jewelry = products.filter((prod) => prod.category === 'jewelery');
      setJewelry(jewelry);
    };

    const getElectronics = () => {
      const electronics = products.filter(
        (prod) => prod.category === 'electronics'
      );
      setElectronic(electronics);
    };

    const getSpecOffer = () => {
      const offers = products.filter(
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
  }, [products]);

  return {
    manProducts,
    womanProducts,
    electronicProducts,
    jewelry,
    specOffers,
  };
};
