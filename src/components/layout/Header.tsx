import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link
        className="text-primary font-titan font-semibold text-4xl"
        href={'/'}
      >
        SIEG PIZZA
      </Link>
      <nav className="flex items-center gap-4">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-2">
        <Link href={'/login'} className="rounded-full px-2 py-2  text-gray">
          Login
        </Link>
        <Link
          href={'/register'}
          className="rounded-full px-6 py-2 bg-primary text-white"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
