import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 py-20 px-5 max-w-6xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 rounded-lg'>
        <h1 className='text-gray-900 font-extrabold text-4xl lg:text-7xl'>
          Discover Your <span className='text-green-700'>Dream</span>
          <br />
          Home Today
        </h1>
        <div className='text-gray-700 text-sm sm:text-base'>
          Welcome to Vaishnev Estate, your gateway to the finest properties available.
          <br />
          Explore a wide range of listings to find the perfect place to call home.
        </div>
        <Link
          to={'/search'}
          className='text-sm sm:text-base bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 transition duration-300'
        >
          Start Your Search
        </Link>
      </div>

      {/* listing results for offer, sale and rent */}
      <div className='max-w-6xl mx-auto p-5 flex flex-col gap-10 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>Recent Offers</h2>
              <Link className='text-sm text-green-700 hover:underline' to={'/search?offer=true'}>View All Offers</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>Places for Rent</h2>
              <Link className='text-sm text-green-700 hover:underline' to={'/search?type=rent'}>View All Rentals</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>Places for Sale</h2>
              <Link className='text-sm text-green-700 hover:underline' to={'/search?type=sale'}>View All Sales</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
