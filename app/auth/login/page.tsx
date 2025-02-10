import type { Metadata } from "next"
import LoginFrom from "@/components/auth/LoginFrom"

export const metadata: Metadata = {
    title:'LogIn Servicios UMSA',
    description:'Gestion/Control Servicios/Proyectos'
}

export default function LoginPage() {
  return (
    <>
        <h1 className="font-bold text-4xl text-cyan-600">LogIn Servicios UMSA</h1>
        <p className="text-3xl font-bold">Seguimiento Administrativo</p>

        <LoginFrom />
    </>
  )
}