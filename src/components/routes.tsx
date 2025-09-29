import App from './App';
import ErrorPage from './ErrorPage.tsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
