import { useRouter } from 'next/router';

import { useGetUserByIdQuery } from '../../graphql/generated';

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useGetUserByIdQuery({
    variables: {
      id: id as string,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="mt-20">
      <p>Getting information from User ID={id}</p>
      {data && <p>{data.user?.email}</p>}
    </div>
  );
};

export default User;
