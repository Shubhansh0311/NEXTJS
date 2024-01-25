'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = ({ params }: any) => {
    const router = useRouter()
    console.log(params);

    return (
        <>
            <div className='text-center text-[35px] bg-black text-yellow-200 font-bold '> Hi i am {params.students[0]}</div>
            <div className='text-center text-[35px] bg-black text-yellow-200 font-bold '> Hi i am {params.students[2]}</div>
            <div className='text-center text-[35px] bg-black text-yellow-200 font-bold '> Hi i am {params.students[3]}</div>
            <div className='flex justify-center items-center'>
                <button className='bg-black p-2  border-none rounded-[10px] border-2 text-yellow-200 m-4 hover:bg-red-500 hover:text-white ' onClick={() => {
                    router.push('/Student_1')
                }} >Student list</button>
            </div></>
    )
}

export default Page