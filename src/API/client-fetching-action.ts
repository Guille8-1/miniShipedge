"use server"

import {GetUsersSchema, ProjectsFullArray, ActivityArray} from "@/src/schemas"
import 'dotenv/config'

export async function getDataUser () {
    const url: string = `${process.env.BACK_URL}/auth/users`
    const request = await fetch(url)
    const json = await request.json()
    return  GetUsersSchema.parse(json)
}

export async function getUsersById(userIds: FormDataEntryValue[]) {
    const url: string = `${process.env.BACK_URL}/auth/userids`;

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

export async function getProjects(id: number) {
    const url: string = `${process.env.BACK_URL}/projects/user/${id}`;
    const request = await fetch(url);
    const json = await request.json();
    return  ProjectsFullArray.parse(json);
}

export async function getProjectsUsers(userId: number){
    const url: string = `${process.env.BACK_URL}/projects/assigned/${userId}`;
    const request = await fetch(url)
    const json = await request.json();
    return ProjectsFullArray.parse(json);
}

export async function getCommentById(id: number) {
    const url: string = `${process.env.BACK_URL}/projects/comment/project/${id}`;
    const request = await fetch(url);
    return await request.json();
}

export async function getActivity(id: number) {
    const url: string = `${process.env.BACK_URL}/actividades/user/${id}`
    const request = await fetch(url);
    const json = await request.json();
    return ActivityArray.parse(json)
}

export async function getActivityUsers(userId: number) {
    const url: string = `${process.env.BACK_URL}/actividades/assigned/${userId}`
    const request = await fetch(url);
    const json = await request.json();
    return ActivityArray.parse(json)
}

export async function getCommentByIdActivity(id: number) {
    const url: string = `${process.env.BACK_URL}/actividades/comment/activity/${id}`
    const request = await fetch(url)
    return await request.json()
}
