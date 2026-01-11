"use server";

import { SignInButton } from "@/app/components/sign-in-button";
import { SignOutButton } from "@/app/components/sign-out-button";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();
    console.log("Session:", session);

    if (session?.user) {
        return (
            <div>
                <h2>Welcome {session.user.name}</h2>
                <SignOutButton />
            </div>
        );
    }


  return (
  <div>
    {""}
    <p> You are not signed in</p>
    <SignInButton />
  </div>);
}
