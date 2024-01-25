import { NextResponse } from "next/server";
import { users } from "@/app/util/db"

export function GET() {

    return NextResponse.json({ success: true, message: "message get sucessfully", data: users })

}
export async function POST(request: Request) {
    console.log(request);

    const data = await request.json();
    console.log(data);

    return NextResponse.json({ success: true, message: "post request successful" , result: data },{status:201});
   
} 