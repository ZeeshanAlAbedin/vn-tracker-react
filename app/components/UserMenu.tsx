'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoutButton from './logout-button';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  image?: string | null;
}

interface UserMenuProps {
  user: User | null;
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
      >
        <img
          src={user?.image || '/default-avatar.png'}
          alt="Avatar"
          className="w-8 h-8 rounded-full border-2 border-[#FF6F61] cursor-pointer hover:border-[#FF4500] transition-colors duration-300"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#2A2A2A] border border-[#FF6F61] rounded-md shadow-lg z-10">
          <Link
            href="/settings"
            className="block px-4 py-2 text-[#F5E8D8] hover:bg-[#FF6F61] hover:text-[#1C1C1C] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <div className="block px-4 py-2 text-[#F5E8D8] hover:bg-[#FF6F61] hover:text-[#1C1C1C] transition-colors duration-300">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}