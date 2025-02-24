"use client"

import { createUser } from "@/actions/create-user-action"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function CreateUserForm() {
  const [state, dispatch] = useActionState(createUser, {
    errors:[],
    success:''
  })

  useEffect(() => {
    if(state.errors){
      state.errors.forEach(error => {
        toast.error(error)
      })
    }
  },[state])
  useEffect(()=>{
    if(state.success){
      toast.success(state.success)
    }
  },[state])
  return (
    <>
        <form 
            className="mt-14 space-y-3"
            noValidate
            action={dispatch}
        >
            <div className="flex flex-col gap-2">
                <label 
                    className="font-bold text-2xl"
                    htmlFor="email">Nombre</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="nombre"
                />
            </div>         
            <div className="flex flex-col gap-2">
                <label 
                    className="font-bold text-2xl"
                    htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="email"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    className="font-bold text-2xl"
                    htmlFor="password">Password (Se recomienda usar numero de carnet)</label>
                <input 
                    id="password"
                    type="text"
                    placeholder="Password"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                />
            </div>
            <div className="flex flex-row gap-2">
                <label 
                    className="font-semibold text-xl"
                    htmlFor="email">Admin</label>
                <input 
                    id="admin"
                    type="radio"
                    name="user-group"
                    value='true'
                />
                <label 
                    className="font-semibold text-xl ml-5"
                    htmlFor="email">Usuario Standard</label>
                <input 
                    id="admin"
                    type="radio"
                    name="user-group"
                    value='false'
                />
            </div>
            <input 
                className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block"
                type="submit" 
                value="Registrar"
                />
        </form>
    </>
  )
}
