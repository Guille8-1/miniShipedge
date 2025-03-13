"use server"

import { GetUsersSchema, ProjectsFullArray } from "@/src/schemas"
import 'dotenv/config'

export async function getDataUser () {
    const url = `${process.env.BACK_URL}/auth/users`
    const request = await fetch(url)
    const json = await request.json()
    const users = GetUsersSchema.parse(json)
    return users
}

export async function getProjects(id: number) {
    const url = `${process.env.BACK_URL}/projects/user/${id}`;
    const request = await fetch(url);
    const json = await request.json();
    const projects = ProjectsFullArray.parse(json);
    return projects;
}
