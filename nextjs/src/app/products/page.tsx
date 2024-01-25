// "use client"

import Product from "./product";


// 👉👉👉NORMAL CSS
import "./style.css"

// 👉👉👉 css outside the module
import outside from "@/outside.module.css"



// 👉👉👉 MODULAR CSS
// ❗SYNTAX  filename.module.css
import color from './style1.module.css'
import Image from "next/image";


// 👉👉👉👉👉CLIENT SIDE RENDERING

// import React, { useEffect, useState } from 'react'

// const Page = () => {
//   const [info, setInfo] = useState([]);
//   useEffect(() => {
//     const mydata = async () => {
//       const data = await fetch("https://dummyjson.com/products");
//       console.log("data : ", data);

//       const newdata = await data.json();
//       setInfo(newdata.products)
//       console.log(newdata.products[0]);



//     }
//     mydata()
//   }, [])
//   return (
//     <div className='flex p-3 items-center '>
//       <div>
//         product data

//         {info.map((student: any, index: any) => (
//           <div key={index}>
//             <span className='font-bold'>
//             { student.title}</span>

//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Page



// 👉👉👉👉👉 SERVER SIDE RENDERING
// import React from 'react'
const productData = async () => {


  const product = await fetch("https://dummyjson.com/products");
  const data = await product.json()
  return data.products;
}

const page = async () => {
  const showData = await productData()
  // console.log(showData);

  return (

    <div className='p-4 text-xl heading'>
      <Image alt='adiyogi' width={500} height={500} src="/adiyogi.jpg" />
      <h1 className="bg-red-200 text-white p-3 text-6xl">
        SERVER SIDE RENDERING😀😀
      </h1>

      {showData.map((student: any, index: any) => (
        <span key={index}>

          <h1>{student.title}</h1>
          <Product data={student} />
        </span>
      ))}
      <h1 className="heading1">heading 1</h1>
      <h2 className={color.heading1}>heading 2</h2>
      <h3 className={outside.heading1}>heading 3</h3>
    </div>
  )
}

export default page