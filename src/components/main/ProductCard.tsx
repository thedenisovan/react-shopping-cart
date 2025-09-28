import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import useProductData from './ProductApi';

const ProductCard = ({ productId }: { productId: number }) => {
  const { product, error, loading } = useProductData();

  if (error) return <p>A network error was encountered</p>;

  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className='m-auto w-[300px]! h-[515px]! mb-3 md:h-[550px] md:w-[350px]!'
    >
      {loading ? (
        <div className='h-100 flex justify-center items-center'>
          <Stack spacing={2} direction='row' alignItems='center'>
            <CircularProgress size='10rem' color='inherit' />
          </Stack>
        </div>
      ) : (
        <>
          <CardMedia
            component='img'
            alt={product[productId].title}
            className='h-[300px]! object-contain!'
            image={product[productId].image}
          />
          <div className='flex flex-col justify-center items-center text-center'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {product[productId].title}
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                ${product[productId].price}
              </Typography>
            </CardContent>
            <Typography component='legend'></Typography>
            <Rating
              name='read-only'
              value={product[productId].rating.rate}
              readOnly
            />
            <CardActions>
              <Button size='medium' variant='contained'>
                View
              </Button>
            </CardActions>
          </div>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
