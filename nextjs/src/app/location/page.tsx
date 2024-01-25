import Script from 'next/script'
import React from 'react'

const page = () => {
    return (

        <>
            <div>location page</div>
            <Script src='/location.tsx' />
        </>
    )
}

export default page