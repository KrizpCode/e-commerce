import { useState } from 'react';
import { useAddItemMutation } from '../graphql/generated';

const AddItems = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const [addItem] = useAddItemMutation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (!title || !description) return;

		addItem({
			variables: {
				title,
				description,
			},
		});

		setTitle('');
		setDescription('');
	};

	return (
		<form
			className="flex flex-col align-center items-center p-4 gap-2"
			onSubmit={handleSubmit}
		>
			<div className="flex gap-2">
				<label htmlFor="title">Title:</label>
				<input
					className="bg-gray-200"
					type="text"
					id="title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</div>
			<div className="flex gap-2">
				<label htmlFor="description">Description:</label>
				<input
					className="bg-gray-200"
					type="text"
					id="description"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
			</div>
			<input className="px-3 py-1 rounded" type="submit" value="Add Item" />
		</form>
	);
};

export default AddItems;
