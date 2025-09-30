import Header from './header/Header';
import { Outlet } from 'react-router';
import { Footer, FooterCopyright, FooterLinkGroup } from 'flowbite-react';
import useProductData from './main/ProductApi';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import type { ProductType } from './main/ProductApi';

export default function App() {
  const { product, loading, error } = useProductData();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(product);
  }, [product]);

  const updateQuantity = (id: number, amount: number) => {
    const prod = products.find((p) => p.id === id);
    if (!prod) return null;

    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + amount } : p
      )
    );
  };

  const deleteFromBasket = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: 0 } : p))
    );
  };

  if (error) throw new Error('Error durning fetch api');

  return (
    <div className='flex flex-col min-h-screen'>
      <Header products={products} />
      {loading ? (
        <div className='flex-1 h-100 flex justify-center items-center'>
          <Stack spacing={2} direction='row' alignItems='center'>
            <CircularProgress size='10rem' color='inherit' />
          </Stack>
        </div>
      ) : (
        <Outlet context={{ products, updateQuantity, deleteFromBasket }} />
      )}
      <Footer container className='bg-gray-200 rounded-0'>
        <FooterCopyright href='#' by='BRAND™' year={2025} />
        <FooterLinkGroup>
          <div className='flex gap-3'>
            <a
              href='https://github.com/thedenisovan'
              className='text-[1rem] text-white hover:underline'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/dainis-dilevka-961a332b4/'
              className='text-[1rem] text-white hover:underline'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/thedenisovan/react-shopping-cart'
              className='text-[1rem] text-white hover:underline'
            >
              Project
            </a>
            <a href='#' className='text-[1rem] text-white hover:underline'>
              Header
            </a>
          </div>
        </FooterLinkGroup>
      </Footer>
    </div>
  );
}
