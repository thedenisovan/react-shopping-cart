import Header from './header/Header';
import Home from './main/home/Home';
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';

export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Home />
      <Footer container className='bg-gray-200 rounded-0'>
        <FooterCopyright href='#' by='BRAND™' year={2025} />
        <FooterLinkGroup>
          <FooterLink href='https://github.com/thedenisovan'>
            <p className='text-white! text-[1rem] border-b-2  m-0'>GitHub</p>
          </FooterLink>
          <FooterLink href='https://www.linkedin.com/in/dainis-dilevka-961a332b4/'>
            <p className='text-white! text-[1rem] border-b-2  m-0'>LinkedIn</p>
          </FooterLink>
          <FooterLink href='https://github.com/thedenisovan/react-shopping-cart'>
            <p className='text-white! text-[1rem] border-b-2  m-0'>Project</p>
          </FooterLink>
          <FooterLink href='#'>
            <p className='text-white! text-[1rem] border-b-2  m-0'>Header</p>
          </FooterLink>
        </FooterLinkGroup>
      </Footer>
    </div>
  );
}
