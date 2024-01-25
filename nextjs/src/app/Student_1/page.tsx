import Link from 'next/link'
import React from 'react'

const page = () => {
    const students = ['ram', 'raman', 'rohan', 'sohail', 'ramesh']
    return (
        <>
            <h1 className='text-center text-red-300 font-bold text-6xl'> Students

            </h1>
            {
                students.map((value, index) => {
                    return (
                        <>
                            <ol className='m-3'>

                                <li>
                                    <Link href={`/Student_1/${value}`} className='text-black' key={index} >{index + 1} {value}</Link>

                                </li>
                            </ol></>
                    )
                })
            }
        </>
    )
}

export default page