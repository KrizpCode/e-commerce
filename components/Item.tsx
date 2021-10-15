import { useState } from 'react';
import { Item as ItemType, User } from '../graphql/generated';
import {
    useDeleteItemMutation,
    useEditItemMutation,
} from '../graphql/generated';

type Props = {
    id: ItemType['id'];
    title: ItemType['title'];
    description: ItemType['description'];
    price: ItemType['price'];
    category: ItemType['category'];
    image?: ItemType['image'];
    seller: {
        email?: User['email'];
    };
};

const Item = ({
    id,
    title,
    description,
    price,
    category,
    image,
    seller,
}: Props) => {
    const [edit, setEdit] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [priceValue, setPriceValue] = useState(price);
    const [categoryValue, setCategoryValue] = useState(category);
    const [imageValue, setImageValue] = useState(image);

    const [removeItem] = useDeleteItemMutation();
    const [editItem] = useEditItemMutation();

    const handleClick = (id: ItemType['id']) => {
        removeItem({
            variables: {
                id,
            },
        });
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>,
        id: ItemType['id']
    ): void => {
        e.preventDefault();

        editItem({
            variables: {
                id,
                title: titleValue,
                description: descriptionValue,
                price: priceValue,
                category: categoryValue,
                image: imageValue,
            },
        });

        setEdit(false);
    };

    return (
        <li className="flex flex-col items-center bg-green-200 rounded p-4 m-2 gap-2 max-w-lg">
            {edit ? (
                <form
                    className="flex flex-col items-center"
                    onSubmit={(e) => handleSubmit(e, id)}
                >
                    <label htmlFor="edit-title">Title</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-title"
                        type="text"
                        onChange={(e) => setTitleValue(e.target.value)}
                        value={titleValue}
                    />
                    <label htmlFor="edit-price">Price</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-price"
                        type="number"
                        onChange={(e) => setPriceValue(Number(e.target.value))}
                        value={priceValue}
                    />
                    <label htmlFor="edit-category">Category</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-category"
                        type="text"
                        onChange={(e) => setCategoryValue(e.target.value)}
                        value={categoryValue}
                    />
                    <label htmlFor="edit-image">Image</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-image"
                        type="text"
                        onChange={(e) => setImageValue(e.target.value)}
                        value={imageValue!}
                    />
                    <label htmlFor="edit-description">Description</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-description"
                        type="text"
                        onChange={(e) => setDescriptionValue(e.target.value)}
                        value={descriptionValue}
                    />
                    <div className="flex gap-2">
                        <input
                            className="bg-green-500 px-2 py-1 text-white font-semibold rounded button"
                            type="submit"
                            value="Set"
                        />
                        <button
                            className="bg-green-900 px-2 py-1 text-white font-semibold rounded"
                            onClick={() => setEdit(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg">{description}</p>
                    <p>{`${price}$`}</p>
                    <p>{`Seller: ${seller.email}`}</p>
                    <p>{category}</p>
                    <img className="w-full" src={image!} alt={image!} />
                    <div className="flex gap-3">
                        <button
                            className="bg-green-500 px-2 py-1 text-white font-semibold rounded"
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-green-900 px-2 py-1 text-white font-semibold rounded"
                            onClick={() => handleClick(id)}
                        >
                            Remove
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default Item;
