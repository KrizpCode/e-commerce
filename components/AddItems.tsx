import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useAddItemMutation } from '../graphql/generated';

const AddItems = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [listingCompleted, setListingCompleted] = useState(false);

  const [addItem] = useAddItemMutation();
  const { data: session } = useSession();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!title || !description || !category || !session?.user?.email) {
      return;
    }

    addItem({
      variables: {
        title,
        description,
        price,
        category,
        image,
        email: session?.user?.email!,
      },
    });

    setTitle('');
    setPrice(0);
    setDescription('');
    setCategory('');
    setImage('');
    setListingCompleted(true);
  };

  if (!session?.user?.email) {
    return (
      <p className="text-lg mb-5 font-semibold">
        Making a listing requires a user to be logged in
      </p>
    );
  }

  return (
    <>
      {listingCompleted ? (
        <div className="flex bg-green-300 rounded p-7 mb-5 flex-col items-center gap-3 shadow-lg">
          <p className="text-2xl">Your listing was posted successfully!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <button
            className="bg-green-700 text-white px-2 py-1 rounded"
            onClick={() => setListingCompleted(false)}
          >
            New Listing
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col py-5 px-10 gap-3 bg-blue-300 rounded mb-10"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-3xl mb-3 self-center">
            Make a listing
          </h2>
          <div className="flex gap-2 justify-between items-center">
            <label className="font-medium" htmlFor="title">
              Title:
            </label>
            <input
              className="px-2 py-1 rounded"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label className="font-medium" htmlFor="price">
              Price:
            </label>
            <input
              className="px-2 py-1 rounded"
              type="number"
              id="price"
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label className="font-medium" htmlFor="category">
              Category:
            </label>
            <input
              className="px-2 py-1 rounded"
              type="text"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label className="font-medium" htmlFor="image">
              Image:
            </label>
            <input
              className="px-2 py-1 rounded"
              type="text"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label className="font-medium" htmlFor="description">
              Description:
            </label>
            <input
              className="px-2 py-1 rounded"
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <input
            className="bg-blue-500 px-3 py-1 mt-2 rounded self-center cursor-pointer"
            type="submit"
            value="Add Item"
          />
        </form>
      )}
    </>
  );
};

export default AddItems;
