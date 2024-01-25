import React from 'react'

import userData from '../../../../Services/page'
const page = async (props: any) => {
  const ApiData = await userData()
  const currentUserId = props.params.userId;
  const user = await ApiData.users[currentUserId - 1]



  return (
    <div className=' p-2'>User Detail
      <p className='text-sm'>{`id: ${user.id}`}</p>
      <p className='text-sm'>{`name: ${user.firstName}`}</p>
      <p className='text-sm'>{`  email: ${user.email}`}</p>
    </div>
  )
}

export default page

export async function generateStaticParams() {
  const getUsers = await userData();
  const userss = await getUsers.users
  // for generating pages we have to map them it will generate the pages which were equal to the total number of users
  return userss.map((e: any) => {
    // we have use the function here because it take the string id
    // and also the parameter name must be equal to the page name ❗❗userID❗❗
  
    userId: e.id.toString()
  })

}