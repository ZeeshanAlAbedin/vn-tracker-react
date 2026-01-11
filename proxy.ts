//middleware for auth to protect pages that cannot be accessed when not logged in

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";


const protectedRoutes = ["/dashboard"];

export default async function proxy(request: NextRequest) {
    const session = await auth();
    const { pathname } = request.nextUrl;

    const isProtected = protectedRoutes.some((route) => 
        pathname.startsWith(route));

    if(isProtected && !session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}