import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button";


const items =[
    {
        title:'Top Rated',param:'top_rated'
    },
    {
        title:'Top Trending', param:'trending'
    }
]

export default function Navbar() {
  return (
    <div className="bg-accent flex justify-center items-center gap-x-4">
      {items.map((item) => (
        <Button key={item.title}>
          <Link className="" href={`/?genre=${item.param}`}>
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  );
}
