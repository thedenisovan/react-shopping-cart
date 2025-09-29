import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <div className=' h-100 flex flex-col justify-center text-center'>
      <p>Whoops looks like you have ventured in to the deep waters</p>
      <h1>Page not found</h1>
      <Link to='/'>Go Back To Main Page</Link>
    </div>
  );
}
