import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter();

    const [search, setSearch] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
   
        router.push(`/search/${search}`);

        

  return (
    <div className="max-w-6xl  mx-auto p-4">
      <form onSubmit={handleSubmit} className=" flex">
        <input
          type="text"
          placeholder="Search for a movie"
          className="w-full px-4 focus:outline-none shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit" 
          disabled={search === ''}
          className="flex gap-2 items-center p-2 text-lg dark:hover:bg-gray-800 shadow-md  hover:bg-gray-300"
        >
          <IoSearch />
        </button>
      </form>
    </div>
  );
}
