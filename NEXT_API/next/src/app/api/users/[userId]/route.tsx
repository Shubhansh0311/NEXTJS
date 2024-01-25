
import { NextResponse } from "next/server";
import { users } from "@/app/util/db"

export async function GET(req: any, content: any) {
    // console.log(req);
    // console.log(content);

    const usersData = users
    const user = usersData.filter((item) => item.id == content.params.userId)
    return NextResponse.json(user.length == 0 ? { success: false, message: "invalid request", data: "data not found" } : { success: true, message: "message get sucessfully through id", result:"put request sucessfull" }, { status: 500 })

}

