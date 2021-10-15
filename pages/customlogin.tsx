import React, { FC, useState, useEffect } from 'react';
import {
  useSession,
  getProviders,
  signOut,
  signIn,
  ClientSafeProvider,
  LiteralUnion,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

const SignIn: FC = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  const { data: session, status } = useSession();

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setProviders(setupProviders);
    };

    setTheProviders();
  }, []);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (session) {
    return (
      <>
        <p>{`Signed in as custom page ${session.user?.email}`}</p>
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }

  return (
    <>
      Not signed in but in the custom page!
      <br />
      <button type="button" onClick={() => signIn()}>
        Sign In
      </button>
      {providers?.email && (
        <>
          <br />
          <br />
          <button type="button" onClick={() => signIn(providers.email.id)}>
            <a href={providers?.email.signinUrl ?? 'http://localhost:3000'}>
              Email Login Bro
            </a>
          </button>
        </>
      )}
      {providers?.github && (
        <>
          <br />
          <br />
          <button type="button" onClick={() => signIn(providers.github.id)}>
            Github Login Sister
          </button>
        </>
      )}
    </>
  );
};

export default SignIn;
