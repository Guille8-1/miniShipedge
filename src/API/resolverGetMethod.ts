"use server"

import {verifySession} from "@/src/auth/dal";

export async function resolverGetApi () {
    const { token } = await verifySession();
    return token
}