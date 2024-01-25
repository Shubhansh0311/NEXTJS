import React from 'react'
import { NextResponse } from 'next/server'
console.log("middleware:",NextResponse);

const middlware = () => {
  return (
    <div>middlware</div>
  )
}

export default middlware