import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useGetItemsQuery } from '../graphql/generated';
import Item from './Item';

const Items = () => {
  const [listings, setListings] = useState(true);

  const { loading, error, data } = useGetItemsQuery();
  const { data: session } = useSession();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <button
          className={`px-2 py-1 rounded ${listings && 'bg-pink-400'}`}
          onClick={() => setListings(true)}
        >
          All Listings
        </button>
        {session?.user?.email && (
          <button
            className={`px-2 py-1 rounded ${listings ? '' : 'bg-pink-400'}`}
            onClick={() => setListings(false)}
          >
            My Listings
          </button>
        )}
      </div>

      <ul className="flex flex-col items-center w-full">
        {listings
          ? data?.items.map((itemData) => (
              <Item key={itemData!.id} {...itemData!} />
            ))
          : data?.items
              .filter((item) => item?.seller.email === session?.user?.email)
              .map((itemData) => <Item key={itemData!.id} {...itemData!} />)}
      </ul>
    </>
  );
};

export default Items;
