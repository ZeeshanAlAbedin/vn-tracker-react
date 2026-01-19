"use server"

import {signIn, signOut} from "@/auth";
import { revalidatePath } from "next/cache";

export const login = async () => {
    await signIn("google", {redirectTo: "/onboarding"});
}

export const logout = async () => {
    await signOut({redirectTo: "/"});
    revalidatePath("/");
}