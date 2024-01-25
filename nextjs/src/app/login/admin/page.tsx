
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();

  return (

    <>
      <h1 className='text-center bg-green-300 p-2 uppercase'>this is the Admin page </h1>
      <div className='flex justify-center items-center'>
        <button className='bg-black p-2 rounded-[10px] border-2 text-yellow-200 m-4 hover:bg-red-500 hover:text-white ' onClick={() => {
          router.push('/login')
        }} >Login Page</button>
      </div>
    </>
  )
}

export default Page