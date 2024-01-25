import Link from "next/link";

async function getUser() {
    const users = await fetch('http://localhost:3000/api/users')
    return await users.json()
}
export default async function Page() {
    const users = await getUser();
    const datas = await users.data
    // console.log(datas);
    return (
        <>
            <h1>user list newone </h1>{
                datas.map((e: any) => (
                    <ul key={e.id}>
                        <li>
                            <Link href={`usersss/${e.id}`} className="active:text-green-300 hover:text-blue-500 text-red-400" key={e.id}>
                                {e.name}
                            </Link>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}