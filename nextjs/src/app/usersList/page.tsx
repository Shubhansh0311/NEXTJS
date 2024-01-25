
import Link from "next/link";
import userData from "../../../Services/page"
// console.log(userData);

async function Page() {
    const fetchData = await userData()
    const userdata = fetchData.users;



    return (
        <div className="text-center font-bold flex justify-center items-center uppercase" >
            <div>
                {userdata.map((e: any) => (
                    <>
                        <ul className="bg-red-400 w-50 hover:bg-black hover:text-yellow-100">
                            <li className="p-3 text-black">
                                <Link href={`/usersList/${e.id}`} className="hover:text-yellow-100" key={e.id}>{e.email}</Link>

                            </li>
                        </ul>
                    </>

                ))}
            </div>
            <Link href='/login' className='bg-black  fixed top-3 r-6 p-2 rounded-[10px] border-2 text-yellow-200 m-4 hover:bg-red-500 hover:text-white ' >Login Page</Link>
        </div>
    )
}

export default Page