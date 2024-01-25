"use client"

import { useState } from "react"

const Product = (props: any) => {
    const [color, setColor] = useState<String>('reds')

    return (

        <>
            <h1 style={{ color: color == 'red' ? 'red' : 'green' }}>Implementing Conditional CSS</h1>
            <button type="button" className="b-2 p-2 bg-black text-white active:text-yellow hover:tx-green-200 hover:bg-blue-500 active:bg-red-400 text-sm font-bold rounded-xl" onClick={() => {


              alert(`price of the ${props.data.title} : $${props.data.price}`)
                setColor('red')
            }}>Click me 😀</button>
        </>
    )
}

export default Product