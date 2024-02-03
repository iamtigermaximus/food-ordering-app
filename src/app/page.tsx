import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <header>
      <Link className="text-red-600 font-semibold text-2xl" href="">
        SIEG PIZZA
      </Link>
      <nav>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''}>Login</Link>
      </nav>
    </header>
  );
};

export default Home;
