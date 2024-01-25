"use client"
export async function getUser(id: any) {
    const users = await fetch(`http://localhost:3000/api/users/${id}`)


    const myUsers = await users.json()

    console.log(myUsers.result);

    return myUsers.data;
}



const page = async (content: any) => {
    // console.log(content);

    const user = await getUser(content.params.userId)



    return (<div className="flex justify-center">
        <div>
            welcome to user details
            <h1>id :{user.id} </h1>
            <h2>name : {user.name}</h2>
            <h3>age :{user.age}</h3>
            <h4>location :{user.location}</h4>
        </div>
    </div>)




}

export default page