import Header from './header/Header';
import { Outlet } from 'react-router';
import { Footer, FooterCopyright, FooterLinkGroup } from 'flowbite-react';
import useProductData from './main/ProductApi';

export default function App() {
  const { product, loading, error } = useProductData();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet context={{ product, loading, error }} />
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
