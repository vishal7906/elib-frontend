import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav className="border-b">
        <div className=" max-w-7xl mx-auto flex justify-between items-center py-4">
            <div>
            <Link href="/">
                <div className='flex items-center gap-1'>
                <div className='relative hexagon'>
                    <Hexagon />
                    <Image src="/BookLogo.png" layout="fill" objectFit="cover" alt="Book Logo" className="hexagon-image" />
                </div>
                <span className="text-xl font-bold uppercase tracking-tight text-primary-500">Coders Book</span>
                </div>
            </Link>
            </div>
            <div className='flex items-center gap-3'>
                <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">Sign In</button>
                <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">Sign Up</button>
            </div>
        </div>
      </nav>
    );
  };
  
  const Hexagon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      className="hexagon-svg">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="#ce7041" />
    </svg>
  );
  
  export default Navbar;