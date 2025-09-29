import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

interface Product {
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className='m-auto w-[300px]! h-[515px]! mb-3 md:h-[550px] md:w-[350px]!'
    >
      <CardMedia
        component='img'
        alt={product.title}
        className='h-[300px]! object-contain!'
        image={product.image}
      />
      <div className='flex flex-col justify-center items-center text-center'>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {product.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            ${product.price}
          </Typography>
        </CardContent>
        <Typography component='legend'></Typography>
        <Rating name='read-only' value={product.rating.rate} readOnly />
        <CardActions>
          <Button size='medium' variant='contained'>
            View
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
