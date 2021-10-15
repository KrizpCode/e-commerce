import { useState } from 'react';
import { Item as ItemType } from '../graphql/generated';
import {
    useDeleteItemMutation,
    useEditItemMutation,
} from '../graphql/generated';

type Props = {
    id: ItemType['id'];
    title: ItemType['title'];
    description: ItemType['description'];
};

const Item = ({ title, description, id }: Props) => {
    const [edit, setEdit] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);

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
            },
        });

        setEdit(false);
    };

    return (
        <li className="flex flex-col items-center bg-green-200 rounded p-4 m-2 gap-2">
            {edit ? (
                <form
                    className="flex flex-col items-center"
                    onSubmit={(e) => handleSubmit(e, id)}
                >
                    <label htmlFor="edit-title">Title</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-title"
                        onChange={(e) => setTitleValue(e.target.value)}
                        value={titleValue}
                    />
                    <label htmlFor="edit-description">Description</label>
                    <input
                        className="px-1 mb-2"
                        id="edit-description"
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
