

export default async function page(){

    const usersData = await fetch("https://dummyjson.com/users")

    return (
        usersData.json()
    )
}
