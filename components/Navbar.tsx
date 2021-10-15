import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <h1>Loading user data....</h1>;
  }

  return (
    <div className="flex items-center justify-around w-full fixed bg-purple-600 text-white top-0 left-0 py-2 font-medium border-b-2 border-pink-200">
      {
        <>
          <p>{`${
            session ? `Signed in as ${session.user?.email}` : `Not signed in`
          }`}</p>
          <button
            className="px-2 py-1 bg-pink-300 rounded font-bold hover:bg-pink-900"
            type="button"
            onClick={session ? () => signOut() : () => signIn()}
          >
            {session ? 'Sign out' : 'Sign In'}
          </button>
        </>
      }
    </div>
  );
};

export default Navbar;
