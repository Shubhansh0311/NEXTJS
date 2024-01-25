// import Link from 'next/link'
"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: any) => {
  const route = useRouter();
  const pathName = usePathname()
  // console.log(pathName);

  const chngRoute = (path: any) => {
    route.push(`/login/${path}`)
  }
  return (
    <>
      {pathName === '/login' ?
        <div className='flex justify-start bg-black items-center h-[fit-content] p-3 w-[-webkit-fill-available]'>
          <ul>
            {/* <Link  className='text-yellow-300 p-3' href='/login/student'>Student</Link>
        <Link  className='text-yellow-300 p-3' href='/login/teacher'>Teacher</Link>
        <Link  className='text-yellow-300 p-3' href='/login/admin'>Admin</Link> */}
            <button onClick={() => {
              chngRoute("student")
            }} className='text-yellow-300 p-3'>Student</button>
            <button onClick={() => {
              chngRoute("teacher")
            }} className='text-yellow-300 p-3' >Teacher</button>
            <button onClick={() => {
              chngRoute("admin")
            }} className='text-yellow-300 p-3'>Admin</button>
            <Link className='text-yellow-300 p-3' href='/products'>Products</Link>
            <Link className='text-yellow-300 p-3' href='/location'>location</Link>
            <Link className='text-yellow-300 p-3' href='/usersList'>Users</Link>
          </ul>
        </div> :
        null}
      {children}
      <h1>your development mode  :::::::::: {`"${process.env.NODE_ENV}"`} </h1>
      <h1>your {`"${process.env.NODE_ENV}"`} url {process.env.ADMIN_PASS} </h1>

    </>
  )
}

export default Layout