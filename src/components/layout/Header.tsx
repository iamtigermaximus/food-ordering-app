import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        SIEG PIZZA
      </Link>
      <nav className="flex items-center gap-4">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link
          href={''}
          className="rounded-full px-6 py-2 bg-primary text-white"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
