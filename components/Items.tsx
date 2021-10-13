import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../graphql/queries';

const Item = ({ title, description }) => {
	return (
		<li>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
};

const Items = () => {
	const { loading, error, data } = useQuery(GET_ITEMS);

	if (loading) {
		return <div>Loading</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	console.log(data);

	return (
		<ul>
			{data.items.map((itemData) => (
				<Item {...itemData} key={itemData.id} />
			))}
		</ul>
	);
};

export default Items;
