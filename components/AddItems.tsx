import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useAddItemMutation } from '../graphql/generated';

const AddItems = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

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

    window.location.reload();
  };

  return (
    <form
      className="flex flex-col items-end py-4 px-10 gap-2 bg-blue-300 rounded mb-10"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-3xl m-2 self-center">Sell an item</h2>
      <div className="flex gap-2">
        <label htmlFor="title">Title:</label>
        <input
          className="px-1 mb-2"
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="price">Price:</label>
        <input
          className="px-1 mb-2"
          type="number"
          id="price"
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="category">Category:</label>
        <input
          className="px-1 mb-2"
          type="text"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="image">Image:</label>
        <input
          className="px-1 mb-2"
          type="text"
          id="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="description">Description:</label>
        <input
          className="px-1 mb-2"
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <input
        className="bg-blue-500 px-3 py-1 rounded self-center cursor-pointer"
        type="submit"
        value="Add Item"
      />
    </form>
  );
};

export default AddItems;
