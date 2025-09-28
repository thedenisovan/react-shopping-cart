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
      <Footer container>
        <FooterCopyright href='#' by='BRAND™' year={2025} />
        <FooterLinkGroup>
          <FooterLink href='https://github.com/thedenisovan'>GitHub</FooterLink>
          <FooterLink href='https://www.linkedin.com/in/dainis-dilevka-961a332b4/'>
            LinkedIn
          </FooterLink>
          <FooterLink href='https://github.com/thedenisovan/react-shopping-cart'>
            Project
          </FooterLink>
          <FooterLink href='#'>Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </div>
  );
}
