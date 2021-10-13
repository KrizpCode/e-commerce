import { Item as ItemType } from '../graphql/generated';
import { useDeleteItemMutation } from '../graphql/generated';

type Props = {
	id: ItemType['id'];
	title: ItemType['title'];
	description: ItemType['description'];
};

const Item = ({ title, description, id }: Props) => {
	const [removeItem] = useDeleteItemMutation();

	const handleClick = (id: ItemType['id']) => {
		removeItem({
			variables: {
				id,
			},
		});
	};

	return (
		<li className="flex flex-col items-center bg-green-500 p-2 m-2 gap-2">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-lg">{description}</p>
			<button
				className="bg-red-500 px-2 py-1 text-white font-semibold rounded"
				onClick={() => handleClick(id)}
			>
				Remove
			</button>
		</li>
	);
};

export default Item;
