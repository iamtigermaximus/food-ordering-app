'use client';

import Image from 'next/image';
import Google from '../../assets/google.png';
import { FormEvent, useState } from 'react';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (
    <section className="mt-8 ">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      <form
        className="block max-w-sm mx-auto mt-4  flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 bg-gray-100 rounded-full"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 bg-gray-100 rounded-full"
        />
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-full"
        >
          Register
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

export default Register;
