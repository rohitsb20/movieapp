'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

import { ReactNode } from 'react';

export default function Provider({ children }: { children: ReactNode }) {
  return (
   <ThemeProvider>
<div className='text-gray-700 dark:text-white dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
    {children}
</div>
   </ThemeProvider>
  )
}
