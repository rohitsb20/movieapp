'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'next/navigation';


const items =[
    {
        title:'Top Rated',param:'top_rated'
    },
    {
        title:'Top Trending', param:'trending'
    }
]

export default function Navbar() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

  return (
    <div className="bg-accent flex justify-center items-center gap-x-4">
      {items.map((item) => (
        <Button  className={` ${genre === item.param ? 'bg-rose-500' : ''}`} key={item.title}>
          <Link href={`/?genre=${item.param}`}>
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  );
}
