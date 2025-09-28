import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImg from '../../../utils/carouselImg';

export default function CarouselComp() {
  return (
    <Carousel data-testid='carousel-container'>
      <Carousel.Item interval={3000} data-testid='first-slide'>
        <img
          className='d-block w-100 h-[400px] object-cover'
          src={carouselImg.imageOne}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Luxury Accessories</h3>
          <p>Browse luxury accessories for all occasions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} data-testid='second-slide'>
        <img
          className='d-block w-100 h-[400px] object-cover'
          src={carouselImg.imageTwo}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='text-shadow-black text-shadow-l'>
            Clothing for him and her
          </h3>
          <p className='text-shadow-black text-shadow-l'>
            Build you wardrobe together.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} data-testid='third-slide'>
        <img
          className='d-block w-100 h-[400px] object-cover'
          src={carouselImg.imageThree}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='text-shadow-black text-shadow-l'>
            Because you are worth it
          </h3>
          <p className='text-shadow-black text-shadow-l'>
            Best clothing from best designers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
