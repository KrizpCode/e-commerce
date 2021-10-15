import { useGetItemsQuery } from '../graphql/generated';
import Item from './Item';

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
            <ul className="flex flex-col items-center w-full">
                {data?.items.map((itemData) => (
                    <Item key={itemData!.id} {...itemData!} />
                ))}
            </ul>
        </>
    );
};

export default Items;
