'use client';

import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import Google from '../../assets/google.png';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginInProgress(true);
    const { ok } = await fetch('/api/login', {
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    if (ok) {
      router.push('/');
    } else {
      setError(true);
    }
    setLoginInProgress(false);
  };

  return (
    <section className="mt-8 ">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      {error && (
        <div className="my-4 text-center">
          Invalid email or password. <br />
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
          className="border border-gray-300 px-4 py-2 rounded-full "
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          className="border border-gray-300 px-4 py-2 rounded-full "
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-full "
          disabled={loginInProgress}
        >
          Login
        </button>
        <div className="text-center">or</div>
        <button className="p-2 rounded-full border border-gray-300 flex flex-row justify-center gap-2 items-center">
          <Image src={Google} width={15} height={15} alt="google" />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default Login;
