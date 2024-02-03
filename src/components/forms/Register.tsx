'use client';

import Image from 'next/image';
import Google from '../../assets/google.png';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8 ">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{' '}
          <Link className="underline" href="/login">
            login
          </Link>
          .
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again.
        </div>
      )}
      <form
        className="block max-w-sm mx-auto mt-4  flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
          className={`border border-gray-300 px-4 py-2 rounded-full ${
            creatingUser ? 'pointer-events-none opacity-50' : ''
          }`}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
          className={`border border-gray-300 px-4 py-2 rounded-full ${
            creatingUser ? 'pointer-events-none opacity-50' : ''
          }`}
        />
        <button
          type="submit"
          className={`bg-primary text-white p-2 rounded-full ${
            creatingUser ? 'pointer-events-none opacity-50' : ''
          }`}
          disabled={creatingUser}
        >
          Register
        </button>
        <div className="text-center">or</div>
        <button className="p-2 rounded-full border border-gray-300 flex flex-row justify-center gap-2 items-center">
          <Image src={Google} width={15} height={15} alt="google" />
          Login with Google
        </button>
        <div className="text-center mt-4">
          Existing account?
          <Link className="underline" href={'/login'}>
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
