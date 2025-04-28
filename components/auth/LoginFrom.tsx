"use client"
import { login } from "@/actions/login-account-action"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function LoginFrom() {
    
    const [state, dispatch] = useActionState(login, {
        errors: [],
        success:''
    })

    useEffect(()=> {
        if(state.errors) {
            state.errors.forEach(error => {
                toast.error(error)
            })
        }
    },[state])

  return (
    <>
        <form 
            className="mt-14 space-y-5"
            noValidate
            action={dispatch}
        >
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
                    htmlFor="password"
                >
                        Contraseña
                </label>
                <input 
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                />
            </div>
            <input 
                className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block"
                type="submit" 
                value="LogIn"
            />
        </form>
    </>
  )
}
