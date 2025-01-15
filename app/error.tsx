'use client'
import React from 'react'
import { useEffect } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import { Button } from '@/components/ui/button'
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);

        
    },[error])
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h2>Something went wrong</h2>
      <p className='flex gap-x-2 items-center'>
        try clicking button below <IoIosArrowRoundDown  />
      </p>
      <Button variant="default" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
