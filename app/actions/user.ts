'use server'

import prisma from "@/lib/prisma";
import { DateTime } from "next-auth/providers/kakao";

export async function createUser(formData: FormData) {
    
}

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where : {
            email: email
        }
    })
    return user;
}

export async function insertUser(email: string, displayname: string, avatarUrl: string, emailVerified: Date) {
    const newUser = await prisma.user.create({
        data: {
            email: email,
            name: displayname,
            image: avatarUrl,
            emailVerified: emailVerified
        }
    });

    return newUser.id;
}

export async function insertUserAccount(userId: string, type = 'oath', provider = 'google', providerAccountId: string)
{
     const newUserAccount = await prisma.account.create({
        data: {
            userId: userId, 
            type: type,
            provider: provider,
            providerAccountId: providerAccountId
        }
    });

    return newUserAccount.id;
}

export async function createUserOnboarding(formData: FormData)
{
    const email = formData.get('email') as string;
    const displayname = formData.get('displayname') as string;
    const avatarUrl = formData.get('avatarUrl') as string;
    const emailVerified = new Date();
    let userCreated = false;
    let userId: string | null = null;
    let accountId: string | null = null;

    userId = await insertUser(email, displayname, avatarUrl, emailVerified);
    if(userId !== null)
    {
         accountId = await insertUserAccount(userId, 'oath', 'google', "test");
         if(accountId !== null)
         {
            userCreated = true;
         }
         else
        {
                // handle error
        }
    }
    else
    {
        // handle error
    }

    return userCreated;
}