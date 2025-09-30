import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useState } from 'react';
import type { ProductType } from '../main/ProductApi';

import svg from '../../utils/svgRepo';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => setCount(count + 1);

  const decrementCount = () =>
    count > 0 ? setCount(count - 1) : setCount(count);

  const changeCountOnChange = (e: number) => setCount(e);

  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className='m-auto w-[300px]! h-[515px]! mb-3 md:h-[550px] md:w-[350px]! relative'
    >
      <CardMedia
        component='img'
        alt={product.title}
        className='h-[220px]! object-contain!'
        image={product.image}
      />
      <div className='flex flex-col justify-center items-center text-center'>
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            className='!text-[1rem]'
            component='div'
          >
            {product.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            ${product.price}
          </Typography>
        </CardContent>
        <Typography component='legend'></Typography>
        <Rating name='read-only' value={product.rating.rate} readOnly />
        <CardActions></CardActions>
        <div className='absolute bottom-20'>
          <button
            aria-label='delete one item from basket'
            data-testid='decrement-btn'
            className='w-10 absolute -bottom-2.5 !left-2 hover:scale-[1.05] transition'
            onClick={decrementCount}
          >
            <img src={svg.minusBtn} />
          </button>
          <input
            aria-label='item count in basket'
            data-testid='item-count'
            value={count ? count : ''}
            type='tel'
            className='border-1 w-10 text-center absolute top-3 right-13'
            onChange={(e) => changeCountOnChange(Number(e.target.value))}
          />
          <button
            aria-label='add one item to basket'
            data-testid='increment-btn'
            className='w-6.5 absolute -bottom-0.5 !right-5 hover:scale-[1.05] transition'
            onClick={addCount}
          >
            <img src={svg.plusBtn} />
          </button>
          <Button size='medium' variant='contained' className='absolute top-12'>
            Add to Basket
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
