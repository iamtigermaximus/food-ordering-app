import React from 'react';
import Image from 'next/image';
import Google from '../../assets/google.png';

const Login = () => {
  return (
    <section className="mt-8 ">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      <form className="block max-w-sm mx-auto mt-4  flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border border-gray-300 px-4 py-2 rounded-full "
        />
        <input
          type="password"
          placeholder="password"
          className="border border-gray-300 px-4 py-2 rounded-full "
        />
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-full "
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
