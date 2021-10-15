import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <h1>Loading user data....</h1>;
  }

  console.log(session);

  return (
    <div className="flex items-center justify-around w-full fixed bg-purple-600 text-white top-0 left-0 py-2 border-b-2 border-pink-200">
      {
        <>
          <div className="flex items-center gap-2">
            {session?.user && (
              <img
                className="rounded-full h-10 object-contain"
                src={
                  session.user.image
                    ? session.user.image
                    : 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
                }
                alt="Profile Image"
              />
            )}
            <p className="font-semibold">{`${
              session ? `${session.user?.email}` : `Not signed in`
            }`}</p>
          </div>
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
