"use server"

import { GetUsersSchema, ProjectsFullArray } from "@/src/schemas"
import 'dotenv/config'

export async function getDataUser () {
    const url = `${process.env.BACK_URL}/auth/users`
    const request = await fetch(url)
    const json = await request.json()
    return  GetUsersSchema.parse(json)
}

export async function getProjects(id: number) {
    const url = `${process.env.BACK_URL}/projects/user/${id}`;
    const request = await fetch(url);
    const json = await request.json();
    return  ProjectsFullArray.parse(json);
}

export async function getUsersById(userIds: FormDataEntryValue[]) {
    const url = `${process.env.BACK_URL}/auth/userids`;

    const bodyRequest = {
        ids: userIds
    }

    const request = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    });

    return await request.json();
}