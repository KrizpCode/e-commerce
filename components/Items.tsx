import { useGetItemsQuery } from '../graphql/generated';

type Props = {
	title: String;
	description: String;
};

const Item = ({ title, description }: Props) => {
	return (
		<li className="flex flex-col items-center bg-green-500 p-2 m-2">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-lg">{description}</p>
		</li>
	);
};

const Items = () => {
	const { loading, error, data } = useGetItemsQuery();

	if (loading) {
		return <div>Loading</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<>
			{data!.items.length > 0 && (
				<ul className="flex flex-col items-center w-full">
					{data!.items.map((itemData) => (
						<Item
							key={itemData!.id}
							title={itemData!.title!}
							description={itemData!.description!}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export default Items;
