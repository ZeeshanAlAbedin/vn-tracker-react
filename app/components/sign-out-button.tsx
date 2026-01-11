"use client";
import { logout } from "@/app/lib/actions/auth";

export const SignOutButton = () => {
    return <button onClick={() => logout()}>Sign out</button>
}