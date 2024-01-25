import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'
import { Fjalla_One } from 'next/font/google'
import { Marhey } from 'next/font/google'
const roboto = Fjalla_One({style: 'normal',weight:'400', subsets: ['latin-ext'] })
import myImg from "../../../public/vercel.svg"
const ImgeComp = () => {
    return (


        <>
            <h1 className={roboto.className}>Using google font through next js font optimization</h1>
            <Image alt='img.png' height={500} width={500} src={myImg} />
        </>
    )
}

export default ImgeComp