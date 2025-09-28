import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useProductData from '../ProductApi';

const ProductCard = ({ productId }: { productId: number }) => {
  const { product, error, loading } = useProductData();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Card sx={{ maxWidth: 345 }} className='m-auto h-[500px]'>
      <CardMedia
        component='img'
        alt={product[productId].title}
        className='h-[300px]! object-contain!'
        image={product[productId].image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {product[productId].title}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          ${product[productId].price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
