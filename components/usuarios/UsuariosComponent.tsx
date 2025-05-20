"use client"

import { useEffect, useState } from "react";
import { UserTable, GetUsersSchema, GetUserType } from "@/src/schemas";
import { getUserColumns } from "@/components/usuarios/user-table/columns";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/Store/valueSlice";
import {getAllUsers} from "@/src/API/client-fetching-action";
import { DataUsersTable } from "@/components/usuarios/user-table/table-data"
import { resetStatus } from "@/src/Store";


export default function UsersComponent() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState<UserTable[]>([]);
    const reFetch = useSelector((state: RootState) => state.value.value);
    const [selectedIndex, setSelectedIndex] = useState<UserTable | null>(null);

    useEffect(() => {
        if(reFetch === 'idle') {
            async function userResources() {
                const activeUsers = await getAllUsers();
                setUsers(activeUsers);
            }
            userResources().then()
        }
        dispatch(resetStatus());
    }, [reFetch, dispatch]);
    const columns = getUserColumns(setSelectedIndex);

    return (
        <>
            <h1 className="text-xl font-semibold mt-6">Usuarios Activos</h1>
            <DataUsersTable columns={columns} data={users} />

        </>
    )
}