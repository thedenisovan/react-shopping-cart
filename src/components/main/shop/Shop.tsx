import Offers from '../home/Offers';

export default function ShopPage() {
  return (
    <div className='flex flex-col !flex-1 text-center bg-gray-100'>
      <div className='bg-gray-100'>
        <h2 className='mb-0 !font-normal'>Start shopping here</h2>
        <i>Chose from list of our unique products</i>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='w-[83%] m-auto text-start'>
          <h2
            aria-label='jewelry product section'
            className='!-mb-1 mt-2 !font-normal'
          >
            Jewelry products
            <hr className=' mx-auto mt-2 mb-0' />
          </h2>
        </div>
        <Offers type='jewelry' />
        <div className='w-[83%] m-auto text-start'>
          <h2
            className='!font-normal !-mb-1 mt-2'
            aria-label='woman clothing section'
          >
            Woman clothing
          </h2>
          <hr className='mx-auto mt-2 mb-0' />
        </div>
        <Offers type='woman' />
        <div className='w-[83%] m-auto text-start'>
          <h2
            className='!font-normal !-mb-1 mt-2'
            aria-label='man clothing section'
          >
            Man's clothing
          </h2>
          <hr className=' mx-auto mt-2 mb-0' />
        </div>
        <Offers type='man' />
        <div className='w-[83%] m-auto text-start'>
          <h2
            className='!font-normal !-mb-1 mt-2'
            aria-label='electronic equipment section'
          >
            Electronics
          </h2>
          <hr className='mx-auto mt-2 mb-0' />
        </div>
        <Offers type='electronic' />
      </div>
    </div>
  );
}
