import { NextRequest, NextResponse } from "next/server";

import jwt from "@tsndr/cloudflare-worker-jwt"

const jwtSecretKey = "b61a95fd-6194-4157-98eb-09698d2f164e";
const routeAuth = "/login";
const SupaToken = "sb-access-token";


export async function middleware(req: NextRequest) {
    const token = req.cookies[SupaToken];


    if (!token || !(await jwt.verify(token, jwtSecretKey))) {
        const url = req.nextUrl.clone();

        url.pathname = routeAuth;

        // redirect to login page if the user unknown
        return NextResponse.redirect(url, 302)
    }

    // contenue the middleware
    return NextResponse.next()
}