import React from 'react'

const page = () => {
  return (
    <div>
      User page :- {process.env.API_PASS}
      <h1>user name :- {process.env.admin}</h1>
    </div>
  )
}

export default page