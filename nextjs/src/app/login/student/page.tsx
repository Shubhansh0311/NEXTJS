"use client"
import ImgeComp from '@/app/products/ImgeComp';
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();

  return (

    <>
      <h1 className='text-center bg-red-400 p-2 uppercase'>this is the student page </h1>
      <div className='flex justify-center items-center'>
        <button className='bg-black p-2 rounded-[10px] border-2 text-yellow-200 m-4 hover:bg-red-500 hover:text-white ' onClick={() => {
          router.push('/login')
        }} >Login Page</button>
      </div>
      <div className='flex justify-center'>

        <ImgeComp />
      </div>
    </>
  )
}

export default Page