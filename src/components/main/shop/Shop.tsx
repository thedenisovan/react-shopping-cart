import Offers from '../home/Offers';

export default function ShopPage() {
  return (
    <div className='flex flex-col !flex-1 text-center bg-gray-100'>
      <div className='bg-gray-100'>
        <h2 className='mb-0'>Start shopping here</h2>
        <h6>Chose from list of our unique products</h6>
      </div>
      <div className='flex flex-col justify-center'>
        <Offers type='jewelry' />
        <Offers type='woman' />
        <Offers type='man' />
        <Offers type='electronic' />
      </div>
    </div>
  );
}
