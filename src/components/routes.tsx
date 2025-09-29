import App from './App';
import ErrorPage from './ErrorPage.tsx';
import ShopPage from './main/shop/Shop.tsx';
import Home from './main/home/Home.tsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
    ],
  },
];

export default routes;
