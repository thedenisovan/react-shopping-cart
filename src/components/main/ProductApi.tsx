import { useState, useEffect } from 'react';

// Custom hook to fetch data from fake shop api
const useProductData = () => {
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

  const [product, setProduct] = useState<ProductType[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setProduct(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { product, error, loading };
};

export default useProductData;
