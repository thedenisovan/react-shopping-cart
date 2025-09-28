import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImg from '../../../utils/carouselImg';

export default function CarouselComp() {
  return (
    <Carousel data-testid='carousel-container'>
      <Carousel.Item interval={5000} data-testid='first-slide'>
        <img
          srcSet={`${carouselImg.imageOneSmall} 640w, ${carouselImg.imageOne} 960w`}
          className='d-block w-100 h-[400px] md:h-[500px] lg:h-[600px] object-cover'
          src={carouselImg.imageOne}
          sizes='(max-width: 640px) 100vw, 960px'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='md:text-5xl!'>Luxury Accessories</h3>
          <p className='md:text-xl!'>
            Browse luxury accessories for all occasions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000} data-testid='second-slide'>
        <img
          srcSet={`${carouselImg.imageTwoSmall} 640w, ${carouselImg.imageTwo} 960w`}
          className='d-block w-100 h-[400px] md:h-[500px] lg:h-[600px] object-cover'
          src={carouselImg.imageTwo}
          sizes='(max-width: 640px) 100vw, 960px'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3 className='text-shadow-black text-shadow-l md:text-5xl!'>
            Clothing for him and her
          </h3>
          <p className='text-shadow-black text-shadow-l md:text-xl!'>
            Build you wardrobe together.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000} data-testid='third-slide'>
        <img
          srcSet={`${carouselImg.imageThreeSmall} 640w, ${carouselImg.imageThree} 960w`}
          className='d-block w-100 h-[400px] md:h-[500px] lg:h-[600px] object-cover'
          src={carouselImg.imageThree}
          sizes='(max-width: 640px) 100vw, 960px'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3 className='text-shadow-black text-shadow-l md:text-5xl!'>
            Because you are worth it
          </h3>
          <p className='text-shadow-black text-shadow-l md:text-xl!'>
            Best clothing from best designers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
